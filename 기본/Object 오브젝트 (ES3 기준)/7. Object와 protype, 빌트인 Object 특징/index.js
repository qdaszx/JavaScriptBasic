/**
 * 빌트인 Object 특징
 * - 인스턴스를 만들 수 있는
 *   모든 빌트인 오브젝트의 __proto__에
 *   Object.prototype의 6개 메소드가 설정됨
 * - 따라서 빌트인 오브젝트로 만든
 *   인스턴스에도 설정됨
 * - Object.prototype
 */

/**
 * isPrototypeOf()
 *
 * 구분 - 데이터(값)
 * object - 검색한 오브젝트.prototype
 * 파라미터 - 검색 대상 오브젝트
 * 반환 - true, false
 *
 * - 파라미터에 작성한 오브젝트에
 *    - object 위치에 작성한 prototype이
 *    - 존재하면 true 반환
 *    - 존재하지 않으면 false 반환 [코드1]
 */
console.log("[코드1] 프로퍼티 존재 여부");
let numObj = new Number(123);
console.log(Object.prototype.isPrototypeOf(numObj));  // true
/**
 * 1. Object.prototype처럼
 *    오브젝트의 prototype을 작성합니다.
 * 2. numObj에 Object.prototype의 존재를 체크합니다.
 *    존재하므로 true 반환
 */

/**
 * toString()
 *
 * 구분 - 데이터(값)
 * object - Object 인스턴스
 * 파라미터 - 사용 불가
 * 반환 - 반환한 값
 *
 * - 인스턴스 타입을 문자열로 표시 [코드2]
 * - 오브젝트에 toString()이 있으면
 *    - toString()이 호출되고
 *    - 없으면 Object의 toString()이 호출됨 [코드3]
 */
console.log("[코드2] 인스턴스 타입을 문자열 표시");
let point = { book: "책" };
console.log(point.toString());  // [object Object]

let obj = new Number(123);
console.log(Object.prototype.toString.call(obj)); // [object Number]
/**
 * 1. toString() 앞에 Object 인스턴스를 작성했으며
 * 2. toString()을 실행하면 [실행 결과]처럼
 *    [object Object]를 표시
 * 3. 앞의 소문자 object는 인스턴스를 나타내고
 *    뒤의 대문자 Object는 빌트인 Object를 나타냅니다.
 */

console.log("[코드3]");

/**
 * toLocaleString()
 *
 * 구분 - 데이터(값)
 * data - 변환 대상
 * 파라미터 - 사용하지 않음
 * 반환 - 변환한 값
 *
 * - 지역화 문자 변환 메소드 대체 호출
 *    - Array, Number, Data 오브젝트의
 *    - toLocaleString() 메소드가
 *      먼저 호출됩니다. [코드4]
 */
console.log("[코드4] 메소드 대체 호출");
console.log(1234.56.toLocaleString());  // 1,234.56
console.log("4567.89".toLocaleString());  // 4567.89
/**
 * 1. 1234.56에 콤마(,)를 삽입하여
 *    1,234.56으로 출력
 * 2. 이때에는 Number.prototype.toLocaleString()
 *    메소드가 호출됩니다.
 * 3. "4567.89"는 String 타입이며
 * 4. String.prototype.toLocaleString()이 없으므로
 * 5. Object.prototype.toLocaleString()
 *    메소드가 호출됩니다.
 * 6. Object의 toLocaleString()이 없으면 에러 발생
 *    즉, 에러 발생을 방지하기 위한 것입니다.
 */