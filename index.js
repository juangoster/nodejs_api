const express = require('express');
const cors = require('cors')
const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/errorHandler');
const routerApi = require('./routes');

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json()); // es un middleware que permite ver lo que se envia en un post en formato json
routerApi(app);

//middlewares creados por mi para manejar errores
app.use(boomErrorHandler);
app.use(logErrors);
app.use(errorHandler);
app.use(ormErrorHandler);

//middleware cors para manejar el problema de cross origin, acá le damos acceso a la API solo a los de la whitelist

const whiteList = ['http://localhost:4200', 'http://otraApp.com', 'http://localhost:3000']
const options = {
  origin(origin, callback){
    if(whiteList.includes(origin) || !origin){
      callback(null, true);
    }
    callback(new Error('no tienes permitido el acceso a la API'))
  }

}
app.use(cors(options))

//este es el endpoint de la landing
app.get('/', (req, res)=>{
  res.send('hola este es mi server nuevo en express')
});

app.listen(port, ()=>{
  console.log('server corriendo en el puerto: '+ port)
})


