
const jokeUrl = 'https://api.chucknorris.io/jokes/random#';

fetch( jokeUrl ).then( resp => {

    resp.json().then( ({ id, value}) =>{
        console.log( id );
        console.log( value );
    });

});

//Cadena de Promesas de una menera mas facil de leer.
// El fetch retorna una promesa y es por eso que se utiliza el .then
// Al igual que con el resp.json() que tambien va a retornar una promesa
fetch( jokeUrl )
     .then( resp => resp.json()) // Trabajando al primera promesa
     .then( ({ id, value }) => console.log( id, value ));// Trabajando la segunda promesa

