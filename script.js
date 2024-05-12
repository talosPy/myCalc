let memory = 0;
let operator = '';
let previousNum = '';

function equal() {
    if (operator === '+') {
        result.value = +previousNum + +result.value;
    } else if (operator === '-') {
        result.value = +previousNum - +result.value;
    } else if (operator === '*') {
        result.value = +previousNum * +result.value;
    } else if (operator === '/') {
        result.value = +previousNum / +result.value;
    }
    memory = 0;
    operator = '';
    previousNum = '';
}

function displayNum(Num) {
    if (result.value == '0') {
        result.value = '';
    }
    result.value += Num;
}

function clearResult() {
    result.value = '0';
    memory = 0;
    operator = '';
    previousNum = '';
}

function setOperator(op) {
    if (memory !== 0 && operator !== '') {
        equal();
    }
    previousNum = result.value;
    memory = result.value;
    operator = op;
    result.value = '0';
    document.getElementById('previousNum').value = previousNum;
}

function MemoryRecall() {
    result.value = memory;
}

function MemoryAdd() {
    memory = +memory + +result.value;
    result.value = '0';
}