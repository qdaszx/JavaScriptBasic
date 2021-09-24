/**
 * 후치 ++연산자
 * - 형태: value++
 * - 값을 자동으로 1 증가시킴
 *    - 문장을 수행한 후에 1 증가
 *    - 즉, 세미콜론(;) 다음에서 증가 [코드1]
 */

console.log("[코드1] 후치 ++연산자")
let one = 1;
let value = one++ + 3;
console.log(value); // 4
console.log(one); // 2

/**
 * 1. one++를 하면 1이 2가 되지만 문장 안이므로 1이 증가하지 않습니다.
 * 2. 1 + 3을 하게 되어 4가 됩니다.
 */

/**
 * 전치 ++연산자
 * - 형태: ++value
 * - 값을 자동으로 1 증가시킴
 *    - 문장 안에서 1 증가
 *    - 표현식을 평가하기 전에 1 증가 표현식에서 증가된 값을 사용 [코드2]
 */

console.log("[코드2] 전치 ++연산자")
let one2 = 1;
let value2 = ++one2 + 3;
console.log(value2);  // 5

/**
 * 1. 문장이 끝나기 전이지만 먼저 1을 증가시키고 3을 더합니다.
 * 2. 2 + 3을 하게 되므로 5가 출력됩니다.
 */

/**
 * 후치 --연산자
 * - 형태: value--
 * - 값을 자도으로 1 감소시킴
 *    - 문장을 수행한 후에 1 감소
 *    - 즉, 세미콜론(;) 다음에 감소 [코드3]
 */

console.log("[코드3] 후치 --연산자")
let two = 2;
let value3 = two-- + 3;
console.log(value3);  // 5
console.log(two); // 1

/**
 * 1. two--를 하면 2가 1이 되지만 문장 안이므로 1이 감소하지 않습니다
 * 2. 2 + 3을 하게 되어 5가 됩니다.
 */

/**
 * 전치 --연산자
 * - 형태: --value
 * - 값을 자동으로 1 감소시킴
 *    - 문장 안에서 1 감소
 *    - 표현식을 평가하기 전에 1 감소 표현식에서 감소된 값을 사용 [코드4]
 */

console.log("[코드4] 전치 --연산자")
let two2 = 2;
let value4 = --two2 + 3;
console.log(value4);  // 4

/**
 * 1. 문장이 끝나기 전이지만 먼저 1을 감소시키고 3을 더합니다
 * 2. 1 + 3을 하게 되므로 4가 출력됩니다.
 */

/**
 * !연산자
 * - 논리 NOT연산자
 *    - 형태: !value
 * - 표현식 평가 결과를 true, false로 반환한 후 true이면 false를, false이면 true를 반환
 * - 원래 값은 바뀌지 않으며 사용할 때만 반환 [코드5]
 */

console.log("[코드5] 논리 NOT(!) 연산자")
let value5 = true;
console.log(!value5); // false
console.log(!!"A"); // true

/**
 * 1. true를 바꾸어 false로 출력
 * 2. A는 true, !A는 false, !!A는 true
 */

