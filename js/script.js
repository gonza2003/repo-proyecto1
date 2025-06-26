// 1. Definir el array de objetos para tus camisetas
// Cada objeto representa una camiseta y sus propiedades.
// Es crucial que la 'imagen' y el 'linkDetalle' apunten a las rutas correctas
// y que el 'id' sea único para cada camiseta.
const camisetasBoca = [
    {
        id: "boca1960",
        nombre: "Camiseta Boca Juniors 1960",
        precio: 45000,
        imagen: "../img/boca1960.png",
        linkDetalle: "./boca1960.html"
    },
    {
        id: "boca1977", // Usamos el nombre del archivo HTML de detalle como ID
        nombre: "Camiseta Boca Juniors 1977",
        precio: 60000,
        imagen: "../img/boca1977.jpg",
        linkDetalle: "./boca1977.html" // Ruta a la página de detalle específica
    },
    {
        id: "boca1978",
        nombre: "Camiseta Boca Juniors 1978",
        precio: 65000,
        imagen: "../img/boca1978.jpg",
        linkDetalle: "./boca1978.html"
    },
    {
        id: "boca1981",
        nombre: "Camiseta Boca Juniors 1981",
        precio: 80000,
        imagen: "../img/boca1981.jpg",
        linkDetalle: "./boca1981.html"
    },
    {
        id: "boca1990",
        nombre: "Camiseta Boca Juniors 1990",
        precio: 50000,
        imagen: "../img/boca1990.jpg",
        linkDetalle: "./boca1990.html"
    },
    {
        id: "boca2000",
        nombre: "Camiseta Boca Juniors 2000",
        precio: 90000,
        imagen: "../img/boca2000.jpg",
        linkDetalle: "./boca2000.html"
    }
    // ¡Añade aquí más camisetas siguiendo este formato!
    // {
    //     id: "otraCamiseta",
    //     nombre: "Otra Camiseta Genial",
    //     precio: 70000,
    //     imagen: "../img/otra_camiseta.jpg",
    //     linkDetalle: "./otraCamiseta.html"
    // }
];

// 2. Obtener la referencia al contenedor donde se mostrarán los productos
// Tu HTML tiene un div con el ID "productos-container"
const productosContainer = document.getElementById("productos-container");

// 3. Función para mostrar las camisetas en el HTML
function mostrarCamisetas(camisetasAMostrar) {
    // Limpiar el contenedor antes de añadir nuevos elementos
    // Esto es útil si vas a implementar filtros o búsquedas más adelante.
    productosContainer.innerHTML = '';

    // Crear un elemento <ul> para contener todos los <li> dinámicos
    const ulElement = document.createElement("ul");
    ulElement.classList.add("product-list"); // Añade la clase que ya tienes en tu CSS

    camisetasAMostrar.forEach(camiseta => {
        // Crear un elemento <li> para cada camiseta
        const liElement = document.createElement("li");
        liElement.classList.add("product-card"); // Añade la clase que ya tienes en tu CSS

        // Llenar el contenido del <li> usando los datos del objeto camiseta
        liElement.innerHTML = `
            <a href="${camiseta.linkDetalle}" class="product-link" title="${camiseta.nombre}">
                <img src="${camiseta.imagen}" alt="${camiseta.nombre}" title="${camiseta.nombre}">
                <h3>${camiseta.nombre}</h3>
                <p class="price">$${camiseta.precio.toLocaleString()}</p> <span class="button">Ver Detalles</span>
            </a>
        `;
        // toLocaleString() sirve para añadir separadores de miles (ej. 60.000)

        // Añadir el <li> al <ul>
        ulElement.appendChild(liElement);
    });

    // Añadir el <ul> completo al contenedor principal
    productosContainer.appendChild(ulElement);
}

// 4. Llamar a la función para que se ejecute cuando la página cargue
// Esto mostrará todas las camisetas inicialmente
mostrarCamisetas(camisetasBoca);

// --- Ideas para futuras funcionalidades (opcional) ---

// Ejemplo de cómo podrías añadir un filtro por precio (requeriría HTML adicional, como un botón o input)
/*
function filtrarPorPrecioMaximo(precioMax) {
    const camisetasFiltradas = camisetasBoca.filter(camiseta => camiseta.precio <= precioMax);
    mostrarCamisetas(camisetasFiltradas);
}

// Ejemplo de cómo podrías ordenar las camisetas (requeriría HTML adicional, como un botón)
function ordenarCamisetasPorPrecioAscendente() {
    // Creamos una copia del array antes de ordenar para no modificar el original
    const camisetasOrdenadas = [...camisetasBoca].sort((a, b) => a.precio - b.precio);
    mostrarCamisetas(camisetasOrdenadas);
}
*/