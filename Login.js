let validate = function () {
    let fname = document.getElementById('fname');
    let sname = document.getElementById('sname');
    let password = document.getElementById('pass')
    let email = document.getElementById('email');
    let repeat = document.getElementById('repeat');
    let male = document.getElementById('male');
    let female = document.getElementById('female');

    if (fname.value.trim() == "") {
        fname.style.border = "1px solid red";
        invalid_message.style.visibility = "visible";
        invalid_message.innerHTML = "enter your first name"
        return false;

    }

    else if (sname.value.trim() == "") {
        sname.style.border = "1px solid red";
        invalid_message.style.visibility = "visible";
        invalid_message.innerHTML = "enter your second name"
        return false;

    }
    else if (email.value.trim() == "") {
        email.style.border = "1px solid red";
        invalid_message.style.visibility = "visible";
        invalid_message.innerHTML = "enter your email"
        return false;

    }

    else if (password.value.trim() == "") {
        password.style.border = "1px solid red";
        invalid_message.style.visibility = "visible";
        invalid_message.innerHTML = "enter your password"
        return false;

    }


    else if (password.value.trim() !== repeat.value.trim()) {
        repeat.style.border = "1px solid red";
        invalid_message.style.visibility = "visible";
        invalid_message.innerHTML = "your password doesnt match"
        return false;
    }
    if (male.checked == false && female.checked == false) {
        invalid_message.style.visibility = "visible";
        invalid_message.innerHTML = "Select your gender"
        return false;

    }

    else {
        true;
    }




}
let password = document.getElementById('pass')
let password_repeat = document.getElementById('repeat')
let checkPass = () => {
    if (password.type == 'password' && password_repeat.type == "password") {
        password.type = "text";
        repeat.type = "text"
    }
    else {
        password.type = "password"
        repeat.type = "password"
    }

}