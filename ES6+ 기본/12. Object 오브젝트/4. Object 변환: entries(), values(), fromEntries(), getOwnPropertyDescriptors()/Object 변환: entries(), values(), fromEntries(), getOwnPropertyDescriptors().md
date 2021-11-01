# Object 변환

## entries()

| 구분     | 데이터(값)           |
| :------- | :------------------- |
| 형태     | Object.entries()     |
| 파라미터 | 열거 가능한 오브젝트 |
| 반환     | [[key, value]] 형태  |

열거 가능한 오브젝트의 {key: value}를 [[key, value]] 형태로 변환합니다.

```js
console.log("[코드1] entries()");
const obj = { music: "음악", book: "책" };
const list = Object.entries(obj);
for (let keyValue of list) {
  console.log(keyValue); // ['music', '음악'] ['book', '책']
}
```

    1. list는 이터러블 오브젝트입니다.
    2. [[key, value]] 형태를 Map 형태라고 부릅니다.
      Map은 Map 오브젝트에서 다룹니다.

### 작성한 순서가 바뀌는 경우

```js
console.log("[코드2] 작성한 순서가 바뀌는 경우");
const obj2 = { 10: "십", book: "책", 7: "칠" };
const list2 = Object.entries(obj2);
for (let keyValue of list2) {
  console.log(keyValue); // ['7', '칠']  ['10', '십']  ['book', '책']
}
```

    1. 앞의 [코드1] 처럼 key가 영문자일 때는 key 값을 분류하지 않고 작성한 대로 반환
    2. 반면, [코드2] 처럼 숫자와 문자가 섞여 있으면 숫자, 문자 순서로 분류합니다.

### 문자열은 문자 하나씩 분리

```js
console.log("[코드3] 문자열 분리");
const list3 = Object.entries("ABC");
for (let keyValue of list3) {
  console.log(keyValue); //  ['0', 'A']  ['1', 'B']  ['2', 'C']
}
```

    1. 문자열을 문자 하나씩 분리하며
    2. 인덱스를 key 값으로 사용합니다.

## values()

| 구분     | 데이터(값)           |
| :------- | :------------------- |
| 형태     | Object.values()      |
| 파라미터 | 열거 가능한 오브젝트 |
| 반환     | [value] 형태         |

### 열거 가능한 오브젝트의 {key: value}를 값만 [value1, value2] 형태로 변환합니다.

```js
console.log("[코드4] values()");
const obj4 = { music: "음악", book: "책" };
const list4 = Object.values(obj4);
for (let value of list4) {
  console.log(value); // 음악 책
}
```

### 작성한 순서가 바뀌는 경우

```js
console.log("[코드5] 정렬하여 반환");
const obj5 = { 10: "십", book: "책", 7: "칠" };
const list5 = Object.values(obj5);
for (let value of list5) {
  console.log(value); // 칠 십 책
}
```

    1. 앞의 [코드4] 처럼 key가 영문자일 때는 key 값을 분류하지 않지만
    2. [코드5]처럼 숫자와 ㅁ누자가 섞여 있으면 숫자, 문자 순서로 분류합니다.

### 문자열은 문자 하나씩 분리

```js
console.log("[코드6] 문자열 분리");
const list6 = Object.values("ABC");
for (let value of list6) {
  console.log(value); // A B C
}
```

    1. 문자열은 문자 하나씩 분리합니다.

## fromEntries()

| 구분     | 데이터(값)                   |
| :------- | :--------------------------- |
| 형태     | Object.fromEntries(), ES2019 |
| 파라미터 | 이터러블 오브젝트            |
| 반환     | 새로운 오브젝트              |

### Map 형태의 [[key, value]]를 오브젝트 {key: value} 형태로 변환합니다.

```js
console.log("[코드7] fromEntries()");
const list7 = [
  ["one", 10],
  ["two", 20],
];
const obj7 = Object.fromEntries(list7);
console.log(obj7); // {one: 10, two: 20}
```

### 프로퍼티 키 값이 같으면 값이 대체됩니다.

```js
console.log("[코드8] 프로퍼티 키 값이 같은 경우");
const list8 = [
  ["one", 10],
  ["one", 20],
];
const obj8 = Object.fromEntries(list8);
console.log(obj8); // {one: 20}
```

## getOwnPropertyDescriptors()

| 구분     | 데이터(값)                            |
| :------- | :------------------------------------ |
| 형태     | Object.getOwnPropertyDescriptors()    |
| 파라미터 | 대상 오브젝트                         |
| 반환     | 프로퍼티 디스크립터를 포함한 오브젝트 |

**Object의 프로퍼티 디스크립터를 반환합니다.**

### 데이터 디스크립터를 반환하는 형태

```js
console.log("[코드9] 데이터 디스크립터");
const obj9 = { music: "음악" };
const des = Object.getOwnPropertyDescriptors(obj);
for (let name in des.music) {
  console.log(name + ":" + des.music[name]); // value:음악 writable:true enumerable:true configurable:true
}
```

    1. {music: "음악"} -> 프로퍼티 디스크립터 중에서 데이터 디스크립터를 반환합니다.

### 악세스 디스크립터를 반환하는 형태

```js
console.log("[코드10] 악세스 디스크립터");
const obj10 = { get music() {} };
const des10 = Object.getOwnPropertyDescriptors(obj10);
for (let name in des10.music) {
  console.log(name + ":" + des10.music[name]); // get:get music() { }  set:undefined enumerable:true configurable:true
}
```

    1. {get music(){}}  ->  악세스 디스크립터를 반환합니다.

> ## 상속받은 오브젝트는 반환하지 않습니다. 즉, Own 프로퍼티만 반환합니다.
