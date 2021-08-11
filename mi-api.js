const express = require('express');
let producto=require('./productos');
let carrito=require('./carrito');
// creo una app de tipo express
const app = express();
const puerto = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static(__dirname + '/public'))
const routerProducts = express.Router();
const routerCart = express.Router();

app.use('/productos', routerProducts);
app.use('/carrito', routerCart);

// listar todos o por id
routerProducts.get('/listar/:id?',(req,res)=>{
    res.send(req.params.id ? producto.buscarId(req.params.id) : producto.listaProductos)
})

// incorporar una nuevo producto
routerProducts.post('/agregar', (req, res) => {
    let id = producto.nuevoProducto(req.body)
    res.send(producto.buscarId(id))
});

// Editar / Actualizar por id
routerProducts.put('/actualizar/:id', (req, res) => {
    let id = producto.editarProducto(req.body, req.params.id)
    res.send(producto.buscarId(id))
});

// Borrar
routerProducts.delete('/borrar/:id', (req, res) => {
    producto.borrarProducto(req.params.id)
    res.send(`Producto eliminado`)
});


// listar todos o por id
routerCart.get('/listar/:id?',(req,res)=>{
    res.send(req.params.id ? carrito.buscarId(req.params.id) : carrito.listaProductos)
})

// incorporar una nuevo producto
routerCart.post('/agregar', (req, res) => {
    let id = carrito.nuevoProducto(req.body)
    res.send(carrito.buscarId(id))
});

// Borrar el producto
routerCart.delete('/borrar/:id', (req, res) => {
    carrito.borrarProducto(req.params.id)
    res.send(`Producto eliminado`)
});

// pongo a escuchar el servidor en el puerto indicado
const server = app.listen(puerto, () => {
    console.log(`servidor escuchando en http://localhost:${puerto}`);
});

// en caso de error, avisar
server.on('error', error => {
    console.log('error en el servidor:', error);
});