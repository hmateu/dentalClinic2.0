const { User } = require("../../models");
const db = require("../../models");
const sequelize = require("sequelize");
const usersGetAllPatientsControllers = {};

usersGetAllPatientsControllers.getAllPatients = async (req,res) => {
    try {
        const patients = await db.sequelize.query('select id, name, surname, age, mobile, email from Users where role = 4', { type: sequelize.QueryTypes.SELECT });
        return res.json(
            {
                success: true,
                message: "Pacientes recuperados",
                data: patients
            }
        )
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "No se puede mostrar ningun paciente",
                error: error.message
            }
        );
    }
}

module.exports = usersGetAllPatientsControllers;