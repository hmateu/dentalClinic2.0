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
            return res.json(
                {
                    success: true,
                    message: "Usuario incorrecto"
                }
            )
        }

        const isMatch = bcrypt.compareSync(password, user.password);
        
        if(!isMatch){
            return res.json(
                {
                    success: true,
                    message: "Credenciales incorrectas"
                }
            );
        }

        const token = jwt.sign(
            {
                userId: user.id,
                roleId: user.role,
                email: user.email
            },
            'secreto',
            {
                expiresIn: '3h'
            }
        );
        return res.json(
            {
                success: true,
                message: "User Logged",
                token: token
            }
        );

        if (user.password == password) {
            return res.json(
                {
                    success: true,
                    message: "Usuario logueado",
                    token: token
                }
            );
        }

    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "No puedes loguearte",
                error: error
            }
        )
    }
}
module.exports = authLoginController;