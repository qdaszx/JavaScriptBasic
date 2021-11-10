# Symbol 오브젝트

## primitive 값

자바스크립트에서 Primitive 값은 오브젝트가 아니라 값입니다.

오브젝트가 아니므로 함수를 갖고 있지 않습니다.

const num = 100; 을 할당하면 num 변수에 100만 할당되며 아무것도 첨부되지 않습니다.

예를 들면, 함수를 선언하면 기본적으로 프로토타입이 들어가지만 그런데 프리미티브 값은 값만 할당되고 아무것도 첨부되지 않는다는 것 입니다.

이때 100이 프리미티브 값입니다.

ES5의 primitive 값 타입이 있습니다.

string, number, boolean, null, undefined입니다.

ES6에서 symbol 타입이 추가되었습니다.

즉, symbol 값은 프리미티브 값이라는 것 입니다.

## wrapper 오브젝트

wrapper 오브젝트란 프리미티브 값이 포함된 오브젝트입니다.

오브젝트이므로 wrapper 오브젝트에는 메소드가 있습니다.

wrapper 오브젝트가 있는 프리미티브 값 타입입니다.

string: String 오브젝트, number: Number 오브젝트, boolean: Boolean 오브젝트, symbol: Symbol 오브젝트입니다.

한편, undefined, null은 wrapper 오브젝트가 없습니다.

그래서 undefined, null은 값으로만 사용할 수 있습니다. (메소드로 처리 X)

`const obj = new String(100);`

- obj 인스턴스의 [[PrimitiveValue]] 에 100이 설정됩니다.

## [[PrimitiveValue]] 형태

```js
{
  ("use strict");
  debugger;

  const sports = new String(100);
  /**
  1. 오른쪽의 sports를 펼치면
  2. [[PrimitiveValue]]: "100"이 있습니다.
     [[PrimitiveValue]]가 프리미티브 값을 나타내는 프로퍼티 이름이며, "100"이 프로퍼티 값입니다.
  3. sports가 wrapper 오브젝트입니다.
   */
  debugger;

  const sym = Symbol("ABC");
  /**
  1. sports를 펼치면 [[PrimitiveValue]]가 표시되지만
  2. sym은 펼칠 수가 없으며 [[PrimitiveValue]]가 표시되지 않습니다.
  3. 그렇다고 Symbol에 Primitive 값이 없는 것은 아니며
  4. 이것은 Symbol은 Primitive 값을 외부에 노출시키지 않는 특성 때문입니다.
   */
  debugger;
}
```

### 정리

심볼 값은 외부에 노출되지 않는 것이 가장 크다.

그래서 심지어 Symbol 오브젝트 마저도 외부에 노출되는 것을 막았다.

심볼은 new 연산자를 사용해서 인스턴스를 만들 수도 없습니다.

왜냐하면 인스턴스를 만들면 프리미티브 값이 외부에 노출될 가능성이 있기 때문입니다.
