const urlCRUD = 'https://reqres.in/api/users'; //Esta url es una base de datos falsa en la que podremos usar metodos de las bases de datos reales

const getUsuario = async ( id ) => { // Necesitaremos el id Para saber el usuario que vamos a obtener

    const resp = await fetch(`${ urlCRUD }/${ id }`); //Este argumento en el fetch es su referencia, que en este caso es el url ya creado mas un slash y un id para obtener el ususario
    const {data} = await resp.json(); //El resp lo transforma a formato JSON

    return data;
}

const crearUsuario = async ( usuario ) => {

    //El primer comentario de fectch hace referenci a la url y el segundo argumento a las informacion que no vas va a ayudar a configurar el fetch
    const resp = await fetch( urlCRUD, {
        method: 'POST', // El method se va a necesitar para crear un usurario 
        body: JSON.stringify( usuario ),//El body es la data que se quiere enviar. Convierte un objeto JSON a un string
        headers: { // Los headers son una informacion extra para el backend ( fetch)
            'Content-Type': 'application/json'
        }
    });

    return await resp.json();
}

const actualizarUsuario = async( id, usuario ) => {

    const resp = fetch( `${urlCRUD}/${id}`, {
        method: 'PUT',
        body: JSON.stringify( usuario ),
        headers: {
            'Content-Type': 'application/json'
        }
    } );

    return await resp.json();
}

const borrarUsuario= async ( id ) => {

    const resp = fetch(`${ urlCRUD }/${ id }`, {
        method: 'DELETE'
    })

    return (resp.ok) ? 'Borrado' : 'No se pudo eliminar';//Si la propiedad ok es verdadera o no.
}

export {
    getUsuario,
    crearUsuario,
    actualizarUsuario,
    borrarUsuario
}