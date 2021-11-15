# getter, setter, static 메소드

## getter

getter는 메소드를 호출하여 값을 구합니다.

메소드를 호출할 떄는 name() 처럼 소괄호를 사용하지만

getter는 소괄호를 작성하지 않고 name만 작성합니다.

파라미터를 사용할 수 없습니다.

### 클래스에 getter를 작성하는 방법

```js
console.log("[코드1] getter 작성 방법");
class Point {
  constructor(point) {
    this.point = point;
  }
  get getPoint() {
    return this.point;
  }
}
const obj = new Point(100);
console.log(obj.getPoint); // 100
```

    1. get getPoint(){...}
      getter는 메소드 이름 앞에 get을 작성합니다.
    2. console.log(obj.getPoint)
      getter 이름을 작성하면 getter가 호출됩니다.
    3. getter에서 100을 반환합니다.

## setter

setter는 메소드를 호출하여 값을 설정합니다.

setter도 getter처럼 소괄호를 작성하지 않고 이름만 작성합니다.

### 클래스에 setter 작성 방법

```js
console.log("[코드2] setter 작성 방법");
class Point2 {
  set setPoint(point) {
    this.point = point;
  }
}
const obj2 = new Point2();
obj2.setPoint = 100;
console.log(obj2.point); // 100
```

    1. set setPoint(point){...}
      setter는 메소드 이름 앞에 set을 작성합니다.
    2. obj.setPoint = 100;
      값을 setter에 할당하면 setter가 호출되며
      할당하는 값 100을 파라미터로 넘겨줍니다.

## static 메소드

Syntax -> static name(){...}

### static 메소드 작성 방법

```js
console.log("[코드3] static 메소드");
class Point3 {
  static getPoint() {
    return 100;
  }
}
console.log(Point3.getPoint()); // 100
```

    1. static getPoint(){...}
      메소드 이름 앞에 static을 작성합니다.
      정적 메소드라고 부릅니다.
    2. Point.getPoint()
      Point 클래스 이름에 이어서 getPoint()를 작성합니다.
      그러면 getPoint()가 호출됩니다.
    3. 인스턴스의 메소드로 호출하지 않습니다.
    4. 호출하는 방법이 다르므로 ES5에서는 함수와 메소드를 구분했지만
      ES6에서는 static 메소드도 구분해야 합니다.
    5. 클래스만 static을 사용할 수 있습니다.

static 메소드의 구조적 특징

prototype이 아닌 클래스에 연결되며 생성한 인스턴스에 할당되지 않습니다.

```js
console.log("[코드4] 클래스에 연결됨");
class Point4 {
  static getPoint() {
    return 100;
  }
}
const obj4 = new Point4();
console.log(obj4.getPoint); // undefined
```

    1. static getPoint(){...}
      엔진이 Point 오브젝트를 만들면서 static 메소드를 Function 오브젝트로 만듭니다.
    2. 그러므로 Point.getPoint() 형태로 호출할 수 있습니다.
    3. const obj = new Point();
      obj 인스턴스에 static 메소드가 설정되지 않습니다.
    4. obj 인스턴스에 getPoint가 없으므로 undefined가 출력됩니다.

## 호이스팅

클래스는 호이스팅 되지 않습니다.

const, let 변수처럼 class 키워드가 작성된 위치에서 클래스 이름 선언하고 또한, 오브젝트를 동시에 생성 하기 때문입니다.

```js
console.log("[코드5] 호이스팅 되지 않음");
try {
  const obj5 = Point5;
} catch {
  console.log("호이스팅 불가"); // 호이스팅 불가
}

class Point5 {
  static getPoint() {
    return 100;
  }
}
console.log(Point5.getPoint()); // 100
```

## new.target

new.target 프로퍼티는 함수 또는 생성자가 new 연산자로 호출된 여부를 반환합니다.

### new 연산자로 constructor를 호출하면 new.target은 constructor를 참조합니다.

```js
console.log("[코드6] constructor를 호출");
class Point6 {
  constructor() {
    console.log(new.target.name); // Point6
  }
}
new Point6();
```

    1. new Point()
      constructor를 호출합니다.
    2. new.target.name
      constructor에서 new.target은 constructor를 참조합니다.
    3. 또한, constructor가 클래스를 참조하므로 name 프로퍼티 값으로 Point가 출력됩니다.

### 함수로 호출하면 undefined 반환

```js
console.log("[코드7] 함수 호출");
function book() {
  console.log(new.target);
}
book(); // undefined
```

    1. book()
      new 연산자를 사용하지 않고 호출합니다.
    2. new.target
      함수로 호출하면 new.target은 undefined를 반환합니다.

### 정리

getter는 메소드를 호출하여 값을 구하는 것

이때 소괄호를 사용하지 않음

setter는 메소드를 호출하여 값을 설정하는 것

static 메소드는 클래스에 직접적으로 연결되기 때문에

직접 인스턴스를 만들어서 호출할 수는 없지만, className.staticMethodName으로 호출이 됩니다.

클래스는 호이스팅이 되지 않습니다.

이것은 class 키워드가 작성된 위치에서 class 이름 선언과 오브젝트 생성을 동시에 하기에 그렇습니다.

new.target 프로퍼티는 함수 또는 생성자가 new 연산자로 호출된 여부를 반환합니다.
