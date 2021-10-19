/**
 * this와 인스턴스
 *
 * - 인스턴스 목적?
 *    - 인스턴스마다 고유 값 유지
 * - 인스턴스에서 this의 목적?
 *    - this로 인스턴스를 참조하여
 *    - this.name 형태로 프로퍼티에 접근
 * - __proto__ 프로퍼티 접근
 *    - prototype에 연결된 프로퍼티가
 *    - 인스턴스의 __proto__에 첨부되며
 *    - this.method() 형태로
 *      __proto__에 첨부된 method() 호출
 */

/**
 *
 * 1. var obj = new book.Point(100);
 *    - book.Point 인스턴스를 생성
 * 2. this.point = point;
 *    - this가 생성한 인스턴스를 참조하므로
 *      point는 인스턴스 프로퍼티가 됩니다.
 *    - 이 논리로 인스턴스마다
 *      프로퍼티 이름과 값을 유지할 수 있습니다.
 * 3. obj.getPoint();
 *    - obj 인스턴스의 getPoint() 메소드 호출
 * 4. console.log(this.point);
 *    - obj.getPoint()로 호출, this가 obj 참조
 *    - obj는 book.Point 인스턴스
 *    - book.Point 인스턴스의 point 값 출력
 */
console.log("[코드1] this와 인스턴스");
var book = {};
book.Point = function (point) {
  this.point = point;
};
book.Point.prototype.getPoint = function () {
  console.log(this.point);
};
var obj = new book.Point(100);
obj.getPoint(); // 100