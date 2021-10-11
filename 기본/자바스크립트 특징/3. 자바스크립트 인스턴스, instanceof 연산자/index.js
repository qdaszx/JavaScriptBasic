/**
 * 인스턴스
 * - Instance
 *    - Class를 new 연산자로 생성한 것
 * - 인스턴스 목적
 *    - Class에 작성된 메소드 사용
 *    - 인스턴스마다 프로퍼티 값을 유지
 *    - 예: 축구 경기에서
 *      각 팀에 적용되는 규칙은 같지만
 *      팀마다 점수는 다르다.
 */

/**
 * new 연산자
 *
 * 구분 - 데이터(값)
 * constructor - 생성자
 * 파라미터 - 값opt
 * 반환 - 생성한 인스턴스
 *
 * - 인스턴스를 생성하여 반환
 *    - new Book("JS책");
 *    - 인스턴스를 생성하므로
 *      Book()을 생성자 함수라고 부름
 *    - 코딩 관례로 첫 문자를 대문자로 작성
 * - 파라미터
 *    - 생성자 함수로 넘겨줄 값을
 *      소괄호()에 작성 [코드1]
 */
console.log("[코드1] 인스턴스 생성");
let Book = function (point) {
  this.point = point;
};
Book.prototype.getPoint = function () {
  return this.point + 100;
};
let oneInstance = new Book(200);

console.log(oneInstance.getPoint());  // 300
/**
 * 1. new Book(200)으로 인스턴스 생성
 *    oneInstance가 인스턴스 이름
 * 2. 파라미터 값을 생성하는 인스턴스에 설정
 * 3. 따라서 인스턴스마다 고유의 값을 가질 수 있음
 * 4. oneInstance.getPoint() 형태로
 *    prototype에 연결된 getPoint() 메소드 호출
 */

/**
 * instanceof
 * - 오브젝트로 생성한 인스턴스 여부 반환
 *    - instance instanceof object [코드2]
 *    - instance 위치에 인스턴스 작성
 *    - object 위치에 비교 기준 오브젝트 작성
 * - instance가 object로 생성한
 *   인스턴스이면 true, 아니면 false 반환
 */
console.log("[코드2] 생성한 인스턴스 여부");
let Book2 = function (point) {
  this.point = point;
};
Book2.prototype.getPoint = function () {
  return this.point + 100;
};
let oneInstance2 = new Book2(200);

console.log(oneInstance2 instanceof Book2); // true
/**
 * 1. new Book()으로 인스턴스 생성
 * 2. oneInstance instanceof Book
 * 3. oneInstance가 Book()으로 생성한
 *    인스턴스이므로 true 반환
 */