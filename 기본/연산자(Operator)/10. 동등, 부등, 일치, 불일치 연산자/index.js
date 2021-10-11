/**
 * ==연산자
 * - 동등 연산자
 * - 왼쪽과 오른쪽 값이 같으면 true 다르면 false
 * - 값 타입은 비교하지 않음.
 *    1과 "1"이 같음 [코드1] [코드2] [코드3]
 */

console.log("[코드1] 숫자 타입으로 변환")
console.log(1 == "1");  // true
/**
 * 1. 값 타입이 다르면 즉, "문자:숫자", "숫자:문자"일 때
 *    문자 타입을 숫자 타입으로 변환하여 비교
 * 2. 따라서 모두 1이므로 true 반환
 */

console.log("[코드2] undefined 비교")
let value;  // true
console.log(value == undefined);
/**
 * 1. 양쪽이 모두 undefined이므로 true
 */

console.log("[코드3] undefined, null 비교")
let value2; // true
console.log(value == null);
/**
 * 1. undefined와 null을 비교하면 true
 * 2. undefined와 null은 값입니다.
 *    값이 다른데도 true가 되므로 주의~
 */

/**
 * !=연산자
 * - 부등 연산자
 * - 왼쪽과 오른쪽 값이 다르면 true 같으면 false
 * - a != b와 !(a == b)가 같음
 */

/**
 * === 연산자
 * - 일치 연산자
 * - 왼쪽과 오른쪽의 값과 타입이 모두 같으면 true 값 또는 타입이 다르면 false
 * - 1 === 1, true
 *  1 === "1", false [코드1] [코드2]
 */

console.log("[코드4] 타입이 다름")
console.log(1 === "1"); // false
/**
 * 1. 값은 같지만 타입이 다르므로 false
 */

console.log("[코드5] undefined, null 비교")
let value3;
console.log(value3 == null);  //true
console.log(value3 === null); // false
/**
 * 1. let로 변수를 선언만 하면 변숫값은 undefined
 * 2. undefined와 null은 값입니다.
 * 3. ==(동등 연산자)로 비교하면 true
 *    ===(일치 연산자)로 비교하면 타입이 다르므로 false
 */

/**
 * !== 연산자
 * - 불일치 연산자
 * - 값 또는 타입이 다르면 true
 *  true가 아니면 false
 */