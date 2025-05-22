function mostrarPares() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ""; // Limpiar resultado anterior

    let pares = [];
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            pares.push(i);
        }
    }

    resultado.innerHTML = pares.join(", ");
}