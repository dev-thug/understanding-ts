function add(n1: number, n2: number, showResult: boolean, pharse: string) {
  if (showResult) {
    const result = n1 + n2;
    console.log(pharse + result);
  } else {
    return n1 + n2;
  }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase);
