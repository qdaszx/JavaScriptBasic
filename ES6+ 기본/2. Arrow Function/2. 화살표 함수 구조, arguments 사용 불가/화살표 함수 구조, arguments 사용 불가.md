# 화살표 함수 구조

화살표 함수는 function을 `=>`로 표기하는 것이 전부가 아닙니다.

화살표 함수는 일반 함수와 구조가 다릅니다. 화살표 함수 나름의 특징이 있습니다.

```js
{
  debugger;
  ("use strict");

  const book = function () {
    return 100;
  };
  /*
    1. 오른쪽의 book을 전개하면
      prototype과 constructor가 있습니다.
  */
  debugger;

  const point = () => 100;
  /*
  1. 오른쪽의 point를 전개하면
    prototype과 constructor가 없습니다.
  2. prototype에 메소드를 연결하여 확장할 수 없습니다.
  3. prototype이 없으므로 그만큼 가볍습니다.
  4. new 연산자로 인스턴스를 생성할 수 없습니다.
  5. 이것이 화살표 함수의 특징이며 용도입니다.
  */
  debugger;
}
```

Block 안에 book 함수는 prototype과 constructor를 갖고 있습니다. 일반 함수는 다 갖고 있는 것 입니다.

Block 안에 point 함수는 prototype과 constructor가 없습니다.

prototype에 메소드를 연결해서 확장할 수가 없습니다.

constructor가 없으니까 new 연산자로 인스턴스를 생성할 수 없습니다.

즉, point 함수를 생성자 함수로 사용할 수 없는 것 입니다.

화살표 함수는 단독으로 사용하라는 것을 나타냅니다. 그만큼 가볍습니다.

## arguments 사용 불가

화살표 함수 내에서 arguments를 사용할 수 없습니다.

(arguments는 파라미터가 유동적일 때 사용하는 것 입니다.)

```js
{
  ("use strict");
  debugger;

  const point2 = () => {
    try {
      const args = arguments;
    } catch (error) {
      console.log("arguments 사용 불가");
    }
  };
  point2(10, 20);
  /*
  1. point(10, 20) 형태로 호출하면
    일반 함수에서는 arguments에 10, 20이 설정되지만
  2. 화살표 함수에서 ReferenceError가 발생합니다.
    즉, arguments를 사용할 수 없습니다.
  3. 오른쪽의 point 함수 구조를 전개하면
    arguments가 표시는 됩니다.
  */
  // debugger;
}
```

일반 함수에서는 arguments에 10, 20이 설정 되지만 화살표 함수에서는 `ReferenceError`가 발생합니다.

즉, arguments를 사용할 수 없게 됩니다.

point 함수 구조를 전개하면 arguments가 표시는 됩니다.

그저 일반 함수와 구조를 맞추기 위해서 표기한 것이라고 잠정적으로 결론을 내립니다.

### arguments 대신에 rest 파라미터 사용을 할 수 있습니다.
