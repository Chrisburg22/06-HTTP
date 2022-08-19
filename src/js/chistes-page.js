//IMPORTACIONES
import {obtenerChiste } from './http-provider.js'

//REFERENCIAS DE HTML
const body = document.body; // Creamos una variable que hace referencia al body de la oagina de html
let btnOtro, olList, contadorChistes=0 ;

// Creando una función para crear un elemento div dentro de nuestro html
const crearChistesHtml = () => {

// Creamos esta constante, que es lo que queremos crear en el html al momento de llamar a la funcion, pero lo definimos como un string.
    const html = `
    <h1 class="mt-5">Chistes</h1>
    <hr>

    <button class="btn btn-primary">Otro chiste</button>
    
    <ol class="mt-2 list-group">
    </ol>
    `;

// Creamos un a nueva constante, la cual crea un nuevo elemento de html, en este caso un div
    const divChistes = document.createElement('div');
//Con el div creado de agregamo codigo HTML con nuestra variable que contiene el string de las etiquetas que queremos agregar al div 
    divChistes.innerHTML = html;
//Agregamos el nuevo div creado con todos sus elementos al body del html
    body.append(divChistes);

}

// En esta funcion vamos a declarar los eventos
const eventos = ()  => {
   
    olList = document.querySelector('ol');//Hace referenci al primer elemento 'ol' que encuentre en el html
    btnOtro = document.querySelector('button');// hace referencia al primer elemento 'button' qu encuentre en el html

//El evento del boton recibe una async function
    btnOtro.addEventListener('click', async() => {
        
        btnOtro.disabled = true;//El boton esta desabilitado 
        dibujarChiste( await obtenerChiste() ); // Manda llamar a la funcion dibujarChiste, la cual espera a que la promesa obtenerChiste sea completada. Con esto trabajamos con el chiste que nos restorna el argumento callback
        btnOtro.disabled = false;// El boton se habilita

    });

}

//Funcion para agregar un elemento a la lista ''ol
const dibujarChiste = ( chiste ) => {

    contadorChistes ++;
    const olItem = document.createElement('li');// Creamos una nueva etiqueta 'li'
    olItem.innerHTML = `${contadorChistes}.-<b>${ chiste.id } </b>: ${ chiste.value }`;// Agregamos un poco de html a nuestra lista, con esto estamos añadiendo las propiedades que necesitamos del argumento que se utiliza en la funcion. En este caso chiste
    olItem.classList.add("list-group-item");// Se agrega una clase al item

    olList.append(olItem);// Se agrega el nuevo item a la lista

}


//Creamos una función que vamos a exportar, con la cual vamos a hacer el llamado a nuestra funcion de crear un chiste en html ( crearChristesHtml )
export const init = () => {
    crearChistesHtml();
    eventos();
}