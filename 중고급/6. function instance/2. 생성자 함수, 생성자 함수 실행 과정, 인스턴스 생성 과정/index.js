/**
 * 생성자 함수
 *
 * - new 연산자와 함께 인스턴스를 생성하는 함수
 *    - new Book()에서 Book()이 생성자 함수
 * - new 연산자
 *    - 인스턴스 생성을 제어
 *    - 생성자 함수 호출
 * - 생성자 함수
 *    - 인스턴스 생성, 반환
 *    - 인스턴스에 초깃값 설정
 * - 코딩 관례로 생성자 함수의 첫 문자는 대문자
 *    - new Number(), new Array(), new Book()
 */

/**
 * 생성자 함수 실행 과정
 *
 * new 연산자로 인스턴스 생성을 제어하고
 * 생성자 함수인 Book()으로
 * 인스턴스를 생성하여 반환합니다.
 *
 * ------
 * new와 생성자 함수 실행 과정
 * ------
 *
 * 1. 엔진이 new 연산자를 만나면
 *    - function의 [[Construct]]를 호출하면서
 *      파라미터 값으로 10을 넘겨 줍니다.
 * 2. function 오브젝트를 생성할 때
 *    - Book() 함수 전체를 참조하도록
 *      [[Construct]]에 설정하였습니다.
 * 3. [[Construct]]에서 인스턴스를 생성하여 반환
 * 4. 반환된 인스턴스를 new 연산자가 받아
 *    - new 연산자를 호출한 곳으로 반환
 * 5. new라는 뉘앙스로 인해
 *    - new 연산자가 인스턴스를 생성하는 것으로
 *      생각할 수 있지만
 *    - function 오브젝트의
 *      [[Construct]]가 인스턴스를 생성합니다.
 *    - 그래서 Book()이 생성자 함수입니다.
 *
 */

/**
 * 인스턴스 생성 과정
 *
 * 인스턴스를 생성하는 과정을
 * 개략적으로 살펴봅니다.
 *
 * 1. new Book(10) 실행
 *    - Book 오브젝트의 [[Construct]] 호출
 *    - 파라미터 값을 [[Construct]]로 넘겨줍니다.
 * 2. 빈 Object를 생성합니다.
 *    - 이것이 인스턴스
 *    - 지금은 빈 오브젝트{}이며
 *      이제부터 하나씩 채워갑니다.
 * 3. 오브젝트에 내부 처리용 프로퍼티를 설정
 *    - 공통 프로퍼티와 선택적 프로퍼티
 * 4. 오브젝트의 [[Class]]에 "Object" 설정
 *    - 따라서 생성한 인스턴스 타입은 Object
 * 5. Book.prototype에 연결된 프로퍼티(메소드)를
 *    - 생성한 인스턴스의 [[Prototype]]에 설정
 *    - constructor도 같이 설정됩니다.
 */
console.log("[코드1] 인스턴스 생성 과정");
function Book(point) {
  this.point = point;
}
Book.prototype.getPoint = function () {
  return this.point;
};
var bookObj = new Book(10);

// Book 인스턴스: {
//   point: 10,
//   __proto__ = {
//     constructor: Book,
//     getPoint: function(){},
//     __proto__: Object
//   }
// }