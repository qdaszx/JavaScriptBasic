/**
 * String()
 *
 * 구분 - 데이터(값)
 * 파라미터 - 변환 대상opt
 * 반환 - 변환한 값
 *
 * - 파라미터 값을 String 타입으로 변환하여 반환
 *    - 값을 작성하지 않으면 빈문자열 반환 [코드1]
 * - 가독성
 *    - ("" + 123)도 숫자가 String타입이 되지만
 *    - String(123) 형태가 가독성이 높습니다.
 */
console.log("[코드1] String 타입으로 변환");
let value = String(123);
console.log(value); // "123"
console.log(typeof value);  // string
console.log(typeof ("" + 123));  // string

/**
 * new String()
 *
 * 구분 - 데이터(값)
 * 파라미터 - 값opt
 * 반환 - 생성한 String 인스턴스
 *
 * - String 인스턴스를 생성하여 반환 [코드2]
 * - 파라미터 값을 String 타입으로 변환
 *    - 파라미터 값이 프리미티브 값이 됩니다.
 */
console.log("[코드2] new String()");
let obj = new String(123);
console.log(typeof obj);  // object

/**
 * valueOf()
 *
 * 구분 - 데이터(값)
 * data - String 인스턴스, 문자
 * 파라미터 - 사용하지 않음
 * 반환 - 프리미티브 값
 *
 * - String 인스턴스의 프리미티브 값 반환 [코드3]
 */
console.log("[코드3] 프리미티브 값 반환");
let obj2 = new String(123);
console.log(obj2.valueOf());  // "123"
/**
 * 1. obj는 String 인스턴스이며
 * 2. 파라미터 값 123이 String 인스턴스의
 *    프리미티브 값으로 설정됩니다.
 * 3. obj에 프리미티브 값으로 설정된 값 반환
 */
