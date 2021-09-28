/**
 * new Number()
 *
 * 구분 - 데이터(값)
 * 파라미터 - 값opt
 * 반환 - 생성한 Number 인스턴스
 *
 * - 빌트인 Number 오브젝트로
 *    - 새로운 Number 인스턴스를 생성 [코드1]
 * - 인스턴스 형태
 */
console.log("[코드1] Number 인스턴스 생성");
let obj = new Number("123");
console.log(obj.valueOf()); // 123
/**
 * 1. 빌트인 Number 오브젝트로
 *    인스턴스를 생성하여 반환
 * 2. 파라미터 값이 문자열이면 숫자로 변환하여
 * 3. 생성한 인스턴스에 파라미터 값을 설정
 */