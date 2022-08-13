const jokeUrl = 'https://api.chucknorris.io/jokes/random#';

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

// Exportando Funciones
export {
    obtenerChiste
}