import { createContext, useContext, useReducer } from "react";

const LoginContext = createContext(false);

export const useLogin = () => {
    return useContext(LoginContext);
};

const reducer = (state, action) => {
    switch (action.type) {
        case "login":
            let token = localStorage.getItem("Token");
            if (token && token !== "undefined") {
                fetch("http:localhost:8080/auth/validateToken", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                })
                    .then((response) => response.json())
                    .then((data) => {
                        if (data.valid) {
                            return {
                                ...state,
                                mail: action.payload.mail,
                                isLogged: true,
                            };
                        } else {
                            localStorage.removeItem("Token");
                            return { ...state };
                        }
                    })
                    .catch((error) => {
                        console.error("Error:", error);
                        return { ...state };
                    });
            } else {
                return { ...state };
            }
            break;
        case "logout":
            localStorage.removeItem("user");
            return { ...state, mail: "", isLogged: false };
        default:
            return { ...state };
    }
};

function LoginProvider({ children }) {
    let userEmpty = { mail: "", isLogged: false };

    const [user, dispatch] = useReducer(
        reducer,
        JSON.parse(localStorage.getItem("user")) || userEmpty
    );

    return (
        <LoginContext.Provider value={{ user, dispatch }}>
            {children}
        </LoginContext.Provider>
    );
}

export default LoginProvider;
