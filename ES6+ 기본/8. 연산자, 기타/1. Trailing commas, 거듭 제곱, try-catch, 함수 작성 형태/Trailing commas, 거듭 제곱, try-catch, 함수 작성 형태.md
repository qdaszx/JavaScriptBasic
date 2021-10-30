# 연산자, 기타

## Trailing commas

Object 끝에 콤마 사용 -> `}` 앞에 콤마 사용 가능

```js
console.log("[코드1] Trailing commas");
const obj = {
  book: 100,
  point: 200,
};

const list = [100, 200];
```

배열 끝에 콤마 사용 -> `]` 앞에 콤마 사용 가능

## 거듭 제곱

```js
console.log("[코드2] 거듭 제곱");
console.log(2 ** 3); // 8
console.log(3 ** 2); // 9

console.log(2 ** (3 ** 2)); // 512
console.log(2 ** (3 ** 2)); // 512
console.log((2 ** 3) ** 2); // 64
/**
 *
 */
```

    1. 2 ** 3 ** 2 ::: 2의 3승의 2승을 구하며 값을 9입니다.
    2. 먼저 3의 2승을 구하며 값을 9입니다. ::: 2의 9승이므로 512가 됩니다.

- 좌결합성
  - 왼쪽에서 오른쪽으로 계산
  - 1 + 2 + 3은 (1 + 2) + 3으로 계산
- 우결합성
  - 오른쪽에서 왼쪽으로 계산
  - A ** B ** C에서 A ** (B ** C)로 계산

## try-catch

```js
console.log("[코드3] try-catch");
const sports = "스포츠";
try {
  sports = "축구";
} catch (error) {
  console.log("(error) 작성"); // (error) 작성
}
// catch만 작성
try {
  sports = "축구";
} catch {
  console.log("(error) 생략"); // (error) 생략
}
```

- try-catch의 catch(error)에서

  - catch처럼 (error)를 생략 가능
  - ES2019

- (error)에서 메시지를 받아 사용하지 않을 때 편리합니다.
- 타이핑 실수를 방지할 수 있습니다.

## 함수 작성 형태

Object에 함수를 작성할 때 function 키워드를 작성하지 않아도 됩니다.

```js
console.log("[코드4] function을 작성하지 않음");
const sports4 = {
  point: 100,
  // ES5 형태
  getValue: function () {
    return this.point;
  },
  // ES6 형태
  getPoint() {
    return this.point;
  },
};
console.log(sports4.getPoint()); // 100
```

    1. getPoint(){}처럼 function 키워드를 사용하지 않습니다.

- 참고: Object에 함수를 작성하는 이유
  1. 함수에서 this로 Object 전체 참조
  2. new 연산자로 인스턴스를 생성하지 않음, 메소드가 아닌 함수로 접근
  3. Object 전체가 하나의 묶음, 접근성, 가독성이 좋음
  4. sports에 시맨틱을 부여할 수 있으며 다른 오브젝트와 이름과 프로퍼티 이름이 충동되지 않음
