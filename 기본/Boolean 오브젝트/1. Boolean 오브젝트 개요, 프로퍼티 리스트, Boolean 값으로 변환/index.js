/**
 * Boolean 오브젝트
 * - 빌트인 오브젝트
 *    - true와 false 처리
 * - 값이 있으면 true로 인식
 * - false 인식 기준
 *    - undefined, null, NaN
 *    - 빈 문자열, 숫자 타입의 0
 * - 숫자 값 변환 기준
 *    - true를 1로, false를 0으로 변환
*/

/**
 * 프로퍼티 리스트
 *
 * 이름 - 개요
 * new Boolean() - 인스턴스 생성
 *
 * Boolean 함수
 * Boolean() - Boolean 타입으로 변환
 *
 * Boolean.prototype
 * constructor 생성자
 * toString() - true/false를 문자열로 반환
 * valueOf() - 프리미티브 값 반환
 */

/**
 * new Boolean()
 *
 * 구분 - 데이터(값)
 * 파라미터 - 값
 * 반환 - 생성한 Boolean 인스턴스
 *
 * - Boolean 인스턴스 생성
 * - 파라미터 값을 true 또는 false로
 *   변환하여 프리미티브에 설정 [코드1]
 * - 문자열이면서 값이 있으면 true로 변환 [코드2]
 */
console.log("[코드1] false로 반환");
let value = [undefined, null, NaN, 0, ""];
for (let k = 0; k < value.length; k++) {
  let obj = new Boolean(value[k]);
  console.log(obj + 1); // 1 1 1 1 1
};
/**
 * 1. value의 모든 값이 false로 변환되며
 * 2. 생성한 Boolean 인스턴스의
 *    프리미티브 값으로 설정
 * 3. false를 값으로 변환하면 0이 되며
 *    1을 더하면 1이 됩니다.
 */

console.log("[코드2] true로 변환");
let value2 = [12, "1", "0", "false"];
for (let k = 0; k < value2.length; k++) {
  let obj = new Boolean(value2[k]);
  console.log(obj + 1); // 2 2 2 2
};
/**
 * 1. value의 모든 값이 true로 변환되며
 * 2. 생성한 Boolean 인스턴스의
 *    프리미티브 값으로 설정
 * 3. true를 값으로 변환하면 1이 되며
 *    1을 더하면 2가 됩니다.
 */

/**
 * Boolean()
 *
 * 구분 - 데이터(값)
 * 파라미터 - 값
 * 반환 - 변환한 값
 *
 * - Boolean 값으로 변환
 * - 인스턴스를 생성하지 않고
 *   true 또는 false로 변환 [코드3]
 */
console.log("[코드3] true, false로 변환");
let value3 = [12, "1", "0", "false"];
for (let k = 0; k < value3.length; k++) {
  console.log(Boolean(value3[k]) + 1); // 2 2 2 2
};
/**
 * 1. value의 모든 값이 true로 변환되고
 *    true를 값으로 변환하면 1이 됩니다.
 * 2. 1을 더하면 2가 됩니다.
 */

/**
 * toString()
 *
 * 구분 - 데이터(값)
 * data - 변환 대상
 * 파라미터 - 사용하지 않음
 * 반환 - 문자열로 변환한 값
 *
 * - data 위치의 true, false를 문자열로 변환
 *    - 즉, "true", "false"로 변환 [코드4]
 */
console.log("[코드4] 문자열로 변환");
let result = true.toString();
console.log(result);  // true
console.log(typeof result); // string
/**
 * 1. true를 문자열로 변환
 */

/**
 * valueOf()
 *
 * 구분 - 데이터(값)
 * object - Boolean 인스턴스
 * 파라미터 - 사용하지 않음
 * 반환 - true, false
 *
 * - Boolean 인스턴스의 프리미티브 값 반환
 *    - 즉, true 또는 false 반환 [코드5]
 */
console.log("[코드5] 프리미티브 값 반환");
let obj = new Boolean(3);
console.log(obj.valueOf()); // true