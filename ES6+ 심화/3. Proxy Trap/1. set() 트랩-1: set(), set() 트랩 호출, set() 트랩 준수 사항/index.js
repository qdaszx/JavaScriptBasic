// Proxy Trap

/*
set()

| 구분     | 개요                         |
| :------- | :--------------------------- |
| 파라미터 | target, 대상 오브젝트        |
|          | key, 프로퍼티 key            |
|          | value, 프로퍼티 값           |
|          | receiver, 설명 참조          |
| 반환     | 처리 성공: true, 실패: false |

프로퍼티를 설정하는 트랩으로
  - target 또는 receiver에
  - 프로퍼티(key, value)를 설정합니다.

set() 트랩을 작성하지 않은 형태 [코드1]

set() 트랩이 호출되면
  - 엔진이 실행 환경을 분석하여 파라미터 값을 설정합니다. [코드2]
*/
console.log("[코드1] set() 트랩을 작성하지 않은 형태");
const target = {};
const obj = new Proxy(target, {});
obj.point = 100;
console.log(obj.point); // 100
/**
 * 1. obj.point = 100;
 *    100을 point에 할당하므로 setter 입니다.
 * 2. set() 트랩을 작성하지 않았으므로 target 오브젝트의 [[Set]]이 호출되며 파라미터 값으로 point와 100을 넘겨줍니다.
 * 3. [[Set]]에서 {point: 100} 형태로 target 오브젝트에 설정합니다.
 * 4. obj.point;
 *    get() 트랩을 작성하지 않았으므로 target 오브젝트의 [[Get]]이 호출됩니다.
 * 5. 이것은 Proxy를 사용하지 않아도 됩니다.
 */

console.log("[코드2] set() 트랩 사용");
const target2 = {};
const handler2 = {
  set(target, key, value, receiver) {
    target[key] = value + 200;
  }
};
const obj2 = new Proxy(target2, handler2);
obj2.point = 100;
console.log(obj2.point);  // 300
/**
 * 1. obj.point = 100;을 실행하면 set() 트랩이 호출됩니다.
 * 2. 트랩: set(target, key, value, receiver){...}
 *    엔진이 target 파라미터에 target 오브젝트를 설정합니다.
 * 3. key 파라미터에 "point"를 설정하고 value 파라미터에 100을 설정합니다.
 * 4. receiver 파라미터에 Proxy 또는 Proxy를 상속받은 오브젝트를 설정합니다.
 *    뒤에서 별도로 다룹니다.
 * 5. 파라미터 이름으로 값을 매핑하지 않고 파라미터 순서로 매핑합니다.
 *    이름을 자유롭게 사용할 수 있습니다.
 */

/*
set() 트랩 호출

아래처럼 값을 할당하면 set() 트랩이 호출됩니다.

프로퍼티에 값을 할당할 때
  - proxy[key] = 100

Object.create(proxy, {프로퍼티})
  - 인스턴스에 없는 프로퍼티를 설정할 때 [코드3]
  - 인스턴스에 있는 프로퍼티를 설정할 때 [코드4]

Reflect.set()
  - Reflect 오브젝트는 다음 장에서 다룹니다.

set() 트랩에서 target에 값을 설정해야 합니다. [코드5]
*/
console.log("[코드3] 인스턴스에 없는 프로퍼티 설정");
const target3 = {};
const handler3 = {
  point: 700,
  set(target, key, value, receiver) {
    target[key] = value + 200;
  }
};
const proxy = new Proxy(target3, handler3);
const obj3 = Object.create(proxy, {
  bonus: { value: 500, writable: true }
});
obj3.point = 100;
console.log(obj3.point);  // 300
/**
 * 1. const obj = Object.create(proxy, {...});
 *    proxy 인스턴스를 상속받아 인스턴스를 생성합니다.
 * 2. proxy 인스턴스에 연결된 handler와 target을 사용할 수 있습니다.
 * 3. bonus: {value: 500, writable: true}
 *    obj 인스턴스 프로퍼티로 값을 설정합니다.
 *    즉, obj.bonus에 500이 설정됩니다.
 * 4. obj.point = 100;
 *    obj 인스턴스 프로퍼티로 point가 없습니다.
 *    set() 트랩이 호출됩니다.
 * 5. 트랩: target[key] = value + 200;
 *    target에 {point: 300}을 설정합니다.
 * 6. obj.point
 *    obj 인스턴스 프로퍼티로 point를 검색합니다.
 *    point가 없습니다.
 * 7. target에서 point를 검색합니다.
 *    point 값인 300이 반환됩니다.
 * 8. handler에서 point를 검색하지 않습니다.
 *    {point: 700}이 있지만 반환되지 않습니다.
 */

