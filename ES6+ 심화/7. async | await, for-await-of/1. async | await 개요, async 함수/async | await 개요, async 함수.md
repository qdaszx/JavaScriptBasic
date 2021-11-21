# async

## async/await 개요

비동기 환경에서 실행하지만 실행이 끝나야 다음을 실행합니다.

즉, **실행은 비동기로 하고 실행 순서는 동기** 입니다.

```js
function create(param) {
  return new Promise((resolve) => {
    resolve(param);
  });
}
async function getPoint(option) {
  const value = await create(option);
  console.log(value); // {point: 100}
}
getPoint({ point: 100 });
```

async는 키워드가 아니며 "async function"이 키워드 개념입니다.

async 함수라고 부릅니다.

await는 키워드입니다.

    1. async function getPoint(option){...}
    비동기 함수로 선언합니다.

    2. const value = await create(option)
    create() 함수를 호출합니다.

    3. 호출된 함수에서 Promise 인스턴스를 생성해서 반환합니다.
    따라서 비동기 처리를 하게 됩니다.
    즉, resolve()가 실행되기 전에 아래 코드를 실행합니다.

    (create 함수를 호출하면 Promise 인스턴스를 생성해서 반환하고 console.log로 value 값을 찍은 후에 resolve(param)를 호출하게 됩니다.)

    4. 한편, await는 아래로 내려가지 않고 resolve()가 끝나느 것을 기다립니다.

    5. resolve(param)가 실행되면 param 값을 create()로 보내며
    이 값을 받아 value 변수에 할당합니다.

    6. 이어서 console.log(value)를 실행합니다.

## async 함수

### 비동기 함수를 뜻하며 AsyncFunction 오브젝트를 생성하여 반환합니다.

```js
async function sports() {
  return "축구";
}
console.log(Object.prototype.toString.call(sports)); // [object AsyncFunction]
```

    1. async function sports(){...}
    엔진이 async 함수를 만나면
    AsyncFunction 오브젝트를 생성합니다.

    2. 함수 표현식으로 작성할 수 있습니다.
    const sports = asynce function(){...}

    3. Object.prototype.toString.call(sports)
    toString()을 call하면
    Symbol.toStringTag()가 실행되며
    오브젝트를 설명하는 디폴트 문자열을 반환합니다.

    4. [object AsyncFunction]이 출력됩니다.
    즉, sports는 AsyncFunction 오브젝트입니다.

    5. AsyncFunction 오브젝트는 자체에 Symbol.toStringTag만 있으며
    빌트인 Function 오브젝트를 상속 받습니다.
    따라서 호출할 수 있습니다.

### async 함수가 호출되면 Promise 인스턴스를 생성하여 반환합니다.

```js
async function sports() {
  return "축구";
}
const obj = sports();
console.log(obj instanceof Promise); // true
```

    1. const obj = sports();
    async 함수를 호출하면 "축구"를 반환하지 않고
    Promise 인스턴스를 반환합니다.

    2. console.log(obj instanceof Promise)
    true가 출력되며, Promise 인스턴스를 뜻합니다.
    그래서 비동기 환경에서 실행됩니다.

### async 함수의 return 값을 처리하려면 then()을 함수 호출에 연결하여 작성합니다.

```js
async function sports() {
  return "축구";
}
sports().then((res) => console.log(res)); // 여기 먼저 축구
console.log("여기 먼저");
```

    1. sports()를 호출하면 Promise 인스턴스를 반환하므로
    then()을 연결하여 사용할 수 있습니다.

    2. then()을 실행하지 않고
    아래의 console.log("여기 먼저")를 먼저 실행합니다.

    3. return "축구";
    resolve()를 작성하지 않았지만
    return 문의 표현식 평가 결과를 resolve()의 파라미터 값으로 사용하여
    then()의 첫 번째 파라미터 함수를 호출합니다.

    4. then((res) => console.log(res));
    return 문의 표현식 평가 결과가
    then()의 첫 번째 파라미터 함수의 res 파라미터에 설정됩니다.

### async 함수에서 throw가 발생하면 reject()로 처리됩니다.

```js
async function sports() {
  throw "에러";
}
sports().then(
  () => 0,
  (rej) => console.log(rej) // 에러
);
```

    1. throw "에러";
    async 함수에서 throw가 발생하면 reject()로 처리되며
    표현식의 평가 결과를 파라미터 값으로 사용합니다.

    2. then()의 두 번째 파라미터 함수가 호출되며
    표현식의 평가 결과가 rej에 설정됩니다.
