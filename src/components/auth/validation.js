//email validation
export const emailValidation = (email, setEmailError) => {
    const EmailRegx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    if (!email) {
        setEmailError("this field should'n be empty");
    } else if (EmailRegx.test(email)) {
        setEmailError("");
    } else {
        setEmailError("enter a valid email address please")
    }
}

//password validation
export const passwordvalidation = (password, setPasswordlError) => {
    const PassRegx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    if (password && PassRegx.test(password)) {
        setPasswordlError(false)
    } else {
        setPasswordlError(true)
    }

}

//name validation 
export const nameValidation = (name, setNameError) => {
    if (!name) {
        setNameError("this field should'n be empty");
    } else {
        setNameError("")
    }
}

//password2 validation 
export const password2Validation = (password2, password, setPasswordlError2) => {
    if (!password2) {
        setPasswordlError2("this field should'n be empty");
    } else if (password2 !== password) {
        setPasswordlError2("passwords must match ");
    } else {
        setPasswordlError2("")
    }
}
