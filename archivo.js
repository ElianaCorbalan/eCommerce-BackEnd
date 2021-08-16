class Archivo {
    constructor(prod) {
        this.prod = prod
    }
    async leer(){
        try {
            const data = await fs.promises.readFile(`./${this.prod}`, 'utf-8');
            console.log(data);
            return JSON.parse(data);
        } catch(error) {
            return [];
        }
    }
    async guardar(productoNuevo) {
            const data = await this.leer()
            productoNuevo.id = data.length +1; 
            data.push(productoNuevo)
            try {
                await fs.promises.writeFile(this.prod, JSON.stringify(data, null, "\t"));
                
            } catch (error) {
                console.log('Error, este archivo no se pudo guardar', error)
            }
    }
    async borrar() {
        try {
            await fs.promises.unlink(`./${this.prod}`)
        } catch (error) {
            console.log("No se pudo borrar el archivo", error)
        }
    }
};

const AgregarItems = async () => {
    const item1 = new Producto('Calculadora', 'gfhfg', 40, 56, "https://foo.png",  );
    const archivo = new Archivo('productos.txt');
    await archivo.guardar(item1);
    await archivo.leer(archivo);
}
//Prueba
AgregarItems()