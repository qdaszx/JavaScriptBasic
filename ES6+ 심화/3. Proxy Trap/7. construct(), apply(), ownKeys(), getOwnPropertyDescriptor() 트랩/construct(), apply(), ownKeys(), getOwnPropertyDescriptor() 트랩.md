# construct(), apply(), ownKeys(), getOwnPropertyDescriptor() 트랩

## construct()

| 구분     | 개요                                 |
| :------- | :----------------------------------- |
| 파라미터 | target, 대상 오브젝트                |
|          | argumentsList, Array 또는 Array-like |
|          | newTarget, (선택)                    |
| 반환     | 생성한 인스턴스                      |

new 연산자의 트랩입니다.

인스턴스를 생성하여 반환합니다.

construct() 트랩이 호출되는 형태

- const obj = new Proxy(Point, handler);
  new obj()를 실행할 때 호출
- Reflect.construct()

```js
console.log("[코드1] construct() 트랩");
class Point {
  constructor(point) {
    this.point = point;
  }
}
const handler = {
  construct(target, args, proxy) {
    let point = args[0];
    if (Object.is(args[1], "add")) {
      point += args[2];
    }
    return new target(point);
  },
};
const obj = new Proxy(Point, handler);
const pointObj = new obj(100, "add", 300);
console.log(pointObj.point); // 400
```

    1. const obj = new Proxy(Point, handler);
      Point 클래스로 Proxy 인스턴스를 생성합니다.
    2. const pointObj = new obj(100, "add", 300);
      construct() 트랩이 호출됩니다.
    3. 트랩: constructor(target, args, proxy) {...}
      target에 Point 클래스가 설정되고
      args에 [100, "add", 300] 형태로 설정됩니다.
      proxy에 new Proxy()로 생성한 obj 인스턴스가 설정됩니다.
    *
    construct(){...} 트랩 처리
    4. Point 클래스의 constructor를 호출하기 전에 조건에 따라 인스턴스의 초깃값을 정리합니다.
    5. 트랩을 호출할 때마다 정리하지 않고 트랩에서 일괄적으로 정리하면 효율이 높습니다.
    6. 트랩을 이렇게 활용할 수 있습니다.

## apply()

| 구분     | 개요                                  |
| :------- | :------------------------------------ |
| 파라미터 | target, 호출할 함수                   |
|          | this, (선택) this로 참조할 오브젝트   |
|          | (선택) 호출할 함수에 넘겨 줄 파라미터 |
| 반환     | 호출된 함수에서 반환한 값             |

함수 호출 트랩입니다.

Proxy 인스턴스 호출로 트랩이 실행됩니다.

```js
console.log("[코드2] apply() 트랩");
function getPoint2(...values) {
  return values.map((value) => {
    return value + 10;
  });
}
const handler2 = {
  apply(target, that, params) {
    return target.apply(this, params);
  },
};
const obj2 = new Proxy(getPoint2, handler2);
console.log(obj2(100, 200)); // [110, 210]
```

    1. console.log(obj(100, 200))
      obj는 Proxy 인스턴스이며 이를 호출하면 apply() 트랩이 호출됩니다.
    2. 트랩: apply(target, that, params){...}
      target에 getPoint 함수가 설정됩니다.
      that은 다음 페이지에서 다룹니다.
      params에 [100, 200]이 설정됩니다.
    3. Proxy 인스턴스 호출로 인해 트랩이 실행되면 that에 값이 설정되지 않습니다.

call(), apply() 호출로 트랩이 실행된 형태는 다음 페이지에 다룹니다.

## apply() 트랩 호출

apply() 트랩이 호출되는 형태

- ### Function.prototype.apply()
- ### Function.prototype.call()
- proxy(...args): Proxy 인스턴스
- Reflect.apply()

```js
console.log("[코드3] apply() 호출");
function getPoint3(...values) {
  return values.map((value) => {
    return value + this.bonus;
  });
}
const handler3 = {
  apply(target, that, params) {
    return target.apply(that, params);
  },
};
const obj3 = new Proxy(getPoint3, handler3);
const add3 = { bonus: 10 };
console.log(obj3.apply(add3, [100, 200])); // [110, 210]
```

    1. obj.apply(add, [100, 200])
      apply() 호출하면 apply() 트랩이 호출됩니다.
    2. 첫 번째 파라미터에 getPoint()에서 this로 참조할 오브젝트를 작성합니다.
    3. 두 번째 파라미터에 getPoint()로 넘겨 줄 파라미터 값을 작성합니다.
    4. 트랩: apply(target, that, params){...}
      target에 getPoint 함수가 설정되고
      that에 add 오브젝트가 설정됩니다.
      params에 [100, 200]이 설정됩니다.

