const { User } = require('../../models')
const userUpdateController = {}

userUpdateController.updateUser = async (req, res) => {
    try {
        // const userId = req.params.id;
        const userId = req.userId;

        const user = await User.findByPk(userId);

        if (!user) {
            return res.json(
                {
                    success: true,
                    message: "El usuario no existe"
                }
            );
        };

        const { name, surname, age, mobile, location } = req.body;

        const userUpdated = await User.update(
            {
                name, surname, age, mobile, location
            },
            {
                where: {
                    id: userId
                }
            }
        )

        return res.json({
            success: true,
            message: "Usuario actualizado",
            data: userUpdated
        })
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "No se puede actualizar el usuario seleccionado",
                error: error
            }
        )
    }
}

module.exports = userUpdateController;