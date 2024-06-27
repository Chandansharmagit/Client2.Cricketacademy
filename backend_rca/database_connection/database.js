const mongoose = require('mongoose');


//creating the database 
const db = (process.env.database_connection)
mongoose.connect(db,{

}).then(()=> {
    console.log("connected to database");
}).catch((error) => {
    console.log("failed to connect databas",error)
})

module.exports = db;
