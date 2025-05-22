function calcularSuma() {
    const resultado = document.getElementById('resultado');
    let suma = 0;

    for (let i = 5; i <= 50; i++) {
        suma += i;
    }

    resultado.innerHTML = `La suma de los números del 5 al 50 es: ${suma}`;
}