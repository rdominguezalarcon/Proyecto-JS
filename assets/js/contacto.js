const formulario = document.getElementById('divform');
const enviar = document.getElementById('botonE');

formulario.style.marginLeft = "50px";

enviar.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.classList.contains('btn-warning')) {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Su consulta se envio correctamente",
            showConfirmButton: false,
            timer: 2000
        });
    }
});