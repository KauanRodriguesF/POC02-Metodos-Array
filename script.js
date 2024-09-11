window.onload = function() {
    const numeros = [5, 12, 8, 130, 44];

    // Array Original
    document.getElementById('array-original').textContent = `Array original: [${numeros}]`;

    // Método sort 
    const arrayOrdenado = [...numeros].sort((a, b) => a - b);
    document.getElementById('resultado-sort').textContent = `Array ordenado: [${arrayOrdenado}]`;

    // Método filter 
    const arrayFiltrado = numeros.filter(numero => numero > 10);
    document.getElementById('resultado-filter').textContent = `Array filtrado (números > 10): [${arrayFiltrado}]`;

    // Método map 
    const arrayMapeado = numeros.map(numero => numero * 2);
    document.getElementById('resultado-map').textContent = `Array mapeado (números * 2): [${arrayMapeado}]`;

    // Método reduce 
    const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    document.getElementById('resultado-reduce').textContent = `Soma dos números: ${soma}`;

    // Operador spread
    const arrayExpandido = [...numeros, 200, 300];
    document.getElementById('resultado-spread').textContent = `Array expandido: [${arrayExpandido}]`;
};
