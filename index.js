// Para conectarnos a una base de datos en mongodb
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://LuisLuna:GabrielaLuna1991@cluster0.l0uic.mongodb.net/?retryWrites=true&w=majority');

//Para diseñar nuestro modelo de base de datos, como queremos que se vean nuestros datos o ducumentos.

const User = mongoose.model('User', {
    username: String,
    edad: Number
});


const crear = async()=>{

    const user = new User({
        username: 'Martin Luna',
        edad: 53
    });

  const saveUser = await user.save();
  console.log(saveUser)
};

// crear();

// Para mandar a traes los documentos guardados en nuestra base de datos mongo
const buscarTodo = async()=>{
    const users = await User.find();
    console.log(users);
};

// buscarTodo();

// Para poder buscar solo 1 elemento que cumplan con la condicion que nosotros le hayamos asignado.

const buscar = async()=>{

    const user = await User.find({
        username: 'Martin Luna'
    });

    console.log(user);
}

// buscar();

// Basicamente realiza lo mismo que la funcion buscar pero este no nosdevuelve el objeto dentro de un arreglo
// solo nos devuelve el objeto sin nada mas .

const buscarUno = async()=>{
    const user = await User.findOne({
        username: 'Martin Luna'
    });
    console.log(user)
};

// buscarUno();

// Utilizamos para actualizar nuestro archivo JSON de la BDD mongos
const actualizar = async()=>{

    const user = await User.findOne({
        username: 'Martin Luna'
    });
    console.log(user);

    user.edad = 54;
    user.save();

    console.log(user);

};

// actualizar();

// Lo utilizamos para remobe algun objeto de nuestro JSON en mongo
const eliminar = async()=>{

    const user = await User.findOne({
        username:'Martin Luna'
    });

user?
await user.remove()
:
console.log('Usuario inexistente');
    


};

eliminar();