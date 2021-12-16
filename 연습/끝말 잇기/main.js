const number = Number(prompt("몇 명이 참가하나요?"));
const total = document.querySelector("#total");
const order = document.querySelector("#order");
const input = document.querySelector("input")
const button = document.querySelector("button")
let word = document.querySelector("#word");
let newWord;

!number ? location.reload() :

  total.innerHTML = number;

input.addEventListener("input", function (e) {
  newWord = e.target.value;
})

const emptyInputValue = () => {
  input.value = ""
  input.focus();
}

const fail = () => {
  alert(`${Number(order.innerHTML)}번째 참가자가 틀렸습니다.`);
  emptyInputValue()
}

const nextStep = () => {
  word.innerHTML = newWord;
  emptyInputValue()

  Number(order.innerHTML) + 1 > number ? order.innerHTML = 1 : order.innerHTML = Number(order.innerHTML) + 1
}

button.addEventListener("click", function () {
  if (!input.value || !input.value.trim()) {
    alert("제시어를 입력해주세요")
    return input.focus();
  }

  if (!word.innerHTML) {
    return nextStep()
  }

  input.value[0] === word.innerHTML[word.innerHTML.length - 1] ? nextStep() : fail()
});
