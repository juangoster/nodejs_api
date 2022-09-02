const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
  res.send('hola este es mi server nuevo en express')
})
app.get('/products', (req, res)=>{
  res.json({
    name:"café",
    price: 15000
  })
})

app.listen(port, ()=>{
  console.log('server corriendo en el puerto: '+ port)
})

