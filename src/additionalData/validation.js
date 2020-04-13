export function isValidName(name = "") {
    const pattern = /^[A-Za-z]+[\s]?[A-Za-z]+$/;
    return pattern.test(name) && name.length > 1;
}

const daysInMonth = (m, y) => {
    switch (m) {
        case 1 :
            return (y % 4 === 0 && y % 100) || y % 400 === 0 ? 29 : 28;
        case 8 :
        case 3 :
        case 5 :
        case 10 :
            return 30;
        default :
            return 31
    }
};

export function isValidDate(date = new Date()) {

    if (date) {

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        month = parseInt(month, 10) - 1;

        return month >= 0
            && month < 12
            && day > 0
            && day <= daysInMonth(month, year)
            && year >= 1950
            && year <= 2010;
    }
    return false;
}

export function isValidEmail(email = "") {
    const pattern = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(String(email).toLowerCase());
}

export function isValidPhoneNumber(number = "") {
    const pattern = /^\+380\d{3}\d{2}\d{2}\d{2}$/;
    return pattern.test(number);
}

export function isValidPassword(password = "") {
    return password.length > 7;
}

export function isValidImageUrl(url = "") {
    const patternBase64 = /^data:image\/jpeg;base64,(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/;
    const patternURL = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w-]+)+[\w\-_~:/?#[\]@!&',;=.]+$/;
    return patternBase64.test(url) || patternURL.test(url);
}

export function isValidPrice(price) {
    const pattern = /^[0-9]+(?:[.,][0-9]{1,2})*$/;
    return pattern.test(price);
}