const express = require("express");
const expressLayouts = require('express-ejs-layouts')

const app = express();

//connection for db
require("./db");

//EJS
app.use(expressLayouts)
app.set('layout', './layouts/layouts');
app.set("view engine", "ejs");

//BodyParser
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/", require("./router/welcome.routes"))
app.use("/users", require('./router/register.routes'))

const PORT = process.env.PORT ||  3000

app.listen(PORT, console.log("Server started at port : ",PORT))
