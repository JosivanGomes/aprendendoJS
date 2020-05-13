/*function cal(x, y, op){
    return eval(`${x} ${op} ${y}`) //Eval vai tentar transformar um texto em uma operação matemática
}*/


const cal = (x, y, op) => {
    return eval(`${x} ${op} ${y}`) //Eval vai tentar transformar um texto em uma operação matemática
}

console.log(cal(2, 9, '-'))