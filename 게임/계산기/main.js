let result = document.querySelector("#result");
let operator = document.querySelector("#operator");
let leftNumber = "";
let rightNumber = "";
let tempOperator = "";

const onClickNumber = (e) => {
  if (!tempOperator) {
    leftNumber += e.target.innerHTML
    result.value += e.target.innerHTML
    return;
  }
  if (!rightNumber) {
    result.value = "";
  }
  rightNumber += e.target.innerHTML;
  result.value += e.target.innerHTML;
}

const onClickOperator = (e) => {
  if (leftNumber) {
    tempOperator = e.target.innerHTML;
    operator.value = e.target.innerHTML;
  }
}

const onClickCalculator = () => {
  if (!rightNumber) {
    tempOperator = "";
    operator.value = "";
    return;
  }
  switch (tempOperator) {
    case "+":
      result.value = Number(leftNumber) + Number(rightNumber)
      break;
    case "-":
      result.value = Number(leftNumber) - Number(rightNumber)
      break;
    case "*":
      result.value = Number(leftNumber) * Number(rightNumber)
      break;
    case "/":
      result.value = Number(leftNumber) / Number(rightNumber)
      break;
    default:
      break;
  }
  leftNumber = result.value;
  rightNumber = "";
  tempOperator = "";
  operator.value = "";
};

const onClickClear = () => {
  result.value = "";
  operator.value = "";
  tempOperator = "";
  leftNumber = "";
  rightNumber = "";
}

document.querySelector("#plus").addEventListener("click", onClickOperator)
document.querySelector("#minus").addEventListener("click", onClickOperator)
document.querySelector("#multiply").addEventListener("click", onClickOperator)
document.querySelector("#divide").addEventListener("click", onClickOperator)

document.querySelector("#num-0").addEventListener("click", onClickNumber)
document.querySelector("#num-1").addEventListener("click", onClickNumber)
document.querySelector("#num-2").addEventListener("click", onClickNumber)
document.querySelector("#num-3").addEventListener("click", onClickNumber)
document.querySelector("#num-4").addEventListener("click", onClickNumber)
document.querySelector("#num-5").addEventListener("click", onClickNumber)
document.querySelector("#num-6").addEventListener("click", onClickNumber)
document.querySelector("#num-7").addEventListener("click", onClickNumber)
document.querySelector("#num-8").addEventListener("click", onClickNumber)
document.querySelector("#num-9").addEventListener("click", onClickNumber)

document.querySelector("#calculate").addEventListener("click", onClickCalculator)

document.querySelector("#clear").addEventListener("click", onClickClear)