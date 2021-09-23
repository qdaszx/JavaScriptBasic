/**
 * 숫자로 변환
 * - 연산하기 전에 우선 숫자로 변환
 * - 변환된 값으로 연산 [코드1] [코드2] [코드3]
 *
 * Undefined - NaN
 * Null - +0
 * Boolean - true: 1, false: 0
 * Number - 변환 전/후 같음
 * String - 값이 숫자이면 숫자로 연산. 단, 더하기(+)는 연결
 */

console.log("[코드1] undefined 더하기")
let value;
console.log(10 + value); // NaN

/**
 * 1. value 값은 undefined
 * 2. 10과 undefined를 더하면 NaN
 *    NaN(Not-a-Number)도 값입니다.
 */

console.log("[코드2] 1또는 0으로 변환")
console.log(10 + null); // 10
console.log(10 + true); // 11
console.log(10 + false);  // 10

/**
 * 1. null은 0으로 변환
 * 2. true는 1로, false는 0으로 변환
 */

console.log("[코드3] 숫자를 문자열로 작성")
console.log(10 + "123"); // 10123
console.log(123 - "23");  // 100

/**
 * 1. 더하기는 값이 숫자라도 타입이 String이면 문자열로 연결하지만
 * 2. -, *, /는 숫자로 변환하여 연산합니다.
 * 3. typeof 연산자로 Number 타입 여부 체크
 */