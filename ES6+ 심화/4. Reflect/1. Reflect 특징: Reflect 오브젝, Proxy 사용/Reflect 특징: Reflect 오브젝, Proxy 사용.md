# Reflect

# Reflect 특징

## Reflect 오브젝트

빌트인 오브젝트

constructor가 없으므로 인스턴스를 생성할 수 없습니다.

### Reflect.get() 형태로 호출합니다.

```js
console.log("[코드1] Reflect 함수 호출");
const target = { point: 100 };
console.log(target.point); //  100
console.log(Reflect.get(target, "point")); // 100
```

    1. Reflect.get(target, "point")
      target에서 point 프로퍼티 값을 구합니다.
      target에 대상 오브젝트를 작성하고
      "point"에 프로퍼티 키를 작성합니다.
    2. [[Get]]("point", receiver) 형태로
      target의  [[Get]]을 실행합니다.
      receiver는 Reflect.get()에서 다룹니다.
    3. 100을 반환합니다.
    4. 값을 구하는 것은 target.point와 같지만
      Reflect.get()은 부가 기능이 있습니다.

에러 대응 형태

- ### try-catch로 에러에 대응

```js
console.log("[코드2] try-catch로 에러에 대응");
const target2 = {};
Object.defineProperty(target2, "point", {
  value: 100,
  writable: false,
});
try {
  Object.defineProperty(target2, "point", {
    value: 200,
  });
} catch {
  console.log("에러 발생"); // 에러 발생
}
```

    1. {value: 100, writable: false}
      {writable: false}이므로 value 속성 값을 바꿀 수 없습니다.
    try-catch에서
    2. value: 200
      value 속성 값을 바꾸면 에러가 발생합니다.
      그래서 try-catch를 사용했습니다.

- ### true, false를 반환

```js
console.log("[코드3] 반환 값을 체크하여 대응");
const target3 = {};
Object.defineProperty(target3, "point", {
  value: 100,
  writable: false,
});
const check3 = Reflect.defineProperty(target3, "point", {
  value: 200,
});
console.log(check3); // false
```

    1. {value: 100, writable: false}
      {writable: false}이므로 속성 값을 바꿀 수 없습니다.

    Reflect 오브젝트 사용
    2. value: 200
      value 속성 값을 바꾸면 에러가 발생합니다.
    3. 이때, 프로그램이 중단되지 않고 처리 실패를 뜻하는 false를 반환합니다.
      성공이면 true를 반환합니다.
    4. console.log(check);
      false가 출력됩니다.

## Proxy 사용

Reflect 오브젝트의 함수는 Proxy 트랩에 1:1로 대응하며 트랩 이름과 함수 이름이 같습니다.

### 트랩 파라미터와 Reflect 함수의 파라미터가 같습니다.

```js
console.log("[코드4] 파라미터가 같습니다");
const target4 = { point: 100 };
const handler4 = {
  get(target, key, receiver) {
    return Reflect.get(target, key, receiver) + 200;
  },
};
const obj4 = new Proxy(target4, handler4);
console.log(obj4.point); // 300
```

    1. console.log(obj.point)
      getter이므로 get() 트랩이 호출됩니다.

    2. 트랩: get(target, key, receiver){...}
      target 파라미터에 target이 설정됩니다.
      key에 "point"가 설정되고 receiver에 Proxy 인스턴스가 설정됩니다.

    3. Proxy의 get() 트랩과 Reflect.get() 함수에서
      트랩 이름과 Reflect 함수 이름이 같으며 파라미터도 같습니다.
      13개 트랩에 대응하는 Reflect 함수가 있습니다.

    4. 트랩: return Reflect.get(target, key, receiver) + 200;
      Reflect.get()은 obj.point로 값을 구하는 본래 기능을 수행합니다.

    5. 구한 값 100에 200을 더해 반환하는 것은 부가 기능으로 이것은 트랩의 기능입니다.

## Reflect 오브젝트 형태

```js
{
  ("use strict");
  debugger;

  const obj = Reflect;
  /*
  1. Reflect 오브젝트 구조를 보기 위해 obj에 할당했습니다.

  2. obj에 표시된 함수를 Reflect.get() 형태로 사용할 수 있습니다.

  3. 함수 이름이 Proxy 트랩 이름과 같습니다.

  4. Reflect 오브젝트에 prototype과 prototype.constructor가 없습니다.
  따라서 new 연산자로 인스턴스를 생성할 수 없으며 prototype에 메소드를 연결할 수 없습니다.

  5. 표시된 constructor는 Reflect.constructor입니다.
  */
  debugger;
}
```
