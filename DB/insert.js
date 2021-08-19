const {options} = require("../options/SQLite");
const knex = require('kenex')({
    client: 'sqlite3' ,
    connection : {filename: './mydb.sqlite'}
});

const productos = [
    {
    "name": "Lapicera",
    "price": 20,
    "id": 0
    },
    {
    "name": "corrector",
    "price": 5,
    "id": 1
    }
]

knex('productos').insert(productos)
.then(()=> console.log("data inserted"))
.catch((err)=> {console.log(err); throw err})
.finally(()=>{
    knex.destroy();
})