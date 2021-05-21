export function valid_phone (value) {
    let regPhone = /^1[3456789]\d{9}$/
    return regPhone.test(value)
}