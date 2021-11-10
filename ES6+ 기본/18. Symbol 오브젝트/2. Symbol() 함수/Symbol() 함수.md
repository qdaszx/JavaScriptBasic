# Symbol() 함수

## Symbol()

| 구분     | 데이터(값)       |
| :------- | :--------------- |
| 형태     | Symbol()         |
| 파라미터 | 설명, 주석opt    |
| 반환     | 유일한 Symbol 값 |

Symbol() 함수는 값을 생성하여 반환합니다.

### 그런데 반환된 값을 볼 수 없습니다.

```js
console.log("[코드1] Symbol()");
const sym = Symbol();
console.log(sym); // Symbol()
console.log(typeof sym); // symbol
```

    1. const sym = Symbol()
      Symbol 오브젝트가 아니라 Symbol 값을 생성하여 반환합니다.
    2. 새로운 값을 생성하여 반환하므로 값을 생성한다는 표현이 적절합니다.
    3. console.log(sym)
      생성한 Symbol 값이 출력되지 않고 Symbol 값을 생성한 코드 형태가 표시됩니다.
    4. typeof sym
      Symbol로 생성한 값 타입은 symbol 입니다.

new 연산자를 사용할 수 없습니다.

### 프로그램 전체를 통해서 유일한 값을 제공

```js
console.log("[코드2] 유일한 값 생성");
const one = Symbol();
const two = Symbol();
console.log(one == two); // false
```

    1. Symbol()을 실행할 때마다 프로그램 전체에서 하나만 있는 값을 생성합니다.
    2. 따라서 one의 값과 two의 값이 다릅니다.

### Symbol 값으로 연산 불가

```js
console.log("[코드3] Symbol 값으로 연산 불가");
let sym3 = Symbol();
try {
  const add = sym3 + 5;
} catch (e) {
  console.log("연산 불가"); // 연산 불가
}
```

    1. const add = sym + 5
      Symbol이 값이지만 연산할 수 없습니다.

### Symbol 타입 변경 불가

```js
console.log("[코드4] Symbol 타입 변경 불가");
let sym4 = Symbol();
try {
  +sym4;
} catch {
  console.log("값 타입 변경 불가"); // 값 타입 변경 불가
}
```

    1. +sym;
      단항 +연산자는 Number 타입으로 바꿉니다.
      Symbol 타입을 바꿀 수 없습니다.
    2. 이외에도 비교할 수 없는 등의 Symbol 값 사용에 제약이 있습니다.
    3. 이것은 외부에 값이 노출되지 않도록 하기 위해서입니다.
    4. 외부에 Symbol 값이 노출되는 처리(계산, 변환 등)을 할 수 없습니다.

### 파라미터에 주석, 설명을 작성합니다.

```js
console.log("[코드5] 파라미터에 주석, 설명 작성");
const sym5 = Symbol("주석, 설명");
console.log(sym5); // Symbol(주석, 설명)
```

    1. const sym = Symbol("주석, 설명");
      파라미터에 Symbol()로 생성한 값의 설명, 주석을 문자열로 작성합니다.
    2. 생성한 Symbol 값을 볼 수 없으므로 값 설명이 필요할 때 사용합니다.
    3. Symbol() 실행에 영향을 미치지 않습니다.
    4. console.log(sym)
      생성한 Symbol 값이 출력되지 않고 Symbol 값을 생성한 코드가 표시됩니다.

### Symbol 값을 문자열로 바꿔서 연결

```js
console.log("[코드6] 문자열로 연결");
const sym6 = Symbol("설명");
console.log(sym6.toString() + "연결"); // Symbol(설명)연결
```

    1. sym.toString() + "연결"
    2. Symbol 값을 toString()으로 변환하면 에러가 발생하지 않지만
    3. 값이 변환되지 않고 값을 만든 형태에 문자열을 연결합니다.
    4. new String(sym) 형태는 에러가 발생합니다.

### Template에 사용

```js
console.log("[코드7] Template에 사용");
const sym7 = Symbol("주석, 설명");
try {
  `${sym7}`;
} catch {
  console.log("`${sym} 불가`"); // `${sym} 불가`
}
```

    1. Symbol 값을 Template에 사용할 수 없습니다.

외부로 노출될 수 있는 형태라면 심볼이 허용하지 않는다.
