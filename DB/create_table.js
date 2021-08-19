const {options} = require("../options/SQLite");
const knex = require('kenex')({
    client: 'sqlite3' ,
    connection : {filename: './mydb.sqlite'}
});

knex.schema.createTable('productos', table => {
    table.increments('id')
    table.string('name')
    table.number('price')
})

.then(() => console.log("table created"))
.catch((err)=> {console.log(err); throw err})
.finally(()=>{
    knex.destroy();
})