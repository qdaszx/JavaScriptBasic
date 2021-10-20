/**
 * this와 apply()
 *
구분 - 타입 - 데이터(값)
object - Function - 호출할 함수 이름
파라미터 - object - this로 참조할 오브젝트
      - Any - [파라미터]opt
반환 - Any - 호출된 함수에서 반환한 값
 *
 * - getTotal.apply(this, [10, 20])
 *    - 함수 호출 방법은 call()과 같으며
 *      파라미터가 배열인 것이 다릅니다.
 *    - [10, 20]을 파라미터 값으로 넘겨줍니다.
 * - 두 번째 파라미터 수가 유동적일 때 사용
 *    - call()은 파라미터 수가 고정일 때 사용
 */

/**
 * this와 arguments
 *
 * 1. get.apply(obj, data);
 *    - get() 함수에서 obj를 this로 참조
 * 2. 두 번째 파라미터 [4, 5, 6]을
 *    - arguments를 사용하여 계산
 *    - 파라미터 수가 유동적으로
 *      arguments가 편리
 * 3. get()의 함수 코드는 바뀌지 않으며
 *    - 넘겨 주는 파라미터 값과
 *    - this로 참조할 오브젝트만 변경하면 됩니다.
 * 4. Array-like 형태
 */
console.log("[코드1] this와 arguments");
var obj = { 0: 10, 1: 20, 2: 30 };
var data = [4, 5, 6];

function get() {
  for (k = 0; k < arguments.length; k++) {
    console.log(arguments[k] + this[k]);
  };
};
get.apply(obj, data); // 14 25 36