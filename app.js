/** @format */

// IMPORTANT >>>>>
// PARA ACTIVAR LAS IMAGENES DEBES LLAMARLAS DE LA SIGUIENTE MANERA:
// IMAGEN1-8

const input = document.getElementById("ingresar-tarea");
const boton = document.querySelector("button");
const boton2 = document.getElementById("Button2");
const listaDeTarea = document.getElementById("lista-de-tareas");
const container = document.querySelector(".contenedor");

const ListItems = {
    IMAGEN1: "./imgs_Galery/1.jpg",
    IMAGEN2: "./imgs_Galery/2.jpg",
    IMAGEN3: "./imgs_Galery/3.jpg",
    IMAGEN4: "./imgs_Galery/4.jpg",
    IMAGEN5: "./imgs_Galery/5.jpg",
    IMAGEN6: "./imgs_Galery/6.jpg",
    IMAGEN7: "./imgs_Galery/7.jpg",
    IMAGEN8: "./imgs_Galery/8.jpg",
};

function agregarTarea() {
    //AGREGAR IMAGEN
    if (input.value) {
        //Crear tarea
        let tareaNueva = document.createElement("div");
        tareaNueva.classList.add("tarea");
        const inputvalue = input.value;
        let New_image = document.createElement("img");
        New_image.setAttribute("src", ListItems[inputvalue]);
        New_image.setAttribute("width", "20%");

        if (inputvalue in ListItems) {
            tareaNueva.appendChild(New_image);
        }
        New_image.addEventListener("click", () => {
            New_image.classList.toggle("imageCrown");
            // CLICK EN LA IMAGEN PARA CERRARLA
        });

        //Texto ingresado por el usuario
        let texto = document.createElement("p");
        texto.innerText = input.value;
        tareaNueva.appendChild(texto);

        //Crear y agregar contenedor de iconos
        let iconos = document.createElement("div");
        iconos.classList.add("iconos");
        tareaNueva.appendChild(iconos);

        //Iconos
        let completar = document.createElement("i");
        completar.classList.add(
            "bi",
            "bi-check-circle-fill",
            "icono-completar",
        );
        completar.addEventListener("click", completarTarea);

        let eliminar = document.createElement("i");
        eliminar.classList.add("bi", "bi-trash3-fill", "icono-eliminar");
        eliminar.addEventListener("click", eliminarTarea);

        iconos.append(completar, eliminar);

        //Agregar tarea nueva a la lista
        listaDeTarea.appendChild(tareaNueva);
    } else {
        alert("Por favor ingresa una tarea");
    }
}

function completarTarea(e) {
    let tarea = e.target.parentNode.parentNode;
    tarea.classList.toggle("completada");
}

function eliminarTarea(e) {
    let = tarea = e.target.parentNode.parentNode;
    tarea.remove();
}

boton.addEventListener("click", agregarTarea);
