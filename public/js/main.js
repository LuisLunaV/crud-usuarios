import { crearTemplate, crearListaHtml, getUsers, createUser, botonDelete} from './index.js';


// Mandamos a traers los datos del formulario y los enviamos a la API que los guardara en la BD
const addFomulario =()=>{

   const form = document.querySelector('#user-form');
         
    form.onsubmit = async(e)=>{

        e.preventDefault();

        const formData = new FormData( form );
        const data = Object.fromEntries(formData.entries());

        // Validamos que las cajas no esten vacias
        if(data.name != '' && data.lastname != ''){
        createUser(data);
      
        form.reset(); //Limpia todas las cajas o campos de nuestro formulario
        location.reload();
        }

    };
};

// Creamos la lista de los registros
const listaOrdenada = async()=>{
    
 const listaDeUsuarios = await getUsers();
 listaDeUsuarios.forEach( crearListaHtml );

};


window.onload= async()=>{
    crearTemplate();
    addFomulario();
    listaOrdenada();
    botonDelete();
    
};

