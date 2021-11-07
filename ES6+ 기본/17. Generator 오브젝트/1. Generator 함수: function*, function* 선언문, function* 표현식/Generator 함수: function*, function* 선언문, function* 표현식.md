# Generator 오브젝트

## Generator 함수

## function\*

Generator function은 function\* 작성합니다.

하나의 키워드를 사용한 함수입니다.

### 제너레이터 함수 형태는 function* 선언문, function* 표현식, GeneratorFunction이 있습니다.

```js
console.log("[코드1] Generator function 형태");
function* sports(one) {}
const book = function* (one) {};

const music = Object.getPrototypeOf(function* () {}).constructor;
const gen = new music();
```

## function\* 선언문

| 구분     | 데이터(값)                    |
| :------- | :---------------------------- |
| 형태     | function\* name(){}           |
| 파라미터 | [param[, param[, paramN]]]opt |
| 반환     | Generator 오브젝트            |

function\* 다음에 함수 이름을 작성합니다.

### 제너레이터 함수를 호출하면 함수 블록{}을 실행하지 않고 Generator 오브젝트를 생성하여 반환합니다.

```js
console.log("[코드2] function* 선언문");
function* sports2(one, two) {
  yield one + two;
}
console.log(typeof sports2); // function
const obj = sports2(1, 2);
console.log(typeof obj); // object
console.log(obj.next()); // {value: 3, done: false}
```

    1. function* sports(one, two){}
      선언문 형태의 제너레이터 함수입니다.
    2.  제너레이터 함수의 타입은 function입니다.
    3.  const obj = sports(1, 2);
      sports 함수를 호출하면 Generator 오브젝트를 생성하여 반환합니다.
    4.  이때, 함수 코드를 실행하지 않습니다.
    5.  파라미터 값은 생성한 오브젝트에 설정됩니다.
    6.  new 연산자를 사용할 수 없습니다.
      단일 함수로 사용하겠다는 뉘앙스입니다.
    7.  typeof obj
      생성한 Generator 오브젝트 타입은 object
    8.  obj.next()
      Generator 오브젝트가 iterator 오브젝트이므로 next() 함수를 호출할 수 있으며 이때 함수 코드가 실행합니다.

정리하면 제너레이터 함수를 호출하면 함수 블록{}을 실행하지 않고 Generator 오브젝트를 생성하여 반환합니다.

반한된 Generator 오브젝트는 iterator 오브젝트입니다.

## function\* 표현식

| 구분     | 데이터(값)                    |
| :------- | :---------------------------- |
| 형태     | function\* name(){}           |
| 파라미터 | [param[, param[, paramN]]]opt |
| 반환     | Generator 오브젝트            |

function\* 다음에 함수 이름 작성은 선택입니다.

일반적으로 함수 이름을 작성하지 않습니다.

### function\* 왼쪽에 변수를 선언하며 변수 이름이 함수 이름이 됩니다.

```js
console.log("[코드3] function* 표현식");
const sports3 = function* (one) {
  yield one;
};
const obj3 = sports3(100);
console.log(obj3.next()); // {value: 100, done: false}
```

    1. const sports = function* (one) {}
      표현식 형태의 제너레이터 함수입니다.
    2. 왼쪽의 sports가 함수 이름이 됩니다.
      문법적으로는 * 다음에 함수 이름을 작성할 수 있지만 일반적으로 사용하지 않습니다.
