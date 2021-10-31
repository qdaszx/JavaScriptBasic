# Unicode 함수

## fromCodePoint()

| 구분     | 데이터(값)                         |
| :------- | :--------------------------------- |
| 형태     | String.fromCodePoint()             |
| 파라미터 | 코드 포인트, num1[, ...[, numN]]   |
| 반환     | 코드 포인트에 해당하는 문자로 변환 |

코드 포인트에 해당하는 문자를 반환합니다.

파라미터에 다수의 코드 포인트 작성이 가능하며, 값을 문자를 연결하여 반환합니다.

```js
console.log("[코드1] fromCodePoint()");
const point = String.fromCodePoint;
console.log(point(49, 50, 51)); // 123
console.log(point(44032, 44033)); // 가각

console.log(point(0x31, 0x32, 0x33)); // 123
console.log(point(0x1f418)); // 🐘
```

    1. 49, 50, 51
      - 코드 포인트를 10진수로 작성한 형태입니다.
    2. 0x31, 0x32, 0x33
      - 코드 포인트를 16진수로 작성한 형태입니다.

### ES5의 fromCharCode() 사용

- Surrogate pair로 작성합니다

```js
console.log("[코드2] ES5의 fromCharCode()");
console.log(String.fromCharCode(0x1f418)); //
console.log(String.fromCharCode(0xd83d, 0xdc18)); // 🐘
```

    1. fromCharCode()에서는 0x1f418 형태를 지원하지 않으므로
    2. fromCharCode(0xD83D, 0xDC18)처럼 Surrogate pair로 작성합니다.

## CodePointAt()

| 구분     | 데이터(값)                        |
| :------- | :-------------------------------- |
| 형태     | String.prototype.codePoint()      |
| 파라미터 | 유니코드로 변환할 문자열의 인덱스 |
| 반환     | 코드 포인트 값                    |

대상 문자열에서 파라미터에 작성한 인덱스 번째 문자를 유니코드의 코드 포인트로 변환하여 반환합니다.

(코드 포인트는 UTF-16으로 인코딩된 값)

```js
console.log("[코드3] codePointAt()");
const result = "가나다".codePointAt(2);
console.log(result); // 45796
console.log(typeof result); // number

console.log("가나다".codePointAt(3)); // undefined
console.log(String.fromCodePoint(result)); // 다
```

    1. "가나다".codePointAt(2)
      - 문자열 "가나다"에서 3번째의 코드 포인트를 구해 반환합니다.
    2. 반환된 코드 포인트 타입은 number입니다.
    3. 인덱스 번째에 문자가 없으면 undefined를 반환합니다.
    4. codePointAt(2)의 값은 45796이고 fromCodePoint(45796)의 값은 "다"입니다.

## 정리 시간

- 요구 사항

  - String.fromCodePoint(49, 50)와 "123".codePointAt(1)은 형태가 다릅니다.
  - 형태를 다르게 한 것은 무엇 때문일까요?

- JavaScript 설계 과정에서 정리해보시기 바랍니다.

  - String.from.CodePoint(49, 50)

    - 직접 호출하는 함수 형태
    - 파라미터에 다수 작성

  - "123".codePointAt(1)

    - String.prototype.codePointAt() 호출
    - prototype을 사용한 메소드 형태
    - 파라미터에 인덱스 하나만 작성

  - [1, 2, 3]으로 작성하면 어떻게 되나요?

    - String 오브젝트가 아닌 Array 오브젝트에 fromCodePoint 함수가 없으므로 타입에러가 나타납니다.

  - codePointAt()은 값을 구하는 대상이 있지만 fromCodePoint()는 대상이 없음

- 다양한 생각의 접근을 위해 강좌에서 정리를 제공하지 않습니다.

  String.fromCodePoint(50, 60, 70) 형태로 작성할 수 있습니다.
  한편 [50, 60, 70].fromCodePoint()형태로 작성하면, 빌트인 String 오브젝트가 아니라 빌트인 Array 오브젝트에 fromCodePoint()가 있어야 하는데, 이것은 문자열 처리 시맨틱이 Array 처리 시맨틱으로 바뀌게 됩니다.
  이를 방지하기 위해서 "506070".fromCodePoint()형태로 작성하면 값을 구분할 수 없습니다.

## normalize()

| 구분     | 데이터(값)                   |
| :------- | :--------------------------- |
| 형태     | String.prototype.normalize() |
| 파라미터 | 정규화 형식, 디폴트: NFC     |
| 반환     | 변환된 문자열                |

대상 문자열을 파라미터에 지정한 유니코드 정규화 형식으로 변환하여 반환합니다.

유니코드 정규화 형식

- NFC, NFD, NFKC, NFKD
- http://www.unicode.org/reports/tr15/

```js
console.log("[코드4] 코드 포인트");
console.log("ㄱ".codePointAt().toString(16)); // 3131
console.log("ㅏ".codePointAt().toString(16)); // 314f
console.log("\u{3131}\u{314F}"); // ㄱㅏ
```

    1. ㄱ과 ㅏ의 코드 포인트를 16진수로 구합니다.
    2. ㄱ과 ㅏ의 코드 포인트를 연결하여 작성
    3. "가"로 표시되지만 어색합니다.

```js
console.log("[코드5] normalize()");
const point5 = "\u{3131}\u{314F}";
console.log(point5.normalize("NFC")); // ㄱㅏ
console.log(point5.normalize("NFD")); // ㄱㅏ

console.log(point5.normalize("NFKD")); // 가
console.log(point5.normalize("NFKC")); // 가
```

    1. NFC와 NFD는 단지 연결하여 어색하지만
    2. NFKD와 NFKC는 모아 쓴 형태로 표시됩니다.
