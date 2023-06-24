const express = require("express");
require('dotenv').config();
const cors = require("cors");
const app = express();
const router = require('./router');
const db = require('./db');
const PORT = process.env.DEV_API_PORT;

app.use(cors());
app.use(express.json());
app.use(router);

db.then(
    () => {
        app.listen(PORT, () => {
            console.log(`Servidor levantado correctamente y a la escucha en el puerto ${PORT}`);
        });
    }
)
    .catch(
        error => console.error(`Ha habido un error conectándose a la base de datos`, error)
    );