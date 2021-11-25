const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const fs = require("fs");


const app = express();

const index = fs.readFileSync("./src/views/index.html")

app.use(morgan('dev'));
app.use(cors());

app.get('/',(req, res)=>{
  res.write(index);
  res.send();
});

app.listen(3000,()=>{
  console.log("Server corriendo en el puerto 3000");
})