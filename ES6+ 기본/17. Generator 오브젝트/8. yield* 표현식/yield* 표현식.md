# yield\* 표현식

yield는 키워드

yield\*은 표현식

Syntax: yield\* 표현식

yield\*의 표현식에 따라 처리하는 방법이 다릅니다.

### yield\*의 표현식이 배열일 경우, next()로 호출할 때마다 배열의 엘리먼트를 하나씩 처리합니다.

```js
console.log("[코드1] 표현식 배열");
function* sports() {
  yield* [10, 20];
}
const obj = sports();
console.log(obj.next()); // {value: 10, done: false}
console.log(obj.next()); // {value: 20, done: false}
```

    1. 첫 번째의 obj.next()를 호출하면 yield* [10, 20];에서 10을 반환합니다.
      {value: 10, done: false} 반환
    2. 두 번째의 obj.next()를 호출하면 yield* [10, 20];에서 20을 반환합니다.
      {value: 20, done: false} 반환
    3. yield*의 표현식이 배열이면 next()를 호출할 때마다 배열의 엘리먼트를 순서대로 반환합니다.

### yield\*의 표현식이 제너레이터 함수일 경우

함수의 yield를 먼저 처리합니다.

```js
console.log("[코드2] 표현식이 제너레이터 함수");
function* point2(count) {
  yield count + 5;
  yield count + 10;
}
function* sports2(value) {
  yield* point2(value);
  yield value + 20;
}
const obj2 = sports2(10);
console.log(obj2.next()); // {value: 15, done: false}
console.log(obj2.next()); // {value: 20, done: false}
console.log(obj2.next()); // {value: 30, done: false}
```

    1. 첫 번째의 obj.next()를 호출하면 yield* point(value);를 실행합니다.
    2. yield*의 표현식에 함수를 작성했으므로 point(value)를 호출합니다.
      point()가 제너레이터 함수이므로 우선, 제너레이터 오브젝트를 생성합니다.
    3. next()로 호출해야 yield가 수행되지만 자동으로 point() 첫 번째의 yield count +5;를 수행합니다.
      {value: 15, done: false} 반환
    4. 다시 point()를 호출한 곳에서 반환 값을 받아 반환합니다.
    5. 두 번째의 obj.next()를 호출합니다.
      point()의 yield count +10; 를 실행합니다.
      {value: 20, done: false} 반환
    6. 세 번째의 obj.next()를 호출합니다.
      - point()의 yield를 모두 처리했으므로 sports()의 yield value + 20;을 실행하여 {value: 30, done: false} 반환

### 재귀 호출

```js
console.log("[코드3] 표현식에서 자신 호출");
function* sports3(point) {
  yield point;
  yield* sports3(point + 10);
}
const obj3 = sports3(10);
console.log(obj3.next()); // {value: 10, done: false}
console.log(obj3.next()); // {value: 20, done: false}
console.log(obj3.next()); // {value: 30, done: false}
```

    1. 첫 번째의 obj.next()를 호출하면 yield point;를 실행합니다.
      {value: 10, done: false} 반환
    2. 두 번째의 obj.next()를 호출합니다.
      yield* sports(point + 10); 에서 자신을 호출합니다.
      첫 번째 줄의 yield point;를 실행합니다.
      {value: 20, done: false} 반환
    3. 세 번째의 obj.next()를 호출합니다.
      yield* sports(point + 10);에서 자신을 호출합니다.
      첫 번째 줄의 yield point;를 실행합니다.
      {value: 30, done: false} 반환
    4. {주의} yield point;가 없으면 무한 반복하게 됩니다.

### 정리

yield\* 표현식을 정리하면 표현식에 따라서 처리하는 방법이 다르다.

표현식은 배열을 작성할 수 있고 제너레이터 함수를 작성할 수 있고 자신을 호출할 수도 있습니다.
