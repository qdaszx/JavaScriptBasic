/**
 * 단항 + 연산자
 * - 형태 : +value
 * - 값을 Number 타입으로 변환 [코드1]
 * - 코드 가독성
 *    - +를 더하기로 착각할 수도 있음
 *    - Number()도 기능 같음
 */

console.log("[코드1] 값 타입 변환")
let value = "7";
console.log(typeof value);  // string
console.log(typeof +value); // number
console.log(typeof Number(value));  // number

/**
 * 1. String 타입을 Number 타입으로 변환
 * 2. Number() 함수가 가독성이 더 좋습니다.
 */

/**
 * 단항 - 연산자
 * - 형태 : -value
 * - 값의 부호를 바꿈
 *    - +는 -로, -는 _로 바꿈
 * - 연산할 때만 바꿈
 *    - 원래 값은 바뀌지 않음 [코드2]
 */

console.log("[코드2] 부호를 바꿈")
let value2 = 7;
console.log(-value2); // -7
console.log(8 + -value2); // 1
console.log(value2);  // 7

/**
 * 1. 7을 -7로 바꿉니다
 * 2. 8 + (-7)은 1
 * 3. value2 변숫값의 부호는 바뀌지 않습니다.
 */