# getPrototypeOf() setPrototypeOf() 트랩

## getPrototypeOf()

| 구분     | 개요                  |
| :------- | :-------------------- |
| 파라미터 | target, 대상 오브젝트 |
| 반환     | 오브젝트 또는 null    |

내부 메소드 [[GetPrototypeOf]]의 트랩입니다.

target의 prototype을 반환합니다.

target이 확장 불가라도 prototype을 반환합니다.

String, Number처럼 값을 반환하면 TypeError가 납니다.

트랩 준수 사항

- target이 확장 불가일 떄, Object.getPrototypeOf(target)와 같은 값을 반환해야 합니다.

```js
console.log("[코드1] getPrototypeOf() 트랩");
class Point {
  getPoint() {
    return 100;
  }
}
const handler = {
  getPrototypeOf(target) {
    return target.prototype;
  },
};
const obj = new Proxy(Point, handler);
const proto = Object.getPrototypeOf(obj);
console.log(proto.getPoint); // getPoint() { return 100; }
```

    1. const obj = new Proxy(Point, handler);
      첫 번째 파라미터에 Point 클래스를 작성했습니다.
      트랩에서 Point.prototype을 구하기 위해서입니다.
      obj.[[Target]]에서 Point 클래스가 설정됩니다.
    2. const proto = Object.getPrototypeOf(obj);
      getPrototypeOf() 트랩이 호출됩니다.
    3. 트랩: getPrototypeOf(target) {...}
      target에 Point 클래스가 설정됩니다.
    4. 트랩: return target.prototype;
      Point.prototype을 반환합니다.
    5. console.log(proto.getPoint);
      Point.prototype에 getPoint()가 있으므로 메소드 코드가 출력됩니다.

## getPrototypeOf() 트랩 호출

getPrototypeOf() 트랩이 호출되는 형태

- Object.getPrototypeOf()
- `__proto__`
- `instanceof`
- Object.prototype.isPrototypeOf()
- Reflect.getPrototypeOf()

```js
console.log("[코드2] __proto__");
class Point2 {
  getPoint() {
    return 100;
  }
}
const handler2 = {
  getPrototypeOf(target) {
    return this.list ? Array.prototype : target.prototype;
  },
};
const obj2 = new Proxy(Point2, handler2);
handler2.list = true;
const proto2 = obj2.__proto__;
console.log(proto2.map); // map() { [native code] }
```

    1. handler.list = true;
      getPrototypeOf() 트랩에서 체크 값으로 사용합니다.
    2. const proto = obj.__proto__
      getPrototypeOf() 트랩이 호출됩니다.
      트랩에서 Array.prototype을 반환합니다.
    3. console.log(proto.map)
      map 메소드가 있으므로 코드가 출력됩니다.
    4. 조건에 따라 반환되는 prototype을 바꿀 수 있습니다.

```js
console.log("[코드3] instanceof");
class Point3 {
  getPoint() {
    return 100;
  }
}
const handler3 = {
  getPrototypeOf(target) {
    return Point3.prototype;
  },
};
const target3 = new Point3();
console.log(target3 instanceof Point3); // true
console.log(Point3.prototype instanceof Point3); // false

const obj3 = new Proxy(target3, handler3);
console.log(obj3 instanceof Point3); // true
```

    1. console.log(target instanceof Point)
      target을 Point로 만들었으므로 true가 출력됩니다.
    2. console.log(Point.prototype instanceof Point)
      Point.prototype이 인스턴스가 아니므로 false가 출력됩니다.
    3. console.log(obj instanceof Point)
      getPrototypeOf() 트랩이 호출됩니다.
      트랩에서 Point.prototype을 반환합니다.
    4. (Point.prototype instanceof Point) 형태가 되므로 false가 출력되어야 하는데 true가 출력됩니다.

## setPrototypeOf()

| 구분     | 개요                           |
| :------- | :----------------------------- |
| 파라미터 | target, 대상 오브젝트          |
|          | prototype, prototype 또는 null |
| 반환     | 처리 성공: true, 실패: false   |

Object.setPrototypeOf() 특징

### target의 `__proto__` 에 두 번째 파라미터를 설정합니다.

```js
console.log("[코드4] Object.setPrototypeOf()");
class Book4 {
  setTitle() {
    return "책";
  }
}
class Point4 {
  getPoint() {
    return 100;
  }
}
Object.setPrototypeOf(Book4, Point4.prototype);

console.log(Book4.prototype.getPoint); // undefined
console.log(Book4.__proto__.getPoint); // getPoint() { return 100; }
const obj4 = new Book4();
console.log(obj4.getPoint); // undefined
```

    1. Object.setPrototypeOf(Book, Point.prototype);
      Book.__proto__에 있는 Function.prototype이 Point.prototype으로 대체됩니다.
    2. console.log(Book.prototype.getPoint)
      Book.__proto__에 설정되므로 undefined가 출력됩니다.
    3. Book.__proto__.getPoint
      getPoint() 코드가 출력됩니다.
    4. console.log(obj.getPoint)
      Book.prototype으로 인스턴스를 생성하므로 obj 인스턴스에 getPoint가 없습니다.

### Object.setPrototypeOf()의 트랩입니다.

트랩 준수 사항

- target이 확장 불가일 때 두 번째 파라미터의 prototype과 Object.getPrototypeOf(target)로 구한 것과 같아야 합니다.

```js
console.log("[코드5] setPrototype() 트랩");
class Book5 {
  setTitle() {
    return "책";
  }
}
class Point5 {
  getPoint() {
    return 100;
  }
}
const handler5 = {
  setPrototypeOf(target, proto) {
    Object.setPrototypeOf(target, proto);
    return true;
  },
};
const obj5 = new Proxy(Book5, handler5);
Object.setPrototypeOf(obj5, Point5.prototype);
console.log(Book5.prototype.getPoint); // undefined
console.log(Book5.__proto__.getPoint); // getPoint() { return 100 }
console.log(obj5.getPoint); // getPoint() { return 100 }
```

    1. Object.setPrototypeOf(obj, Point.prototype);
      setPrototypeOf() 트랩이 호출됩니다.
    2. 트랩: setPrototypeOf(target, proto){...}
      target에 Book 클래스가 설정되고 proto에 Point.prototye이 설정됩니다.
    3. 트랩: Object.setPrototypeOf(target, proto);
      Book.__proto__와 obj.[[Target]].__proto__가 Point.prototype으로 대체됩니다.
    4. true를 반환하지 않으면 에러가 발생합니다.
    5. console.log(Book.prototype.getPoint)
      undefined가 출력되며, Point.prototype이 Book.prototype에 설정되지 않기 때문입니다.
    6. console.log(Book.__proto__.getPoint)
      getPoint 코드가 출력됩니다.
    7. console.log(obj.getPoint)
      getPoint 코드가 출력되며
      obj.[[Target]].__proto__에
      getPoint가 있기 때문입니다.

## setPrototypeOf() 트랩 호출

setPrototypeOf() 트랩이 호출되는 형태

- Object.setPrototypeOf()
- Reflect.setPrototypeOf()
