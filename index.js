const express = require('express');
const cors = require('cors')
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/errorHandler');
const routerApi = require('./routes');

routerApi(app)
const app = express();
const port = 3000;
app.use(express.json()); // es un middleware que permite ver lo que se envia en un post en formato json

//middlewares creados por mi para manejar errores
app.use(boomErrorHandler);
app.use(logErrors);
app.use(errorHandler);

//middleware cors para manejar el problema de cross origin, acá le damos acceso a la API solo a los de la whitelist
app.use(cors(options))
const whiteList = ['lhttp://localhost:4200', 'http://otraApp.com']
const options = {
  origin(origin, callback){
    if(whiteList.includes(origin)){
      callback(null, true);
    }
    callback(new Error('no tienes permitido el acceso a la API'))
  }

}


//este es el endpoint de la landing
app.get('/', (req, res)=>{
  res.send('hola este es mi server nuevo en express')
});

app.listen(port, ()=>{
  console.log('server corriendo en el puerto: '+ port)
})


