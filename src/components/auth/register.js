import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { firebase } from "../../firebase";
import { useUserValue } from "../../context"
import { Redirect } from "react-router-dom";
import {
    emailValidation,
    passwordvalidation,
    nameValidation,
    password2Validation
} from "./validation"

export const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [submitClicked, setSubmitClicked] = useState(false);
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordlError, setPasswordlError] = useState(false);
    const [passwordlError2, setPasswordlError2] = useState(false);
    const [valid, setValid] = useState(false);
    const [disableBTN, setDisableBTN] = useState(false);
    let [validatCount, setValidatCount] = useState(0);
    const [user] = useUserValue();
    const form = useRef();

    // error message
    const PasswordErrorDOM = () => {
        return (
            <ul className="error-list">
                <li> password must contain more than 8 chars </li>
                <li> password must contain both upper and lowercase</li>
                <li> password must contain both characters and numbers  </li>
            </ul>
        )
    }

    const onFormSubmit = (e) => {
        e.preventDefault();

        emailValidation(email, setEmailError)
        passwordvalidation(password, setPasswordlError)
        nameValidation(name, setNameError)
        password2Validation(password2, password, setPasswordlError2)

        // to track the error validation when the user type
        !submitClicked && setSubmitClicked(true);

        // if email and password is valid register new user
        if (valid) {
            setDisableBTN(true)
            firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(res => {
                     /* new user created succefully */ 
                     firebase
                     .firestore()
                     .collection("users")
                     .doc(res.user.uid)
                     .set({ name })
                })
                .catch(err =>{
                    setDisableBTN(false)
                    setPasswordlError2(err.message)
                })
        }
    }

    // validate the inputs onChange after the form is submitted
    useEffect(() => {
        submitClicked && emailValidation(email, setEmailError);
    }, [email, submitClicked]);
    useEffect(() => {
        submitClicked && passwordvalidation(password, setPasswordlError);
    }, [password, submitClicked]);
    useEffect(() => {
        submitClicked &&
            nameValidation(name, setNameError);
    }, [name, submitClicked]);
    useEffect(() => {
        submitClicked &&
            password2Validation(password2, password, setPasswordlError2);
    }, [password2, password, submitClicked]);

    // set valid to true if there is no errors
    useEffect(() => {
        submitClicked && setValidatCount(validatCount + 1)
        if (!nameError && !emailError && !passwordlError && !passwordlError2 && submitClicked) {
            setValid(true);
        } else {
            setValid(false);
        }
    }, [nameError, emailError, passwordlError, passwordlError2]);

    // after user click submit and validation is done resubmit again
    useEffect(() => {
        if (validatCount === 1 && valid) {
            form.current.dispatchEvent(new Event("submit"));
        }
    }, [valid, validatCount]);

    if (user === "loading") {
        return <div> Loading... </div>
    } else if (user) {
        return <Redirect to="/" />
    }
    return (
        <div className="register">
            <form onSubmit={onFormSubmit} ref={form}>
                <legend> Sign Up </legend>
                <div className="register__item">
                    <label htmlFor="name"> Your name </label>
                    <input
                        id="name" type="text" value={name} data-testid="register-name"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <div className="register__item__error">{nameError}</div>
                </div>

                <div className="register__item">
                    <label htmlFor="email"> Email </label>
                    <input
                        id="email" type="text" value={email} data-testid="register-email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="register__item__error">{emailError}</div>
                </div>

                <div className="register__item">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password" type="password" value={password} data-testid="register-password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="register__item__error" >{passwordlError && PasswordErrorDOM()}</div>
                </div>

                <div className="register__item">
                    <label htmlFor="password2">Confirm Password</label>
                    <input
                        id="password2" type="password" value={password2} data-testid="register-password"
                        onChange={(e) => setPassword2(e.target.value)}
                    />
                    <div className="register__item__error" >{passwordlError2}</div>
                </div>

                <button
                    type="submit"
                    data-testid="signup"
                    className="signup" disabled={disableBTN}
                    style={disableBTN ? { cursor: "not-allowed" } : { cursor: "pointer" }}>
                    Sign Up
                </button>
                <div className="register__helper-text"> You have an account already login from <Link to="/login"> HERE </Link> </div>
            </form>
        </div>
    )
}