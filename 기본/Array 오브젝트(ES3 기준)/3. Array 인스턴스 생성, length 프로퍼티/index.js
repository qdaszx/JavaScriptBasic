/**
 * new Array()
 * - Array 인스턴스 생성, 반환
 * - 배열 생성 기준
 *    - 파라미터에 따라 배열 생성 기준이 다름
 *    - 파라미터를 작성하지 않으면 빈 배열 [코드1]
 *    - 작성한 순서로 엘리먼트에 설정 [코드2]
 *    - new Array(3)처럼 파라미터에
 *      숫자를 작성하면 3개의 엘리먼트 생성 [코드3]
 */
console.log("[코드1] 빈 배열");
let obj = new Array();
console.log(typeof obj);  // object
console.log(obj.length);  // 0
/**
 * 1. new Array()로 생성한
 *    인스턴스 타입은 object
 * 2. length는 배열의 엘리먼트 수를 나타내며
 *    엘리먼트가 없으므로 0 출력
 */

console.log("[코드2] 값 작성 형태");
let one = new Array(10, 20);
console.log(one); // [10, 20]
let two = new Array([30, 40]);
console.log(two); //  [[30, 40]]
/**
 * 1. 값을 콤마로 구분하여 다수 작성
 *    작성한 순서대로 엘리먼트 값으로 설정
 * 2. 배열로 작성하면 1차원을 더한 차원이 됩니다.
 */

console.log("[코드3] 숫자 하나 작성");
let obj2 = new Array(3);
console.log(obj2);  // [undefined, undefined, undefined]
/**
 * 1. 숫자 하나를 작성하면 엘리먼트 수가 되어
 *    3개의 엘리먼트를 가진 배열이 됩니다.
 * 2. 엘리먼트에는 undefined가 설정됩니다.
 */

/**
 * Array()
 * - Array 인스턴스 생성, 반환
 *    - new Array()와 생성 방법 및 기능 같음
 * - 인스턴스 생성 논리
 *    - new Array()는 new 연산자에서
 *      생성자 함수를 호출하여 인스턴스 생성
 *    - Array()는 직접 생성자 함수를
 *      호출하여 인스턴스 생성
 */

/**
 * length 프로퍼티
 * - 배열 [1, 2, 3]에서
 *    - lenngh 값은 3
 *    - Array 오브젝트에
 *      {length: 3} 형태로 설정 [코드4]
 *    - 처음 인덱스는 0, 마지막 인덱스는 2
 * - 열거/삭제는 할 수 없지만, 변경은 가능
 * - length 값을 변경하면
 *   배열의 엘리먼트 수가 변경됨 [코드5] [코드6]
 */
console.log("[코드4] length 값");
let value = [1, 2, 3];
console.log(value.length);  // 3
/**
 * 1. [1, 2, 3]의 length 값은 3
 * 2. {length: 3} 형태로 설정되므로
 *    length를 프로퍼티 이름으로 악세스할 수 있음
 */

console.log("[코드5] length 값을 크게 변경");
let value2 = [1, 2, 3];
value2.length = 5;
console.log(value2);  // [1, 2, 3, undefined, undefined]
/**
 * 1. 늘어난 엘리먼트 값은 undefined
 */

console.log("[코드6] length 값을 작게 변경");
let value3 = [1, 2, 3];
value3.length = 2;
console.log(value3);  // [1, 2]
/**
 * 1. 3에서 2로 줄이면 뒤의 엘리먼트가 삭제됩니다.
 */