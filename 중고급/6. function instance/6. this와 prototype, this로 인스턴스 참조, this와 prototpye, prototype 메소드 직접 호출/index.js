/**
 * this와 prototype
 *
 * this로 인스턴스 참조
 *
 * - this로 메소드를 호출한 인스턴스 참조
 *    - var obj = new Book();
 *    - obj.get() 형태에서 this로 obj 참조
 * - 인스턴스에서 메소드 호출 방법
 *    - prototype에 연결된 프로퍼티가
 *      __proto__에 설정되며
 *    - 인스턴스 프로퍼티가 됩니다.
 *    - this.prototype.setPoint() 형태가 아닌
 *      this.setPoint() 형태로 호출
 */

/**
 * this와 prototype
 *
 * - console.log("1:", this.point);
 *    - 생성자 함수에서 this는 생성하는 인스턴스 참조
 *    - 생성하는 인스턴스에 point 프로퍼티가 없더라도
 *      에러가 나지 않고 undefined를 반환
 * - obj.getPoint();
 *    - this가 메소드를 호출한 인스턴스 참조
 *    - 즉, 메소드 앞에 작성한 인스턴스 참조
 * - this.setPoint();
 *    - this가 인스턴스 참조하며
 *    - 인스턴스에 있는 setPoint() 호출
 * - this.point = 100;
 *    - this가 인스턴스를 참조
 *    - 인스턴스의 point 프로퍼티에 100을 할당
 */
console.log("[코드1] this와 prototype");
function Book() {
  console.log("1:", this.point); // 1:undefiend
}
Book.prototype.getPoint = function () {
  this.setPoint();
  console.log("2:", this.point); // 2: 100
};
Book.prototype.setPoint = function () {
  this.point = 100;
};
var obj = new Book();
obj.getPoint();

/**
 * prototype 메소드 직접 호출
 *
 * - Book.prototype.getPoint();
 *    - 인스턴스를 생성하지 않고 직접 메소드 호출
 * - Book.prototype을
 *    - getPoint()에서 this로 참조
 * - obj 인스턴스에는 point가 있지만
 *    - Book.prototype에 point가 없으므로
 *      undefined를 반환
 *    - 인스턴스를 생성하여
 *      메소드를 호출하는 것과
 *      직접 prototype을 작성하여 호출하는 것의 차이
 */
console.log("[코드2] this와 prototype");
function Book2(point) {
  this.point = point;
};
Book2.prototype.getPoint = function () {
  return this.point;
};
var obj2 = new Book2(100);
console.log(obj2.getPoint()); // 100
console.log(Book.prototype.getPoint()); // undefined