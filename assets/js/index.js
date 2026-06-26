let titulo = document.getElementsByTagName('title')[0];

let h1Title = document.getElementById('titulo').innerText;

titulo.innerText = h1Title;

const cuerpo = document.body;
const footer = document.querySelector('#footer');
let parrafoFooter = "Viandas listas | 2026 | viandaslistas@yahoo.com.ar";
let parrafo = document.createElement('p');
parrafo.innerText = parrafoFooter;
footer.appendChild(parrafo);

const header = document.querySelector('#header');
const navegacion = document.createElement('div');
const loguito = document.createElement('div');
const nav = document.createElement('nav');
const ul = document.createElement('ul');

header.appendChild(navegacion);
navegacion.appendChild(loguito);
loguito.className = 'loguito';
navegacion.appendChild(nav);
nav.appendChild(ul);
navegacion.className = 'navbar';

const logoImg = document.createElement('img');
logoImg.src = './assets/img/logo2.png';
logoImg.atl = "Viandas"
logoImg.width = 300;
loguito.appendChild(logoImg);


const links = ["Index", "Vegetarianas", "Postres", "Contacto", "Carrito"];

const liLink = document.createElement('li');


ul.appendChild(liLink);

for (const link of links) {
    const li = document.createElement('li');
    li.innerHTML = `<a href=${link.toLocaleLowerCase()}.html>
        ${link}
    </a>`
    ul.appendChild(li)

};

const enlace = document.createElement("a");
enlace.href = "carrito.html";
enlace.className = "btn btn-warning position-fixed bottom-0 end-0 m-3 mb-5";
enlace.style.zIndex = 1050;
enlace.textContent = " Ir al carrito";
document.body.appendChild(enlace);


