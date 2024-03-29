const jwt = require('jsonwebtoken');
require('dotenv').config();

const auth = (req, res, next) => {
    try {
        const bearerToken = req.headers.authorization;

        if (!bearerToken) {
            return res.json(
                {
                    succes: true,
                    message: "No puedes pasar"
                }
            )
        }

        const token = bearerToken.split(" ")[1];

        const decoded = jwt.verify(token, process.env.SECRET_COMBINATION);

        req.userId = decoded.userId;
        req.roleId = decoded.roleId;

        next();
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Token inválido",
                error: error.message
            }
        )
    }

}

module.exports = auth;