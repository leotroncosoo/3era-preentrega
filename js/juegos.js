function renderJuegos() {
    let productos = cargarJuegosLS();
    let contenido = "";

    productos.forEach(juego => {
        contenido += `<div class="col-md-3 mb-5">
        <a href="verJuego.html" onclick="verJuego(${juego.id})" class="text-decoration-none ">
            <div class="card text-center">
                <img src="${juego.imagen}" class="card-img-top" alt="${juego.nombre}">
                <div class="card-body">
                    <p class="card-text text-primary"><b>$${juego.precio}</b></p>
                    <p class="text-secondary">${juego.nombre}</p>
                    <button class="btn btn-info ">Ver el juego  </button>
                </div>
            </div>
        </a>
      </div>`;
    });

    document.getElementById("contenido").innerHTML = contenido;
};

function verJuego(id) {
    let juegos = cargarJuegosLS();
    let juego = juegos.find(item => item.id == id);
    localStorage.setItem("juego", JSON.stringify(juego));
}

renderJuegos();
renderBotonCarrito();