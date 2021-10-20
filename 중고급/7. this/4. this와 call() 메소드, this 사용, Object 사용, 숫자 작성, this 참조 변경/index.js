/**
 * this와 call()
 *
 * 구분 - 타입 - 데이터(값)
 * object - Function - 호출할 함수 이름
 * 파라미터 - object - this로 참조할 오브젝트
 *        - Any - 파라미터opt, 콤마로 구분, 다수 작성 가능
 * 반환 - Any - 호출된 함수에서 반환한 값
 *
 * - getTotal.call(this, 10, 20)
 *    - 10과 20을 파라미터 값으로 넘겨 줍니다.
 *    - 첫 번째는 파라미터 값으로 넘어가지 않고
 *      두 번째부터 넘어 갑니다.
 * - 첫 번째 파라미터에
 *    - 호출된 함수에서 this로 참조할 오브젝트 작성
 *    - this 이외에 다른 오브젝트 사용 가능
 */

/**
 * this 사용
 *
 * - window.onload = function() {
 *     // onload 밖에 코드를 작성합니다.
 *     // 즉, 글로벌 오브젝트에서 실행합니다.
 *   };
 * 1. get.call(this, 20)
 *    - 첫 번째 파라미터에 this 작성
 * 2. return param + this.value;
 *    - this가 글로벌 오브젝트를 참조하므로
 *    - (var value = 100)을 사용합니다.
 *
 * --- call()을 사용하지 않고 ---
 *
 * 3. return param + this.value;
 *    - get(20)으로 호출하면
 *    - this가 undefined를 참조하므로
 *    - 에러가 발생합니다.
*/
console.log("[코드1] this와 call()");
"use strict";
var value = 100;
function get(param) {
  return param + this.value;
};
var result = get.call(this, 20);
console.log(result);  // 120

/**
 * Object 사용
 *
 * 1. var result = get.call(value, 50);
 *    - call()의 첫 번째에 Object 작성
 *    - 50은 파라미터 값
 * 2. return this.base * this.rate + value;
 *    - this가 {base: 20, rate: 30}을 참조
 *    - 20 * 30 + 50
 * 3. this로 참조할 오브젝트를
 *    - 변경할 수 있는 것이 call()의 특징
 */
console.log("[코드2] 오브젝트 사용");
var get2 = function (value) {
  return this.base * this.rate + value;
};
var value2 = { base: 20, rate: 30 };
var result2 = get2.call(value2, 50);
console.log(result2); // 650

/**
 * 숫자 작성
 *
 * 1. var result = get.call(123);
 *    - this가 오브젝트를 참조하므로
 *    - 숫자(123)를 작성하면
 *      에러가 발생해야 하지만
 * 2. 값(123) 타입에 해당하는
 *    - Number 인스턴스를 생성하고
 *    - 123을 프리미티브 값으로 설정합니다.
 *    - this가 Number 인스턴스를 참조합니다.
 */
console.log("[코드3] 숫자 작성");
function get3() {
  return this.valueOf();
};
var result3 = get3.call(123);
console.log(result3); // 123

/**
 * this 참조 변경
 *
 * 1. book.point.get.call(book);
 *    - book.point의 get() 호출
 *    - get()에서 this로 book 오브젝트 참조
 *    - this.value가 book.value이므로 123 출력
 * 2. book.point.get.call(book.point);
 *    - book.point의 get() 호출
 *    - get()에서 this로 book.point 오브젝트 참조
 *    - this.value가 book.point.value이므로 456 출력
 */
console.log("[코드4] this 참조 변경");
var book4 = {
  value: 123,
  point: {
    value: 456,
    get: function () {
      console.log(this.value);
    }
  }
};
book4.point.get.call(book4);  // 123
book4.point.get.call(book4.point);  // 456
