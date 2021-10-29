# for-of

Syntax: for (variable of iterable) { }

이터러블 오브젝트를 반복합니다.

```js
console.log("[코드1] for-of");
const list = [1, 2, 3];
for (let k = 0; k < list.length; k++) {
  console.log(list[k]); // 1 2 3
}

for (let value of list) {
  console.log(value); // 1 2 3
}
```

### iterable

- 이터러블 오브젝트를 작성
- 표현식을 작성하면 평가 결과를 사용

### variable

- 변수 이름 작성
- 이터러블 오브젝트를 반복할 때마다 variable에 할당됨

### 배열

- 배열을 반복하면서 엘리먼트를 하나씩 전개

```js
console.log("[코드2] for-of, Array");
for (let value of [1, 2, 3]) {
  console.log(value); // 1 2 3
}
```

### String

- 문자열을 반복하면서 문자를 하나씩 전개

```js
console.log("[코드3] for-of, String");
for (let value of "ABC") {
  console.log(value); // A B C
}
```

### NodeList

- NodeList를 반복하면서 엘리먼트를 하나씩 전개

```js
console.log("[코드4] for-of, NodeList");
const nodes = document.querySelectorAll(".show");
for (let node of nodes) {
  console.log(node.textContent); // 첫 번째 두 번째 세 번째
}
```

## for-in, for-of 차이

### for-in

for-in은 오브젝트를 대상으로 하며 그중에서도 열거 가능한 프로퍼티가 대상입니다.

```js
console.log("[코드5] 열거 가능한 프로퍼티가 대상");
const obj = {};
Object.defineProperties(obj, {
  sports: {
    enumerable: false,
    value: "스포츠",
  },
  book: {
    enumerable: true,
    value: "책",
  },
});
for (let item in obj) {
  console.log(item + ": " + obj[item]); // book: 책
}
```

열거 가능한 프로퍼티란 enumerable: true인 것을 뜻합니다.

{key: value} 형태로 바로 작성했으면 디폴트가 enumerable: true입니다.

Object.defineProperty는 디폴트가 enumerable: false입니다.

### for-of

이터러블 오브젝트가 대상입니다.

따라서 오브젝트는 전개되지 않습니다.

또한 prototype의 프로퍼티도 전개되지 않습니다.

## for-of, Object

Object는 이터러블 오브젝트가 아니므로 for-of 사용 불가합니다.

Object를 for-of로 전개할 수 있는 방법이 있습니다.

Object.keys() 함수로 프로퍼티 이름을 배열로 만들고 만든 배열을 for-of로 전개하면 됩니다.

```js
console.log("[코드6] for-of, Object");
const sports = {
  // enumerable: true (default)
  soccer: "축구",
  baseball: "야구",
};
const keyList = Object.keys(sports);

for (let key of keyList) {
  console.log(key + ": " + sports[key]); // soccer: 축구  baseball: 야구
}
```
