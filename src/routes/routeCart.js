const express = require('express');
const router = express.Router();

const carrito = require('../carrito')

// listar todos o por id
router.get('/listar/:id?', (req, res) => {
    res.send(req.params.id ? carrito.buscarId(req.params.id) : carrito.listaProductos)
})

// incorporar una nuevo producto
router.post('/agregar', (req, res) => {
    let id = carrito.nuevoProducto(req.body)
    res.send(carrito.buscarId(id))
});

// Borrar el producto
router.delete('/borrar/:id', (req, res) => {
    carrito.borrarProducto(req.params.id)
    res.send(`Producto eliminado`)
});
module.exports = router;