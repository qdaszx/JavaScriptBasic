# construct() | apply()

## construct()

| 구분     | 개요                                    |
| :------- | :-------------------------------------- |
| 파라미터 | target, 호출할 생성자 함수              |
|          | [param], 호출할 함수에 넘겨 줄 파라미터 |
|          | newTarget, (선택) 새로운 생성자 함수    |
| 반환     | 생성한 인스턴스                         |

인스턴스를 생성하여 반환합니다.

### Reflect.construct(target, params) 형태입니다.

```js
console.log("[코드1] Reflect.construct(target, params) 형태");
class Point {
  constructor(one, two) {
    this.point = one + two;
  }
}
const obj = Reflect.construct(Point, [100, 200]);
console.log(obj.point); // 300
```

    1. Reflect.construct(Point, [100, 200])
      Point 클래스의 constructor()를 호출합니다.
      [100] 처럼 값이 하나라도 배열로 작성합니다.

    2. constructor(one, two){...}
      100이 one에 200이 two에 설정됩니다.

    3. Point 인스턴스를 생성하여 반환합니다.

### 세 번째 파라미터는 작성합니다.

생성자 함수를 작성합니다.

작성한 함수로 인스턴스를 생성합니다.

```js
console.log("[코드2] 세 번째의 newTarget 파라미터 사용");
class Point2 {
  constructor(point) {
    this.point = point;
  }
  getPoint() {
    return this.point;
  }
}
class Book2 {
  getTitle() {
    return "JS: " + this.point;
  }
}
const obj2 = Reflect.construct(Point2, [100], Book2);
console.log(obj2.getPoint); // undefined
console.log(obj2.getTitle()); // JS: 100
```

    1. const obj = Reflect.construct(Point, [100], Book);
      3번째 파라미터에 Book 클래스를 작성했습니다.
      Point 클래스의 constructor가 호출됩니다.

    2. constructor(point){this.point = point}
      Point가 아니라 Book으로 인스턴스를 생성합니다.
      this가 Book 클래스를 참조합니다.

    3. this.point = point;
      point가 인스턴스 프로퍼티로 설정됩니다.

    4. 외부 API 사용처럼 변경할 수 없는 환경에서
      클래스의 프로퍼티를 인스턴스 프로퍼티로 사용하면서
      클래스의 prototype을 오버라이드하는 형태로 사용할 수 있습니다.

    5. obj.getPoint
      obj 인스턴스에 getPoint()가 없으므로 undefined 출력

    6. obj.getTitle()
      Book의 getTitle()이 호출됩니다.

### 핸들어의 construct() 트랩 호출

```js
console.log("[코드3] construct() 트랩 호출");
class Point3 {
  constructor(...point) {
    this.point = point;
  }
  getPoint() {
    return this.point;
  }
}
const handler3 = {
  construct(target, params, proxy) {
    return Reflect.construct(target, params);
  },
};
const proxy3 = new Proxy(Point3, handler3);
const obj3 = Reflect.construct(proxy3, [1, 2]);
console.log(obj3.getPoint()); // [1, 2]
```

    1. const obj = Reflect.construct(proxy, [1, 2]);
      construct() 트랩이 호출됩니다.

    2. 트랩: construct(target, params, proxy){...}
      Point 클래스가 target에, [1, 2]가 params에 설정됩니다.
      proxy에 Proxy 인스턴스가 설정됩니다.

## apply()

| 구분     | 개요                                   |
| :------- | :------------------------------------- |
| 파라미터 | target, 호출할 함수                    |
|          | this, (선택) this로 참조할 오브젝트/값 |
|          | (선택) 호출할 함수에 넘겨 줄 파라미터  |
| 반환     | 호출된 함수에서 반환된 값              |

target에 작성한 함수를 호출합니다.

### Reflect.apply(target, {}, key) 형태입니다.

```js
console.log("[코드4] apply(target, {}, key) 형태");
function add(...values) {
  return values.map((value) => {
    return value + this.plus;
  });
}
console.log(Reflect.apply(add, { plus: 100 }, [1, 2])); // [101, 102]
```

    1. Reflect.apply(add, {plus: 100}, [1, 2])
      add() 함수를 호출합니다.

    2. function add(...values){...}
      [1, 2]가 values 파라미터에 설정됩니다.

    3. map()에서 this가 {plus: 100}을 참조합니다.
      코드처럼 화살표 함수를 사용해야 합니다.
      map(function(value){...}) 형태는 this가 window를 참조합니다.

### call(), apply() 통합

```js
console.log("[코드5] call(), apply() 통합");
const indexOf = String.prototype.indexOf;

console.log(indexOf.call("ABC", "B")); // 1
console.log(Reflect.apply(indexOf, "ABC", ["B"])); // 1
```

    1. const indexOf = String.prototype.indexOf;
      String.prototype.indexOf() 메소드입니다.

    2. call()로 호출
      indexOf.call("ABC", "B");

    3. Reflect.apply()로 호출
      Reflect.apply(indexOf, "ABC", ["B"])
      call()과 apply()를 통합하여 Reflect.apply()로 호출합니다.

### 핸들러의 apply() 트랩 호출

```js
console.log("[코드6] apply() 트랩 호출");
function add6(...values) {
  return values.map((value) => {
    return value + this.plus;
  });
}
const handler6 = {
  apply(target, that, params) {
    return Reflect.apply(target, that, params);
  },
};
const obj6 = new Proxy(add6, handler6);
console.log(obj6.apply({ plus: 100 }, [1, 2])); // [101, 102]
```

    1. const obj = new Proxy(add, handler);
      add가 apply() 트랩에서 호출할 함수입니다.

    2. obj.apply({plus: 100}, [1, 2])
      apply() 트랩이 호출됩니다.

    3. 트랩: apply(target, that, params){...}
      add() 함수가 target에 설정됩니다.
      {plus: 100}이 that에 설정되고
      [1, 2]가 params에 설정됩니다.
