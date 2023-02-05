
//Validate email
export const validateEmail = (errors, email, valid) => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!email) {
        errors('Email is required!', 'email')
    } else if (email.includes(" ")) {
        errors('Email cannot contain spaces!', 'email')
    } else if (emailRegex.test(String(email).toLowerCase())) {
        errors('', 'email')
        valid('valid email', 'email')
    } else {
        errors('Enter a valid email! e.g osas@mail.com', 'email')
    }
}
//validate password
export const validatePassword = (errors, password, valid) => {
    const passwordRegex = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')

    if (password.includes(" ")) {
        errors('Password cannot contain spaces!', 'password')
    } else if (!passwordRegex.test(password)) {
        errors('Password must be at least 8 characters long with 1 uppercase, 1 lowercase, 1 number and 1 special character', 'password')
    } else {
        errors('', 'password')
        valid('Valid password', 'password')
    }
}
//confirm password
export const matchPassword = (errors, password, confirmPassword, valid) => {
    if (password === confirmPassword) {
        valid('Password match', 'confirmPassword')
        errors('', 'confirmPassword')
    }else if(confirmPassword === ' '){
        errors('Password cannot contain spaces', 'confirmPassword')
    }else {
        errors('Password does not match!', 'confirmPassword')
    }
}
//validate username
export const validateUsername = (errors, username, valid) => {
    if(!username){
        errors('Username is required!', 'username')
    }else if (username.includes(" ")) {
        errors('Username cannot have spaces!', 'username')
    } else if (username.length < 4) {
        errors('Username must be at least 4 characters!', 'username')
    } else {
        errors('', 'username')
        valid('Good', 'username')
    }
}