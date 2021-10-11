/**
 * isNaN()
 *
 * 구분 - 데이터(값)
 * 파라미터 - 값
 * 반환 - true, false
 *
 * - 값의 NaN 여부 반환
 * - 숫자 값이 아니면 true 반환 [코드1]
 * - 숫자 값이면 false 반환
 *    - 값이 숫자로 변환되면 숫자로 인식 [코드2]
 * - NaN === NaN 결과는 false
 *    - 설계 실수
 *    - ES6의 Object.is() 사용 [코드3]
 */
console.log("[코드1] true가 되는 경우");
console.log(isNaN("ABC"));  // true
console.log(isNaN()); // true
/**
 * 1. 값이 String 타입이므로 true 반환
 * 2. 파라미터를 작성하지 않으면 undefined와 같음
 */

console.log("[코드2] false가 되는 경우");
console.log(isNaN(123));  // false
console.log(isNaN("123"));  // false
console.log(isNaN(null)); // false
/**
 * 1. String 타입이라도 값이 숫자이면 숫자로 인식
 * 2. null을 숫자로 변환하면 0
 */

console.log("[코드3] NaN 비교");
console.log(NaN === NaN); // false
console.log(Object.is(NaN, NaN)); // true

/**
 * isFinite()
 *
 * 구분 - 데이터(값)
 * 파라미터 - 값
 * 반환 - true, false
 *
 * - 값이 Infinity, NaN 이면
 *    - false 반환
 *    - 아니면 즉, finite(유한)이면 true 반환 [코드4]
 * - 값이 숫자로 반환되면 숫자로 인식 [코드5]
 */
console.log("[코드4] false가 되는 경우");
// NaN
console.log(isFinite(0 / 0)); // false
// Infinity
console.log(isFinite(1 / 0)); // false
console.log(isFinite("ABC")); // false

console.log("[코드5] true가 되는 경우");
console.log(isFinite(123)); // true
console.log(isFinite("123")); // true
console.log(isFinite(false)); // true