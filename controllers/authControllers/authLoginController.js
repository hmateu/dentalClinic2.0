const { User } = require('../../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authLoginController = {};

authLoginController.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne(
            {
                where: {
                    email: email
                }
            }
        );

        if (!user) {
            return res.status(501).json(
                {
                    success: true,
                    message: "Usuario incorrecto"
                }
            )
        }

        const isMatch = bcrypt.compareSync(password, user.password);

        if (!isMatch) {
            return res.status(501).json(
                {
                    success: true,
                    message: "Contraseña incorrecta"
                }
            );
        }

        const token = jwt.sign(
            {
                userId: user.id,
                roleId: user.role,
                name: user.name
            },
            process.env.SECRET_COMBINATION,
            {
                expiresIn: '3h'
            }
        );
        return res.json(
            {
                success: true,
                message: "Usuario Logueado",
                token: token
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "No puedes loguearte",
                error: error.message
            }
        )
    }
}
module.exports = authLoginController;