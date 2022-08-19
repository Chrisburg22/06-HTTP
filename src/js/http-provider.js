const jokeUrl = 'https://api.chucknorris.io/jokes/random#';
const usuariosUrl = 'https://reqres.in/api/users?page=2';// Enpoint de pruebas para trabajar con usuarios // Api para practicar con usuarios Reqres // Creando referencia

// Cloudinary
const cloudPreset = 'uzujlmra';
const cloudUrl = 'https://api.cloudinary.com/v1_1/creewsneakers/upload';

// Creamos una función async que nos va a retornar un chiste de la API que s e definio anteriormente
const obtenerChiste= async () => {

//El try se va a ejecutar en caso de que no existe ningun error
    try{
    
        const resp = await fetch( jokeUrl ); // Crea un a nueva promesa
        
        if(  !resp.ok ) throw 'No se pudo realizar la petición'; // Verifica que es chiste de la Url Exista
        
        // Con esta linea de codigo estamos desestructurando datos que necesitamos de la variable resp
        const { id, value, icon_url } = await resp.json(); // Crea una nueva variable, que retorna una nueva promesa
        
        return { id, value, icon_url }; // Se retona el valor que necesitamos de la variable resp
    
    }catch( err ){ // En caso de que existe un error se ejecuta esta linea de bloque
    
        throw err; // Retorna el error
    
    }
}

const obtenerUsuarios = async ( ) => {
    const resp = await fetch( usuariosUrl ); //Espera a que la promesa del fetch se cumple, y se crea em ña variable resp
    const { data:usuarios } = await resp.json;//Se hace otra petición de esperar una promesa, obteniento los valores de las propiedades del objeto resp.json

    return usuarios; // Se retorna el array de objetos(usu)
}

// ArchivoSubir :: file
//Con este codigo podriamos enviar cualquier archivo
const subirImagen = async( archivoSubir ) => {

    //Es como un objeto que esta listo para hacer posteos
    const formData = new FormData(); // El formData nos crea el resultado un fotmulario de html pero creado en la parte de JavaScript
    formData.append('upload_preset', cloudPreset ); //Agregamos el el key y el value
    formData.append('file', archivoSubir );//Agregamos el archivo que vamos a subir con el nombre de file

    try{
        // Se crea la constante resp que va a ser un fetch
        //La url del fetch es nuestro api url de claudinary y la configuracion utiliza el metodo de CRUD POST
        //Recordemos que el POST crea un nuevo usuraio por asi decirlo
        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData // Esta es la informacion que se enviara al bodi
        });

        // Si todo se hizo correctamente 
        //
        if ( resp.ok ) {
            const cloudResp = await resp.json();
            return cloudResp.secure_url; // Extraemos la propiedad Secure_url de CloudResp
        } else {
            throw await resp.json(); // De esta manera nos va a decir cual es el problema de la carga
        }
    } catch( err ) {
        throw err; // La carga no se pudo realizar.
    }

}
// Exportando Funciones
export {
    obtenerChiste,
    obtenerUsuarios,
    subirImagen
}