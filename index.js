const express = require('express');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/errorHandler');
const routerApi = require('./routes');
const app = express();
const port = 3000;
app.use(express.json()); // es un middleware que permite ver lo que se envia en un post en formato json

app.listen(port, ()=>{
  console.log('server corriendo en el puerto: '+ port)
})

routerApi(app)
app.use(boomErrorHandler);
app.use(logErrors);
app.use(errorHandler);


//este es el endpoint de la landing
app.get('/', (req, res)=>{
  res.send('hola este es mi server nuevo en express')
});


