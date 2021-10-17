/**
 * 호출 스택(call stack)
 *
 * - call stack
 *    - 실행 콘텍스트의 논리적 구조
 * - First In Last Out 순서
 *    - 함수가 호출되면 스택의 가장 위에
 *      실행 콘텍스트가 위치하게 됩니다.
 *    - 다시 함수 안에서 함수를 호출하면
 *      호출된 함수의 실행 콘텍스트가
 *      스택의 가장 위에 놓이게 됩니다.
 *    - 함수가 종료되면
 *      스택에서 빠져 나옴(FILO 순서)
 * - 가장 아래는 글로벌 오브젝트의 함수가 위치
 * - call stack 형태
 */
console.log("[코드1] call stack");
function one() {
  two();
  console.log(1);
};
function two() {
  three();
  console.log(2);
};
function three() {
  console.log(3);
};
one();  // 3 2 1