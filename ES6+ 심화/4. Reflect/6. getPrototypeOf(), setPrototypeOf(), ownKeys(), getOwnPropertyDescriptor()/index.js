// getPrototypeOf() | setPrototypeOf() | ownKeys() | getOwnPropertyDescriptor()

/*
getPrototypeOf()

| 구분     | 개요                  |
| :------- | :-------------------- |
| 파라미터 | target, 대상 오브젝트 |
| 반환     | prototype 또는 null   |

target.__proto__를 반환합니다.
  - target이 확장 불가라도 반환합니다.

Reflect.getPrototypeOf() 형태로 작성  [코드1]

prototype의 __proto__를 반환 [코드2]
*/
console.log("[코드1] Reflect.getPrototypeOf() 형태");
let proto = Reflect.getPrototypeOf(Array);
console.log(proto === Function.prototype);  // true
console.log(proto === Array.prototype); // false
const list = [];
proto = Reflect.getPrototypeOf(list);
console.log(proto === Array.prototype); // true
/**
 * 1. let proto = Reflect.getPrototypeOf(Array)
 *    Array 오브젝트의 __proto__를 반환합니다.
 * 2. Array.prototype에 Array 오브젝트의 메소드가 있으며
 *    Array.__proto__에 Function.prototype의 메소드가 있습니다.
 * 3. __proto__를 반환하므로
 *    Function.prototype이 반환됩니다.
 * 4. 사용하는 오브젝트의
 *    prototype과 __proto__ 구조가 연상되어야 합니다.
 * 5. proto === Function.prototype; true를 반환합니다.
 * 6. proto === Array.prototype; false를 반환합니다.
 * 7. const list = [];
 *    Array 인스턴스를 생성하면, list.__proto__에
 *    Array.prototype의 메소드가 있스빈다.
 * 8. proto === Reflect.getPrototypeOf(list);
 *    proto에 list.__proto__가 할당됩니다.
 * 9. console.log(proto === Array.prototype)
 *    proto와 Array.prototype이 같습니다.
 */

console.log("[코드2] __proto__ 반환");
const proto2 = Reflect.getPrototypeOf(Array.prototype);
console.log(proto2.map);  // undefined
console.log(proto2.hasOwnProperty); // hasOwnProperty() { [native code] }
/**
 * 1. Reflect.getPrototypeOf(Array.prototype)
 *    Array.prototype.__proto__을 반환합니다.
 *    여기에 빌트인 Object.prototype의 메소드가 있습니다.
 * 2. console.log(proto.map)
 *    map()은 Array.prototype에 있으므로 undefined가 반환됩니다.
 * 3. console.log(proto.hasOwnProperty)
 *    hasOwnProperty()는 Object.prototype의 메소드로
 *    Array.prototype.__proto__에 있습니다.
 */

/*
setPrototypeOf()

| 구분     | 개요                                  |
| :------- | :------------------------------------ |
| 파라미터 | target, 대상 오브젝트                 |
|          | prototype, 설정할 prototype 또는 null |
| 반환     | 처리 성공: true, 실패: false          |

target.__proto__에 prototype에 연결된 메소드를 설정합니다.

Reflect.setPrototypeOf() 형태로 작성 [코드3]
*/

console.log("[코드3] Reflect.setPrototypeOf() 형태");
class Point {
  getPoint() { return 100 }
};
const target3 = function () { };
target3.prototype.getPoint = function () {
  return 200;
};
Reflect.setPrototypeOf(target3, Point.prototype);
console.log(target3.getPoint());  // 100
/**
 * 1. Reflect.setPrototypeOf(target, Point.prototype);
 *    target의 __proto__에 Point.prototype에 연결된 메소드를 설정합니다.
 * 2. console.log(target.getPoint())
 *    target.__proto__의 getPoint()가 호출됩니다.
 *    target.prototype.getPoint()가 호출되지 않습니다.
 */

/*
ownKeys()

| 구분     | 개요                  |
| :------- | :-------------------- |
| 파라미터 | target, 대상 오브젝트 |
| 반환     | Array, 프로퍼티 키    |

target의 모든 프로퍼티 키를 배열로 반환합니다.
  - [[Configurable]]: false이거나 오브젝트가 확장 불가라도 반환합니다.
  - 상속받은 프로퍼티는 제외합니다.

Reflect.ownKeys() 형태로 작성 [코드4]
*/
console.log("[코드4] Reflect.ownKeys() 형태");
const sym = Symbol("심볼");
const target4 = {};
Object.defineProperties(target4, {
  point: { value: 100, configurable: false },
  [sym]: { value: 200 }
});
Reflect.preventExtensions(target4);
console.log(Reflect.ownKeys(target4));  // ['point', Symbol(심볼)]
/**
 * 1. console.log(Reflect.ownKeys(target)
 *    target 오브젝트가 확장 불가이지만 모든 프로퍼티 키를 배열로 반환합니다.
 *    Symbol도 반환합니다.
 */

/*
getOwnPropertyDescriptor()

| 구분     | 개요                      |
| :------- | :------------------------ |
| 파라미터 | target, 대상 오브젝트     |
|          | keys, 프로퍼티 키         |
| 반환     | 디스크립터 또는 undefined |

target에서 프로퍼티 디스크립터를 반환합니다.
  - 상속받은 프로퍼티는 제외합니다.

Reflect.getOwnPropertyDescriptor() 형태로 작성 [코드5]
*/
console.log("[코드5] Reflect.getOwnPropertyDescriptor() 형태");
const target5 = {};
Object.defineProperty(target5, "point", {
  value: 100, configurable: true
});
const desc = Reflect.getOwnPropertyDescriptor(target5, "point");
console.log(desc);  // {value: 100, writable: false, enumerable: false, configurable: true}
/**
 * 1. Reflect.getOwnPropertyDescriptor(target, "point");
 *    target에 {value: 100, configurable: true}를 작성했지만 디폴트 속성도 반환합니다.
 */

