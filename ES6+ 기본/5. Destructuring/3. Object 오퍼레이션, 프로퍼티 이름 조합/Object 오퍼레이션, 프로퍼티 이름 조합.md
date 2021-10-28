# Object 오퍼레이션

### 같은 프로퍼티 이름 사용

```js
console.log("[코드1] 같은 프로퍼티 이름 사용");
const value = { book: 10, book: 20 };
console.log(value); // {book: 20}
```

    1. {book: 10, book: 20}에서 프로퍼티 이름이 book이 같습니다.
    2. ES5 strict 모드에서 프로퍼티 이름이 같으면 에러가 납니다.
    3. ES6에서는 strict 모드에 관계없이 에러가 발생하지 않습니다. 뒤에 작성한 프로퍼티  값으로 대체됩니다.

### Shorthand property names

```js
console.log("[코드2] Shorthand property names");
const one2 = 10,
  two2 = 20;
const values = { one2, two2 };
console.log(values); // {one2: 10, two2: 20}
```

    1. one과 two 변수에 값을 작성하였으며
    2. {one, two} 형태로 values에 할당합니다.
    3. one이 프로퍼티 이름이 되고 10이 프로퍼티 값으로 할당됩니다.
    4. "Shorthand property names"는 MDN에 작성된 것으로 스펙에 정의된 것은 아닙니다.

## 프로퍼티 이름 조합

### 문자열을 프로퍼티 이름으로 사용

```js
console.log("[코드3] 문자열을 프로퍼티 이름으로 사용");
const value3 = {
  ["one" + "two"]: 12,
};
console.log(value3.onetwo);
```

    1. [] 안에 문자열로 이름을 작성합니다.
    2. "one"과 "two"를 연결하여 onetwo를 프로퍼티 이름으로 사용합니다.

### 변숫값을 프로퍼티 이름으로 사용

```js
console.log("[코드4] 변숫값을 프로퍼티 이름으로 사용");
const item = "world";
const sports = {
  [item]: 100,
  [item + "Cup"]: "월드컵",
  [item + "Sports"]: function () {
    return "스포츠";
  },
};
console.log(sports[item]); // 100
console.log(sports[item + "Cup"]); // 월드컵
console.log(sports[item + "Sports"]()); // 스포츠
```

    1. 변숫값을 프로퍼티 이름으로 사용합니다.
    2. 변숫값과 문자열을 연결할 수 있습니다.
    3. 프로퍼티 이름에 공백이 있는 것이 어색하지만 공백을 넣을 수도 있습니다.
    4. 함수로 호출할 수 있습니다. 변숫값에 따라 함수 이름을 정의할 수 있습니다.

### 분할 할당을 조합한 형태

```js
console.log("[코드5] 분할 할당을 조합한 형태");
const item5 = "book";
const result5 = ({ [item]: title } = { book: "책" });
console.log(result5); // {book: 책}
```

    1. 변숫값을 프로퍼티 이름으로 사용하고 분할 할당한 형태입니다.
    2. {[item]: title} {book: title} 형태가 됩니다.
    3. {book: "책"} {book: title}에 "책"이 할당됩니다.
