import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function compareLetters(letter1: string, letter2: string): string {
  letter1 = letter1.toUpperCase();
  letter2 = letter2.toUpperCase();

  if (letter1 === letter2) {
    return `${letter1} e ${letter2} são iguais no alfabeto.`;
  } else if (letter1 < letter2) {
    return `${letter1} vem antes de ${letter2} no alfabeto.`;
  } else {
    return `${letter2} vem antes de ${letter1} no alfabeto.`;
  }
}

rl.question('Digite a primeira letra: ', (letter1) => {
  rl.question('Digite a segunda letra: ', (letter2) => {
    const result = compareLetters(letter1, letter2);
    console.log(result);
    rl.close();
  });
});

/*
Função compareLetters(letter1, letter2):
    Converter letter1 e letter2 para maiúsculas

    Se letter1 for igual a letter2:
        Retornar "As letras são iguais no alfabeto."
    Senão, se letter1 for menor que letter2:
        Retornar "letter1 vem antes de letter2 no alfabeto."
    Senão:
        Retornar "letter2 vem antes de letter1 no alfabeto."

Solicitar ao usuário que digite a primeira letra e armazenar em letter1
Solicitar ao usuário que digite a segunda letra e armazenar em letter2
Chamar a função compareLetters com letter1 e letter2 como argumentos
Exibir o resultado na tela

*/