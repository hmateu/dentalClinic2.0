const { User } = require('../../models');
const bcrypt = require('bcrypt');
const emailValidation = require('../../utils/validations/emailValidation');
const passwordValidation = require('../../utils/validations/passwordValidation');

const authRegisterController = {};

authRegisterController.register = async (req, res) => {
    try {
        const { dni, name, surname, password, age, mobile, email, location } = req.body;
        
        if (!passwordValidation(password)) {
            return res.json(
                {
                    success: true,
                    message: "Contraseña no válida."
                }
            )
        }
        
        if (!emailValidation(email)) {
            return res.json(
                {
                    success: true,
                    message: "Email no válido"
                }
            )
        }

        const newPassword = bcrypt.hashSync(password, 8);

        const newUser = await User.create(
            {
                dni, name, surname,
                password: newPassword,
                age, mobile, email, location,
                collegial: null,
                speciality: null,
                role: 4
            }
        );
        return res.json(
            {
                success: true,
                message: "Usuario registrado correctamente",
                data: newUser
            }
        )
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "No se puede registrar el usuario",
                error: error.message
            }
        )
    }
}

module.exports = authRegisterController;