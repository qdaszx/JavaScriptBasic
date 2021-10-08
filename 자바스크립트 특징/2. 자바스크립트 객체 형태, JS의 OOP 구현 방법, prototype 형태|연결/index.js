/**
 * JS 객체 형태
 * - Object 오브젝트 형태
 *   var book = {
 *    read: function (param) {코드}
 * };
 *    - 인스턴스를 생성할 수 없음
 * - Function 오브젝트 형태
 *    - function readBook (param) {코드};
 *    - 객체이지만, OOP의 객체라고 하기에는 부족
 *    - 객체에 메소드가 하나 있는 모습
 */

/**
 * prototype
 * - JS의 OOP 구현 방법
 *    - prototype에 메소드 연결
 *    - prototype 형태
 * - prototype에 연결하여 작성 [코드1]
 * - 다른 언어는 class 안에
 *    - 메소드와 프로퍼티를 작성하지만
 * - 자바스크립트는 prototype에
 *    - 메소드를 연결하여 작성합니다.
 *    - ES6에서 class에 메소드를 작성 [코드2]
 *    - 하지만, 내부에서 prototype에 연결합니다.
 */
console.log("[코드1] prototype에 함수 연결");
let Book = function () { };

Book.prototype.getBook = function () {
  return "JS북";
};
/**
 * 1. Book 함수 작성
 * 2. Book.prototype에 getBook 메소드 연결
 * 3. prototype이 오브젝트이므로
 *    {이름: 메소드} 형태로 연결할 수 있습니다.
 */

console.log("[코드2] ES6의 class");
class Book2 {
  constructor(title) {
    this.title = title;
  }
  getBook() {
    return this.title;
  }
}
