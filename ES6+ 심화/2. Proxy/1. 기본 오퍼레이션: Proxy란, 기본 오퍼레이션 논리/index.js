/*
Proxy

지금부터 Proxy와 관련된 것을 3개 섹션으로 나누어 다룹니다.

3개 섹션 Proxy, Proxy Trap, Reflect
*/

/*
Proxy

Proxy의 사전적 의미는 대리, 대신
  - 전체 개념에서 볼 때 어울립니다.

Proxy는
  - 기본 오퍼레이션 operation을 중간에서 가로채어 오퍼레이션을 대리, 대신하여 실행합니다.

가로채어 실행하더라도 전체 괘도를 벗어날 수 없으므로 오퍼레이션을 완전하게 바꿀 수는 없습니다.

그럼, 무엇을 대리하고 대신할까요?
*/

/*
기본 오퍼레이션

커피를 주문하는 기본 오퍼레이션은
  - 주문을 받는 카운터로 가서 커피를 주문합니다.
  -  카운터가 커피를 내줍니다.

이 모습을 자바스크립트 코드로 표현하면 [코드1]

여기서 중요한 것은
  - counter.order가 getter가 되는 논리입니다.
  - getter를 호출하면 value가 반환되는 근거가 무엇이냐는 것입니다.
*/
console.log("[코드1] 기본 오퍼레이션");
const counter = { order: "커피" };
const 주문자 = counter.order;
console.log(주문자);  // 커피
/**
 * 1. {order: "커피"}
 *    order는 커피를 주문하는 것으로 프로퍼티 key에 해당하며
 *    "커피"는 프로퍼티 value에 해당합니다.
 * 2. const counter = {order: "커피"}ㅣ
 *    counter는 주문을 받는 카운터이며 {order: "커피"}를 갖고 있습니다.
 *    즉, 주문을 받을 수 있으며 커피를 갖고 있습니다.
 * 3. const 주문자 = counter.order;
 *    카운터에서 커피를 주문하면 주문자에게 "커피"를 내주게 됩니다.
 * 4. 자바스크립트로 counter.order를 실행하면 "커피"가 반환됩니다.
 * 5. 함수를 호출하지 않고 프로퍼티로 값을 구했으며 이것은 getter입니다.
 * 6. 즉, getter를 실행하면 값이 반환됩니다. 이것이 기본 오퍼레이션입니다.
 */

/*
기본 오퍼레이션 논리

const counter = {order: "커피"};
  - counter.order를 실행하면 "커피"를 구하는 행위를 해야 합니다.
  - 즉, 값을 구하는 메소드가 필요합니다.

이때, 엔진은 getter 기능을 가진 내부 메소드 [[Get]]을 호출합니다. [코드2]

ES6에 [[Get]]처럼
  - 기본 오퍼레이션을 제공하고
  - 13개의 내부 메소드가 있습니다.

ECMAScript 스펙의 기본 오퍼레이션
*/
console.log("[코드2] 기본 오퍼레이션 논리")
const target2 = { order: "커피" };
const value2 = target2.order;
console.log(value2);  // 커피
/**
 * 1. getter를 스펙에서 [[Get]]으로 표기합니다.
 * 2. const value = target.order;
 *    target.order를 실행하면 target 오브젝트의 __proto__에 있는 [[Get]]을 호출합니다.
 * 3. [[Get]]을 호출하면서 파라미터 값으로 "order"를 넘겨 줍니다.
 * 4. [[Get]] 메소드가 order를 프로퍼티 키로 하여 프로퍼티 값을 구해 반환합니다.
 * 5. 이것이 기본 오퍼레이션입니다.
 */