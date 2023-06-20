//visibilidad del juego
function renderJuego() {
    const juego = JSON.parse(localStorage.getItem("juego"));
    let contenido = `<div class="col-md-4 offset-md-2">
            <img src="${juego.imagen}" class="img-fluid" alt="${juego.nombre}">
        </div>
        <div class="col-md-4 py-5">
            <p class="text-body">${juego.plataforma}</p>
            <h3 class="text-secondary"> ${juego.nombre} </h3>
            <p class="card-text text-danger">${juego.precio}</p>
            <p class="my-5"><button class="btn btn-primary " onClick="agregarJuego(${juego.id});">Agregar al Carrito </button></p>
        </div>`;

    document.getElementById("contenido").innerHTML = contenido;
}

renderJuego();
renderBotonCarrito();