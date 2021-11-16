# Proxy 인스턴스 생성

## new Proxy()

| 구분     | 개요                  |
| :------- | :-------------------- |
| 파라미터 | target, 대상 오브젝트 |
|          | handler 오브젝트      |
| 반환     | 생성한 Proxy 인스턴스 |

Proxy 인스턴스를 생성하여 반환합니다.

첫 번째 파라미터에 Proxy 대상 target 오브젝트를 작성합니다.

Object, Array, Function 등을 작성할 수 있습니다.

두 번째 파라미터에 핸들러를 작성합니다.

```js
console.log("[코드1] new Proxy()");
const target = ["A", "B"];
const handler = {
  get(target, key) {
    return target[key] + ", 첫 번째";
  },
};
const obj = new Proxy(target, handler);
console.log(obj[0]); // A, 첫 번째
```

    1. const handler = {...}
      [[Get]] 대신에 실행될 핸들러입니다. (get() 트랩)
    2. const obj = new Proxy(target, handler);
      Proxy 인스턴스를 생성하면서 target과 handler를 연결합니다.
    3. new 연산자를 사용하지 않고 Proxy()로 호출하면 TypeError가 발생합니다.
    4. handler를 사용하지 않더라도 handler를 작성하지 않으면 에러가 발생하므로 new Proxy(target, {}) 형태처럼 두 번째 파라미터에 빈 Object{}를 작성합니다.
    5. obj[0]
      값을 구하는 것이므로 핸들러의 get() 트랩이 호출됩니다.

## Proxy 형태

```js
{
  ("use strict");
  debugger;

  const obj = Proxy;
  /*
  1. Proxy 오브젝트 구조를 살펴보기 위해 obj에 할당합니다.
  */
  debugger;

  /*
  1. Proxy 오브젝트 자체를 obj에 할당했으므로 prototype과 constructor가 있어야 하는데 없습니다.

  2. new 연산자로 인스턴스를 생성하려면 constructor가 있어야 하는데, 없습니다.
  그런데도 앞에서 new 연산자로 인스턴스를 생성했습니다.
  Proxy(target, {}) 형태로 실행하면 에러가 난다고 했습니다.
  */
  debugger;

  /*
  3. obj.__proto__를 펼치면 apply(), call()이 있으며 이것은 Function 오브젝트의 메소드로 Proxy에서 정의한 것이 아닙니다.

  4. 한편, 이런 구조는 Proxy 오브젝트가 Function 오브젝트 특성을 갖고 있다는 것을 뜻합니다.
  */
  debugger;

  /*
  5. Proxy 오브젝트는 일반적인 형태가 아닌 특별한 형태의 오브젝트입니다.

  6. ES6 스펙에 아래와 같이 작성되어 있습니다.
    A proxy object is an exotic object.
  */
  debugger;

  /*
  7. exotic object에 대해 "ES6+ 기본" 과정에서 다루었습니다만,
  범용성을 위한 특별한 오브젝트를 뜻합니다.

  8. revocable();
  취소 가능한 오브젝트를 생성하며 뒤에서 다룹니다.
  Proxy 오브젝트에는 함수 하나만 있습니다.
  */
  debugger;
}
```

## Proxy 인스턴스 형태

```js
{
  ("use strict");
  debugger;

  const target = { point: 100 };
  const handler = {
    get(target, key) {
      return target[key] + 200;
    },
  };
  const obj = new Proxy(target, handler);
  /*
  1. obj를 펼치면 [[Handler]]가 있으며, 이것은 핸들러를 뜻합니다.

  2. [[Handler]]를 펼치면 get()이 있으며 이것은 handler 오브젝트에 작성한 트랩입니다.

  3. [[Handler]].__proto__를 펼치면 get, set이 있습니다.
  이것이 [[Get]], [[Set]]입니다.

  4. get() 트랩 아래 __proto__가 있고 거기에 [[Get]]이 있으므로 get() 트랩이 실행됩니다.
  */
  debugger;

  /*
  5. [[Target]]을 펼치면 {point: 100}이 표시되며 이것은 target 오브젝트입니다.

  6. [[Target]].__proto__를 펼치면 get, set이 있습니다.
  이것이 [[Get]], [[Set]]입니다.
  */
  debugger;

  console.log(obj.point);
  /*
  1. obj.point는 getter입니다.

  2. obj Proxy 인스턴스에서 point 프로퍼티 값을 구합니다.
  핸들러에 get() 트랩을 작성했으므로 get() 트랩이 호출됩니다.

  return target[key] + 200;
  3. target에서 point 프로퍼티 값을 구하고 200을 더해 반환합니다.

  4. get() 트랩의 자세한 처리는 Proxy Trap에서 다룹니다.
  */
  debugger;
}
```

## Proxy.revocable()

| 구분     | 개요                     |
| :------- | :----------------------- |
| 파라미터 | target, 대상 오브젝트    |
|          | handler, 핸들러 오브젝트 |
| 반환     | 생성한 오브젝트          |

Proxy를 사용할 수 없는 상태로 바꿀 수 있는 오브젝트를 생성하여 반환합니다.

```js
console.log("[코드2] Proxy.revocable()");
const target2 = { point: 100 };
const handler2 = {
  get(target, key) {
    return target[key];
  },
};
const obj2 = Proxy.revocable(target2, handler2);
console.log(obj2.proxy.point); // 100

obj2.revoke();
try {
  obj2.proxy.point;
} catch {
  console.log("Proxy 기능 사용 불가"); // Proxy 기능 사용 불가
}
```

    1. const obj = Proxy.revocable(target, handler);
      new Proxy(target, handler)와 같습니다.
      따라서 Proxy를 처리할 수 있습니다.
    2. 다만, obj.proxy에 Proxy 인스턴스가 설정됩니다.
    3. console.log(obj.proxy.point);
      getter이므로 핸들러의 get() 트랩이 호출됩니다.
      obj.proxy에 Proxy 인스턴스가 있으므로 obj.proxy.point 형태로 작성합니다.
    4. get() 트랩에서 100을 반환합니다.
    5. obj.revoke();
      obj.proxy의 Proxy 인스턴스를 사용할 수 없게 만듭니다.
    6. obj.proxy.point;
      obj.proxy의 Proxy를 사용할 수 없으므로 에러가 발생합니다.

## 생성한 오브젝트 구조

```js
{
  ("use strict");
  debugger;

  const target = { point: 100 };
  const handler = {
    get(target, key) {
      return target[key];
    },
  };
  const obj = Proxy.revocable(target, handler);
  /*
  1. obj를 펼치면, proxy와 revoke()가 있습니다.

  2. obj.proxy를 펼치면 [[Handler]]와 [[Target]]이 있습니다.
  즉, Proxy 인스턴스입니다.

  3. 이런 구조로 인해 [[Target]]의 point 프로퍼티 값을 구할 때 obj.proxy.point 형태로 작성해야 합니다.

  4. [[IsRevoked]]가 있으며 값을 false 입니다.
  */
  debugger;

  obj.revoke();
  /*
  1. obj.proxy를 펼치면, [[IsRevoked]] 값이 false에서 true로 바뀌었습니다.

  2. 이 값이 true일 때, obj.proxy.point를 실행하면 에러가 발생합니다.

  3. revoke() 메소드는 [[IsRevoked]] 값을 true로 설정하여 Proxy가 실행되지 않도록 합니다.
  */
  debugger;
}
```
