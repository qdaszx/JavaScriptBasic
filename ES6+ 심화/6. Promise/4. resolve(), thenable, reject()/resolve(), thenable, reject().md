# resolve(), thenable, reject()

## resolve()

| 구분     | 개요                         |
| :------- | :--------------------------- |
| 파라미터 | value, promise, thenable     |
| 반환     | 성공 상태의 Promise 인스턴스 |

성공(fulfilled) 상태의 Promise 인스턴스를 생성하여 반환합니다.

Promise.resolve() 형태로 작성합니다.

즉, 인스턴스가 아닌 함수 형태로 호출합니다.

파라미터 값에 따라 생성 방법이 다릅니다.

파라미터에 값을 작성하면 파라미터 값으로 Promise 인스턴스를 생성하여 반환합니다.

```js
const obj = Promise.resolve(["sports", "music"]);
obj.then((value) => {
  console.log(value);
});
console.log("끝"); // 끝 ["sports", "music"]
```

    1. const obj = Promise.resolve(["sports", "music"]);
    resolve() 파라미터에 값을 작성했습니다.
    값을 하나만 작성할 수 있으므로 다수를 작성하려면 Array, Object 등을 사용해야 합니다.

    2. new 연산자를 사용하지 않지만 Promise 인스턴스를 생성하여 반환합니다.
    성공(fulfilled) 상태로 설정합니다.

    3. 성공 상태이므로 then()의 첫 번째 파라미터 함수가 호출됩니다.

    4. obj.then((value) => {console.log(value)});
    Promise.resolve(["sports", "music"])의 파라미터 값이 value에 설정됩니다.

파라미터에 Promise 인스턴스를 작성하면 파라미터의 Promise 인스턴스의 값을 사용하여 Promise 인스턴스를 생성하여 반환합니다.

```js
const obj = Promise.resolve(["sports", "music"]);
Promise.resolve(obj).then((param) => {
  console.log(param); // ['sports', 'music']
});
```

    1. Promise.resolve(obj)
    resolve() 파라미터에 Promise 인스턴스를 작성했습니다.

    2. Promise 인스턴스를 생성하여 반환합니다.
    성공(fulfilled) 상태로 설정합니다.

    3. then((param) => {console.log(param)});
    obj 인스턴스의 resolve() 파라미터 값이 param에 설정됩니다.

## thenable

Promise.resolve()의 파라미터에 then()을 작성한 형태입니다.

```js
const obj = Promise.resolve({
  then(resolve, reject) {
    resolve([1, 2]);
  },
});
obj.then((value) => {
  console.log(value);
});
console.log("끝"); // 끝 [1, 2]
```

    1. const obj = Promise.resolve(then(){...});
    resolve() 파라미터에 then(){...}을 작성했습니다.
    Promise 인스턴스를 생성하여 반환합니다.
    then()을 실행하지 않고 아래로 이동합니다.

    2. obj.then((value) => {console.log(value)});
    then()을 실행하지 않습니다.

    3. console.log("끝")을 실행합니다.

    4. 이어서 Promise.resolve()의 then()을 실행합니다.

    5. then(resolve, reject){resolve([1, 2])};
    resolve([1, 2])를 호출하며 아래 then()의 첫 번째 파라미터 함수가 실행됩니다.

    6. obj.then((value) => {console.log(value)});
    resolve([1, 2])의 [1, 2]가 value에 설정됩니다.

## reject()

| 구분     | 개요                         |
| :------- | :--------------------------- |
| 파라미터 | reject 사유                  |
| 반환     | 실패 상태의 Promise 인스턴스 |

실패(reject) 상태의 Promise 인스턴스를 생성하여 반환합니다.

Promise.reject() 형태로 작성합니다.

파라미터에 reject 사유를 작성합니다.

### then()을 연결한 형태입니다.

```js
const obj = Promise.reject("실패");
obj.then(
  (value) => console.log(value),
  (value) => console.log(value) // 실패
);
```

    1. const obj = Promise.reject("실패");
    new 연산자를 사용하지 않지만 Promise 인스턴스를 생성하여 반환합니다.
    실패(reject) 상태로 설정합니다.

    2. 실패 상태이므로 then()의 두 번째 파라미터 함수가 호출됩니다.

    3. obj.then( , (value) => console.log(value));
    Promise.reject("실패")에서 "실패"가 value에 설정됩니다.

### catch()를 연결한 형태

```js
const obj = new Error("에러 발생");
Promise.reject(obj).catch((error) => console.log(error.message));
console.log("끝"); // 끝 에러 발생
```

    1. const obj = new Error("에러 발생");
    Error 인스턴스를 생성합니다.

    2. Promise.reject(obj)
    obj 인스턴스를 사용하여 Promise 인스턴스를 생성합니다.
    reject()를 실행하지 않습니다.

    3. console.log("끝")을 실행합니다.

    4. Promise.reject(obj)를 실행하며 catch()가 호출됩니다.

    5. catch((error) => console.log(error.message));
    obj 인스턴스가 error에 설정됩니다.
