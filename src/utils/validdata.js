export function valid_phone (value) {
    let regPhone = /^1[3456789]\d{9}$/
    return regPhone.test(value)
}

export function valid_password (value) {
    let regPassword = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/
    return regPassword.test(value)
}