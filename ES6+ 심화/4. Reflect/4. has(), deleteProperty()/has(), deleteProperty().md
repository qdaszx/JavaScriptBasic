# has() deleteProperty()

## has()

| 구분     | 개요                              |
| :------- | :-------------------------------- |
| 파라미터 | target, 대상 오브젝트             |
|          | key, 프로퍼티 key                 |
| 반환     | key가 존재하면 true, 아니면 false |

target에 key의 존재 여부를 반환합니다.

### Reflect.has(target, key) 형태로 작성합니다.

```js
console.log("[코드1] has(target, key) 형태");
const target = {
  point: 100,
};
console.log(Reflect.has(target, "point")); // true
```

    1. Reflect.has(target, "point")
      target 오브젝트에 "point"가 프로퍼티 키로
      존재하면 true를 반환하고 존재하지 않으면 false를 반환합니다.

### 상속받은 prototype, `__proto__` 도 검색합니다.

```js
console.log("[코드2] 상속받은 prototype까지 검색");
function target2() {}
console.log(Reflect.has(target2, "hasOwnProperty")); // true
```

    1. Reflect.has(target, "hasOwnProperty");
      target 함수에 hasOwnProperty()를 작성하지 않았지만 true가 반환됩니다.

    2. target 함수 구조를 보면 target.prototype에 hasOwnProperty()가 없지만
      target.prototype.__proto__에 있기 때문입니다.

### 핸들러의 has() 트랩을 호출합니다.

```js
console.log("[코드3] has() 트랩 호출");
const target3 = { point: 100 };
const handler3 = {
  has(target, key) {
    return Reflect.has(target, key);
  },
};
const proxy3 = new Proxy(target3, handler3);
console.log("point" in proxy3); // true
```

    1. console.log("point" in proxy);
      has() 트랩이 호출됩니다.

    2. 트랩: has(target, key){...}
      target 오브젝트, "point"가 설정됩니다.

    3. 트랩: return Reflect.has(target, key);
      return을 작성하지 않으면 target에 key가 존재하더라도 false가 반환됩니다.

## deleteProperty()

| 구분     | 개요                         |
| :------- | :--------------------------- |
| 파라미터 | target, 대상 오브젝트        |
|          | keys, 프로퍼티 키            |
|          | 삭제 성공: true, 실패: false |
| 반환     | 삭제 성공: true, 실패 false  |

target에서 key를 삭제합니다.

### Reflect.deleteProperty() 형태입니다.

```js
console.log("[코드4] Reflect.deleteProperty() 형태");
const target4 = { point: 100 };
console.log(Reflect.deleteProperty(target4, "point")); // true
console.log(Reflect.deleteProperty(target4, "point")); // true
```

    1. Reflect.deleteProperty(target, "point");
      삭제 처리를 성공하면 true를 반환하고
      실패하면 false를 반환합니다.

    2. 두 번째의
      Reflect.deleteProperty(target, "point");
      프로퍼티가 존재하지 않더라도 true를 반환합니다.
      프로퍼티 삭제 여부가 아닌 삭제 처리 수행의 성공/실패가 기준입니다.

    3. 이어서 false가 반환되는 경우를 살펴봅니다.

### false 반환

```js
console.log("[코드5] false 반환");
const target5 = {};
Object.defineProperty(target5, "point", {
  value: 100,
  configurable: false,
});
console.log(Reflect.deleteProperty(target5, "point")); // false
```

    1. Reflect.deleteProperty(target, "point")
      point가 {configurable: false}이므로 삭제할 수 없습니다.
      이때, false를 반환합니다.

    2. 이것이 삭제 처리 실패입니다.

### 인덱스로 배열 엘리먼트를 삭제합니다.

```js
console.log("[코드6] 인덱스로 배열 엘리먼트 삭제");
const target6 = [1, 2, 3, 4];
Reflect.deleteProperty(target6, 1);
console.log(target6); // [1, empty, 3, 4]
```

    1. Reflect.deleteProperty(target, 1);
      target이 배열일 때
      두 번째 파라미터 1은 배열의 인덱스입니다.

    2. 1번 인덱스 값인 2를 삭제하며
      삭제한 인덱스의 엘리먼트에 undefined를 설정합니다.
      3과 4를 앞으로 당기지 않습니다.
