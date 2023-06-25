const { Appointment } = require("../../models");
const db = require("../../models");
const sequelize = require("sequelize");
const appointmentsGetAllController = {};

appointmentsGetAllController.getAllAppointments = async (req,res) => {
    try {
        const appointments = await db.sequelize.query('select a.id , a.date , a.price, a.assessment, ud.name as dentist, up.name as patient, s.name as service, p.name as payment from Appointments a left join Users ud on a.dentist = ud.id left join Users up on a.patient = up.id left join Services s on a.service = s.id left join Payments p on a.payment = p.id', { type: sequelize.QueryTypes.SELECT });
        return res.json(
            {
                success: true,
                message: "Citas recuperadas",
                data: appointments
            }
        )
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "No se puede mostrar ninguna cita",
                error: error.message
            }
        );
    }
}

module.exports = appointmentsGetAllController;