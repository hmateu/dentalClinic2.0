const { User } = require('../../models')
const usersGetAllControllers = {}

usersGetAllControllers.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: {
                exclude: ['password']
            }
        });

        return res.json({
            success: true,
            message: "Usuarios recuperados",
            data: users
        })
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "No se pueden recuperar usuarios",
                error: error.message
            }
        )
    }
}

module.exports = usersGetAllControllers;