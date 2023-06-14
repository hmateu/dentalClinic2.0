const emailValidation = (email) => {
    // try {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const isValidEmail = emailRegex.test(email);
        
        return isValidEmail;
}
module.exports = emailValidation;