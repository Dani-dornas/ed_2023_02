// Solicita ao usuário para digitar dois números
const num1String = prompt("Digite o primeiro número:");
const num2String = prompt("Digite o segundo número:");

// Converte os números de string para número
const num1 = parseFloat(num1String);
const num2 = parseFloat(num2String);

// Verifica qual é o maior número
if (!isNaN(num1) && !isNaN(num2)) {
  if (num1 > num2) {
    console.log("O maior número é:", num1);
  } else if (num2 > num1) {
    console.log("O maior número é:", num2);
  } else {
    console.log("Os números são iguais.");
  }
} else {
  console.log("Pelo menos um dos valores não é um número válido.");
}
