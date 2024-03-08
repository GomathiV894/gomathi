var {createPool}=require("mysql2");
var Db=createPool({
    host:'localhost',
    user:'root',
    password:'qwerty',
    port:3306,
    database:'farmcrop',
    ConnectionLimit:15
});

module.exports=Db;
