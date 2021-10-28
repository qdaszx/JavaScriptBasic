# Object 분할 할당

### Object의 프로퍼티를 분할하여 할당합니다.

### 프로퍼티 이름이 같은 프로퍼티에 값을 할당

```js
console.log("[코드1] 프로퍼티 값 할당");
const { one, two } = { one: 10, two: 20 };
console.log(one, two); // 10 20
```

    1. 왼쪽의 Object가 {name: value} 형태가 아니라 프로퍼티 이름만 작성했습니다.
    2. 프로퍼티 이름이 같은 오른쪽 프로퍼티 값을 왼쪽의 프로퍼티 값으로 할당합니다.
    3. one에 10, two에 20을 할당합니다. {one: 10, two: 20} 형태가 됩니다.

### 프로퍼티 이름을 별도로 작성

```js
console.log("[코드2] 프로퍼티 이름을 별도로 작성");
let one2, two2;
({ one2, two2 } = { one2: 10, two2: 20 });
console.log(one2, two2); // 10 20
```

    1. let one, two; 프로퍼티 이름을 앞에 별도로 작성했습니다.
    2. ({one, two} = one: 10, two: 20); 전체를 소괄호() 안에 작성해야 합니다.

### 프로퍼티 값 위치에 변수 이름 작성

```js
console.log("[코드3] 값 위치에 변수 이름 작성");
let five3, six3;
({ one3: five3, two3: six3 } = { one3: 5, two3: 6 });
console.log(five3, six3); // 5 6
// console.log(one3);
```

    1. 이름을 별도로 선언하였으므로 소괄호() 안에 작성했습니다.
    2. 오른쪽 one 프로퍼티 값 5를 five에 할당합니다.
    3. 오른쪽 two 프로퍼티 값 6을 six에 할당합니다.
    4. console.log(one)을 실행하면 ReferenceError 프로퍼티 이름으로 값을 구할 수 없습니다.
    5. five와 six 변숫값을 구하는 것이 목적입니다.

### Object 구조에 맞추어 값 할당

```js
console.log("[코드4] Object 구조에 맞추어 값 할당");
const {
  one4,
  plus4: { two4, three4 },
} = { one4: 10, plus4: { two4: 20, three4: 30 } };
console.log(one4, two4, three4); // 10 20 30
// console.log(plus4);
```

    1. plus: {two: 20, three: 30} plus는 구조(경로)를 만들기 위한 것입니다.
    2. 왼쪽에 plus가 있고 two가 있으면 two 프로퍼티 값에 20을 할당합니다.
    3. 구조가 같지 않으면 실행할 때 에러 발생
    4. console.log(plus) plus는 구조(경로)를 만들기 위한 것으로 실제로 존재하지 않습니다.
    5. plus가 없으므로 ReferenceError 발생
    6. 할당한 후, 이름으로 값을 구할 수 있습니다.

### 나머지를 Object로 할당

```js
console.log("[코드5] 나머지를 Object로 할당");
const { one5, ...rest5 } = { one5: 10, two5: 20, three5: 30 };
console.log(rest5); // {two5: 20, three5: 30}
```

    1. rest에 나머지 Object를 할당합니다.

## 파라미터 분할 할당

### 호출하는 함수에서 Object 형태로 넘겨준 파라미터 값을 호출받는 함수의 파라미터에 맞추어 할당

```js
console.log("[코드6] 파라미터 값 할당");
function add({ one, two }) {
  console.log(one + two); // 30
}
add({ one: 10, two: 20 });
```

    1. 호출하는 함수에서 넘겨준 one과 two를 호출받는 함수의 프로퍼티 이름에 맞추어 프로퍼티 값을 분할 할당합니다.

### Object 구조에 맞추어 값 할당

```js
console.log("[코드7] Object 구조에 맞추어 할당");
function add2({ one, plus: { two } }) {
  console.log(one + two); // 30
}
add2({ one: 10, plus: { two: 20 } });
```

    1. 호출하는 함수에서 넘겨준 Object 구조와 프로퍼티에 맞추어 프로퍼티 값을 할당합니다.
