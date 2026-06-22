const caras = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

const frecuencias = [0, 0, 0, 0, 0, 0];

function lanzarDado() { /*se ejecuta cuando le das click al boton lanzar dado del html*/

    // Genera un número pseudoaleatorio entre 1 y 6
    let resultado = Math.floor(Math.random() * 6) + 1; /*Math.floor es una función de JavaScript que redondea un número hacia abajo al entero más cercano. */
                                                       /*es una función de JavaScript que genera un número decimal pseudoaleatorio entre 0 (incluido) y 1*/
    // Mostrar resultado numérico
    document.getElementById("resultado").textContent = resultado; /*Muestra el número en el html*/

    // Mostrar la cara del dado
    document.getElementById("dado").textContent = caras[resultado - 1];

    // Actualizar frecuencia
    frecuencias[resultado - 1]++;

    actualizarFrecuencias();
}

function actualizarFrecuencias() {

    const lista = document.getElementById("frecuencias");
    lista.innerHTML = "";

    for (let i = 0; i < frecuencias.length; i++) {
        lista.innerHTML += `<li>${i + 1}: ${frecuencias[i]}</li>`;
    }
}