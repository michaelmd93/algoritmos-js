/*
Problema:
Verificar se um número é par ou ímpar

Entrada:
Um número inteiro

Processamento:
Se o número dividido por 2 tiver resto 0 → par
Caso contrário → ímpar

Saída:
"Par" ou "Ímpar"
*/

function parOuImpar(numero) {
  if (numero % 2 === 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}

// Teste
console.log(parOuImpar(7));
