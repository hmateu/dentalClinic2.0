const { User } = require('../../models');
const userGetOneController = {};

userGetOneController.getOneUser =  async(req, res) => {
    try {
        const userId = req.userId;
        const user = await User.findByPk(userId,{
            attributes: {
                exclude: ['password']
            }
        });

        return res.json({
            success: true,
            message: "Usuario recuperado",
            data: user
        })
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "No se puede recuperar el usuario seleccionado",
                error: error.message
            }
        )    
    }
}

module.exports = userGetOneController;