const passwordValidation = (password) => {
    // try {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
        const isValidPassword = passwordRegex.test(password);
        
        return isValidPassword;
}
module.exports = passwordValidation;