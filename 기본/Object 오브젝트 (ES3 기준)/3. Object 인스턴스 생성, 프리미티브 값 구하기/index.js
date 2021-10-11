/**
 * new Object()
 * 구분 - 데이터(값)
 * 파라미터 - 값opt
 * 반환 - 생성한 인스턴스
 *
 * - 인스턴스를 생성하여 반환
 * - 파라미터의 데이터 타입에 따라
 *    - 생성할 인스턴스 결정 [코드1] [코드2]
 * - 파라미터 값이 undefined, null이면
 *    - 빈 Object 인스턴스 반환 [코드3]
 */
console.log("[코드1] Number 오브젝트 생성");
let newNum = new Number(123);
console.log(typeof newNum); // object
console.log(newNum + 100);  // 223
/**
 * 1. new Number(123)로 생성한
 *    인스턴스 타입은 object이며
 *    프리미티 값은 123
 */

console.log("[코드2] Object 오브젝트 생성");
let newObj = new Object(123);
console.log(typeof newObj); // object
console.log(newObj + 100);  // 223
/**
 * 1. new Object(123)로 생성한
 *    인스턴스의 타입도 object이고
 *    프리미티 값은 123
 * 2. 2개 인스턴스 모두 100을 더할 수 있으며
 *    값이 더해진다는 것은 Number 타입이라는 것
 * 3. new Object()는 파라미터 값 타입이
 *    Number 타입이면 Number 인스턴스를 생성하고
 *    String 타입이면 String 인스턴스를 생성
 */

console.log("[코드3] 파라미터를 작성하지 않으면?");
let newObj2 = new Object();
console.log(newObj2); // {}
/**
 * 1. new Object()처럼 파라미터를 작성하지 않으면
 *    undefined를 작성한 것과 같으며
 *    값을 갖지 않은 Object 인스턴스 생성
 */

/**
 * Object()
 *
 * 구분 - 데이터(값)
 * 파라미터 - 값opt
 * 반환 - 생성한 인스턴스
 *
 * - Object 인스턴스 생성
 *    - 파라미터는 {name: value} 형태 [코드4]
 */
console.log("[코드4] Object()");
let obj = Object({ name: "JS책" });
console.log(obj); //{name: 'JS책'}

let emptyObj = Object();
console.log(emptyObj);  //{}
/**
 * 1. 파라미터를 작성하지 않으면
 *    new Object()와 같음
 */

/**
 * Object 생성 방법
 * - var abc = {};
 *    - var abc = Object()와 같음
 *    - 즉, var abc = {}를 실행하면
 *      Object 인스턴스가 생성됨 [코드5] [코드6]
 * - {} 표기를
 *    - 오브젝트 리터럴Literal이라고 부름
 */
console.log("[코드5] Object() 사용");
let obj2 = Object({ name: "value" });
console.log(obj2);  //{name: 'value'}
console.log(obj2 instanceof Object);  //true
/**
 * 1. true가 출력된 것은
 *    Object로 생성한 인스턴스를 뜻합니다.
 */

console.log("[코드6] Object 리터럴{} 사용");
let obj3 = { name: "value" };
console.log(obj3);  //{name: 'value'}
console.log(obj3 instanceof Object);  //true
/**
 * 1. true가 출력된 것은
 *    Object로 생성한 인스턴스를 뜻합니다.
 * 2. Object()와 Object 리터럴{} 모두
 *    Object 인스턴스를 생성합니다.
 * 3. 그래서 Object()를 사용하지 않고
 *    간단하게 {}를 사용합니다.
 */

/**
 * valueOf()
 *
 * 구분 - 데이터(값)
 * data - Object 인스턴스, 숫자
 * 파라미터 - 사용하지 않음
 * 반환 - 프리미티브 값
 *
 * - data 위치에 작성한
 *   Object 인스턴스의 프리미티브 값 반환 [코드7]
 */
console.log("[코드7] 프리미티브 값 반환");
let obj4 = { key: "value" };
console.log(obj4.valueOf());  //{key: 'value'}
/**
 * 1. obj에 프리미티브 값으로 설정된 값 반환
 */