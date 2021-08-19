const {options} = require("../options/SQLite");
const knex = require('kenex')({
    client: 'sqlite3' ,
    connection : {filename: './mydb.sqlite'}
});


knex('productos').select("*")
.then((rows)=> {
    for(row of rows){
        console.log(`${row['id']} ${row['name']} ${row['price']}`)
    }
}).catch((err)=> {console.log(err); throw err})
.finally(()=>{
    knex.destroy();
});