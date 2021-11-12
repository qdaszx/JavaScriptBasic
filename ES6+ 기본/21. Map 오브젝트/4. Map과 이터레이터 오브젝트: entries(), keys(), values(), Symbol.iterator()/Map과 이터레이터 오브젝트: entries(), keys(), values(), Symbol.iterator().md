# Map과 이터레이터 오브젝트

## entries()

| 구분     | 데이터(값)                      |
| :------- | :------------------------------ |
| 형태     | Map.prototype.entries()         |
| 파라미터 | 파라미터 없음                   |
|          |                                 |
| 반환     | 생성한 이터레이터 오브젝트 생성 |

Map 인스턴스로 이터레이터 오브젝트를 생성하여 반환합니다.

Map 인스턴스에 설정된 순서로 반환합니다.

next()로 호출하면 [key, value] 반환합니다.

```js
console.log("[코드1] entries()");
const obj = new Map([
  ["one", 100],
  ["two", 200],
]);
const iter = obj.entries();
console.log(iter.next()); // {value: [one, 100], done: false}
console.log(iter.next()); // {value: [two, 200], done: false}
console.log(iter.next()); // {value: undefined, done: false}
```

## keys()

| 구분     | 데이터(값)                 |
| :------- | :------------------------- |
| 형태     | Map.prototype.keys()       |
| 파라미터 | 파라미터 없음              |
|          |                            |
| 반환     | 생성한 이터레이터 오브젝트 |

Map 인스턴스의 key로 이터레이터 오브젝트를 생성하여 반환합니다.

이때, value는 포함하지 않습니다.

Map 인스턴스에 설정된 순서로 반환합니다.

next() 메소드를 호출하면 key를 반환합니다.

```js
console.log("[코드2] keys()");
const obj2 = new Map([
  ["one", 100],
  ["two", 200],
]);
const iter2 = obj2.keys();
console.log(iter2.next()); // {value: 'one', done: false}
console.log(iter2.next()); // {value: 'two', done: false}
console.log(iter2.next()); // {value: undefined, done: false}
```

## values()

| 구분     | 데이터(값)                 |
| :------- | :------------------------- |
| 형태     | Map.prototype.values()     |
| 파라미터 | 파라미터 없음              |
|          |                            |
| 반환     | 생성한 이터레이터 오브젝트 |

Map 인스턴스의 value로 이터레이터 오브젝트를 생성하여 반환합니다.

이때, key는 포함하지 않습니다.

Map 인스턴스에 설정된 순서대로 반환합니다.

next() 메소드로 호출하면 value를 반환합니다.

```js
console.log("[코드3] values()");
const obj3 = new Map([
  ["one", 100],
  ["two", 200],
]);
const iter3 = obj3.values();
console.log(iter3.next()); // {value: 100, done: false}
console.log(iter3.next()); // {value: 200, done: false}
console.log(iter3.next()); //  // {value: undefined, done: false}
```

## Symbol.iterator()

| 구분     | 데이터(값)                     |
| :------- | :----------------------------- |
| 형태     | Map.prototype[Symbol.iterator] |
| 파라미터 | 파라미터 없음                  |
|          |                                |
| 반환     | [done: true/false, value: 값]  |

Symbol.ierator는 Map.prototype에 연결되어 있습니다.

Map 인스턴스로 이터레이터 오브젝트를 생성하여 반환합니다.

Map.prototype.entries() 메소드와 같습니다.

next() 메소드를 호출하면 entries를 반환합니다.

```js
console.log("[코드4] Symbol.iterator");
const obj4 = new Map([
  ["one", 100],
  ["two", 200],
]);
const iter4 = obj4[Symbol.iterator]();
console.log(iter4.next()); // {value: [one, 100], done: false}
console.log(iter4.next()); // {value: [two, 200], done: false}
console.log(iter4.next()); // {value: undefined, done: true}
```
