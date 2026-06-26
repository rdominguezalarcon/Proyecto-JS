function renderCarrito() {
    const contenedorCarrito = document.getElementById("carrito");
    contenedorCarrito.innerHTML = "";

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.forEach((producto, index) => {
        const item = document.createElement("div");
        item.innerHTML = `
            <p>${producto.nombre} - $${producto.precio}</p>
            <img src="${producto.imagen}" alt="${producto.nombre}" width="100" height="80"/>
            <a href="#" class="btn btn-danger eliminar-item" data-index="${index}">Eliminar</a><br><br>
        `;
        contenedorCarrito.appendChild(item);
    });

    const total = carrito.reduce((suma, producto) => suma + Number(producto.precio), 0);
    const totalDiv = document.createElement("div");

    if (total > 0) {
        const btnComprar = document.createElement("div");
        btnComprar.innerHTML = `<a href="#" class="btn btn-primary terminarCompra-item">Confirmar compra</a>`;
        contenedorCarrito.appendChild(btnComprar);

        totalDiv.innerHTML = `<h3>Total a pagar: $${total}</h3>`;
    } else {
        totalDiv.innerHTML = `<h3>En estos momentos no hay productos agregados al carrito</h3>`;
    }

    contenedorCarrito.appendChild(totalDiv);
}

renderCarrito();

document.getElementById("carrito").addEventListener("click", (e) => {
    if (e.target.classList.contains("eliminar-item")) {
        e.preventDefault();
        const index = parseInt(e.target.getAttribute("data-index"), 10);

        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        carrito.splice(index, 1);
        localStorage.setItem("carrito", JSON.stringify(carrito));

        renderCarrito();
    }
});

document.getElementById("carrito").addEventListener("click", (event) => {
    if (event.target.classList.contains("terminarCompra-item")) {
        window.location.href = "finalizarCompra.html";
    }
});


