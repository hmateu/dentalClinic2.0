const { User } = require("../../models");
const db = require("../../models");
const sequelize = require("sequelize");
const usersGetAllUsersExceptAdmin = {};

usersGetAllUsersExceptAdmin.getAllUsersExceptAdmin = async (req,res) => {
    try {
        const patients = await db.sequelize.query('select id, name, surname, age, mobile, email from Users where role != 1', { type: sequelize.QueryTypes.SELECT });
        return res.json(
            {
                success: true,
                message: "Usuarios recuperados",
                data: patients
            }
        )
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "No se puede mostrar ningun usuario",
                error: error.message
            }
        );
    }
}

module.exports = usersGetAllUsersExceptAdmin;