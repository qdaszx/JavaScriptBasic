/**
 * let 변수와 var 변수 차이
 *
 * - for() 문에서 반복할 때마다
 *    - var 변수는 스코프를 갖지 않음
 *    - let 변수는 스코프를 가짐
 */

console.log("[코드1] var 변수와 스코프");
var node = document.querySelector(".sports");
for (var k = 0; k < node.children.length; k++) {
  node.children[k].onclick = function (event) {
    event.target.style.backgroundColor = "yellow";
    console.log(k); // 3 3 3
  };
};
console.log(k); // 3
/**
 * 1. 어떤 것을 클릭하더라도
 *    항상 for() 문이 끝났을 때의 값인 3을 출력합니다.
 * 2. var k = 0;에서 k 변수의 스코프를 함수입니다.
 */

console.log("[코드2] let 변수와 스코프");
var node2 = document.querySelector(".sports2");
for (let k = 0; k < node2.children.length; k++) {
  node2.children[k].onclick = function (event) {
    event.target.style.backgroundColor = "red";
    console.log(k); // 0 1 2
  };
};
/**
 * 1. var k = 0;을 let k = 0; 으로 바꾸었습니다.
 * 2. 이벤트를 설정할 때의 k 값을 출력합니다.
 */
