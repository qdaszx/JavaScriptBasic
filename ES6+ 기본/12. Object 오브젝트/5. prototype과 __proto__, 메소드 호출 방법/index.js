/*
prototype과 __proto__

메소드 호출 방법

- prototype과 __proto__에 연결된 메소드를 호출하는 방법이 다름

- prototype에 연결된 메소드 호출
    - Array.prototypeslice() 처럼 prototype을 작성하여 호출 [코드1]

- __proto__에 연결된 메소드 호출
    - 인스턴스를 생성하여 호출
    - new 연산자로 생성한 인스턴스 구조
*/
console.log("[코드1] prototype에 연결된 메소드 호출");
function Book() {
  this.point = 100;
};
Book.prototype.getPoint = function () {
  console.log(Object.is(this, Book.prototype));
  return this.point;
};
console.log(Book.prototype.getPoint()); // true undefined
console.log(Book.prototype.getPoint.call(Book));  // false undefined
/**
 * 1. Book.prototype.getPoint()
 *    prototype을 작성하여 호출하면
 *    getPoint()에서 this가 Book.prototype를 참조
 * 2. Book.prototype.getPoint.call(Book)
 *    this가 Book을 참조합니다.
 * 3. this.point를 참조하려면 인스턴스를 생성하고 인스턴스의 메소드를 호출해야 합니다.
 */

/*
new 연산자로 생성한 인스턴스 구조
*/
{
  // "ues strict"
  // debugger;

  function Book() {
    this.point = 100;
  };
  Book.prototype.getPoint = function () {
    return this.point;
  };
  const obj = new Book();
  /*
  1. 오른쪽의 obj를 펼치면
      - point: 100이 있으며 인스턴스 프로퍼티입니다.
      - 생성자 함수에서 this.point = 100으로 설정한 것 입니다.

  2. __proto__를 펼치면
      - prototype에 연결된 메소드가 표시됩니다.
      - getPoint는 Book.prototype.getPoint를 참조합니다.
      - __proto__에 복사하지 않습니다.
  */
  // debugger;

  console.log(obj.getPoint());
  /*
  1. 생성한 인스턴스 이름을 사용하여
      - getPoint() 메소드를 호출하면
      - 호출된 메소드에서 this로 인스턴스를 참조할 수 있습니다.
  */
  // debugger;
};
