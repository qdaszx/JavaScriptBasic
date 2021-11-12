# Map 오브젝트

Map 오브젝트는 key와 value의 컬렉션입니다.

### Map 오브젝트 형태는 [key, value] 형태처럼 대괄호 안에 key와 value를 작성합니다.

다양한 타입을 key로 사용할 수 있습니다.

```js
console.log("[코드1] Map");
const obj = new Map([
  ["key", "value"],
  [{ book: 200 }, "오브젝트"],
  [100, "Number"],
]);
for (let keyValue of obj) {
  console.log(keyValue); // ['key', 'value'] [{ book: 200 }, "오브젝트"] [100, "Number"]
}
```

for-of문에서는 작성한 순서대로 읽혀집니다.

## new Map()

| 구분     | 데이터(값)             |
| :------- | :--------------------- |
| 형태     | new Map()              |
| 파라미터 | [이터러블 오브젝트]opt |
| 반환     | 생성한 Map 인스턴스    |

Map 인스턴스를 생성하여 반환합니다.

### 파라미터에 이터러블 오브젝트를 작성합니다.

```js
console.log("[코드2] Map 인스턴스 생성");
const obj2 = new Map([
  ["key", "value"],
  [100, "Number"],
]);
console.log(obj2); // {'key' => 'value', 100 => 'Number'}
console.log(typeof obj2); // object
```

    1. 파라미터를 배열 안에 배열로 작성합니다.
      대괄호 []가 2개입니다.
    2. 100이 key이고 "Number"가 value입니다.
    3. new 연산자를 사용하지 않으면 TypeError
    4. 파라미터를 작성하지 않아도 됩니다.
    5. 인스턴스를 생성하므로 타입은 object입니다.

Same-Value-Zero 비교 알고리즘으로

### key값을 비교합니다.

```js
console.log("[코드3] SameValueZero 비교");
const obj3 = new Map([
  [100, "Number"],
  ["100", "String"],
]);
for (let [key, value] of obj3) {
  console.log(`${key} : ${value}`); // 100 : Number 100 : Stirng
}
```

    1. 100과 "100"은 타입이 다릅니다.

### key 값이 같으면 value가 대체됩니다.

```js
console.log("[코드4] 값이 대체됨");
const obj4 = new Map([
  [100, "첫 번째"],
  [100, "두 번째"],
]);
for (let [key, value] of obj4) {
  console.log(`${key} : ${value}`); // 100 : 두 번째
}
```

    1. key 값이 타입까지 같으면 value가 대체됩니다.

### 잘못 작성한 형태

```js
console.log("[코드5] 잘못 작성한 형태");
try {
  new Map(["one", 1]);
} catch {
  console.log("[[one, 1]]"); // [[one, 1]]
}
const obj5 = new Map([{ five: 5 }]);
for (let [key, value] of obj5) {
  console.log(`${key} : ${value}`); // undefined : undefined
}
```

    1. new Map(["one", 1])
      대괄호 2개를 작성해야 합니다.
    2. new Map([{five: 5}])
      key만 작성하면 에러가 발생하지 않지만 key와 value에 undefined가 설정됩니다.
