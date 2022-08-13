import {obtenerChiste } from './http-provider.js'

const body = document.body; // Creamos una variable que hace referencia al body de la oagina de html
let btnOtro, olList;

// Creando uns función para crear un elemento div dentro de nuestro html
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

const eventos = ()  => {
   
    olList = document.querySelector('ol');
    btnOtro = document.querySelector('button');

    btnOtro.addEventListener('click', async () => {
        
        btnOtro.disabled = true;
        dibujarChiste( await obtenerChiste() );
        btnOtro,disabled = false;

    });

}

const dibujarChiste = ( chiste ) => {

    const olItem = document.createElement('li');
    olItem.innerHTML = `<b>${ chiste.id } </b>: ${ chiste.value }`;
    olItem.classList.add("list-group-item");

    olList.append(olItem);
}


//Creamos una función que vamos a exportar, con la cual vamos a hacer el llamado a nuestra funcion de crear un chiste en html ( crearChristesHtml )
export const init = () => {
    crearChistesHtml();
}