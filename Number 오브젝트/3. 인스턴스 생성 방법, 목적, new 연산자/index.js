/**
 * new 연산자
 *
 * 구분 - 데이터(값)
 * constructor - 생성자
 * 파라미터 - 값opt
 * 반환 - 생성한 인스턴스
 *
 * - 오브젝트로 인스턴스를 생성하여 반환
 *    - 원본을 복사하는 개념
 *    - new 연산자를 사용하면 인스턴스  [코드1]
 *    - 코딩 관례로 첫 문자를 대문자로 작성
 * - 인스턴스  생성 목적
 *    - 인스턴스마다 값을 갖기 위한 것 [코드2]
 */
console.log("[코드1] 인스턴스 생성");
let obj = new Number();
console.log(typeof obj);  // object
/**
 * 1. 빌트인 Number 오브젝트로
 *    인스턴스를 생성하여 반환
 * 2. 생성한 인스턴스 타입은 object
 */

console.log("[코드2] 인스턴스 생성 목적");
let oneObj = new Number("123");
console.log(oneObj.valueOf());  // 123

let twoObj = new Number("456");
console.log(twoObj.valueOf());  // 456