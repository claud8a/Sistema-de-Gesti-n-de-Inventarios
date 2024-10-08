// Función para generar la tabla de multiplicar
function generarTabla() {
    let num = document.getElementById("numero").value; // Obtenemos el número del input
    let tablaResultado = document.getElementById("tablaResultado"); // Elemento donde se mostrará la tabla
    
    // Validar que se haya ingresado un número
    if (!num || isNaN(num)) {
        tablaResultado.innerHTML = "<p class='text-danger'>Por favor, ingrese un número válido.</p>";
        return;
    }
    
    // Convertir el número a entero
    num = parseInt(num);

    // Limpiar el contenido previo
    tablaResultado.innerHTML = "";

    // Crear la tabla en formato HTML
    let resultado = "<table class='table table-bordered mt-3'><thead><tr><th>Multiplicación</th><th>Resultado</th></tr></thead><tbody>";

    for (let i = 1; i <= 10; i++) {
        resultado += `<tr><td>${num} x ${i}</td><td>${num * i}</td></tr>`;
    }

    resultado += "</tbody></table>";

    // Mostrar la tabla generada en el div
    tablaResultado.innerHTML = resultado;
}
