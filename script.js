function dis(val) {
    document.getElementById("result").value += val;
}
function solve() {
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y;
}
function clr() {
    document.getElementById("result").value = ""
}
function slice() {
    let display = document.getElementById("result");
    const currentValue = display.value;
    const newValue = currentValue.slice(0, -1);
    display.value = newValue;
};
