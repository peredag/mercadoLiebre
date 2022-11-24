let express = require('express'); // levanto servidor
let app = express(); // levanto servidor
const PORT = 3000; // levanto serv
let path = require('path')

//middlewares 
app.use(express.static('public'))

// Routes
//      ruta, funcion de require y respuesta---
app.get('/', function (req, res){
    res.sendFile(path.join(__dirname, './views/home.html'))
})

app.get('/register', function (req, res){
    res.sendFile(path.join(__dirname, './views/register.html'))
})

app.get('/login', function (req, res){
    res.sendFile(path.join(__dirname, './views/login.html'))
})


// levanto serv-------------
app.listen(PORT, () => console.log(` 
Servidor escuchando en el puerto ${PORT}
http://localhost:${PORT}
`))
