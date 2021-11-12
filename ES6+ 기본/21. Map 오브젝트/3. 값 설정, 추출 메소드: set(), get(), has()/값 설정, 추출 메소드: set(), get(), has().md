# 값 설정, 추출 메소드

## set()

| 구분     | 데이터(값)                   |
| :------- | :--------------------------- |
| 형태     | Map.prototype.set()          |
| 파라미터 | key                          |
|          | value                        |
| 반환     | key, value가 설정된 인스턴스 |

### Map 인스턴스에 key, value를 설정합니다.

```js
console.log("[코드1] set()");
let obj = new Map();
obj.set("one", 100);
obj.set({}, "오브젝트");
obj.set(function () {}, "Function");
obj.set(new Number("100"), "인스턴스");
obj.set(NaN, "Not a Number");

for (let [key, value] of obj) {
  console.log(`${key} : ${value}`); // one : 100 [object Object] : 오브젝트 function () { } : Function 100 : 인스턴스 NaN : Not a Number
}
```

key, value 순서로 파라미터 작성, key, value를 설정한 인스턴스 반환

### key 값이 같으면 value가 바뀜

```js
console.log("[코드2] value가 바뀜");
let obj2 = new Map();
const book = {};
obj2.set(book, "첫 번째");
obj2.set(book, "두 번째");
for (let [key, value] of obj2) {
  console.log(`${key} : ${value}`); // [object Object] : 두 번째
}
```

    1. obj.set(book, "첫 번째");
      외부에 작성한 book 오브젝트의 메모리 주소를 key 값으로 사용합니다.
    2. obj.set(book, "두 번째");
      book 오브젝트의 메모리 주소와 같은 key 값이 있으므로 값이 대체됩니다.

## get()

| 구분     | 데이터(값)                        |
| :------- | :-------------------------------- |
| 형태     | Map.prototype.get()               |
| 파라미터 | key 값                            |
| 반환     | [key, value]에서 value, undefined |

Map 에서 key 값이 같은 value를 반환합니다.

### key 값이 같지 않거나 타입이 다르면 undefined를 반환합니다.

```js
console.log("[코드3] get()");
let obj3 = new Map([
  ["one", 100],
  ["200", "String 타입"],
]);
console.log(obj3.get("one")); // 100
console.log(obj3.get("two")); // undefined
console.log(obj3.get(200)); // undefined
```

    1. two가 key에 없으므로 undefined를 반환
    2. 200이 있지만 타입이 다르므로 undefined를 반환합니다.

### 오브젝트 설정과 추출

```js
console.log("[코드4] 오브젝트 추출");
let obj4 = new Map();
const like = { sports: "스포츠" };
obj4.set(like, { value: "농구" });
console.log(obj4.get(like)); // {value: '농구'}
```

    1. 같은 메모리 주소를 사용합니다.

## has()

| 구분     | 데이터(값)                        |
| :------- | :-------------------------------- |
| 형태     | Map.prototype.has()               |
| 파라미터 | key 값                            |
| 반환     | key가 존재하면 true, 아니면 false |

Map 인스턴스에서 key의 존재 여부를 반환합니다.

### key가 있으면 true를 반환, 없으면 false를 반환

```js
console.log("[코드5] has()");
const obj5 = new Map([["one", 100]]);
console.log(obj5.has("one")); // true
console.log(obj5.has("two")); // false
```

### 정리

이와 같이 Map 오브젝트는 set, get, has 메소드를 사용해서 Entries를 설정하거나 읽거나 할 수 있습니다.
