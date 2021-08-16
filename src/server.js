const express = require("express")
const routeCart = require('./routes/routeCart');
const routeProducts = require('./routes/routeProducts');

const app = express();
require('dotenv').config({ path: ".env" });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static(__dirname + '/public'));

app.use("/carrito", routeCart);
app.use("/productos", routeProducts);

/* Requiero FS: FileSystem: para manejo de archivos */
const fs = require('fs');

module.exports = app;

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`servidor escuchando en http://localhost:${PORT}`);
});





