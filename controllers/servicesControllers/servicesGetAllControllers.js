const { Service } = require('../../models')
const servicesGetAllControllers = {}

servicesGetAllControllers.getAllservices = async (req, res) => {
    try {
        const services = await Service.findAll();

        return res.json({
            success: true,
            message: "Servicios recuperados",
            data: services
        })
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "No se pueden recuperar servicios",
                error: error.message
            }
        )
    }
}

module.exports = servicesGetAllControllers;