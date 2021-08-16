class Carrito {
    id = 1;
    timestamp = 123134;
    productos = [
        {
            "name": "producto1",
            "description": "description",
            "stock": 120,
            "price": 20,
            "thumbnail": "https://foo.png",
            "timestamp": "11/08/2021 16:20:00",
            "id": 0
        }
    ];

    idProducto = 0;
    nuevoProducto(producto) {
        this.productos.push({
            title: producto.title,
            price: producto.price,
            thumbnail: producto.thumbnail,
            id: ++this.idProducto
        });
        return (this.idProducto);
    }

    buscarId(id) {
        if (this.productos[id] == undefined) {
            return { error: "Producto no encontrado" }
        }
        return this.productos[id];
    }

    editarProducto(item) {
        this.productos[item.id] = item
        return (item.id);
    }

    borrarProducto(id) {
        this.productos = this.productos.filter((producto) => producto.id != id);
    }


    get listaProductos() {
        if (this.productos.length == 0) {
            return { error: "Error, no hay productos cargados" }
        }
        return this.productos;
    }
}

module.exports = new Carrito;