const mongoose = require("mongoose");
require("colors");
const variables = require("./config/variables");
const app = require("./app");



// database connection
mongoose.connect(variables.connectionString, { dbName: 'Padrolo_Motors', useNewUrlParser: true }).then(()=>{
  console.log("Database connection is successful 🛢" .red.bold);
});



// server
const port = 8080;

app.listen(port, () => {
  console.log(`App is running on port ${port}`.yellow.bold);
});