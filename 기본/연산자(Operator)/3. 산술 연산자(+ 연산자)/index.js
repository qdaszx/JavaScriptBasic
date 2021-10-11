/**
 * + 연산자
 * - + 양쪽의 표현식을 평가
 *    - 평가 결과를 더함 [[코드1]]
 * - 평가 결과 연결
 *    - 한 쪽이라도 숫자가 아니면 연결 [코드2]
 * - 왼쪽에서 오른쪽으로 연산
 *    - [1] + 5 + "ABC" 결과는? [코드3]
 */

console.log("[코드1] 값 더하기")
let value = 1 + 2 + 4;
console.log(value); // 7

/**
 * 1. 우선 1과 2를 더하ㅏ고
 * 2. 이어서 더한 값(3)에 4를 더합니다.
 * 3. 그리고 더한 값(7)을 value 변수에 할당합니다
 */

console.log("[코드2] 값 연결")
let two = "2";
let value2 = 1 + two;
console.log(value2); // 12
console.log(typeof value2); // string

/**
 * 1. 한 쪽이라도 평가 결과가 Number 타입이 아니면 평가 결과를 더하지 않고 연결합니다.
 * 자바스크립트는 에러를 나지 않게 할려는 취지
 */

console.log("[코드3] 왼쪽에서 오른쪽으로")
let value3 = 1 + 5 + "ABC";
console.log(value3); // 6ABC

/**
 * 1. 우선 1과 5를 더하면 6이 됩니다.
 * 2. 이어서 6과 "ABC"를 연결합니다.
 */
