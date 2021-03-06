/**
 * eval()
 *
 * 구분 - 데이터(값)
 * 파라미터 - JS 코드
 * 반환 - JS 코드를 실행하여 반환한 것
 *
 * - 파라미터의 문자열을
 *    - JS 코드로 간주하여 실행 [코드1]
 *    - 실행 결과를 반환 값으로 사용
 *      값을 반환하지 않으면 undefined 반환
 * - eval() 함수 실행 방법
 * - 보안에 문제가 있다고 알려져 있음
 *    - 사용 비권장
 */
console.log("[코드1] 문자열 코드 실행")
let result = eval("parseInt('-123.45')");
console.log(result);  // -123