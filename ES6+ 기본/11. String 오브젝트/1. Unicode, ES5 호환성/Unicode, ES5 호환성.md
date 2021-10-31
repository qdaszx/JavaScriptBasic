# String 오브젝트

## Unicode

유니코드는 U+0031 형태로 작성합니다.

0031를 코드 포인트라고 부릅니다.

또한 문자 코드라고도 부릅니다.

코드 포인트로 문자/이모지 등을 표현할 수 있습니다.

4자리 이상의 UTF-16 진수 형태입니다.

110만개 정도 표현할 수 있습니다.

## Unicode 용어

- plane(평면)

  - 코드 포인트 전체를 17개 plane으로 나눈 것
  - 하나의 plane은 65535(U+FFFF)개

- 첫 번째 plane

  - BMP(Basic Multillingual Plane)라고 부름
  - 영문자, 숫자가 여기에 속함
  - 한글의 코드 포인트도 여기에 속함

첫 번째 plane을 제외한 plane를 Supplementary plane, Astral plane이라고 부릅니다.

이것은 5자리 이상의 코드 포인트를 표현할 수 있습니다.

ES6+에서 지원합니다. (ES5 지원 X)

- 이스케이프 시퀀스 (Escape Sequence)

  - 역슬래시와 16진수로 값을 작성
  - 16진수 이스케이프 시퀀스라고 부름

```js
console.log("[코드1] 이스케이프 시퀀스");
const escape = "\x31\x32\x33";
console.log(escape); //  123
console.log("\\"); //  \
```

    1. 역슬래시가 에디터에 "₩" 형태로 표시됩니다.
    2. x를 소문자로 작성해야 합니다.
    3. JS 코드에서 역슬래시를 표시하려면 역슬래시를 2개 작성해야 합니다.

- 유니코드 이스케이프 시퀀스 (Unicode Escape Sequence)

  - 이스케이프 시퀀스를 유니코드로 작성한 형태
  - UES 값 범위는 UTF-16진수로 U+0000에서 U+FFFF까지 사용 가능

```js
console.log("[코드2] 유니코드 이스케이프 시퀀스");
const escape2 = "\x31\x32\x33";
console.log(escape2); // 123
const unicode = "\u0034\u0035\u0036";
console.log(unicode); // 456
```

    1. 역슬래시 다음에 u를 작성합니다.

### ES5에서 Unicode 문제

**U+FFFF보다 큰 코드 포인트는 어떻게 작성할 것인가?**

그래서 ES6+에서 코드 포인트 값에 관계없이 사용할 수 있는 형태

- \u{31}, \u{1f418} 형태

```js
console.log("[코드3] 유니코드 코드 포인트 이스케이프");
const unicode2 = "\u0031\u0032\u0033";
console.log(unicode2); // 123
const es6 = "\u{34}\u{35}\u{36}";
console.log(es6); // 456
// 코끼리 이모지
console.log("\u{1f418}"); //   🐘
```

    1. 역슬래시와 u를 작성하고
    2. 중괄호 안에 코드 포인트를 작성합니다.

## ES5 호환성

\u{1f418} 형태는 ES5에서 사용 불가합니다.

그래서 ES5에서는 두 개의 유니코드 이스케이프 시퀀스를 사용합니다.

```js
console.log("[코드4] Surrogate pair");
const pair = "\uD83D\uDC18";
console.log(pair); //  🐘
```

    1. "\uD83D"와 "\uDC18"를 연결하여 작성합니다.

이를 **Surrogate pair**라고 함

> Surrogate pair 계산 방법은 스펙의 나와 있음 (6.2.4)

- ### 유니코드 사용의 참조 사항

  - 브라우저, 스마트폰에 따라서 표시되는 문자 모습이 다름
  - https://unicode-table.com

정리하면 ES5에서는 4자리를 사용했고 ES6에서는 5자리를 사용할 수 있습니다.

호환성을 위해서 사용하는 것이 Surrogate pair이다.
