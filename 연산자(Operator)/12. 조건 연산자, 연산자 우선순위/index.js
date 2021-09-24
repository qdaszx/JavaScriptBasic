/**
 * 조건 연산자
 * - 기호: exp ? exp-1 : exp-2
 *    - 3항 연산자라고도 함
 * - exp 위치의 표현식을 먼저 평가
 *    - true이면 exp-1의 결과 반환
 *    - false이면 exp-2의 결과 반환 [코드1]
 */

console.log("[코드1] 조건 연산자")
console.log(1 === 1 ? "같음" : "다름"); // 같음
console.log(1 === "1" ? "같음" : "다름"); // 다름

/**
 * 연산자 우선순위
 * - 연산자의 실행 우선순위
 *    - ECMA-262 스펙에 없음
 * - 우선순위가 가장 높은 것은 ()
 * - [MDN Operator precedence](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
 */