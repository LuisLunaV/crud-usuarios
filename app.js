const express = require('express'); //Llamamos al framework
const mongoose = require('mongoose');
const user = require('./user.controller.js');
const app = express();
const port = 3000;

//middleware
app.use(express.json());

mongoose.connect('mongodb+srv://LuisLuna:GabrielaLuna1991@cluster0.l0uic.mongodb.net/?retryWrites=true&w=majority');

//Este es el metodo de ruta que se deriva de uno de los metodos HTTP
app.get('/user', user.list);  
app.post('/user', user.create);
app.get('/user/:id', user.get);
app.put('/user/:id', user.update);
app.patch('/user/:id', user.update);
app.delete('/user/:id', user.destroy);

app.get('/', (req, res)=>{
console.log(__dirname);
    res.sendFile(`${__dirname}/index.html`);

});

app.use(express.static('public'));
// Toma todos '*' los llamados a paginas que no sean las que yo haya asignado y enviame este mensaje de error con 
// el status '404 not found'
app.get('*', (req, res)=>{
    res.status(404).send('Esta pagina no existe');
});

// ejecutamos la aplicacion en el puerto 3000
app.listen(port, ()=>{
    console.log('iniciado aplicacion');
});




// app.get('/', (req, res)=>{
//     res.status(200).send('Hola mundo'); 
//  });
 
//  app.post('/', (req, res)=>{
//      res.status(201).send('Creando nuevo saludo');
//  });
 
//  app.get('/:id', (req, res)=>{
//      res.status(200).send(req.params);
//  });
 
//  app.put('/:id', (req, res)=>{
//      res.sendStatus(204);
//  });
 
//  app.patch('/:id', (req, res)=>{
//      res.sendStatus(204);
//  });
 
//  app.delete('/:id', (req, res)=>{
//      res.sendStatus(204);
//  });