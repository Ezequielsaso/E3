const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const formulario = document.querySelector("form");
const card = document.querySelector(".card");
const error = document.getElementById("mensajeError");
const noexiste = document.getElementById("noexiste");




const guardarUltimaPizza = (id) => {
  localStorage.setItem("itemsGuardados", JSON.stringify(id))
};




formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  let id = document.getElementById("numero").value;
  if (id.length === 0) {
    error.innerHTML = "Tenés que poner un ID válido maestro";
    return;
  }
  
  let encontrado = false;

  let inputID = document.getElementById("button");

  if (!encontrado) {
    inputID.classList.add("mensajeError");
  } else {
    inputID.classList.remove("mensajeError");
  }

  pizzas.forEach((item) => {
    if (item.id == id) {
      card.innerHTML = `<h3>${item.nombre}</h3>
          <p> $ ${item.precio} <p>
          <p> ingredientes: ${item.ingredientes}<p>
          <img src = "${item.imagen}"></img>
          `;
          error.innerHTML = "";
          encontrado = true; 
        // Guardar el ID en el localStorage
        guardarUltimaPizza(item.id);
    } 
  });

  if (!encontrado) {
    error.innerHTML = "No se encontró ninguna pizza con ese ID.";
  } else {
    error.innerHTML = "";
  }

  console.log(id);
  
});

document.addEventListener('DOMContentLoaded', () => {
  const itemsGuardados = localStorage.getItem('itemsGuardados');
  if (itemsGuardados) {
    const ultimaPizza = pizzas.find((item) => item.id == itemsGuardados);
    if (ultimaPizza) {
      card.innerHTML = `<h3>${ultimaPizza.nombre}</h3>
        <p> $ ${ultimaPizza.precio} <p>
        <p> ingredientes: ${ultimaPizza.ingredientes}<p>
        <img src="${ultimaPizza.imagen}"></img>
      `;
    }
  }
});







