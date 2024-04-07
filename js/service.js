const cargarDatos = () => {
  fetch("./json/data.json")
    .then((response) => response.json())
    .then((data) => mostrarProductos(data))
    .catch((error) => console.error("Error al cargar los datos:", error));
};

const mostrarProductos = (productos) => {
  const container = document.getElementById("cards");

  productos.forEach((data) => {
    const productoHTML = `
        <div class="link__contenedor">
            <a target="_blank" href="${data.url}" class="link__a">
                <img class="link__img" src="${data.imagen}" alt="Links"> 
                <p class="link__p">${data.red_social}</p> 
            </a>
        </div>
        `;
    container.innerHTML += productoHTML;
  });
};

window.addEventListener("load", cargarDatos);
