const res = document.getElementById("res");
let operand1 = '';
let operator = '';
let operand2 = '';
function attach(nu) {
    if(operator) {
        operand2 += nu;
    } else {
        operand1 += nu;
    }
    render();
}
function clearAll() {
    operand1 = operator = operand2 = '';
    render();
}
function onEqual() {     
    operand1 = parseInt(operand1, 2);
    operand2 = parseInt(operand2, 2);
    switch(operator) {
        case '+':
            operand1 += operand2;
            break;
        case '-':
            operand1 -= operand2;
            break;
        case '*':
            operand1 *= operand2;
            break;
        case '/':
            if(operand2)
                operand1 /= operand2;
            break;
        default:
        break;
    }
    operand1 = parseInt(operand1).toString(2);
    operator = operand2 = '';
    render();
}
function atOperator(opr) {
    operator = opr;
    render();
}
function render() {
    res.innerHTML = operand1 + operator + operand2;
}
