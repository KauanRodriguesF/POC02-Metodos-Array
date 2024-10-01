
# 🌐 Prova de Conceito - Métodos de Arrays em JavaScript 🌐

> Este projeto explora os principais métodos de arrays em JavaScript, como **sort**, **filter**, **map**, **reduce**, e o operador **spread**, demonstrando suas aplicações práticas na manipulação de dados.

---

## 📋 Descrição do Projeto

Esta Prova de Conceito (POC) tem o objetivo de demonstrar como manipular arrays em JavaScript usando métodos nativos de maneira eficiente e prática. Cada método é aplicado em um array numérico e o resultado é exibido na interface da página.

A página exibe exemplos interativos que mostram como os métodos funcionam, desde ordenar até transformar e reduzir arrays, além do uso do operador **spread** para expandir arrays.

## 🚀 Funcionalidades

- **Sort**: Ordena os elementos do array em ordem crescente.
- **Filter**: Filtra os elementos que atendem a uma condição.
- **Map**: Cria um novo array transformando cada elemento.
- **Reduce**: Reduz o array a um único valor, aplicando uma função acumuladora.
- **Operador Spread**: Expande um array, permitindo adicionar novos elementos.

## 🎨 Layout

A estrutura da página é simples e intuitiva, apresentando seções que exibem o array original e o resultado de cada método aplicado. Cada exemplo de método de array é descrito em uma seção separada.

### Estrutura:
- **Array Original**: Exibe o array base que será utilizado nos exemplos.
- **Sort**: Demonstra a ordenação do array.
- **Filter**: Exibe os números maiores que 10.
- **Map**: Multiplica cada número do array por 2.
- **Reduce**: Soma todos os números do array.
- **Operador Spread**: Mostra o array expandido com novos elementos.

- Exemplo
  <img width="998" alt="ArrayOriginal" src="https://github.com/user-attachments/assets/b7b3d5db-5dff-4921-831a-3e9bc9e02c82">

---

## 🛠️ Tecnologias Utilizadas

- **HTML**: Estrutura básica da página.
- **CSS**: Estilização para melhorar a visualização das informações.
- **JavaScript**: Aplicação dos métodos de arrays.

---

## 🖥️ Exemplos de Métodos de Arrays

### Exemplo do Método `Sort`:
```javascript
const numeros = [5, 12, 8, 130, 44];
const arrayOrdenado = [...numeros].sort((a, b) => a - b);
console.log(`Array ordenado: [${arrayOrdenado}]`);
// Saída: Array ordenado: [5, 8, 12, 44, 130]
```
O método `sort()` ordena os elementos do array em ordem crescente.

### Exemplo do Método `Filter`:
```javascript
const arrayFiltrado = numeros.filter(numero => numero > 10);
console.log(`Array filtrado (números > 10): [${arrayFiltrado}]`);
// Saída: Array filtrado (números > 10): [12, 130, 44]
```
O método `filter()` cria um novo array com os números maiores que 10.

### Exemplo do Método `Map`:
```javascript
const arrayMapeado = numeros.map(numero => numero * 2);
console.log(`Array mapeado (números * 2): [${arrayMapeado}]`);
// Saída: Array mapeado (números * 2): [10, 24, 16, 260, 88]
```
O método `map()` cria um novo array multiplicando cada número por 2.

### Exemplo do Método `Reduce`:
```javascript
const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log(`Soma dos números: ${soma}`);
// Saída: Soma dos números: 199
```
O método `reduce()` soma todos os números do array, retornando um único valor.

### Exemplo do Operador `Spread`:
```javascript
const arrayExpandido = [...numeros, 200, 300];
console.log(`Array expandido: [${arrayExpandido}]`);
// Saída: Array expandido: [5, 12, 8, 130, 44, 200, 300]
```
O operador **spread** permite expandir o array original adicionando novos elementos.

---

## 💻 Como Executar

Abra o arquivo `index.html` em seu navegador para visualizar os exemplos.

