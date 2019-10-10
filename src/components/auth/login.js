import React, { useState ,useEffect } from "react";
import { Redirect } from "react-router-dom";
import { firebase } from "../../firebase";
import { useUserValue } from "../../context";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [disableBTN, setDisableBTN] = useState(false);
    const [user] = useUserValue();

    const onFormSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            // if email or password empty
            setError("Provide your credentials please");
            setDisableBTN(false);
        } else {
            setError("");
            setDisableBTN(true);

            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(res => {
                    // when user is logged in
                })
                .catch(err => {
                    setError("Username or password Incorrect");
                    setDisableBTN(false);
                })
        }
    }

    if (user) {
        return <Redirect to="/" />
    }
    return (
        <div className="register">
            <form onSubmit={onFormSubmit}>
                <legend> Login </legend>

                <div className="register__item">
                    <label htmlFor="email"> Email </label>
                    <input
                        id="email" type="email" value={email} data-testid="login-email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="register__item">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password" type="password" value={password} data-testid="login-password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="register__item__error">{error}</div>
                </div>

                <button
                    type="submit"
                    data-testid="login"
                    className="signup" disabled={disableBTN}
                    style={disableBTN ? { cursor: "not-allowed" } : { cursor: "pointer" }}>
                    Login
        </button>
            </form>
        </div>
    )
}