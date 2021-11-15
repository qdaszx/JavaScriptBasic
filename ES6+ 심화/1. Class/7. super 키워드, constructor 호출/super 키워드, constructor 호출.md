# super 키워드

슈퍼 클래스와 서브 클래스에 같은 이름의 메소드가 있으면 서브 클래스의 메소드가 호출됩니다. (오버라이딩)

super 키워드를 사용하여 슈퍼 클래스의 메소드를 호출할 수 있습니다.

### super.getTitle() 형태

```js
console.log("[코드1] super 키워드 사용");
class Book {
  getTitle() {
    console.log("슈퍼");
  }
}
class Point extends Book {
  getTitle() {
    super.getTitle();
    console.log("서브");
  }
}
new Point().getTitle(); // 슈퍼 서브
```

    1. new Point().getTitle();
      인스턴스를 생성하고 getTitle()을 호출하면 서브 클래스의 메소드가 호출됩니다.
    2. super.getTitle();
      super 키워드가 슈퍼 클래스를 참조하므로 슈퍼 클래스의 getTitle()이 호출됩니다.

## constructor 호출

서브와 슈퍼 클래스에 constructor를 모두 작성하지 않으면 디폴트 constructor가 호출됩니다.

즉, prototype.constructor가 호출됩니다.

```js
console.log("[코드2] 모두 작성하지 않음");
class Book2 {
  setTitle(title) {
    this.title = title;
  }
}
class Point2 extends Book2 {}
const obj2 = new Point2();
obj2.setTitle("책");
console.log(obj2.title); // 책
```

    1. const obj = new Point();
      Point 클래스에 constructor를 작성하지 않으면 Point.prototype.constructor가 호출됩니다.
    2. 이어서 Book 클래스의 constructor를 호출합니다.
      Book 클래스에 constructor를 작성하지 않으면 Book.prototype.constructor가 호출됩니다.
    3. 즉, 각 클래스의 constructor를 호출하며 클래스에 constructor를 작성하지 않으면 클래스의 prototype.constructor가 호출됩니다.

### 서브 클래스에 작성하지 않고 슈퍼 클래스에 작성하면 파라미터 값을 슈퍼 클래스로 넘겨줍니다.

```js
console.log("[코드3] 슈퍼 클래스에만 작성");
class Book3 {
  constructor(title) {
    this.title = title;
  }
}
class Point3 extends Book3 {}
const obj3 = new Point3("책");
console.log(obj3.title); // 책
```

    1. const obj = new Point("책");
      서브의 prototype.constructor가 호출됩니다.
      이어서 슈퍼의 constuctor를 호출하면서 파라미터 값인 "책"을 파라미터로 넘겨줍니다.

### 서브 클래스에는 작성하고 슈퍼 클래스에 작성하지 않으면 에러가 발생합니다.

```js
console.log("[코드4] 서브 클래스에만 작성");
class Book4 {
  setTitle(title) {
    this.title = title;
  }
}
class Point4 extends Book4 {
  // constructor(point) {
  //   this.point = point;
  // };
}
const obj4 = new Point4(100);
```

    1. 서브에 constructor를 작성하면 슈퍼에도 constructor를 작성해야 합니다.

서브 클래스와 슈퍼 클래스에 constructor를 모두 작성하면 서브 클래스에서 super()로 호출해야 합니다.

```js
console.log("[코드5] 서브와 슈퍼 모두 클래스 작성");
class Book5 {
  constructor(title) {
    this.title = title;
  }
}
class Point5 extends Book5 {
  constructor(title, point) {
    super(title);
    this.point = point;
  }
}
const obj5 = new Point5("책", 100);
console.log(`${obj5.title}, ${obj5.point}`); // 책, 100
```

    1. super(title);
      슈퍼의 constructor를 호출하며 title 파라미터 값을 파라미터로 넘겨줍니다.
    2. 이렇게 명시적으로 슈퍼의 constructor를 호출해야 합니다.
    3. 서브의 constructor에서 this를 사용하면 this를 사용하기 전에 super()를 호출해야 합니다.
