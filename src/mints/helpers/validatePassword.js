export default (password) => {
    if (!password) {
        return 'Password cannot be null'
    }

    if (password.length === 0) {
        return 'Password cannot be empty'
    }

    if (password.length < 6) {
        return 'Password length should greater than 5'
    }
}