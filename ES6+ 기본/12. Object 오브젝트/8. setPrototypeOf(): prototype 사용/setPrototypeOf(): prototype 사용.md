# setPrototypeOf() 인스턴스 사용

## setPrototypeOf()

| 구분     | 데이터(값)                     |
| :------- | :----------------------------- |
| 형태     | Object.setPrototypeOf()        |
| 파라미터 | 오브젝트 또는 인스턴스         |
|          | 오브젝트의 prototype 또는 null |
| 반환     | 첫 번째 파라미터               |

첫 번째 파라미터의 prototype으로 두 번째 파라미터의 파라미터를 설정합니다.

```js
console.log("[코드1] setPrototypeOf()");
let obj = { 0: 10, length: 1 };
Object.setPrototypeOf(obj, Array.prototype);
```

    1. obj는 인스턴스입니다.
    2. 인스턴스에는 prototype이 없으며 __proto__가 있으므로 __proto__에 설정하는 것과 같습니다.

인스턴스와 오브젝트가 왜 중요한가? 인스턴스에는 prototype이 없고 `__proto__`가 있습니다.

즉, Array.prototype에 있는 메소드들이 `__proto__`에 설정된다는 것 입니다. obj는 forEach 메소드를 사용할 수 없지만 Array.prototype에는 forEach 메소드가 있습니다.

그렇다면 forEach 메소드를 사용할 수 있다는 모습이 되는 겁니다.

### setPrototypeOf() 실행 후 인스턴스 구조

```js
{
  ("use strict");
  debugger;

  const obj = { 0: 10, 1: 20, length: 2 };
  /*
  1. Array-like 오브젝트입니다.

  2. 오른쪽의 obj를 펼치면 prototype은 없고 __proto__만 있습니다.

  3. 이것은 오브젝트가 아니라 Object.prototype에 연결된 메소드로 생성한 인스턴스를 뜻합니다.

  4. __proto__에 Object.prototype에 연결된 메소드가 설정되어 있으므로 Array 오브젝트의 메소드를 사용할 수 없습니다.
  */
  debugger;

  Object.setPrototypeOf(obj, Array.prototype);
  /*
  1. obj의 __proto__에 Array.prototype에 연결된 메소드를 설정합니다.

  2. 오른쪽의 obj를 펼치면 Object.prototype에 연결된 메소드가 없어지고 Array.prototype에 연결된 메소드가 표시됩니다.

  3. 설명을 위한 것으로 일반적으로 이렇게 사용하지 않지만 이처럼 __proto__에 설정된 메소드를 바꿀 수 있습니다.
  */
  debugger;

  const callback = (element, index, all) => console.log(element);
  obj.forEach(callback);
  /*
  1. obj가 배열이 아니므로 forEach()를 사용할 수 없지만, 바로 앞에서 __proto__에 Array.prototype에 연결된 메소드를 설정했으므로 사용할 수 있습니다.

  2. 콜백 함수가 호출되면서 반복하게 됩니다. console에 10, 20이 출력됩니다.
  */
  debugger;

  const check = Object.prototype;
  // Object.prototype이 바뀌지 않습니다.
  debugger;
}
```

ES5에 getPrototypeOf()가 있습니다.

`__proto__`는 ES5까지 표준이 아니였다. ES6부터 `__proto__`가 스펙에 등장합니다.

setPrototypeOf()로 `__proto__`에 값을 설정하는 데, `__proto__`를 거론하지 않고 setPrototypeOf()를 거론한다는 라는 것은 스펙이 맞지 않는 것 입니다.

ES6에서 `__proto__`를 거론하고 setPrototypeOf()함수를 거론한 것 같습니다.

이것은 개념적인 추측이고 스펙에 작성된 것은 아닙니다.
