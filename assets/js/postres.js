const cards = document.getElementById('cards');

const mostrarPostres = () => {
    fetch('./comidas.json')
        .then((respuesta) => respuesta.json())
        .then((datos) => {
            const data = datos;
            data.forEach((item, index) => {
                if (item.esPostre === true) {
                    const card = document.createElement('div');
                    card.innerHTML = `
                    <div class="card" style="width: 18rem; height: 32rem;">
                    <img class="card-img-top" src="${item.imagen}" alt="${item.nombre}"/>
                        <div class="card-body">
                            <h5 class="card-title">${item.nombre}</h5>
                            <p class="card-text">Informacion nutricional: ${item.detalles}</p>
                            <p class="card-text">Precio: $${item.precio}.-</p>
                            <a href="#" class="btn btn-warning comprar-item"
                                data-id-producto="${item.id}"
                            >Añadir al carrito</a>
                        </div>
                    </div>
                    `;

                    cards.appendChild(card);
                }
            });
            cards.addEventListener('click', (e) => {
                if (e.target.classList.contains('comprar-item')) {
                    e.preventDefault();

                    const idProducto = e.target.getAttribute('data-id-producto');
                    const producto = datos.find(p => p.id == idProducto);

                    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

                    carrito.push(producto);

                    localStorage.setItem('carrito', JSON.stringify(carrito));

                    console.log("Producto añadido:", producto);
                }
            });
        })
        .catch((error) =>
            console.error("Ups, Algo salio mal...", error))
        .finally(() => console.log("Peticion finalizada"))

}

mostrarPostres();

cards.addEventListener('click', (event) => {
    if (event.target.classList.contains('comprar-item')) {

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Se agrego al carrito correctamente ",
            showConfirmButton: false,
            timer: 1500
        });
    }
})
