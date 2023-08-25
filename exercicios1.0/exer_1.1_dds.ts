// a) Variável com anotação explícita de tipo numérico.
let numVariable: number = 42;
console.log("Valor:", numVariable);
console.log("Tipo:", typeof(numVariable));

// b) Variável com anotação explícita de tipo string.
let strVariable: string = "Hello, TypeScript";
console.log("Valor:", strVariable);
console.log("Tipo:", typeof(strVariable));

// c) Variável sem anotação explícita de tipo, mas que recebe um valor lógico.
let boolVariable = true;
console.log("Valor:", boolVariable);
console.log("Tipo:", typeof(boolVariable));

// d) Variável JSON com propriedades de tipo numérico e de tipo string.
let jsonVariable: { numProp: number; strProp: string } = {
  numProp: 123,
  strProp: "TypeScript JSON",
};
console.log("Valor:", jsonVariable);
console.log("Tipo:", typeof(jsonVariable));

// e) Array numérico com anotação explícita de tipo.
let numArray: number[] = [1, 2, 3, 4, 5];
console.log("Valor:", numArray);
console.log("Tipo:", typeof(numArray));
