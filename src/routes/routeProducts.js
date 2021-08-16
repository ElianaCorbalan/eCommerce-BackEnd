const express = require('express');
const router = express.Router();

const productos = require('../productos');
const admin = true;

// listar todos o por id
router.get('/listar/:id?', (req, res) => {
    res.send(req.params.id ? productos.buscarId(req.params.id) : productos.listaProductos)
})

// incorporar una nuevo producto
router.post('/agregar', (req, res) => {
    if (admin) {
        let id = productos.nuevoProducto(req.body)
        res.send(productos.buscarId(id))
    } else {
        res.json({ error: -1, descripción: `ruta productos/agregar metodo POST no autorizada` });
    }
})

// Editar / Actualizar por id
router.put('/actualizar/:id', (req, res) => {
    if (admin) {
        let id = productos.editarProducto(req.body, req.params.id)
        res.send(productos.buscarId(id))
    } else {
        res.json({ error: -1, descripción: `ruta productos/actualizar metodo PUT no autorizada` });
    }
})

// Borrar
router.delete('/borrar/:id', (req, res) => {
    if (admin) {
        producto.borrarProducto(req.params.id)
        res.send(`Producto eliminado`)
    } else {
        res.json({ error: -1, descripción: `ruta productos/borrar metodo DELETE no autorizada` });
    }
})

module.exports = router;
