const { Appointment } = require("../../models");
const db = require("../../models");
const sequelize = require("sequelize");
const appointmentGetOneController = {};

appointmentGetOneController.getOneAppointment = async (req,res) => {
    try {
        const appointmentId = req.params.id;

        const appointment = await db.sequelize.query(`select a.id, a.date, a.price, a.assessment, ud.name as dentist, up.name as patient, s.name as service, p.name as payment from Appointments a left join Users ud on a.dentist = ud.id left join Users up on a.patient = up.id left join Services s on a.service = s.id left join Payments p on a.payment = p.id where a.id = ${appointmentId}`, { type: sequelize.QueryTypes.SELECT });

        const currentAppointment = await Appointment.findByPk(appointmentId);
        
        const patientId = req.userId;
        const appointmentPatient = currentAppointment.patient;

        if(patientId != appointmentPatient){
            return res.status(500).json(
                {
                    success: true,
                    message: "No tienes permisos para modificar esta consulta."
                }
            );
        }

        return res.json(
            {
                success: true,
                message: "Cita recuperada",
                data: appointment
            }
        )
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "No se puede mostrar la cita",
                error: error.message
            }
        )
    }
}

module.exports = appointmentGetOneController;