/**
 * 콤마 연산자
 * - 기호: ,(Comma)
 * - 콤마로 표현식을 분리
 *    - var a = 1, b = 2;
 *    - 한번만 var 작성
 */

/**
 * () 연산자
 * - 그룹핑 연산자
 * - 소괄호() 안의 표현식을 먼저 평가
 *    - 평가한 값을 반환
 *    - 5 / (2 + 3)
 */

/**
 * || 연산자
 * - 논리 OR 연산자
 * - 표현식의 평가 결과가 하나라도 true이면 true 아니면 false [코드1] [코드2]
 * - 왼쪽 결과가 true이면 오른쪽은 비교하지 않음 [코드3]
 */

console.log("[코드1] true가 되는 변숫값 반환")
let value, zero = 0, two = 2;
console.log(value || zero || two);  // 2
/**
 * 1. value 변숫값이 undefined이므로 false
 * 2. zero 변숫값이 0이므로 false
 * 3. two 변숫값이 2이므로 true가 되며 two 변숫값을 반환
 * 4. true가 아니라 true가 되는 변숫값 반환 2가 true이므로 전체 비교는 true
 */

console.log("[코드2] 모두가 false일 때")
let value2, zero2 = 0;
console.log(zero2 || value2); // undefined
/**
 * 1. 마지막까지 비교하였는데 모두가 false이면 false가 아니라 마지막 변숫값 반환
 */

console.log("[코드3] true이면 비교 종료")
let one = 1;
console.log(one === 1 || two === 2);  // true
/**
 * 1. 왼쪽의 (one === 1) 결과가 true이므로 true 반환
 * 2. 왼쪽 비교 결과가 true이면 오른쪽은 비교하지 않음
 * 3. 오른쪽을 비교하면 two 변수가 없으므로 에러 발생
 */

/**
 * && 연산자
 * - 논리 AND 연산자
 * - 표현식의 평가 결과가 모두 true이면 true 아니면 false [코드4]
 * - 왼쪽 결과가 false이면 오른쪽은 비교하지 않음 [코드5]
 */

console.log("[코드4] 모두가 true일 때")
let one2 = 1, two2 = 2;
console.log(one2 && two2);  // 2
/**
 * 1. one 변숫값이 1이므로 true
 *    true이므로 오른쪽을 비교
 * 2. two 변숫값이 2이므로 true
 *    모두가 true이며 마지막의 2를 반환
 */

console.log("[코드5] false가 되는 변숫값 반환")
let one3 = 1, zero3 = 0;
console.log(one3 && zero && nine);  // 0
/**
 * 1. one 변숫값이 1이므로 true
 *    true이므로 오른쪽 비교
 * 2. zero 변숫값이 0이므로 false
 *    false이므로 오른쪽을 비교하지 않고
 *    zero 변숫값인 0 반환
 */
