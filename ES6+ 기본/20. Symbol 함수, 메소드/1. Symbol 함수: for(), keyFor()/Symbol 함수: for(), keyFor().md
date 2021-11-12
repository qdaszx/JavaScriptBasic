# Symbol 함수

## for()

| 구분     | 데이터(값)              |
| :------- | :---------------------- |
| 형태     | Symbol.for()            |
| 파라미터 | Symbol key 값           |
| 반환     | 생성 또는 검색된 Symbol |

글로벌 Symbol 레지스트리에 {key: value} 형태로 Symbol을 저장합니다.

### 파라미터()의 문자열이 key가 되고 Symbol()로 생성한 값이 value가 됩니다.

```js
console.log("[코드1] Symbol.for()");
const one = Symbol.for("sports");
console.log(one); // Symbol(sports)
```

    1. {key: value} 형태로 one에 설정합니다.
      one이 글로벌 Symbol 레지스트리에 저장됩니다.
    2. 파라미터인 "sports"가 key가 되고 Symbol()로 생성한 값이 value가 됩니다.
    3. Symbol("sports") 함수에서 파라미터가 주석이었던 것과는 차이가 있습니다.

registry의 사전적 의미는 등록, 기록입니다.

글로벌 Symbol 레지스트리는 공유 영역입니다.

글로벌 시맨틱 그대로 다른 오브젝트에서도 사용 가능합니다.

### 같은 key가 존재하면 등록된 값을 사용합니다.

```js
console.log("[코드2] 글로벌 Symbol 레지스트리");
const one2 = Symbol.for("sports");
const two = Symbol.for("sports");
console.log(one2 === two); // true

console.log(Symbol.for(true)); // Symbol(true)
```

    1. one의 key 값과 two의 key 값이 같으므로 Symbol 값을 생성하지 않고 one에 설정된 값을 사용합니다.
    2. one === twoo
      그래서 비교 결과가 true입니다.
    3. Symbol.for(true);
      true를 문자열로 변환하여 key 값으로 사용

## keyFor()

| 구분     | 데이터(값)               |
| :------- | :----------------------- |
| 형태     | Symbol.keyFor()          |
| 파라미터 | 검색할 Symbol            |
| 반환     | Symbol key 값, undefined |

글로벌 Symbol 레지스트리에서 Symbol의 key 값을 구합니다.

### 파라미터에 Symbol.for()로 등록한 Symbol를 작성합니다.

```js
console.log("[코드3] Symbol.keyFor()");
const one3 = Symbol.for("book");
const six = Symbol.keyFor(one3);
console.log(six); // book
```

    1. const six = Symbol.keyFor(one);
      파라미터에 글로벌 Symbol 레지스트리에 등록한 Symbol을 작성합니다.
    2. one의 key 값인 "book"을 반환합니다.

Symbol key 값이 존재하면 key 값을 반환하고 존재하지 않으면 undefined를 반환합니다.
