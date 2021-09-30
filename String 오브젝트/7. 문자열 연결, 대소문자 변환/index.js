/**
 * concat()
 *
 * 구분 - 데이터(값)
 * data - 연결 시작 값, String 인스턴스
 * 파라미터 - 연결 대상opt, 다수 작성 가능
 * 반환  -  연결한 결과
 *
 * - data 위치의 값에
 *    - 파라미터 값을 작성 순서로
 *    - 연결하여 문자열로 반환 [코드1]
 * - String 인스턴스를 작성하면
 *    - 프리미티브 값을 연결
 */
console.log("[코드1] 문자열로 연결");
let result = "sports".concat("축구", 11);
console.log(result);  // sports축구11

let obj = new String(123);
console.log(obj.concat("ABC")); // 123ABC

/**
 * toLowerCase()
 *
 * 구분 - 데이터(값)
 * data - 변환 대상
 * 파라미터 - 사용하지 않음
 * 반환 - 변환 결과
 *
 * - 영문 대문자를 소문자로 변환
 */

/**
 * toUpperCase()
 *
 * 구분 - 데이터(값)
 * data - 변환 대상
 * 파라미터 - 사용하지 않음
 * 반환 - 반환 결과
 *
 * - 영문 소문자를 대문자로 변환  [코드2]
 */
console.log("[코드2] 영문 대소문자 바꾸기");
console.log("ABCDE".toLowerCase()); // abcde
console.log("abcde".toUpperCase()); // ABCDE