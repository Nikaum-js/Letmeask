var tableCalc = "";
const inputValue = document.getElementById("inputValue");
const inputResult = document.getElementById("inputResult");

function calcad(value) {
  tableCalc += value;
  inputValue.value = tableCalc;
}

function removeInput() {
  tableCalc = tableCalc.substring(0, tableCalc.length - 2);
  inputValue.value = tableCalc;
}

function execm() {
  if (tableCalc.length == 0 || tableCalc == "") {
    alert("Precisa de uma operação")
    return;

  } try {
    result = eval(tableCalc);
    inputResult.value = result;
  } catch (err) {
    alert("Operador inválido")
  }
}

function reset() {
  inputValue.value = "";
  inputResult.value = "";
  tableCalc = "";
}