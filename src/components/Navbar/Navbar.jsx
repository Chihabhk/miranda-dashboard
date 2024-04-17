import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
    CircleLink,
    CompanyName,
    Copyright,
    ListLinks,
    LogoContainer,
    LogoLetter,
    MadeBy,
    NavbarMain,
    TitleLogo,
} from "./NavbarStyle";
import { BsGrid1X2, BsCalendarCheckFill } from "react-icons/bs";
import { IoMdKey } from "react-icons/io";
import { HiUsers } from "react-icons/hi";
import { AiFillContacts } from "react-icons/ai";
import UserLogged from "./UserLogged";
import { useLogin } from "../LoginProvider";

function Navbar(props) {
    const login = useLogin();

    const auth = useState(login.user.isLogged);

    if (login.user.isLogged) {
        props.setClose(false);
    }

    const currentLocation = useLocation();

    if (!auth || currentLocation.pathname === "/login") {
        return null;
    }

    const locations = [
        {
            component: <BsGrid1X2 />,
            name: "Dashboard",
            locationString: "/",
        },
        {
            component: <IoMdKey />,
            name: "Rooms",
            locationString: "/rooms",
        },
        {
            component: <BsCalendarCheckFill />,
            name: "Bookings",
            locationString: "/bookings",
        },
        {
            component: <HiUsers />,
            name: "Users",
            locationString: "/users",
        },
        {
            component: <AiFillContacts />,
            name: "Contact",
            locationString: "/contact",
        },
    ];

    return (
        <NavbarMain>
            <LogoContainer>
                <LogoLetter>H</LogoLetter>
                <TitleLogo>
                    <p>Hotel</p>
                    <p>Miranda</p>
                </TitleLogo>
            </LogoContainer>
            <ListLinks>
                {locations.map((location, index) => {
                    return (
                        <li key={index}>
                            <CircleLink
                                location={
                                    location.locationString.split("/", 2)[1]
                                }
                                currentLocation={
                                    currentLocation.pathname.split("/", 2)[1]
                                }
                            />
                            <NavLink
                                to={location.locationString}
                                className={({ isActive }) =>
                                    `${isActive ? "active" : ""}`
                                }>
                                {location.component}
                                {location.name}
                            </NavLink>
                        </li>
                    );
                })}
            </ListLinks>
            <UserLogged />
            <CompanyName>Hotel Miranda Admin Dashboard</CompanyName>
            <Copyright>© 2023 All Rights Reserved</Copyright>
            <MadeBy>Made with ♥ by Chihab HK</MadeBy>
        </NavbarMain>
    );
}

export default Navbar;
