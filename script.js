const userPassword = document.querySelector("input[name=user_password]");
const userConfirmedPassword = document.querySelector("input[name=user_password_confirm]");

userPassword.addEventListener("keyup", ()=> {
    checkMatchingPassword();
})

userConfirmedPassword.addEventListener("keyup", ()=> {
    checkMatchingPassword();
})

function checkMatchingPassword() {
    if (userPassword.value !== userConfirmedPassword.value) {
        userPassword.style.borderColor = "red";
        userConfirmedPassword.style.borderColor = "red";
        userPassword.style.outlineColor = "red";
        userConfirmedPassword.style.outlineColor = "red";
    } else {
        userPassword.style.borderColor = "green";
        userConfirmedPassword.style.borderColor = "green";
        userPassword.style.outlineColor = "blue";
        userConfirmedPassword.style.outlineColor = "blue";
    }
}