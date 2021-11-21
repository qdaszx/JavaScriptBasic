# await

- Syntax

  - [value] = await 표현식
  - async 함수 안에 작성합니다.
  - [value]는 선택입니다.

### 표현식이 Promise 오브젝트이면 resolve()의 파라미터 값을 반환합니다.

Promise를 반환하지 않음

```js
function create(param) {
  return new Promise((resolve) => {
    resolve(param);
  });
}
async function getPoint(option) {
  const value = await create(option);
  console.log(value);
}
getPoint({ point: 100 }); // {point: 100}
```

    1. const value = await creat(option);
    create() 함수를 호출합니다.

    2. 호출된 함수에서 Promise 인스턴스를 반환합니다.
    따라서 아래 코드로 이동하게 되는데
    await로 인해 resolve(param)이 실행되어
    param 값을 보낼 때까지 기다립니다.

    3. resolve(param)을 실행합니다.
    보낸 값을 받아 value 변수에 할당합니다.

    4. console.log(value)를 실행합니다.

### 표현식이 Promise 오브젝트가 아니면 표현식의 평가 결과를 반환합니다.

create() 함수가 Promise가 아니라는 것, 그래서 평가 결과를 반환합니다.

```js
async function getPoint(option) {
  const value = (await option.point) + 200;
  console.log(value);
}
getPoint({ point: 100 }); // 300
```

    1. const value = await option.point + 200;
    option은 파라미터 값으로 {point: 100}입니다.
    await 표현식이 Promise 오브젝트가 아닙니다.

    2. 이때에는 표현식의 평가 결과를 반환합니다.

    3. await가 비동기 환경에서
    동기 처리를 위한 것이므로
    표현식이 비동기 처리가 아니면 의미가 약합니다.

## Promise에서 reject()가 발생했을 때 에러에 대처하는 형태입니다.

### try-catch를 사용한 형태

```js
function create(param) {
  return new Promise((res, reject) => {
    reject(param);
  });
}
async function getPoint(option) {
  try {
    await create(option);
  } catch (error) {
    console.log(error); // {point: 100}
  }
}
getPoint({ point: 100 });
```

    1. reject(param);
    Promise에서 reject()가 실행되면

    2. catch(error) 블록에서 받습니다.
    reject(param)의 param이
    catch(error)의 error에 설정됩니다.

    3. try-catch로 에러 발생에 대응할 수 있습니다.

### catch()를 사용한 형태

```js
function create(param) {
  return new Promise((res, reject) => {
    reject(param);
  });
}
async function getPoint(option) {
  await create(option)
    .catch((value) => {
      return 300;
    })
    .then((param) => {
      console.log(param); // 300
    });
}
getPoint({ point: 100 });
```

    1. reject(param);
    reject() 처리이므로 catch()가 실행됩니다.

    2. catch((value) => {...})
    reject(param)의 param 값이 value에 설정됩니다.

    3. return 300;
    300이 반환되지 않고 Promise 인스턴스를 반환하므로
    아래의 then()이 호출됩니다.

    4. then((param) => {...})
    catch()에서 return 300은 정상 처리이므로
    첫 번째 파라미터 함수가 실행되며
    param에 300이 설정됩니다.

### Promise가 아닌 값을 반환하는 형태

```js
function create(param) {
  return new Promise((res, reject) => {
    reject(param);
  });
}
async function getPoint(option) {
  const value = await create(option).catch((value) => {
    return 300;
  });
  console.log(value); // 300
}
getPoint({ point: 100 });
```

    1. 앞 코드는 catch().then() 형태이지만
    여기는 catch()가 끝입니다.

    2. return 300;
    catch()에 then()이 연결되어 있으면
    Promise 인스턴스를 반환하지만
    then() 연결이 없으면 300을 반환합니다.

    3. console.log(value)
    300을 반환하므로 300이 출력됩니다.

# for-await-of

- Syntax

  - for await (variable of iterable) {...}
  - async 함수에서 사용할 수 있습니다.

### 동기 반복에 사용할 수 있습니다.

```js
const list = [10, 20];
async function show() {
  for await (const value of list) {
    console.log(value);
  }
}
show(); // 10 20
```

    1. for await (variable of iterable) {...}
    iterable에 이터러블 오브젝트를 작성합니다.
    [10, 20]은 이터러블 오브젝트입니다.
    variable 위치에 const/let/var 변수를 작성합니다.

    2. for await (const value of list){...}
    [10, 20]의 엘리먼트를 하나씩 반복하면서
    값을 value에 설정하고
    console.log(value)로 값을 출력합니다.

    3. 배열에서 Promise 인스턴스를 반환하지 않으므로
    이것은 비동기 반복이 아니라 동기 반복입니다.

### 일반적으로 비동기 반복에 사용합니다.

```js
async function* point() {
  yield 10;
  yield 20;
}
async function show() {
  for await (const value of point()) {
    console.log(value);
  }
}
show(); // 10 20
```

    1. for await (const value of point()){...}
    point() 제너레이터 함수를 호출하면
    Promise 인스턴스를 반환하므로
    비동기로 반복하게 됩니다.

    2. 제너레이터 함수가 Promise 인스턴스를
    반환하는 논리는 다음 세션에서 다룹니다.
