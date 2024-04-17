import { configureStore } from "@reduxjs/toolkit";
import bookingsSlice from "../features/bookingsSlice";
import roomsSlice from "../features/roomsSlice";
import usersSlice from "../features/usersSlice";

export const store = configureStore({
    reducer: {
        bookings: bookingsSlice,
        rooms: roomsSlice,
        users: usersSlice,
    },
});
