/*
const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', async(e) => {
	e.preventDefault();


    // Leer Filas
    try {
        const respuesta = await fetch('https://sheet.best/api/sheets/50c984aa-54c7-4900-899f-a0ae540cc42d');

        const contenido = await respuesta.json();
        
        //de ésta forma muestra el $ q trae del excel
        //pero sólo nos permite 100 accesos fech, de lo contrario es pago
        //https://sheet.best/
        //https://www.youtube.com/watch?v=Barr2qKc82w
        document.querySelector("#precio1").innerText = contenido[1].precio;

    } catch(error){

        console.log(error);
    }

});

*/