# Symbol.iterator에 제너레이터 함수 연결

## generator 함수 연결

### Object{}에 Symbol.iterator를 작성하고 generator 함수를 연결하면 반복할 때마다 yield를 수행합니다.

```js
console.log("[코드1] generator 함수 연결");
const obj = {};
obj[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};
console.log([...obj]); // [1, 2, 3]
```

    1. obj의 Symbol.iterator에 제너레이터 함수를 연결했습니다.
    2. [...obj]를 실행하면 obj에서 [Symbol.iterator]를 검색합니다.
    3. 존재하므로 [Symbol.iterator]()를 실행하며 이터레이터 오브젝트를 생성하여 반환합니다.
    4. yield가 끝날 때까지 반복하면서 yield에서 반환된 값을 배열에 첨부합니다.

Symbol.iterator의 `__proto__`에 제너레이터 오브젝트가 있는 구조입니다.

### 제너레이터 오브젝트에 이터레이터 오브젝트를 연결하여 값을 공유하는 형태

```js
console.log("[코드2] 이터레이터 오브젝트 연결");
const gen = function* () {
  yield 10;
  yield 20;
};
const genObj = gen();
console.log(genObj.next()); // {value: 10, done: false}

const obj2 = genObj[Symbol.iterator]();
console.log(obj2.next()); // {value: 20, done: false}
```

    1. genObj.next()
      첫 번째 yield를 수행하여 10을 반환합니다.
    2. const obj = genObj[Symbol.iterator]();
      제너레이터 오브젝트의 Symbol.iterator() 호출
      이터레이터 오브젝트를 반환합니다.
    3. obj.next()
      제너레이터 함수에서 수행했던 첫 번째 yield는 수행하지 않고 두 번째 yield를 수행하여 값을 반환합니다.
    4. 이터레이터 오브젝트에서 yield 처리를 공유합니다.

제너레이터 오브젝트에 이터레이터 오브젝트가 포함된 구조

즉, 제너레이터 오브젝트와 이터레이터 오브젝트가 obj 안에 존재하면서 yield 처리 값을 공유하게 되는 겁니다.

그래야지만 두 개의 오브젝트에서 하나의 값을 공유할 수 있는 것입니다

오브젝트가 이터레이션할 수 없는 구조이지만 Symbol.iterator를 작성하고 generator 함수를 연결하면 next 메소드로 하나씩 yield 처리를 할 수 있습니다.
