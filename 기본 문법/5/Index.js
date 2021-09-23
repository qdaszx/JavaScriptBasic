// Undefined, Null 타입

/**
 * Undefined 타입
 * - Undefined(대문자) 타입
 *  - 값: undefined(소문자)
 * -  변수의 디폴트값
 *  - var point;
 *  - 변수를 선언만 한 것으로 undefined가 초깃값으로 설정 [코드1]
 *  - 변수에 값을 할당하지 않은 것을 나타내는 시맨틱
 * - 변수에 undefined 할당 가능 [코드2]
 */

console.log("[코드1] Undefined 타입")
let point;
console.log(point); //undefined

/**
 * 1. point 변수를 선언만 하였는데 undefined가 출력되었습니다.
 * 2. 변수가 이름과 값을 갖는 구조를 맞추기 위한 것
 * 3. 초깃값으로 undefined가 설정되기 때문
 */

console.log("[코드2] undefined 값 할당")
let point2 = undefined;
console.log(point2);  //undefined

/**
 * 1. undefined가 값이므로 변수에 할당 가능
 * 2. 하지만, 초깃값인지 값을 할당한 것인지 구분이 되지 않으므로 권장하지 않습니다.
 * 3. 대신, 다음 절에서 다루는 null을 할당합니다.
 */

/**
 * Null 타입
 * - Null(대문자) 타입
 *  - 값: null(소문자)
 * - null과 undefined 차이
 *  - undefined는 단지 변수만 선언
 *  - null을 할당해야 값이 null이 됨
 *  - 의도적으로 값을 할당한 것으로 코드를 수행한 것이 됩니다. [코드3]
 */

console.log("[코드3] Null 타입")
let book;
console.log(book);  //undefined

let point3 = null;
console.log(point3);  //null