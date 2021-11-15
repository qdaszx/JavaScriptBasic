# Class 작성 기준

클래스는 strict 모드에서 실행되므로 이에 맞추어 코드를 작성해야 합니다.

### 클래스에 메소드를 작성하는 방법

1. function 키워드를 작성하지 않습니다.
2. 메소드와 메소드 사이에 콤마를 작성하지 않습니다.
3. 세미콜론은 작성하지 않아도 됩니다.

클래스의 typeof는 function입니다.

Class 타입이 별도로 있지 않습니다.

```js
console.log("[코드1] 메소드 작성 방법");
class Point {
  setPoint(point) {
    this.point = point;
  }
  getPoint() {
    return this.point;
  }
}
console.log(typeof Point); // function
```

## computed name

메소드 이름을 조합하여 사용합니다.

대괄호 안에 조합할 이름을 작성합니다.

조합한 결과가 메소드 이름이 됩니다.

```js
console.log("[코드2] 메소드 이름 조합");
const name = "Point";
class Point2 {
  static ["get" + name](add) {
    return add ? 100 : 50;
  }
}
console.log(Point2["get" + name](true)); // 100
```

    1. static["get" + name](add){...}
      "get"과 name 변숫값인 "Point"를 연결하여 메소드 이름으로 사용합니다.
    2. 엔진이 class 키워드를 만나면 클래스를 오브젝트로 만들게 되며 []의 조합 결과를 메소드 이름으로 사용합니다.
    3. 따라서 class 키워드 앞에 name 변숫값을 정의해야 합니다.
    4. Point["get" + name](true)
      메소드 이름을 조합하여 호출할 수 있습니다.

## Class 작성 기준

### 메소드를 prototype에 연결하여 작성하지 않습니다.

```js
console.log("[코드3] prototype에 연결하지 않음");
const Point3 = class {
  setPoint(point) {
    this.point = point;
  }
};
console.log(Point3.prototype.setPoint); // setPoint(point) {this.point = point;}
```

    1. setPoint(){...} 형태로 작성하면 엔진이 prototype에 연결된 구조로 변환합니다.
    2. console.log(Point.prototype.setPoint)
      prototype에 연결된 구조로 변환하므로 [실행 결과]에 메소드 코드가 출력됩니다.

### 클래스 밖에서 메소드를 prototype에 연결할 수 있습니다.

```js
console.log("[코드4] 클래스 밖에서 메소드 연결");
const Point4 = class {};
const obj4 = new Point4();
Point4.prototype.getPoint = function () {
  return 100;
};
console.log(obj4.getPoint()); // 100
```

    1. Point.prototype.getPoint = function(){...}
      클래스 밖에서 prototype에 메소드를 연결할 수 있습니다.
    2. obj.getPoint()
      prototype에 추가로 연결한 메소드를 인스턴스에서 호출할 수 있습니다.

클래스는 열거할 수 없습니다.

## prototype에 메소드 추가

```js
{
  ("use strict");
  debugger;

  const Book = class {
    setTitle(title) {
      this.title = title;
    }
  };
  /*
  1. Book을 펼치면, 프로퍼티와 prototype이 있습니다.

  2. prototype을 펼치면, setTitle()이 있습니다.
  */
  debugger;

  //------
  const obj = new Book();
  obj.setTitle("자바스크립트");
  /*
  1. obj를 펼치면, title 프로퍼티가 있으며 이것은 setTitle()에 설정한 것 입니다.

  2. title처럼 인스턴스에 바로 연결된 프로퍼티를 인스턴스 프로퍼티라고 부릅니다.

  3. obj.__proto__를 펼치면, setTitle()이 있습니다.

  4. 인스턴스 프로퍼티는 __proto__ 위에 표시되며 메소드는 __proto__ 안에 표시됩니다.
  */
  debugger;

  //-----
  Book.prototype.getTitle = function () {
    return this.title;
  };
  /*
  1. Book.prototype에 getTitle()이 추가됩니다.

  2. obj.__proto__에 getTitle()이 표시됩니다.

  3. prototype에 메소드를 추가로 연결하면 생성된 모든 인스턴스에서 메소드를 사용할 수 있습니다.

  4. 이것을 prototype sharing(공유)이라고 부릅니다.
  */
  debugger;

  console.log(obj.getTitle());
  /*
  1. obj 인스턴스의 getTitle() 메소드가 호출되며 "자바스크립트"를 반환합니다.
  */
  debugger;
}
```
