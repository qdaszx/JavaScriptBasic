// Class 선언, Class 구조

/*
Class 선언문

Syntax
  - class Name {body}

클래스 작성 방법
  - class 키워드에 이어 클래스 이름 작성합니다.
  - 이름의 첫문자는 대문자를 사용합니다. 개발자들 사이의 관례입니다.
  - 블록 {}을 작성하고 블록 안에 메소드를 작성합니다. [코드1]

대문자 Class는 개념적인 클래스를 뜻하고 소문자 class는 키워드입니다.
*/
console.log('[코드1] Class 선언문');
class Point {
  getPoint() {
    return 100;
  }
};
const obj = new Point();
console.log(obj.getPoint());  // 100
/**
 * 1. 엔진이 class 키워드를 만나면 클래스 오브젝트를 생성합니다.
 * 2. const obj = new Point();
 *    new 연산자를 사용하여 인스턴스를 생성합니다.
 * 3. new 연산자를 사용하지 않고 Point()를 호출하면 에러가 발생합니다.
 * 4. obj.getPoint()
 *    인스턴스의 getPoint() 메소드를 호출합니다.
 */

/*
Class 표현식

Syntax
  - const/let Name = class {body}

클래스 작성 방법
  - 변수 이름 Name이 클래스 이름이 됩니다.
  - 변수에 Class 오브젝트를 할당하는 형태입니다.
  - 다른 것은 클래스 선언문과 같습니다. [코드2]
*/
console.log("[코드2] Class 표현식");
const Point2 = class {
  getPoint() {
    return 100;
  }
};
const obj2 = new Point2();
console.log(obj2.getPoint()); // 100
/**
 * 1. 엔진이 class 키워드를 만나면 클래스 오브젝트를 생성하여 Point 변수에 할당합니다.
 * 2. Point 클래스 이름이 됩니다.
 */


// Class 형태
{
  "use strict"
  debugger;

  const Point = class {
    getPoint() {
      return 100;
    }
  }
  /*
  1. Point를 펼치면
      프로퍼티, prototype, __proto__가 있습니다.
  */
  debugger;
  /*
  2. prototype을 펼치면 constructor가 있으며, getPoint()가 있습니다.

  3. constructor는 Point 클래스 전체를 참조합니다.

  4. 클래스에 메소드를 작성하면 prototype에 연결됩니다.
      Point.prototype.getPoint = function(){} 형태로 작성한 것과 같습니다.

  5. __proto__ 에서 빌트인 Function 오브젝트의 prototype에 연결된 메소드를 참조합니다.
  */
  debugger;

  // ------

  const obj = new Point();
  /*
  1. Point 클래스로 인스턴스를 생성합니다.
  2. obj를 펼치면 __proto__가 있으며 constructor와 getPoint()가 있습니다.
  3. Point.prototype에 연결된 메소드로 인스턴스를 생성하고 __proto__에서 참조할 수 있도록 만듭니다.
  */
  debugger;

  console.log(obj.getPoint());
  /*
  1. obj 인스턴스의 getPoint() 메소드를 호출합니다
      obj.__proto__에 연결된 getPoint()가 호출됩니다.
  */
  debugger;
}

/*
const, let 사용 기준

강좌의 const, let 사용 기준
  - 값이 대체되지 않으면 const를 사용하고
  - 값이 대체되면 let을 사용합니다.

오브젝트의 프로퍼티가 변경되더라도
  - 오브젝트 자체가 대체되지 않으면 const
  - Class, Array, 인스턴스
*/

/*
함수, 메소드 기준

강좌의 함수, 메소드 사용 기준

함수
  - 인스턴스를 생성하지 않고 직접 호출 [코드3]

메소드
  - 인스턴스를 사용하여 호출하는 함수로 prototype에 연결되어 있습니다.
  - 클래스에 작성한 함수 [코드4]
  - prototype에 연결된 function [코드5]
  - 빌트인 오브젝트의 prototype에 연결된 함수 [코드6]
*/
console.log('[코드3] 함수');
console.log(Array.isArray([])); // true

const point3 = {
  getPoint() {
    return 100;
  }
};
console.log(point3.getPoint()); // 100

console.log('[코드4] 클래스에 작성한 함수');
class Point4 {
  getPoint() {
    return 100;
  }
};
const obj4 = new Point4();
console.log(obj4.getPoint()); // 100
/**
 * 1. getPoint는 직접 호출할 수 없고 인스턴스를 사용하여 호출해야 합니다.
 */

console.log('[코드5] prototype에 연결된 function');
const Point5 = function () { };
Point5.prototype.getPoint = function () {
  return 100;
};
const obj5 = new Point5();
console.log(obj5.getPoint()); // 100
/**
 * 1. Point.prototype.getPoint
 *    prototype에 연결된 함수는 메소드입니다.
 * 2. getPoint를 직접 호출할 수도 있지만 일반적으로 인스턴스를 생성하여 호출합니다.
 */

console.log('[코드6] 빌트인 오브젝트');
const list = [];
list.push("책");
console.log(list);  // [책]
/**
 * 1. push() 메소드는 Array.prototype에 연결되어 있습니다.
 */