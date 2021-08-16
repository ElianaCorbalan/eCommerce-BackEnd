
class Producto{
    productos=[
        {
            "name": "Lapicera",
            "description" : "tinta",
            "stock": 120,
            "price": 20,
            "thumbnail": "https://foo.png",
            "timestamp": 16287224251334,
            "id": 0
        }
    ];

    idProducto = 0;
    nuevoProducto(producto){
        this.productos.push({
            name:producto.name,
            description:producto.description,
            stock:producto.stock,
            price: producto.price,
            thumbnail: producto.thumbnail,
            timestamp: Date.now(),
            id:++this.idProducto
        });
        return(this.idProducto);
    }

    buscarId(id){
        if (this.productos[id]==undefined){
            return {error:"Producto no encontrado"}
        }
        return this.productos[id];
    }

    editarProducto(item, id){
        this.productos[id] = item
        return(id);
    }

    borrarProducto(id){
        this.productos = this.productos.filter((producto) => producto.id != id);
    }


    get listaProductos(){
        if (this.productos.length==0){
            return {error:"Error, no hay productos cargados"}
        }
        return this.productos;
    }
}

module.exports= new Producto;