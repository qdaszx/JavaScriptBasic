# Promise 메커니즘 분석

## 1. new Promise(function(){}) 형태

```js
new Promise(function (resolve, reject) {
  resolve("성공");
});
```

    1. new Promise(function(resolve, reject){...})
    new 연산자로 Promise를 호출하면
    prototype.constructor를 호출하며 인스턴스를 만듭니다.

    2. 일반적으로 new Point(one, two)처럼
    인스턴스의 초깃값을 파라미터에 작성하지만

    3. 비동기 처리를 위한 환경을 만들기 위해 파라미터에 함수를 사용했습니다.
    코드의 확장성을 고려한 접근입니다.

    4. 실행자 함수는 constructor의 확장이며 constructor에서 연속해서 실행합니다.

## 2. 실행자의 파라미터에 함수 이름 작성

```js
new Promise((resolve, reject) => {
  resolve("성공");
  reject("실패");
}).then(
  (value) => {
    console.log(value); // 성공
  },
  (reason) => {
    console.log(reason);
  }
);
```

    1. 실행자 함수의 파라미터에 작성한 resolve, reject는 함수 이름입니다.
    엔진이 이 이름의 Function 오브젝트를 생성합니다.

    2. resolve("성공");
    실행자의 파라미터가 Function 오브젝트이므로
    resolve() 함수를 호출할 수 있습니다.

    3. 함수 호출은 단지 파라미터 값인 "성공"을 설정하는 것 외에도
    부가적인 처리를 한다는 의도가 포함되어 있습니다.

    4. abc()처럼 실행자의 파라미터에
    함수 이름이 없는 함수를 호출하면 에러가 발생하지 않지만
    then()의 핸들러 함수가 실행되지 않습니다.

    5. resolve("성공")이 호출되면
    실행자 파라미터의 resolve가 호출되며
    파라미터의 resolve 함수는 엔진이 만든 것이므로 엔진 내부 처리를 할 수 있습니다.

## 3. 파라미터 위치로 성공/실패 함수 처리

```js
new Promise((one, two) => {
  two();
}).then(
  (value) => {
    console.log("성공");
  },
  (reason) => {
    console.log("실패"); // 실패
  }
);
```

    1. two()를 호출하면
    then()의 두 번째 파라미터 함수가 호출됩니다.

    2. 두 번째 파라미터는 실패를 나타내는 함수입니다.
    즉, 엔진은 호출된 파라미터 위치의 함수로 성공/실패를 처리한다는 뜻입니다.

    3. 임의의 함수 이름을 사용할 수 있습니다.
    resolve()와 reject()를 사용한 것은 일반적인 시맨틱이기 때문입니다.

    4. 호출된 파라미터의 함수에 따라 비동기 처리를 위한
    즉, then()에서 사용하기 위한 fulfilled 또는 rejected를
    Promise 인스턴스의 [[PromiseStatus]]에 설정합니다.

## 4. 실행자의 resolve(), reject() 순서로 작성합니다.

```js
new Promise((resolve, reject) => {
  reject("실패");
  resolve("성공");
}).then(
  (value) => {
    console.log(value);
  },
  (reason) => {
    console.log(reason); // 실패
  }
);
new Promise((resolve, reject) => {
  resolve("성공");
  reject("실패");
}).then(
  (value) => {
    console.log(value); // 성공
  },
  (reason) => {
    console.log(reason);
  }
);
```

    1. 성공과 실패가 모두 발생한다는 것은 논리에 맞지 않습니다.
    따라서 성공/실패 중에서 하나만 발생합니다.

    2. reject() 함수, resolve() 함수 순서로 작성하면
    [[PromiseStatus]]가 rejected가 됩니다.

    3. resolve() 함수, reject() 함수 순서로 작성하면
    [[PromiseStatus]]가 fulfilled가 됩니다.

    4. 먼저 호출한 함수의 상태를 설정합니다.

## 5. then()의 핸들러 함수에서 사용할 값을 인스턴스에 저장

```js
new Promise((resolve, reject) => {
  resolve("성공");
}).then((value) => {
  console.log(value);
});
console.log("끝"); // 끝 성공
```

    1. resolve("성공");
    파라미터 값 "성공"을 Promise 인스턴스의 [[PromiseValue]]에 저장합니다.

    2. then()이 비동기 처리되므로 then()에서 값을 사용하기 위한 것입니다.

    3. [[PromiseStatus]]에 값을 설정하는 것도 같은 접근입니다.

## 6. Promise 인스턴스 반환

```js
new Promise((resolve) => {
  resolve(100);
})
  .then((value) => {
    console.log(value); // 100
    return 200;
  })
  .then((value) => {
    console.log(value); // 200
  });
```

    1. then(), catch()에서 Promise 인스턴스를 생성하여 반환합니다.

    2. 처음의 then()은 비동기로 실행되지만 이어지는 처리는 동기/비동기로 실행할 수 있습니다.

    3. 실행 중인 then()에서 비동기 처리를 하지 않으면
    이어지는 then()/catch()는 동기 형태로 처리하게 됩니다.

    4. 실행 중인 then()에서 다시 비동기로 처리하면
    이어지는 then()/catch()는 비동기로 처리하게 됩니다.

    5. Promise 인스턴스를 생성하여 반환하므로
    이어지는 처리를 동기/비동기로 모두 처리할 수 있습니다.
