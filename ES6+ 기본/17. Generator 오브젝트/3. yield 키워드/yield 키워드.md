# yield 키워드

Syntax: [returnValue] = yield [표현식];

### yield 키워드를 사용한 형태

yield 키워드는 next()로 호출할 때마다 하나씩 실행합니다.

```js
console.log("[코드1]");
function* sports(one) {
  yield one + 10;
  yield;
  const value = yield one + 50;
}
const obj = sports(30);
console.log(obj.next()); // {value: 40, done: false}
console.log(obj.next()); // {value: undefined, done: false}
console.log(obj.next()); // {value: 80, done: false}
console.log(obj.next(200)); //{value: undefined, done: true}
```

yield 키워드는 제너레이터 함수 실행을 멈추거나 다시 실행할 때 사용합니다.

yield 오른쪽의 표현식을 평가하고 결과를 반환합니다.

그런데 표현식을 작성하지 않으면 undefined를 반환합니다.

[returnValue]는 오른쪽의 평가 결과가 설정되지 않고 다음 next()에서 파라미터로 넘겨준 값이 설정됩니다. (value 변수에 200을 할당합니다.)

## yield

### yield 표현식을 평가하면 호출한 곳으로 {value: 값, done: true/false} 형태로 반환합니다.

### value값

- yield 표현식의 평가 결과값을 설정합니다.
- yield를 실행하지 못하면 undefined를 반환합니다.

### done 값

- yield를 실행하면 false
- yield를 실행하지 못하면 true

```js
console.log("[코드2] yield 표현식 평가");
function* sports2(one) {
  yield one;
  const check = 20;
}
const obj2 = sports2(10);
console.log(obj2.next()); // {value: 10, done: false}
console.log(obj2.next()); // {value: undefined, done: true}
```

    1. obj.next() 호출
    yield one: 실행, {value: 10, done: false} 반환
    2. obj.next() 호출
    check = 20;을 실행하지만, yield 처리가 아니므로 {value: undefined, done: true} 반환
    3. 이 상태에서 계속 next()을 호출하면 {value: undefined, done: true} 반환
    4. 함수를 호출할 수 있지만 함수가 실행되지 않습니다.

## yield 정리

```js
console.log("[코드3] yield");
function* sports3(one) {
  let two = yield one;
  let param = yield one + two;
  yield param + one;
}
const obj3 = sports3(10);
console.log(obj3.next()); // {value: 10, done: false}
console.log(obj3.next()); // {value: NaN, done: false}
console.log(obj3.next(20)); // {value: 30, done: false}
console.log(obj3.next()); // {value: undefined, done: true}
```

    1. function* sports(one) {}
      - 제너레이터 함수를 선언합니다.
      - 3개의 yield를 작성했습니다.
    2. const obj = sports(10);
      - 제너레이터 오브젝트를 생성합니다.
      - 파라미터 값, 10이 one에 설정됩니다.
    3. 첫 번째의 obj.next()를 호출합니다.
      - let two = yield one이 실행됩니다.
      - one의 값인 10을 반환합니다.
      - two 변수에 10을 할당하지 않습니다. (중요)
    4. 두 번째의 obj.next()를 호출합니다.
      - next()에 파라미터 값을 작성하지 않았으므로 two 변수에 undefined가 설정됩니다.
      - let param = yield one + two를 실행
      - two 변수 값이 undefined이므로 NaN를 반환합니다.
    5. 세 번째의 obj.next(20)를 호출합니다.
      - 파라미터 값 20이 바로 앞의 param 변수에 설정됩니다.
      - yield param + one을 실행합니다.
      - 20 + 10을 반환합니다.
    6. 네 번째의 obj.next()를 호출합니다.
      - 실행할 yield가 없으므로 더 이상 처리하지 않으며 끝이라는 것을 나타내는 done: true를 반환합니다.
