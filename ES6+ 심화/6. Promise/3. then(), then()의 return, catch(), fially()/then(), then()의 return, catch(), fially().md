# then(), catch(), finally()

## then()

| 구분     | 개요                           |
| :------- | :----------------------------- |
| 파라미터 | resolve, 성공 처리 핸들러 함수 |
|          | reject, 실패 처리 핸들러 함수  |
| 반환     | Promise 인스턴스               |

성공과 실패 핸들러 함수를 작성합니다.

**Promise 인스턴스를 반환합니다.**

### 파라미터

첫 번째 : 성공일 때 실행될 핸들러 함수

두 번째 : 실패일 때 실행될 핸들러 함수

실행자의 resolve(), reject()에 파라미터 값을 다수 작성하더라도 핸들러 함수는 처음 하나만 사용합니다.

```js
const obj = new Promise((resolve, reject) => {
  resolve(1, 2, 3);
});
obj.then(
  (value) => {
    console.log(value); // 1
  },
  (reason) => {
    console.log(reason);
  }
);
```

    1. resolve(1, 2, 3);
    파라미터에 값을 3개 작성했습니다.

    2. 실패(reject)가 발생하지 않으면 reject()를 작성하지 않아도 됩니다.

    3. obj.then((value) => {...}, (reason) => {...});
    then() 설명을 위해 resolve와 reject 핸들러 함수를 모두 작성했지만
    실행자에 resolve()만 있으므로 첫 번째 함수만 작성해도 됩니다.

    4. 실행자에서 resolve()가 실행되면 then()의 첫 번째 파라미터 함수가 실행됩니다.
    이떄, resolve(1, 2, 3)에서 1, 2, 3을 파라미터로 넘겨주지만

    5. then((value) => {console.log(value)})의 value에 첫 번째 값인 1만 설정됩니다.
    그래서 1이 출력됩니다.

    6. 다수의 파라미터 값을 넘겨주려면 배열, Object 등을 사용해야 합니다.

## then()의 return

then()에서 Promise 인스턴스를 반환합니다.

return 값을 반환하지 않습니다.

method chain에서 this를 return하는 것과 같은 개념입니다.

따라서 then().then() 형태처럼 then()을 연속해서 호출할 수 있습니다.

return 값을 내부 프로퍼티인 [[PromiseValue]]에 설정하고

[[PromiseValue]]값을 다음 then()의 파라미터 값으로 넘겨 줍니다.

```js
const obj = new Promise((resolve, reject) => {
  resolve(100);
});
obj
  .then((value) => {
    return value + 50;
  })
  .then((param) => {
    console.log(param); // 150
  });
```

    1. obj.then((value) => {...})
    value 파라미터에 100이 설정됩니다.

    2. return value + 50;
    150을 반환하지 않고 인스턴스를 반환합니다.
    150은 [[PromiseValue]]에 설정합니다.

    3. return을 작성하지 않으먼 undefined를 [[PromiseValue]]에 설정합니다.

    4. then((param) => {console.log(param)});
    param에 [[PromiseValue]] 값인 150이 설정됩니다.
    150이 출력됩니다.

## catch()

| 구분     | 개요                          |
| :------- | :---------------------------- |
| 파라미터 | reject, 실패 처리 핸들러 함수 |
| 반환     | Promise 인스턴스              |

실패(reject)의 핸들러 함수를 작성합니다.

then()의 두 번째 파라미터를 작성하지 않고 대신에 catch(param)를 작성합니다.

return 문의 표현식 평가 결과를 [[PromiseValue]]에 설정합니다.

```js
const check = false;
const obj = new Promise((resolve, reject) => {
  check ? resolve(check) : reject(1, 2, 3);
});
obj
  .then((value) => {
    console.log(value);
  })
  .catch((value) => {
    console.log(value); // 1
  });
```

    1. check ? resolve(check) : reject(1, 2, 3);
    check 값이 false이므로 reject()를 호출하게 되며 파라미터 값으로 1, 2, 3을 넘겨 줍니다.

    2. catch((value) => {console.log(value)})
    then()의 두 번째 파라미터에 함수를 작성하지 않고 별도로 catch()를 작성했습니다.

    3. reject()가 호출되면 catch(value)가 실행됩니다.
    1, 2, 3을 파ㅏㄹ미터 값으로 넘겨주지만
    value에 첫 번째 값인 1만 설정됩니다.

Promise 인스턴스를 반환하므로 catch().then() 처럼 이어서 then()을 호출할 수 있습니다.

[[PromiseValue]] 값을 then()의 파라미터 값으로 넘겨줍니다.

```js
const obj = new Promise((resolve, reject) => {
  resolve(100);
});
obj
  .then((value) => {
    throw "에러";
  })
  .catch((catch1) => {
    console.log("catch1:" + catch1); // catch1:에러
    return "정상";
  })
  .then((param) => {
    console.log("then:" + param); // then:정상
  })
  .catch((catch2) => {
    console.log("catch2:" + catch2);
  });
```

    1. obj.then((value) => {...})
    실행자에서 resolve(100)이 실행되므로
    then()의 첫 번째 파라미터 함수가 호출됩니다.

    2. throw "에러"
    throw 문으로 에러를 발생시킵니다.
    바로 아래의 catch((catch1) => {...})에서 받습니다.
    이때, "에러"를 [[PromiseValue]]에 설정합니다.

    3. catch((catch1) => {...});
    [[PromiseValue]]의 "에러"가 catch1에 설정됩니다.

    4. return "정상";
    에러가 발생하여 catch()를 실행했지만 catch()에서 에러가 발생하지 않으면
    바로 아래의 then()을 실행합니다.
    "정상"을 [[PromiseValue]]에 설정합니다.

    5. then((param) => {...});
    여기서 에러가 발생하지 않으므로 아래의 catch()를 호출하지 않습니다.
    Promise 처리가 끝납니다.

    6. catch((catch2) => {...});
    실행하지 않는 것을 설명하기 위해 작성했습니다.

## finally()

| 구분     | 개요             |
| :------- | :--------------- |
| 파라미터 | 핸들러 함수      |
| 반환     | Promise 인스턴스 |

성공, 실패에 관계없이 파라미터의 핸들러 함수가 실행됩니다.

그런데, 핸들러 함수에 파라미터가 없습니다.

ES2018부터 지원합니다.

활용 측면이지만 then(), catch()의 같은 코드를 finally()에 작성하면 코드 중복을 피할 수 있습니다.

```js
const obj = new Promise((resolve, reject) => {
  resolve(100);
});
obj
  .then((value) => {
    console.log(value);
    return 200;
  })
  .catch((reason) => {
    console.log(reason);
  })
  .finally((param) => {
    console.log("finally:" + param); // finally:undefined
  });
```

    1. resolve(100);
    then()의 핸들러 함수가 호출됩니다.

    2. obj.then((value) => {return 200})
    200을 [[PromiseValue]]에 설정합니다.
    catch()를 실행하지 않고 finally()를 실행합니다.

    3. finally((param) => {...})
    문법적으로 param 파라미터를 사용하지 않으며 설명을 위해 작성한 것 입니다.
    then()에서 200을 return하지만 [[PromiseValue]] 값이 param에 설정되지 않습니다.

    4. 파라미터를 작성하더라도 에러가 나지 않지만
    undefined가 설정되므로 의미가 없습니다.
    undefined가 출력됩니다.
