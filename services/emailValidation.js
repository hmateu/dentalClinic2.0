const emailValidation = (email) => {
    try {

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const isValidEmail = emailRegex.test(email);

    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "ERROR EN LA FUNCIÓN emailValidation",
                error: error.message
            }
        )
    }
}
module.exports = emailValidation;