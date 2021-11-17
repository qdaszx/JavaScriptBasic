# has() 트랩, deleteProperty() 트랩

## has()

| 구분     | 개요                        |
| :------- | :-------------------------- |
| 파라미터 | target, 대상 오브젝트       |
|          | key, 프로퍼티 key           |
| 반환     | 존재하면 true, 아니면 false |

has() 트랩은 in 연산자의 트랩입니다.

target에 key의 존재 여부를 반환합니다.

### 프로퍼티 값을 true/false로 변환하여 반환합니다.

두 번째 파라미터에 Symbol 작성 가능합니다.

```js
console.log("[코드1] has()트랩");
const target = { point: 100 };
const handler = {
  has(target, key) {
    return target[key];
  },
};
const obj = new Proxy(target, handler);
console.log("point" in obj); // true
console.log("book" in obj); // false
```

    1. console.log("point" in obj);
      has() 트랩이 호출됩니다.
    2. has(target, key){...}
      target이 target에, "point"가 key에 설정됩니다.
    3. return target[key];
      target에 point가 있으며 값은 100입니다.
    4. 이때, 100을 그대로 return하지 않고 true/false로 변환하여 return 합니다.
    5. 100은 true로 변환되므로 true를 반환합니다.
      0을 true/false로 변환하면 false입니다.
    6. console.log("book" in obj);
      obj에 book이 없지만, has() 트랩을 호출합니다.
    7. return target[key];
      undefined를 반환하게 되지만 undefined를 false로 변환하여 반환합니다.

## has() 트랩 호출

has() 트랩이 호출되는 형태

- key in proxy
- ### key in Object.create(proxy, {프로퍼티})
- Reflect.has()

```js
console.log("[코드2]key in Object.create()");
const target2 = { point: 600, bonus: 100 };
const handler2 = {
  has(target, key) {
    return target[key];
  },
};
const proxy2 = new Proxy(target2, handler2);
const obj2 = Object.create(proxy2, {
  point: { value: 500 },
});
console.log("point" in obj2); // true
console.log("bonus" in obj2); // true
```

    1. console.log("point" in obj);
      obj 인스턴스 프로퍼티로 point가 있으므로 has() 트랩을 호출하지 않습니다.
    2. point 값 500을 변환하지 않고 true/false로 변환하여 반환하므로 true가 반환됩니다.
    3. console.log("bonus" in obj);
      obj 인스턴스 프로퍼티로 bonus가 없으므로 has() 트랩을 호출합니다.
    4. has() 트랩에서 target[key]의 값은 100이며
      100을 true/false로 변환하면 true입니다.

## has() 트랩 준수사항

오브젝트에 프로퍼티가 있으면서 오브젝트가 프로퍼티 추가 금지이거나 [[Configurable]]: false 이면 false를 지정하여 반환할 수 없지만 true는 지정하여 반환할 수 있습니다.

### 강제로 true/false를 반환하지 않고 has() 트랩에서 구한 값을 true/false로 변환하여 반환합니다.

```js
console.log("[코드3] false를 지정하여 반환 불가");
const target3 = { point: 100 };
Object.preventExtensions(target3);
const handler3 = {
  has(target, key) {
    console.log("has 트랩 실행");
    // return false;
    return target[key];
  },
};
const obj3 = new Proxy(target3, handler3);
console.log("point" in obj3); // has 트랩 실행 true
```

    1. Object.preventExtensions(target);
      target 오브젝트를 프로퍼티 추가 금지 상태로 설정합니다.
    2. console.log("point" in obj);
      추가 금지 상태라도 has() 트랩이 호출됩니다.
    3. // return false;
      추가 금지 상태에서 false를 지정하여 반환하면 에러가 발생합니다.
      그래서 주석으로 처리했습니다.
    4. return target[key];
      has() 트랩에서 구한 값을 true/false로 변환하여 반환하면 에러가 나지 않습니다.

## deleteProperty()

| 구분     | 개요                         |
| :------- | :--------------------------- |
| 파라미터 | target, 대상 오브젝트        |
|          | key, 프로퍼티 key            |
| 반환     | 처리 성공: true, 실패: false |

delete 연산자의 트랩입니다.

### 오브젝트의 프로퍼티를 삭제합니다.

delete 연산자는 프로퍼티가 없어도 true를 반환하므로 조건을 체크하여 true/false를 반환하면 완전하게 처리할 수 있습니다.

```js
console.log("[코드4] deleteProperty() 트랩");
const target4 = { point: 100 };
const handler4 = {
  deleteProperty(target, key) {
    if (key in target) {
      delete target[key];
      return true;
    }
    return false;
  },
};
const obj4 = new Proxy(target4, handler4);
console.log(delete obj4.point); // true
console.log(target4.point); // undefined
console.log(delete obj4.point); // false
console.log(delete target4.point); // true
```

    1. console.log(delete obj.point)
      deleteProperty() 트랩이 호출됩니다.
    2. if (key in target) {...}
      target 오브젝트에 point 프로퍼티가 있으므로 point 프로퍼티를 삭제하고 true를 반환합니다.
    3. console.log(target.point);
      트랩에서 point 프로퍼티를 삭제했으므로 undefined가 출력됩니다.
    4. console.log(delete obj.point);
      deleteProperty() 트랩이 호출됩니다.
      트랩에서 target에 point 프로퍼티가 없으므로 false를 반환합니다.
    5. console.log(delete target.point)
      deleteProperty() 트랩이 호출되지 않습니다.
      [[Delete]]가 호출됩니다.
      일반적인 delete 처리입니다.

## deleteProperty() 트랩 호출

deleteProperty() 트랩이 호출되는 형태

- delete[key]
- Reflect.deleteProperty()

## deleteProperty() 트랩 준수사항

### target 오브젝트의 프로퍼티가 [[Configurable]]: false이면 프로퍼티를 삭제할 수 없으며 에러가 발생합니다.

```js
console.log("[코드5] 프로퍼티 delete 불가");
const target5 = {};
Object.defineProperty(target5, "point", {
  value: 500,
  configurable: false,
});
const handler5 = {
  deleteProperty(target, key) {
    const descriptor = Object.getOwnPropertyDescriptor(target, key);
    if (descriptor.configurable) {
      delete target[key];
      return true;
    }
    return false;
  },
};
const obj5 = new Proxy(target5, handler5);
console.log(delete obj5.point); // false
```

    1. console.log(delete obj.point)
      deleteProperty() 트랩이 호출됩니다.
    2. Object.getOwnPropertyDescriptor(target, key);
      point 프로퍼티의 디스크립터를 구합니다.
    3. if (descriptor.configurable){...}
      configurable이 true이면 삭제할 수 있으며 point 프로퍼티를 삭제하고 true를 반환합니다.
    4. 한편, {configurable: false}이므로 false를 반환합니다.
