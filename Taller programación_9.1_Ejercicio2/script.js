function mostrarPares() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ""; // Limpiar resultado anterior

    let impares = [];
    for (let i = 100; i >= 1; i--) {
        if (i % 2 !== 0) {
            impares.push(i);
        }
    }

    resultado.innerHTML = impares.join(", ");
}
