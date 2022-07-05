
const getUsers =async()=>{
    const resp = await fetch('/user');
    const data = await resp.json();
    return data;
};

const getUserById = async( id )=>{

    const resp = await fetch(`/user/:${id}`);
    const data = await resp.json();

};

const createUser = async( user )=>{
    await fetch('/user', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type':'application/json'
        }
    });
};

const eliminarUser = async( id )=>{

   const resp = await fetch(`/user/${id}`, {
        method: 'DELETE'
    });

    return (resp.ok)? 'Usuario eliminado':'El usuario no existe';
};

export{
    createUser,
    getUsers,
    eliminarUser
}

