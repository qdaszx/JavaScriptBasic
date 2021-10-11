/**
 * call()
 * 구분 - 데이터(값)
 * object - 호출할 함수 이름
 * 파라미터 - this로 참조할 오브젝트
 *       - 호출된 함수로 넘겨줄 파라미터opt
 * 반환 - 호출된 함수에서 반환한 값
 *
 * - getTotal.call(this, 10, 20); [코드1]
 * - 첫 번째 파라미터
 *    - 호출된 함수에서 this로 참조할 오브젝트
 *    - 일반적으로 this 사용
 *      다른 오브젝트 작성 가능 [코드2]
 */
console.log("[코드1] 함수 호출");
function getTotal(one, two) {
  return one + two;
};
let result = getTotal.call(this, 10, 20);
console.log(result);  // 30
/**
 * 1. getTotal.call(this, 10, 20) 형태로 호출
 * 2. 1번째 파라미터 this가
 *    파라미터 값으로 넘어가지 않습니다
 * 3. 2번째 파라미터가 첫 번째 파라미터로 넘어가고
 *    3번째 파라미터가 두 번째 파라미터로 넘어갑니다
 * 4. one에 10이, two에 20이 설정됩니다.
 * 5. call()은 파라미터 수가 고정일 때 사용합니다.
 */

console.log("[코드2] 첫 번째 파라미터");
let value = { one: 10, two: 20 };
function getTotal2() {
  return this.one + this.two;
};
let result2 = getTotal2.call(value);
console.log(result2); // 30
/**
 * 1. getTotal.call(value)의
 *    파라미터에 value 오브젝트 작성
 * 2. getTotal()에서 this가 value 오브젝트 참조
 *    this.one으로 프로퍼티 값을 구할 수 있습니다.
 */

/**
 * apply()
 * 구분 - 데이터(값)
 * object - 호출할 함수 이름
 * 파라미터 - this로 참조할 오브젝트
 *       - [호출된 함수로 넘겨줄 파라미터opt]
 * 반환 - 호출된 함수에서 반환한 값
 *
 * - getTotal.apply(this, [10, 20]);
 * - 파라미터 수가 유동적일 때 사용
 *   두 번째 파라미터에 배열 사용 [코드3]
 * - call(), apply() 부가적인 목적?
 *    - 첫 번째 파라미터에 호출된 함수에서
 *      this로 참조할 오브젝트 사용
 *    - 논리 전개는 단계적 설명이 필요하므로
 *      중고급 강좌에서 다룹니다.
 */
console.log("[코드3] 파라미터 수가 유동적일 때 사용");
function getTotal3(one, two) {
  return one + two;
};
let result3 = getTotal3.apply(this, [10, 20]);
console.log(result3); // 30
/**
 * 1. 파라미터 수가 유동적이므로 배열을 사용합니다.
 * 2. getTotal() 파라미터 one에 10이
 *    two에 20이 설정됩니다.
 */

/**
 * toString()
 * 구분 - 데이터(값)
 * object - function
 * 파라미터 - 사용하지 않음
 * 반환 - 반환한 값
 *
 * - 모든 빌트인 오브젝트에
 *    - toString()이 있지만
 *    - 오브젝트마다 반환되는 형태가 다름
 * - function 오브젝트의 toString()은
 *   함수 코드를 문자열로 반환 [코드4]
 */
console.log("[코드4] 함수를 문자열로 반환");
let getBook = function () {
  return 100 + 23;
};
let result4 = getBook.toString();
console.log(result4); // function(){return 100 + 23;}