# yield 반복, 다수의 yield 처리

## yield 반복

```js
console.log("yield 반복");
let status = true;
function* sports() {
  let count = 0;
  while (status) {
    yield ++count;
  }
}
const obj = sports();
console.log(obj.next()); // {value: 1, done: false}
console.log(obj.next()); // {value: 2, done: false}
status = false;
console.log(obj.next()); // {value: undefined, done: true}
```

    - yield를 반복하는 형태입니다.
    - let status = ture;
      while()문을 제어하기 위한 상태 값입니다.
    - 첫 번째 next() 호출
      let count = 0; 을 실행하여 count 변수에 0을 설정합니다.
      누적 값을 구하기 위한 것입니다.
    - while (status) {yield ++count}
      status가 true이므로 yield를 수행합니다.
      {value: 1, done: false} 반환
    - 두 번째 next()를 호출합니다.
      status가 ture이므로 yield를 수행합니다.
      {value: 2, done: false} 반환
    - status = false;
      yield 수행을 끝내기 위한 것입니다.
    - 세 번째 next()를 호출합니다.
      status가 false이므로 yield ++count를 수행하지 않습니다.
      {value: undefined, done: true} 반환
      {done: ture} 이므로 이터레이터를 더 이상 사용할 수 없습니다.

## 다수의 yield 처리

```js
console.log("한 줄에 다수의 yield 작성");
function* sports2() {
  return yield yield yield;
}
const obj2 = sports2();
console.log(obj2.next()); // {value: undefined, done: false}
console.log(obj2.next(10)); //  { value: 10, done: false }
console.log(obj2.next(20)); // {value: 20, done: false}
console.log(obj2.next(30)); // {value: 30, done: true}
```

    한 줄에 다수의 yield와 return 작성
      - return yield yield yield;

    첫 번째 next() 호출
      - 첫 번째 yield를 수행합니다.
      - yield에 반환 값이 없으므로 {value: undefined, done: false} 반환

    두 번째 next(10) 호출
      - 파라미터 값: 10
      - 두 번째 yield를 수행합니다.
      - 함수에 파라미터 값을 받을 변수가 없으면 파라미터로 넘겨 준 값을 반환 {value: 10, done: false} 반환

    세 번째 next(20) 호출
      - 파라미터 값: 20
      - 세 번째 yield를 수행합니다.
      - 함수에 파라미터 값을 받을 변수가 없으므로 파라미터로 넘겨 준 값을 반환
      - {value: 20, done: false} 반환

    네 번째 next(30) 호출
      - 파라미터 값: 30
      - 처리할 yield가 없으므로 done: true 반환
      - return 문을 작성했으므로 파라미터로 넘겨 준 값을 반환
      - {value: 30, done: true} 반환

    return 문을 작성하지 않으면 30이 아닌 undefined 반환
      - 30이 아닌 undefined 반환
      - {value: undefined, done: true} 반환

### 정리

이와 같이 한줄에 다수의 yield를 작성해서 반복을 할 수 있습니다.

yield 오른쪽에 표현식을 작성할 수 없다는 면도 있지만, 심플하게 한줄로 작성할 수 있다는 특징도 갖고 있습니다.
