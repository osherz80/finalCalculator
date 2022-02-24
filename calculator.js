
let drill = document.getElementById('drill');
let historiBar = document.getElementById('historiBar');
let operand = document.getElementById('oper');
let num1, num2, res = true, lastOp;

const addDisplay = () => {
    let target = event.target.innerHTML;
    if(res == true){
        drill.innerHTML = 0;
        res = false;
    }
    if (drill.innerHTML == 0 && target !== ".") drill.innerHTML = target; 
    else if(drill.innerHTML.includes(".") && target == ".")return;
    else drill.innerHTML += target;

    ////// history bar display \\\\\\

    
};

const op = () => {
    let target = event.target.innerHTML;
    operand.innerHTML = target

    if(num1 == undefined){
        num1 = Number(drill.innerHTML);
        drill.innerHTML = 0;
        lastOp = target;
    }
    else{
        num2 = Number(drill.innerHTML);
        if(lastOp != "="){
        num1 = calcSum(num1,num2,lastOp);
        drill.innerHTML = num1;
        res = true;
        }
        lastOp = target;
    }
};

const callCalc = () => {
    lastOp = event.target.innerHTML;
    num1 = calcSum(num1,Number(drill.innerHTML),operand.innerHTML);
    drill.innerHTML = num1;
    operand.innerHTML = null;
    res = true;
};

const C = () => {
   drill.innerHTML = deleteStrEnd(drill.innerHTML);
   if(drill.innerHTML.length == 0)drill.innerHTML = 0;
};

const deleteNum = () =>{
    drill.innerHTML = 0;
};

const reset = () => {
    num1 = num2 = lastOp = undefined;
    res = true;
    drill.innerHTML = 0;
    operand .innerHTML = null;
};

const deleteStrEnd = (str) =>{
   return  str.substring(0,str.length-1);
};


const calcSum = (a,b,op) => {
    let sum;
    switch(op){
        case "+":
            sum = a+b;
            break;
        case "-":
            sum = a-b;
            break;
        case "*":
            sum = a*b;
            break;
        case "/":
            sum = a/b;
            break;
    }
    return sum;
};