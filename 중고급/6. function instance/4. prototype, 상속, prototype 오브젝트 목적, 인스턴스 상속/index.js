/**
 * prototype, 상속
 *
 * prototype 오브젝트 목적
 *
 * - prototype 확장
 *    - prototype에 프로퍼티를 연결하여 prototype 확장
 *    - Book.prototype.getPoint = function(){}
 * - 프로퍼티 공유
 *    - 생성한 인스턴스에서 원본 prototype의 프로퍼티 공유
 *    - var obj = new Book(123);
 *      obj.getPoint();
 * - 인스턴스 상속 Inheritance
 *    - function 인스턴스를 연결하여 상속
 *    - Point.prototype = new Book();
 */

/**
 * 인스턴스 상속
 *
 * - 인스턴스 상속 방법
 *    - prototype에 연결된 프로퍼티로
 *      인스턴스로 생성하여
 *      상속받을 prototype에 연결 [코드1]
 *    - 그래서, prototype-based 상속이라고도 합니다.
 * - JS에서 prototype은 상속보다
 *    - 프로퍼티 연결이 의미가 더 큽니다.
 *    - 인스턴스 연결도 프로퍼티 연결의 하나
 * - ES5 상속은 OOP의 상속 기능 부족
 *    - ES6의 Class로 상속 사용 [코드2]
 */
console.log("[코드1] 인스턴스 상속");
function Book(title) {
  this.title = title;
}
Book.prototype.getTitle = function () {
  return this.title;
};
function Point(title) {
  Book.call(this, title);
}
Point.prototype = Object.create(Book.prototype, {});
var obj = new Point("자바스크립트");
console.log(obj.getTitle());  // 자바스크립트

console.log("[코드2] ES6 Class 상속");
class Book2 {
  constructor(title) {
    this.title = title;
  }
  getTitle() {
    return this.title;
  }
}
class Point2 extends Book2 {
  constructor(title) {
    super(title);
  }
}
const obj2 = new Point2("자바스크립트");
console.log(obj2.getTitle()); // 자바스크립트