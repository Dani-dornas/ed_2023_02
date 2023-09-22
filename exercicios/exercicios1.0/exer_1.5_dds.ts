import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function compareWords(word1: string, word2: string): string {
  for (let i = 0; i < Math.min(word1.length, word2.length); i++) {
    const charCode1 = word1.charCodeAt(i);
    const charCode2 = word2.charCodeAt(i);

    if (charCode1 < charCode2) {
      return `${word1} aparece antes de ${word2} no dicionário.`;
    } else if (charCode1 > charCode2) {
      return `${word2} aparece antes de ${word1} no dicionário.`;
    }
  }

  if (word1.length < word2.length) {
    return `${word1} aparece antes de ${word2} no dicionário.`;
  } else if (word1.length > word2.length) {
    return `${word2} aparece antes de ${word1} no dicionário.`;
  } else {
    return `As palavras são idênticas no dicionário.`;
  }
}

rl.question('Digite a primeira palavra: ', (word1) => {
  rl.question('Digite a segunda palavra: ', (word2) => {
    const result = compareWords(word1, word2);
    console.log(result);
    rl.close();
  });
});

/*
Função compareWords(word1, word2):
    Para cada índice i de 0 até o mínimo entre o comprimento de word1 e word2:
        Obter o código de caractere charCode1 de word1 no índice i
        Obter o código de caractere charCode2 de word2 no índice i

        Se charCode1 for menor que charCode2:
            Retornar "word1 aparece antes de word2 no dicionário."
        Senão, se charCode1 for maior que charCode2:
            Retornar "word2 aparece antes de word1 no dicionário."

    Se o comprimento de word1 for menor que o comprimento de word2:
        Retornar "word1 aparece antes de word2 no dicionário."
    Senão, se o comprimento de word1 for maior que o comprimento de word2:
        Retornar "word2 aparece antes de word1 no dicionário."
    Senão:
        Retornar "As palavras são idênticas no dicionário."

*/