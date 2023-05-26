const express = require("express"); //importar express
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express(); //crear al servidor
const port = process.env.PORT || 3000;
const misRutas = require("./rutas/rutas");
app.use('/', misRutas);

app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());
app.use(express.static(process.cwd()+"/public/"));
app.listen(port, () => {
 console.log(`hola servidor ejecucion en http://localhost:${port}`);
})

app.use(cors());