```js
console.log("[코드4] call() 호출");
function getPoint4(values) {
  return values.map((value) => {
    return value + this.bonus;
  });
}
const handler4 = {
  apply(target, that, ...params) {
    return target.apply(that, params);
  },
};
const obj4 = new Proxy(getPoint4, handler4);
const add4 = { bonus: 10 };
console.log(obj4.call(add4, 100, 200)); // [110, 210]
```

    1. obj.call(add, 100, 200)
      call() 호출하면 apply() 트랩이 호출됩니다.
    2. 첫 번째 파라미터에 getPoint()에서 this로 참조할 오브젝트를 작성합니다.
    3. 두 번째 파라미터 이후에 getPoint()로 넘겨 줄 파라미터 값을 작성합니다.
    4. call() 호출이므로 두 번째 파라미터 이후에 콤마로 구분하여 값을 작성합니다.
    5. 트랩: apply(target, that, ...params){...}
      target에 getPoint 함수가 설정되고
      that에 add 오브젝트가 설정됩니다.
      params에 [100, 200]이 설정됩니다.

## ownKeys()

| 구분     | 개요                  |
| :------- | :-------------------- |
| 파라미터 | target, 대상 오브젝트 |
| 반환     | Array, 프로퍼티 키    |

Object.getOwnPropertyNames()의 트랩입니다.

target의 모든 key를 배열로 반환합니다.

`[[Configurable]]: false`이거나 오브젝트가 확장 불가라도 반환합니다.

ownKeys() 트랩이 호출되는 형태

- Object.getOwnPropertyNames()
- Object.getOwnPropertySymbols()
- Object.keys()
- Reflect.ownKeys()

```js
console.log("[코드5] ownKeys() 트랩");
const target5 = {};
Object.defineProperties(target5, {
  point: { value: 100, enumerable: true },
  bonus: { value: 200 },
});
const handler5 = {
  ownKeys(target) {
    return Object.getOwnPropertyNames(target);
  },
};
const obj5 = new Proxy(target5, handler5);
console.log(Object.getOwnPropertyNames(obj5)); // ['point', 'bonus']
console.log(Object.keys(obj5)); // ['point']
```

    1. console.log(Object.getOwnPropertyNames(obj));
      ownKeys() 트랩이 호출됩니다.
    2. 트랩: return Object.getOwnPropertyNames(target);
      target 오브젝트의 모든 프로퍼티 key를 반환합니다.
    3. console.log(Object.keys(obj));
      트랩을 호출하며, 모든 프로퍼티 key를 반환합니다.
    4. 한편, Object.keys()는 {enumerable: false}인 프로퍼티는 반환하지 않습니다.
      그래서 point만 출력되었습니다.

## getOwnPropertyDescriptor()

| 구분     | 개요                      |
| :------- | :------------------------ |
| 파라미터 | target, 대상 오브젝트     |
|          | key, 프로퍼티 key         |
| 반환     | 디스크립터 또는 undefined |

Object.getOwnPropertyDescriptor()의 트랩입니다.

프로퍼티 디스크립터를 반환합니다.

getOwnPropertyDescriptor() 트랩이 호출되는 형태

- Object.getOwnPropertyDescriptor()
- Reflect.getOwnPropertyDescriptor()

```js
console.log("[코드6] getOwnPropertyDescriptor() 트랩");
const target6 = {};
Object.defineProperty(target6, "point", {
  value: 100,
  configurable: true,
});
const handler6 = {
  getOwnPropertyDescriptor(target, key) {
    const desc = Object.getOwnPropertyDescriptor(target, key);
    if (desc.configurable) {
      return { value: 300, configurable: true };
    }
    return desc;
  },
};
const obj6 = new Proxy(target6, handler6);
console.log(Object.getOwnPropertyDescriptor(obj6, "point")); // {value: 300, writable: false, enumerable: false, configurable: true}
```

    1. console.log(Object.getOwnPropertyDescriptor(obj, "point"));
      트랩이 호출됩니다.
    2. 트랩: if (desc.configurable){...}
      디스크립터의 configurable 값이 true이면 value 속성 값을 바꾸어 반환합니다.
    3. point 프로퍼티가 {configurable: true}이므로
      트랩에서 값을 바꾸어 반환할 수 있습니다.
      {configurable: false}일 때는 바꿀 수 없습니다.
