import { eliminarUser } from "./http-provaider.js";
const contenedor = document.querySelector('.contenedor'),
      tbody      = document.getElementsByTagName('tbody')[0];

const crearTemplate =()=>{

    const html =`
    <div>
    <h1>Agregar usuario</h1>
    <form id="user-form">
    <div class='mb-3'>
        <label for="name">Nombre:</label>
        <input type="text" name='name' id="name">
    </div>
    <div class='mb-3'>
        <label for="lastname">Apellido:</label>
        <input type="text" name='lastname' id="lastname">
    </div>
<input class='btn btn-primary' type="submit" value="Agregar">
</form>
</div>
    `;

   return contenedor.innerHTML = html;

};

const crearListaHtml=( {_id, name, lastname} )=>{

    const html = `
    <tr>
    <td scope="row">${ _id }</td>
     <td>${ name }</td>
     <td>${ lastname }</td>
     <td>
     <div class="btn-group" role="group" aria-label="">
       <button type="button" class="btn btn-primary" value='${_id}'>Editar</button>
       <button type="button" class="btn btn-danger"  value='${_id}' >Eliminar</button>
     </div>
    </td>
    </tr>`;
     
  return tbody.innerHTML += html;


    };


    const botonDelete = ()=>{

        tbody.addEventListener('click', async ( event )=>{
            
            const target = event.target.innerText;
            const id = event.target.value;
            
            (target === 'Eliminar')? console.log(await eliminarUser(id) ):console.log('Boton incorrecto');
            
            
        });

    };

    export{
        crearTemplate,
        crearListaHtml,
        botonDelete

    }