const sqlite3 = require("sqlite3").verbose()
let sql;


//connect
const db = new sqlite3.Database("./test.db", sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.log(err.message);
})


// sql = `create table users(id,name)`;
// db.run(sql);

// insert
// sql = `insert into users (id,name) values (?,?)`;
// db.run(sql, [4, "Ahmet Mete"], (err) => {
//     if (err) return console.log(err.message);
// })


// get
sql = `select * from users`
db.all(sql, [], (err, rows) => {
    if (err) return console.log(err.message);
    rows.forEach(r => {
        console.log(r)
    })
})

// update
// sql = `update users set name=? where id =?`
// db.run(sql, ["updated", 4], (err) => {
//     if (err) return console.log(err.message);
// })