/*
setPrototypeOf() : prototype 사용

구분 ::: 데이터(값)
형태 ::: Object.setPrototypeOf()
파라미터 ::: 1. 오브젝트 또는 인스턴스 2. 오브젝트의 prototype 또는 null
반환 ::: 첫 번째 파라미터

- 첫 번째 파라미터에 prototype을 작성

- 첫 번째 파라미터의 prototype에 두 번째 파라미터의 prototype에 연결된 프로퍼티를 설정

- prototype 연결 후의 인스턴스 구조

- 상속을 위한 목적이라면 super 등의 상속 처리 키워드를 제공하는 Class를 사용하는 것이 좋습니다.
*/

// prototype 연결 후의 인스턴스 구조
{
  "use strict"
  debugger;

  // 함수 블록에 코드를 작성하지 않았습니다.
  function Book() { };
  Book.prototype.getBook = function () { };

  function Point() { };
  Point.prototype.getPoint = function () { };
  debugger;

  Object.setPrototypeOf(Point.prototype, Book.prototype);
  /*
  1. Point.prototype에 Book.prototype에 연결된 프로퍼티를 설정합니다.

  2. Point.prototype에 설정하므로 이것을 펼치면 Book.prototype.getBook()이 있어야 하는데 없습니다.

  3. 또한, Point.prototype에 연결한 메소드가 지워지지 않고 유지됩니다.
  */
  debugger;
  /*
  4. 한편, Point.prototype.__proto__를 펼치면 getBook()이 표시됩니다.

  5. setPrototypeOf() 함수 이름의 뉘앙스가 prototype에 설정하는 것처럼 보이지만 prototype에 __proto__를 만들고 여기에 설정합니다.
  */
  debugger;

  /*
  6. prototype에 설정하면 getPoint()가 지워지므로 Point에 작성된 메소드를 사용할 수 없게 됩니다.

  7. 이를 피하기 위해 __proto__를 만들어 설정한 것 입니다.

  8. __proto__로 구조적으로 계층을 만들어 설정하므로 같은 이름의 메소드가 있더라도 대체되지 않습니다.

  9. 식별자 해결을 할 때, __proto__ 순서로 검색하므로 같은 이름의 메소드가 있을 때, 앞의 메소드가 호출됩니다.
  */
  debugger;

  const obj = new Point(300);
  /*
  1. new Point(300)를 실행하면 Point.prototype에 연결된 메소드로 인스턴스를 생성합니다.

  2. 오른쪽의 obj를 펼치면 obj.__proto__.__proto__ 구조입니다. 이것은 Point.prototype 구조와 같습니다.

  3. 위의 __proto__에 Point.prototype에 연결된 메소드가 설정되고 아래의 __proto__에 Book.prototype에 연결된 메소드가 설정됩니다.
  */
  debugger;
};