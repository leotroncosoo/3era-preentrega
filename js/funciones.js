function guardarJuegosLS() {
    localStorage.setItem("juegos", JSON.stringify(juegos));
}

function cargarJuegosLS() {
    return JSON.parse(localStorage.getItem("juegos"));
}

function guardarCarritoLS(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function cargarCarritoLS() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

function buscarJuego(id) {
    const juegos = cargarJuegosLS();
    return juegos.find(item => item.id === id);
}


function agregarJuego(id) {
    const carrito = cargarCarritoLS();
    const juego = buscarJuego(id);
    carrito.push(juego);
    guardarCarritoLS(carrito);
    renderBotonCarrito();
}

function eliminarJuego(id) {
    let juegos = cargarCarritoLS();
    let index = juegos.findIndex(juego => juego.id === id);
    if (index !== -1) {
      juegos.splice(index, 1);
      guardarCarritoLS(juegos);
      renderJuegos();
    }
  }
  

function vaciarCarrito() {
    localStorage.removeItem("carrito");
    renderBotonCarrito();
    renderJuegos();
}

function cantidadTotalJuegos() {
    const carrito = cargarCarritoLS();
    return carrito.length;
}

function sumaTotalJuegos() {
    const carrito = cargarCarritoLS();

    return carrito.reduce((acumulador, item) => acumulador += item.precio, 0);
}

function renderBotonCarrito() {
    let botonCarrito = document.getElementById("botonCarrito");
    let contenido = `<button type="button" class="btn bg-light position-relative">
    <img src="img/cart-check-fill.svg" alt="Carrito" width="32">
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    ${cantidadTotalJuegos()}
    </span>
    </button>`;
    botonCarrito.innerHTML = contenido;    
}

