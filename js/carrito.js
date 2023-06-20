function renderJuegos() {
  let juegos = cargarCarritoLS();
  let contenido = "";

  console.log(juegos);
  if (juegos.length > 0) {
    contenido += `<table class="table">`;
    contenido += `<tr>
        <td colspan="3">&nbsp;</td>
        <td class="text-end"><button class="btn bg-light btn-sm" onclick="vaciarCarrito();" title="Vaciar Carrito">Vaciar Carrito X</button></td>
      </tr>`;

    juegos.forEach((juego) => {
      contenido += `<tr>
          <td><img src="${juego.imagen}" alt="${juego.nombre}" width="48"></td>
          <td class="align-middle">${juego.nombre}</td>
          <td class="align-middle"><b>$${juego.precio}</b></td>
          <td class="align-middle text-end"><img src="img/trash3.svg" alt="Eliminar Juego" title="Eliminar Juego" width="24" onclick="eliminarJuego(${juego.id});"></td>
        </tr>`;
    });

    contenido += `<tr>
          <td colspan="2"></td>
          <td><b>Precio Total:</b></td>
          <td><b>$${sumaTotalJuegos()}</b></td>
        </tr>`;
    contenido += `</table>`;
  } else {
    contenido += `<div class="alert alert-danger text-center" role="alert">No se encontraron juegos en el carrito!</div>`;
  }

  document.getElementById("contenido").innerHTML = contenido;
}

renderJuegos();
renderBotonCarrito();
