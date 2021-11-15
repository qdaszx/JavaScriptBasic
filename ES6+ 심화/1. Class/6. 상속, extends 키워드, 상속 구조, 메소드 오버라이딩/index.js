/*
상속

상속 Inheritance은 OOP 기능 중 하나입니다.
  - 클래스에 다른 클래스를 포함시키는 형태입니다.
  - 따라서 포함시킨 클래스의 메소드와 프로퍼티를 내 것처럼 사용할 수 있습니다.

상속해주는 클래스, 상속 받을 클래스를
  - 부모 클래스, 슈퍼 super 클래스라고 부릅니다.
  - 강좌에서는 슈퍼 클래스로 표기합니다.
  - super 키워드로 슈퍼 클래스를 참조합니다.

상속받는 클래스를
  - 자식 클래스, 서브 sub 클래스라고 부릅니다.
  - 강좌에서는 서브 클래스로 표기합니다.
*/

/*
extends 키워드

Syntax
  - subClass extends superClass {...}

extends 키워드로 상속을 구현합니다. [코드1]

상속 구조

메소드 오버라이딩 Overriding
*/

console.log("[코드1]");
class Book {
  constructor(title) {
    this.title = title;
  };
  getTitle() {
    return this.title;
  }
};
class Point extends Book {
  setPoint(point) {
    this.point = point;
  }
};
const obj = new Point("책");
console.log(obj.getTitle());  // 책
/**
 * 1. class Point extends Book {...}
 *    Point가 상속받는 서브 클래스이고 Book이 상속해주는 슈퍼 클래스입니다.
 * 2. 엔진이 extends 키워드를 만나면 Point 클래스에서 Book 클래스를 상속받아 구조적, 계층적인 형태로 만듭니다.
 * 3. Book.prototype에 연결된 메소드를 Point.prototype에 구조적으로 연결합니다.
 * 4. setPoint(point){...}
 *    setPoint()는 Point 클래스의 메소드입니다.
 */

// 상속 구조
{
  "use strict"
  debugger;

  class Book {
    constructor(title) {
      this.title = title;
    }
    getTitle() {
      return this.title;
    }
  };
  /*
  1. 엔진이 Book.prototype.getTitle() 형태로 만듭니다.
  */
  debugger;

  // ------
  class Point extends Book {
    setPoint(point) {
      this.point = point;
    }
  };
  /*
  1. Book{setPoint(point){...}}
      setPoint()는 Point 클래스의 메소드이며
      Point.prototype에 연결됩니다.

  2. 엔진이 extends 키워드를 만나면
      Point 클래스에서 Book 클래스를 상속받아
      서브와 슈퍼 구조를 만듭니다.
  */
  debugger;

  /*
  3. Point.prototype.__proto__를 펼치면 getTitle()이 있으며 Book.prototype에 연결된 메소드입니다.

  4. prototype.__proto__에 상속해주는 클래스의 prototype에 연결된 메소드를 구조적, 계층적으로 만듭니다.
  이것이 상속입니다.
  */
  debugger;

  /*
  1. Point.__proto__를 펼치면 상속받은 Book 클래스 전체가 표시됩니다.
  */
  debugger;

  // ---------
  const obj = new Point("책");
  /*
  1. new Point("책")를 실행하면 우선 Point 클래스의 constructor를 호출합니다.
      즉, Point.prototype의 constructor를 호출합니다.

  2. 이어서 Book 클래스의 constructor를 호출하며 constructor에 파라미터 값인 "책"을 넘겨 줍니다.
  */
  debugger;

  /*
  1. obj를 펼치면 {title: "책"}이 있으며 이것은 인스턴스 프로퍼티입니다.

  2. 이런 방법으로 인스턴스마다 고유의 프로퍼티 값을 가질 수 있습니다.

  3. 고유의 값을 갖는 것이 인스턴스 가장 큰 목적입니다.

  4. 상속이 클래스의 가장 큰 목적이 아닙니다.
      상속은 인스턴스 프로퍼티를 지원하기 위한 수단입니다.
  */
  debugger;

  /*
  5. obj.__proto__를 펼치면 setPoint()가 있으며 이것은 서브 클래스의 메소드입니다.

  6. obj.__proto__.__proto__를 펼치면 getTitle()이 있으며 이것은 슈퍼 클래스의 메소드입니다.
  */
  debugger;

  /*
  7. 이처럼 __proto__를 사용하여
      슈퍼 클래스의 prototype에 연결된 메소드를 구조적, 계층적으로 연결합니다.
      이것이 상속 구조입니다.

  8. 인스턴스의 메소드를 호출하면
      __proto__ 구조를 따라 아래로 내려 가면서 메소드를 식별합니다.
      식별하는 위치에 메소드가 있으면 실행합니다.
  */
  debugger;
}


// 메소드 오버라이딩 Overriding

{
  "use strict"
  debugger;

  class Book {
    constructor(title) {
      this.title = title;
    };
    getTitle() {
      return this.title;
    }
  }
  /*
  1. Book 클래스에 getTitle()을 작성했습니다.
  */
  debugger;
  // -------
  class Point extends Book {
    getTitle() {
      return "서브 클래스";
    }
  }
  /*
  1. 오버라이드 설명을 위해 Point 클래스에도 getTitle()을 작성했습니다.

  2. getTitle()이 양쪽 클래스에 있습니다.
  */
  debugger;

  // --------
  const obj = new Point("책");
  /*
  1. obj.__proto__를 펼치면 getTitle()이 있으며 이것은 서브 클래스의 메소드입니다.

  2. obj.__proto__.__proto__를 펼치면 getTitle()이 있으며 이것은 슈퍼 클래스의 메소드입니다.
  */
  debugger;

  // -----------
  console.log(obj.getTitle());
  /*
  1. obj.getTitle()을 호출하면 먼저 서브 클래스에서 찾습니다.
      즉, obj.__proto__에서 찾습니다.

  2. 없으면 슈퍼 클래스에서 찾습니다.
      즉, obj.__proto__.__proto__에서 찾습니다.

  3. obj.__proto__에 즉, 서브 클래스에 getTitle()이 있으므로 이것을 호출합니다.

  4. 이것을 메소드 오버라이딩이라고 합니다.
  */
  debugger;
};
