import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { bookings: [], status: "idle", error: null };

export const fetchBookings = createAsyncThunk(
    "bookings/fetchBookings",
    async () => {
        const response = await axios.get("/bookings");
        return response.data;
    }
);

export const createBooking = createAsyncThunk(
    "bookings/createBooking",
    async (booking) => {
        const response = await axios.post("/bookings", booking);
        return response.data;
    }
);

export const updateBooking = createAsyncThunk(
    "bookings/updateBooking",
    async (booking) => {
        const response = await axios.put(`/bookings/${booking.id}`, booking);
        return response.data;
    }
);

export const deleteBooking = createAsyncThunk(
    "bookings/deleteBooking",
    async (bookingId) => {
        await axios.delete(`/bookings/${bookingId}`);
        return bookingId;
    }
);

const bookingsSlice = createSlice({
    name: "bookings",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBookings.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchBookings.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.bookings = action.payload;
            })
            .addCase(fetchBookings.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            //complete the other cases
            .addCase(createBooking.pending, (state) => {
                state.status = "loading";
            })
            .addCase(createBooking.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.bookings = action.payload;
            })
            .addCase(createBooking.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const { actions, reducer } = bookingsSlice;
export default reducer;
