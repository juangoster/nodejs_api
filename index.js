const express = require('express');
const routerApi = require('./routes');
const app = express();
const port = 3000;
app.use(express.json()); // es un middleware que permite ver lo que se envia en un post en formato json

app.listen(port, ()=>{
  console.log('server corriendo en el puerto: '+ port)
})

routerApi(app)

//este es el endpoint de la landing
app.get('/', (req, res)=>{
  res.send('hola este es mi server nuevo en express')
});


