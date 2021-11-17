// defineProperty() preventExtensions() isExtensible() 트랩

/*
defineProperty()

| 구분     | 개요                               |
| :------- | :--------------------------------- |
| 파라미터 | target, 대상 오브젝트              |
|          | key, 프로퍼티 key                  |
|          | descriptor, 추가/변경할 디스크립터 |
| 반환     | 처리 성공: true, 실패: false       |

Object.defineProperty()의 트랩이다.
  - target에 프로퍼티를 추가하거나
  - 속성 값을 변경합니다. [코드1]
*/
console.log("[코드1] defineProperty() 트랩");
const target = {};
const handler = {
  defineProperty(target, key, desc) {
    if (desc.value > 0) {
      desc.value = desc.value * -1;
    };
    Object.defineProperty(target, key, desc);
    return true;
  }
};
const proxy = new Proxy(target, handler);
Object.defineProperty(proxy, "point", {
  value: 100, writable: true
});
console.log(target.point);  // -100
/**
 * 1. Object.defineProperty(obj, "point", {...})
 *    defineProperty() 트랩이 호출됩니다.
 * 2. 트랩: defineProperty(target, key, desc){...}
 *    desc에 {...}에 작성한 디스크립터가 설정됩니다.
 * 3. 트랩: if (desc.value > 0){...}
 *    value 속성값이 100이며, 0보다 크므로 100에 -1을 곱해 -100으로 바꿉니다.
 * 4. 트랩에서 속성 값을 바꿀 수 있습니다.
 */

/*
defineProperty() 트랩 호출

defineProperty() 트랩이 호출되는 형태
  - Object.defineProperty()
  - Reflect.defineProperty()
*/

/*
defineProperty() 트랩 준수사항

strict mode일 때
  - 트랩에서 false를 반환하면 TypeError

target 오브젝트가 확장 불가이면
  - 프로퍼티를 추가할 수 없습니다.
  - Object.preventExtension(target);

target 오브젝트의 프로퍼티가
  - [[Writable]]: false 또는 [[Configurable]]: false이면
  - 프로퍼티 값을 변경할 수 없습니다.
*/

/*
preventExtensions()

| 구분     | 개요                         |
| :------- | :--------------------------- |
| 파라미터 | target, 대상 오브젝트        |
| 반환     | 처리 성공: true, 실패: false |

Object.preventExtensions() 트랩입니다.
  - target 오브젝트에 오브젝트의 확장 금지를 설정합니다. [코드2]
*/
console.log('[코드2] preventExtensions() 트랩');
const target2 = { point: 100 };
const handler2 = {
  preventExtensions(target) {
    if (target.point) {
      Object.preventExtensions(target);
      return true;
    };
    return false;
  }
};
const proxy2 = new Proxy(target2, handler2);
const obj2 = Object.preventExtensions(proxy2);
console.log(obj2.point);  // 100
console.log(Object.isExtensible(target2));  // false
/**
 * 1. const obj = Object.preventExtensions(proxy);
 *    preventExtensions() 트랩이 호출됩니다.
 * 2. 트랩: if (target.point) {...}
 *    point에 값이 있을 때만 확장 금지를 설정하기 위해 비교한 것입니다.
 * 3. 트랩에서 true를 반환하면 true를 반환하지 않고 Proxy 인스턴스를 반환합니다.
 * 4. console.log(obj.point);
 *    Proxy 인스턴스의 point 프로퍼티 값을 출력합니다.
 * 5. console.log(Object.isExtensible(target))
 *    확장 불가 상태이므로 false를 반환합니다.
 */

/*
preventExtensions() 트랩 호출

preventExtensions() 트랩이 호출되는 형태
  - Object.preventExtensions()
  - Reflect.preventExtensions()
*/

/*
preventExtensions() 트랩 준수사항

target 오브젝트가 확장 불가일 때
  - 즉, Object.isExtensible(target) 결과가 false일 때
  - false를 반환하면 TypeError
  - true만 반환할 수 있습니다.
*/

/*
isExtensible()

| 구분     | 개요                         |
| :------- | :--------------------------- |
| 파라미터 | target, 대상 오브젝트        |
| 반환     | 확장 가능: true, 불가: false |

Object.isExtensible() 트랩입니다.
  - target의 확장 가능 여부를 반환합니다. [코드3]

false를 반환하는 오브젝트 상태
  - Object.seal
  Object.freeze()
  Object.preventExtensions()
  Reflect.preventExtensions()
*/
console.log("[코드3] isExtensible() 트랩");
const target3 = { point: 100 };
const handler3 = {
  isExtensible(target) {
    return Object.isExtensible(target);
  }
};
const obj3 = new Proxy(target3, handler3);
console.log(Object.isExtensible(obj3)); // true
Object.seal(target3);
console.log(Object.isExtensible(obj3)); // false
/**
 * 1. console.log(Object.isExtensible(obj))
 *    isExtensible() 트랩이 호출됩니다.
 * 2. target 오브젝트가 확장 가능 상태이므로 true를 반환합니다.
 * 3. Object.seal(target);
 *    target 오브젝트를 확장 불가 상태로 설정합니다.
 * 4. console.log(Object.isExtensible(obj))
 *    확장 불가 상태이므로 false를 반환합니다.
 */

/*
isExtensible() 트랩

isExtensible() 트랩이 호출되는 형태
  - Object.isExtensible()
  - Reflect.isExtensible()
*/

/*
isExtensible() 트랩 준수사항

Object.isExtensible(target) 결과와
  - 같은 값을 반환해야 합니다.
  - 즉, 결과를 바꿀 수 없습니다.
  - 같지 않으면 TypeError가 발생합니다.
*/