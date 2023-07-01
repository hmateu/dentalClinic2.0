const { Appointment, User, Service } = require("../../models");
const appointmentCreateController = {};

appointmentCreateController.createAppointment = async (req, res) => {
    try {
        const patient = req.userId;
        const { date, service } = req.body;

        const currentService = await Service.findOne({
            where: {
                id: service
            }
        });

        const assignedUser = await User.findOne({
            where: {
                id: 5
            }
        });

        const newAppointment = await Appointment.create({
            date,
            price: currentService.price,
            assessment: "Pendiente de consulta",
            dentist: assignedUser.id,
            patient: patient,
            service,
            payment: 1
        });

        return res.json(
            {
                success: true,
                message: "Cita creada",
                data: newAppointment
            }
        )
    } catch (error) {
        let statusCode;
        res.statusCode === 200 ? statusCode = 500 : statusCode = res.statusCode;
        return res.status(statusCode).json(
            {
                success: false,
                message: "No se puede crear la cita",
                error: error.message
            }
        );
    }
}

module.exports = appointmentCreateController;