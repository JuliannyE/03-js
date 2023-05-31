let cantidad = parseInt(localStorage.getItem("cantidad")) || 0

// ubicamos al span de cantidad
const spanCantidad = document.getElementById("span_cantidad")
spanCantidad.innerText = cantidad

// ubicamos al boton
const button = document.getElementById('boton_agregar')

// cuando el usuario haga click, pasa algo
button.addEventListener("click", function () {
    cantidad = cantidad + 1;
    // actualizamos el valor de cantidad
    spanCantidad.innerText = cantidad

    // guardamos el valor de cantidad en el localstorage
    localStorage.setItem("cantidad", `${cantidad}`)
})