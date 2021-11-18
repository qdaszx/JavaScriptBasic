# defineProperty() | preventExtensions() | isExtensible()

## defineProperty()

| 구분     | 개요                               |
| :------- | :--------------------------------- |
| 파라미터 | target, 대상 오브젝트              |
|          | key, 프로퍼티 키                   |
|          | descriptor, 추가/변경할 디스크립터 |
| 반환     | 처리 성공: true, 실패: false       |

target에 프로퍼티를 추가, 변경합니다.

### Reflect.defineProperty() 형태로 작성합니다.

```js
console.log("[코드1] Reflect.defineProperty() 형태");
const target = {};
Reflect.defineProperty(target, "point", {
  value: 100,
  writable: true,
});
console.log(Object.getOwnPropertyDescriptor(target, "point")); // {value: 100, writable: true, enumerable: false, configurable: false}
```

    1. Reflect.defineProperty(...)
      target에 프로퍼티를 설정합니다.

### Object.defineProperty()와 차이 - true, false를 반환한다는 것

```js
console.log("[코드2] Object.defineProperty()와 차이");
const target2 = {};
Object.defineProperty(target2, "point", {
  value: 100,
  configurable: false,
});
const result2 = Reflect.defineProperty(target2, "point", {
  value: 200,
});
console.log(result2); // false
console.log(Reflect.get(target2, "point")); // 100
```

    1. Object.defineProperty(...)는
      처리에 성공하면 Object를 반환하고
      실패하면 TypeError가 발생합니다.
      따라서 try-catch를 사용해야 합니다.

    2. Reflect.defineProperty(...)는
      처리에 성공하면 true, 실패하면 false를 반환합니다.
      try-catch를 사용하지 않아도 됩니다.

    3. point 프로퍼티가 {configurable: false}이므로
      에러가 발생하게 되며, false를 반환했습니다.
      따라서 100이 200으로 바뀌지 않습니다.

## preventExtensions()

| 구분     | 개요                         |
| :------- | :--------------------------- |
| 파라미터 | target, 대상 오브젝트        |
| 반환     | 처리 성공: true, 실패: false |

target에 프로퍼티 추가 금지를 설정합니다.

### Reflect.preventExtensions() 형태입니다.

```js
console.log("[코드3] Reflect.preventExtensions() 형태");
const target3 = {};
console.log(Reflect.preventExtensions(target3)); // true
const result3 = Reflect.defineProperty(target3, "point", {
  value: 100,
});
console.log(result3); // false
```

    1. console.log(Reflect.preventExtensions(target));
      처리를 성공하면 true, 실패하면 false를 반환합니다.

    2. const result = Reflect.defineProperty(...);
      프로퍼티를 추가할 수 없는데 추가하고 있습니다.
      처리 실패이므로 false가 반환됩니다.

## isExtensible()

| 구분     | 개요                         |
| :------- | :--------------------------- |
| 파라미터 | target, 대상 오브젝트        |
| 반환     | 처리 성공: true, 실패: false |

target에 프로퍼티 추가 가능 여부를 반환합니다.

### Reflect.isExtensible() 형태입니다.

아래 함수를 실행한 상태이면 false를 반환합니다.

- Object.seal()
- Object.freeze()
- Object.preventExtensions()

```js
console.log("[코드4] Reflect.isExtensible() 형태");
const target4 = { point: 100 };
console.log(Reflect.isExtensible(target4)); // true

Reflect.preventExtensions(target4);
console.log(Reflect.isExtensible(target4)); // false
```

    1. Reflect.isExtensible(target)
      target 오브젝트에 프로퍼티를 추가할 수 있으면 true를 반환하고
      추가할 수 없으면 false를 반환합니다.
