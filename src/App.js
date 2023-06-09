import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginProvider from "./components/LoginProvider";
import RequiredAuth from "./components/LoginProvider";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Bookings from "./pages/Bookings/Bookings";
import Contact from "./pages/Contact/Contact";
import Rooms from "./pages/Rooms/Rooms";
import NewRoom from "./pages/Rooms/NewRoom";
import Users from "./pages/Users/Users";
import NewUser from "./pages/Users/NewUser";
import BookingDescription from "./pages/Bookings/BookingDescription";

function App() {
    const [close, setClose] = useState(true);

    return (
        <LoginProvider>
            <BrowserRouter>
                {
                    <div className={`navbar ${close ? "close" : "open"}`}>
                        <Navbar setClose={setClose} />
                    </div>
                }
                <div className="app-container">
                    {<Header setClose={setClose} close={close} />}
                    <RequiredAuth>
                        <Routes>
                            <Route
                                path="/login"
                                element={<Login setClose={setClose} />}
                            />
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/bookings" element={<Bookings />} />
                            <Route
                                path="/bookings/:bookingId"
                                element={<BookingDescription />}
                            />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/rooms" element={<Rooms />} />
                            <Route
                                path="/rooms/newRoom"
                                element={<NewRoom />}
                            />
                            <Route path="/users" element={<Users />} />
                            <Route
                                path="/users/newUser"
                                element={<NewUser />}
                            />
                            <Route path="*" element={<Login />} />
                        </Routes>
                    </RequiredAuth>
                </div>
            </BrowserRouter>
        </LoginProvider>
    );
}

export default App;
