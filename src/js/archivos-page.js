import { subirImagen } from './http-provider';

const body = document.body;
let inputFile, imgFoto;

const crearInputFileHtml = () => {

    const html = `

        <h1 class="mt-5">Subir archivos</h1>
        <hr>

        <label>Selecciona una fotografía: </label>
        <input type="file" accept="image/png, image/jpeg"/> 

        <br>
        <img id="foto" class="img-thumbnail" src="">
    
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.append( div );

    inputFile = document.querySelector('input');
    imgFoto   = document.querySelector('#foto');

}

const eventos = () => {

    inputFile.addEventListener('change', (event) => {

        const file = event.target.files[0];
        // console.log(file);
        //Agregamos el archivo que queremos cargar como argumento a la funcion
        // Una vez cumplida la promesa vamos con el punto then 
        // En el cual vamos a agregar la url del archivo a la propiedad url de la etiqueta img creada con el nombre de imgFoto
        subirImagen( file ).then( url => imgFoto.src = url ); 

    });

}

export const init = () => {
    crearInputFileHtml();
    eventos();
}
