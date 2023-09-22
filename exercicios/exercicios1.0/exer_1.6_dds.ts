import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function compareWords(word1: string, word2: string): string {
  if (word1.length < word2.length) {
    return `${word1} aparece antes de ${word2} no dicionário.`;
  } else if (word1.length > word2.length) {
    return `${word2} aparece antes de ${word1} no dicionário.`;
  } else {
    for (let i = 0; i < word1.length; i++) {
      if (word1[i] < word2[i]) {
        return `${word1} aparece antes de ${word2} no dicionário.`;
      } else if (word1[i] > word2[i]) {
        return `${word2} aparece antes de ${word1} no dicionário.`;
      }
    }
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
    Se o comprimento de word1 for menor que o comprimento de word2:
        Retornar "word1 aparece antes de word2 no dicionário."
    Senão, se o comprimento de word1 for maior que o comprimento de word2:
        Retornar "word2 aparece antes de word1 no dicionário."
    Senão:
        Para cada índice i de 0 até o comprimento de word1 (ou word2, já que eles têm o mesmo comprimento):
            Se o caractere em word1 no índice i for menor que o caractere em word2 no índice i:
                Retornar "word1 aparece antes de word2 no dicionário."
            Senão, se o caractere em word1 no índice i for maior que o caractere em word2 no índice i:
                Retornar "word2 aparece antes de word1 no dicionário."

    Retornar "As palavras são idênticas no dicionário."

Solicitar ao usuário que digite a primeira palavra e armazenar em word1
Solicitar ao usuário que digite a segunda palavra e armazenar em word2
Chamar a função compareWords com word1 e word2 como argumentos
Exibir o resultado na tela

*/