const { Service } = require('../../models')
const treatmentsGetAllControllers = {}

treatmentsGetAllControllers.getAlltreatments = async (req, res) => {
    try {
        const treatments = await Service.findAll();

        return res.json({
            success: true,
            message: "Tratamientos recuperados",
            data: treatments
        })
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "No se pueden recuperar tratamientos",
                error: error.message
            }
        )
    }
}

module.exports = treatmentsGetAllControllers;