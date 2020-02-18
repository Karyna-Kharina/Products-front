export function isValidName(name) {
    const pattern = /^[A-Za-z]+$/;
    return pattern.test(name) && name.length > 1;
}

export function isValidEmail(email) {
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(String(email).toLowerCase());
}

export function isValidPhoneNumber(number) {
    const pattern = /^\+380\d{3}\d{2}\d{2}\d{2}$/;
    return pattern.test(number);
}

export function isValidPassword(password) {
    return password.length > 7;
}