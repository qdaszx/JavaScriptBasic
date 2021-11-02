# setPrototypeOf() : prototype 사용

| 구분     | 데이터(값)                     |
| :------- | :----------------------------- |
| 형태     | Object.setPrototypeOf()        |
| 파라미터 | 오브젝트 또는 인스턴스         |
|          | 오브젝트의 prototype 또는 null |
| 반환     | 첫 번째 파라미터               |

첫 번째 파라미터에 prototype을 작성하는 케이스

첫 번째 파라미터의 prototype에 두 번째 파라미터의 prototype에 연결된 프로퍼티를 **설정**합니다.

### prototype 연결 후의 인스턴스 구조

```js
{
  ("use strict");
  debugger;

  // 함수 블록에 코드를 작성하지 않았습니다.
  function Book() {}
  Book.prototype.getBook = function () {};

  function Point() {}
  Point.prototype.getPoint = function () {};
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
}
```

설정이란 대체를 시키는 것이 아니라 `__proto__`를 만들어서 거기에 설정한다는 것 입니다.

이것은 마치 상속 개념으로 볼 수 있습니다.

그러나 이것은 상속은 아닙니다.

상속을 위한 목적이라면 super 등의 상속 처리 키워드를 제공하는 Class를 사용하는 것이 좋습니다.

왜냐하면 인스턴스를 상속 시킨다는 것은 생성자 함수를 실행한다는 것 입니다.

생성자 함수는 일반적으로 this.point = 100;과 같이 this로 참조할 수 있는 프로퍼티들을 작성하게 됩니다. 그것이 인스턴스의 특징입니다.

그런 측면하고 prototype에 확장하고는 개념이 다릅니다.

생성자 함수 처리 기능이 없습니다. 그래서 생성자 처리가 필요 없다고 한다면 setPrototypeOf()함수로 prototype을 확장시키는 것이고 객체지향에서 얘기하는 상속으로 처리한다면 Class를 사용하는 것이 좋다는 것입니다.
