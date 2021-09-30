/**
 * trim()
 *
 * 구분 - 데이터(값)
 * data - 삭제 대상
 * 파라미터 - 사용하지 않음
 * 반환 - 삭제한 결과
 *
 * - 문자열 앞뒤의 화이트 스페이스 삭제 [코드1]
 * - 메소드 체인 Method chain
 */
console.log("[코드1] 앞뒤 화이트 스페이스 삭제");
let value = "  abcd  ";
console.log(value.length);  // 8
console.log(value.trim().length); // 4
/**
 * 1. abcd 앞뒤로 공백이 2개씩 있으므로
 *    length 값은 8
 * 2. 앞뒤의 공백을 삭제하므로 length 값은 4
 */