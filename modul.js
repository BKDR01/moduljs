export function add(a, b, resultElement) {
    let res = parseFloat(a) + parseFloat(b);
    if (resultElement) resultElement.innerHTML = res;
    return res;        
}

export function subtract(a, b, resultElement) {
    let res = parseFloat(a) - parseFloat(b);
    if (resultElement) resultElement.innerHTML = res;
    return res;
}

export function multiply(a, b, resultElement) {
    let res = parseFloat(a) * parseFloat(b);
    if (resultElement) resultElement.innerHTML = res;
    return res;
}

export function divide(a, b, resultElement) {
    if (parseFloat(b) === 0) {
        resultElement.innerHTML = "Error: Division by zero";
        return "Error: Division by zero";
    }
    let res = parseFloat(a) / parseFloat(b);
    if (resultElement) resultElement.innerHTML = res;
    return res;
}