const confirmar = document.getElementById('confirmar');

const formulario = document.getElementById('formPago');

formulario.style.marginLeft = "50px";

confirmar.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.classList.contains('aceptarCompra')) {
        Swal.fire({
            title: "Desea finalizar con la compra?",
            showDenyButton: true,
            confirmButtonText: "Continuar",
            denyButtonText: `Cancelar`
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Compra finalizada!", "", "success");
                localStorage.removeItem("carrito");

            }
            else if (result.isDenied) {
                Swal.fire("Se cancelo la compra", "", "info");

            }
        });

    }


})
