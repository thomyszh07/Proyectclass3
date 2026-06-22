// Arreglo que almacena los símbolos Unicode de las 6 caras del dado
const caras = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

// Arreglo que guarda la cantidad de veces que aparece cada número
const frecuencias = [0, 0, 0, 0, 0, 0];

// Función principal que se ejecuta al hacer clic en el botón "Lanzar Dado"
function lanzarDado() {

    // Genera un número pseudoaleatorio entre 1 y 6
    // Math.random() genera un número decimal entre 0 y 1
    // Multiplicamos por 6 para obtener valores entre 0 y 5.999...
    // Math.floor() elimina los decimales
    // Sumamos 1 para obtener números entre 1 y 6
    let resultado = Math.floor(Math.random() * 6) + 1;

    // Muestra el resultado numérico en el elemento con id="resultado"
    document.getElementById("resultado").textContent = resultado;

    // Muestra la cara gráfica correspondiente al número obtenido
    // Se resta 1 porque los arreglos comienzan en la posición 0
    document.getElementById("dado").textContent = caras[resultado - 1];

    // Incrementa la frecuencia del número obtenido
    frecuencias[resultado - 1]++;

    // Actualiza la lista de frecuencias en pantalla
    actualizarFrecuencias();
}

// Función encargada de actualizar las estadísticas
function actualizarFrecuencias() {

    // Obtiene la lista HTML donde se mostrarán las frecuencias
    const lista = document.getElementById("frecuencias");

    // Limpia el contenido anterior para evitar duplicados
    lista.innerHTML = "";

    // Recorre el arreglo de frecuencias
    for (let i = 0; i < frecuencias.length; i++) {

        // Agrega un elemento <li> con el número y su frecuencia
        lista.innerHTML += `<li>${i + 1}: ${frecuencias[i]}</li>`;
    }
}