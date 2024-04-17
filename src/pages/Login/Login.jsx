import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    MainContainer,
    Form,
    Label,
    Input,
    Button,
    Message,
} from "./LoginStyle";
import { useLogin } from "../../components/LoginProvider";

function Login() {
    const login = useLogin();

    const [mail, setMail] = useState("");

    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    if (localStorage.getItem("user")) {
        navigate("/");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login.dispatch({ user: { mail, password }, type: "login" });

        setTimeout(() => {
            if (localStorage.getItem("user")) {
            }
        }, 100);

        setTimeout(() => navigate("/"), 100);
    };

    const handleMail = (e) => {
        setMail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    return (
        <MainContainer>
            <Form onSubmit={handleSubmit}>
                <Message>Email: chihabhk@gmail.com</Message>
                <Message>Password: admin</Message>
                <Label htmlFor="mail">Email</Label>
                <Input
                    type="text"
                    name="mail"
                    id="mail"
                    onChange={handleMail}
                />
                <br />
                <Label htmlFor="password">Password</Label>
                <Input
                    type="password"
                    name="password"
                    id="password"
                    onChange={handlePassword}
                />
                <Button type="submit" value="Login" name="submit" />
            </Form>
        </MainContainer>
    );
}

export default Login;