console.log("[코드4] 인스턴스에 있는 프로퍼티 설정");
const target4 = {};
const handler4 = {
  set(target, key, value, receiver) {
    target[key] = value + 200;
  }
};
const proxy4 = new Proxy(target4, handler4);
const obj4 = Object.create(proxy4, {
  point: { value: 100, writable: true }
});
obj4.point = 700;
console.log(obj4.point);  // 700
console.log(target4.point); // undefined
/**
 * 1. const obj = Object.create(proxy, {...});
 *    proxy 인스턴스를 상속받아 인스턴스를 생성합니다.
 * 2. point: {value: 100, writable: true}
 *    obj 인스턴스 프로퍼티로 값을 설정합니다.
 *    즉, obj.point에 100이 설정됩니다.
 * 3. obj.point = 700;
 *    obj 인스턴스 프로퍼티로 point가 있습니다.
 *    set() 트랩이 호출되지 않습니다.
 * 4. {point: 100}이 obj 인스턴스 프로퍼티로 설정되고
 *    obj.__proto__에 handler와  target이 설정되므로
 *    point를 먼저 인식하기 때문입니다.
 * 5. {point: 100}의 value 값을 700으로 변경합니다.
 * 6. 값을 바꾸려면 {writable: true} 이어야 합니다.
 *    ES5의 "프로퍼티 디스크립트"를 참조하세요.
 * 7. obj.point
 *    obj 인스턴스 프로퍼티인 point 값을 반환합니다.
 *    바뀐 값인 700이 출력됩니다.
 * 8. target.point
 *    target 오브젝트에 point 프로퍼티가 없으므로 undefined가 출력됩니다.
 */

console.log("[코드5] target에 값 설정");
const target5 = {};
const handler5 = {
  set(target, key, value, receiver) {
    // target[key] = value + 200;
  }
};
const obj5 = new Proxy(target5, handler5);
obj5.point = 100;
console.log(obj5.point);  // undefined
/**
 * 1. 트랩: set(target, key, value, receiver){...}
 *    set() 트랩에서 파라미터로 받은 {point: 100}이 target 오브젝트에 자동으로 설정되지 않습니다.
 * 2. set() 트랩에서 target 오브젝트에 {key: value}를 설정해야 합니다.
 *    값 설정이 setter의 기본 오퍼레이션입니다.
 * 3. console.log(obj.point);
 *    obj 인스턴스 전체에 point가 없으므로 undefined가 출력됩니다.
 */

/*
set() 트랩 준수사항

트랩 준수 사항 invariant
  - 트랩에서 준수 사항을 지키지 않으면
  - 에러가 발생하거나 처리되지 않습니다.
  - 모든 트랩에 준수 사항이 있습니다.

target의 프로퍼티가 data 디스크립터일 때
  - [[Writable]]: false 또는 [[Configurable]]: false 이면 프로퍼티 값을 설정할 수 없습니다. [코드6]

target의 프로퍼티가 악세서 디스크립터일 때
  - [[Configurable]]: false 이면 프로퍼티 값을 설정할 수 없습니다.
*/
console.log("[코드6] 프로퍼티 값 설정 불가");
const target6 = {};
Object.defineProperty(target6, "point", {
  value: 500, writable: false
});
const handler6 = {
  set(target, key, value, receiver) {
    target[key] = value + 200;
  }
};
const obj6 = new Proxy(target6, handler6);
console.log(obj6.point = 100);  // 100
console.log(obj6.point);  // 500
/**
 * 1. {writable: false}가 디폴트이지만 설명을 위해 작성했습니다.
 * 2. 트랩: target[key] = value + 200; 에서 point 프로퍼티가 {writable: false}이므로 point 프로퍼티가 값을 변경할 수 없습니다.
 * 3. 그렇다고 에러가 발생하지 않습니다.
 *    (obj.point = 100)에서 100이 반환됩니다.
 * 4. console.log(obj.point);
 *    obj.point의 초깃값인 500이 출력됩니다.
 */
