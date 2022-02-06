function add(n1, n2, showResult, pharse) {
    if (showResult) {
        var result = n1 + n2;
        console.log(pharse + result);
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = "Result is: ";
add(number1, number2, printResult, resultPhrase);
