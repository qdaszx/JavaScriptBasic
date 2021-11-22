# Symbol.asyncIterator

Symbol.asyncIterator는 for-await-of에 대응하는 Well-known Symbol이며

비동기로 반복을 실행합니다.

Well-known Symbol은 12개가 있습니다.

11개는 "ES6+ 기본" 과정에서 다루었으며 중복되므로 개념 설명을 생략합니다.

### Symbol.iterator와 차이

|                    | 이터레이터                    | Async 이터레이터     |
| :----------------- | :---------------------------- | :------------------- |
| 이터러블 프로퍼티  | Symbol.iterator               | Symbol.asyncIterator |
| next() 반환 형태   | (value: 값, done: true/false) | Promise.resolve()    |
| Symbol 대응 반복문 | for-of                        | for-await-of         |

Symbol.asyncIterator()를 호출하면 AsyncIterator 인스턴스를 생성하여 반환합니다.

생성한 인스턴스의 next()를 호출하면

{value: 값, done: false} 형태로 반환하며

이 값을 Promise.resolve()의 파라미터 값으로 사용합니다.

for-await-of로 반복합니다.

## Symbol.asyncIterator와 제너레이터 함수

```js
async function* point() {
  yield 10;
}
const gen = point();
console.log(gen[Symbol.toStringTag]); // AsyncGenerator
console.log(gen[Symbol.asyncIterator]); // function [Symbol.asyncIterator]() { [native code] }
console.log(gen[Symbol.asyncIterator]().next); // function next() { [native code] }
```

    1. const gen = point();
    AsyncGenerator 인스턴스를 생성하여 반환합니다.

    2. gen[Symbol.toStringTag]
    AsyncGenerator를 출력합니다.

    3. gen[Symbol.asyncIterator]
    gen 인스턴스의 Symbol.asyncIterator를 출력하며 함수가 출력됩니다.

    4. gen[Symbol.asyncIterator]().next
    asyncIterator 인스턴스를 생성하여 반환하며
    인스턴스에는 next() 메소드가 있습니다.

## for-await-of 반복

```js
async function* point() {
  yield 10;
  yield 20;
}
const gen = point();
async function show() {
  for await (const point of gen) {
    console.log(point); // 10 20
  }
}
show();
```

    1. for await (const point of gen) {...}
    gen은 AsyncGenerator 인스턴스입니다.
    gen의 Symbol.asyncIterator()를 호출합니다.

    2. AsyncIterator 인스턴스를 생성하여 반환하고
    인스턴스의 next()를 호출합니다.

    3. yield 10을 {value: 10, done: false}로 반환하며
    Promise.resolve(param)의 파라미터 값으로 사용하여
    for-await-of로 보냅니다.

    4. {value: 10}에서 10을 point에 설정합니다.

이렇게 Symbol.asyncIterator를 사용해서 비동기로 반복을 할 수가 있습니다.
