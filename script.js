var zero = document.getElementById('0');
var one = document.getElementById('1');
var two = document.getElementById('2');
var three = document.getElementById('3');
var four = document.getElementById('4');
var five = document.getElementById('5');
var six = document.getElementById('6');
var seven = document.getElementById('7');
var eight = document.getElementById('8');
var nine = document.getElementById('9');
var add = document.getElementById('add');
var sub = document.getElementById('min');
var mul = document.getElementById('mul');
var div = document.getElementById('div');
var mod = document.getElementById('mod');
var posneg = document.getElementById('pm');
var clear = document.getElementById('clear');
var precision = document.getElementById('precision');
var equal = document.getElementById('equal');
var result = document.getElementById('result');
var input = document.getElementById('input');

function getHistory(){
    return document.getElementById('result').innerHTML;
}

function printHistory(num){
    document.getElementById('result').innerHTML = num;
}

function getOutput(){
    return document.getElementById('input').innerHTML;
}

function printOutput(num){
    document.getElementById('input').innerHTML = formattedNumber(num);
}

function formattedNumber(num){
    var n = Number(n);
    var value = n.toLocaleString('en');
    return value;
}

alert(value);