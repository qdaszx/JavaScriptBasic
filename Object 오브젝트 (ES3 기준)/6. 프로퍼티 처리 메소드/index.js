/**
 * hasOwnProperty()
 *
 * 구분 - 데이터(값)
 * object - 기준 인스턴스
 * 파라미터 - 프로퍼티 이름
 * 반환 - true, false
 *
 * - 인스턴스에 파라미터 이름이
 *    - 존재하면 true 반환
 *    - 존재하지 않으면 false 반환 [코드1] [코드2]
 * - 자신이 만든 것이 아니라
 *    - 상속받은 프로퍼티이면 false 반환 [코드3]
 */
console.log("[코드1] 프로퍼티 존재 여부");
let obj = { value: 123 };
let own = obj.hasOwnProperty("value");
console.log(own); // true
/**
 * 1. obj 인스턴스에 value 프로퍼티가 존재하며
 * 2. obj를 만들면서 직접 작성했으므로 true 반환
 */

console.log("[코드2] 값은 체크하지 않음");
let obj2 = { value: undefined };
let own2 = obj2.hasOwnProperty("value");
console.log(own); // true
/**
 * 1. undefined가 값이지만 false로 인식됩니다.
 * 2. 하지만, 값은 체크하지 않고
 *    존재 여부만 체크하므로 true 반환
 */

console.log("[코드3] 자신이 만든 것 체크");
let obj3 = {};
let own3 = obj3.hasOwnProperty("hasOwnProperty");
console.log(own3);  // false
/**
 * 1. hasOwnProperty()는 자신이 만든 것이 아니라
 *    빌트인 Object 오브젝트에 있는 것
 * 2. {}를 실행하면
 *    빌트인 Object 오브젝트의
 *    prototype에 연결된 메소드를 사용하여
 * 3. Object 인스턴스를 만드므로
 *    자신이 만든 것이 아닙니다.
 */

/**
 * propertyIsEnumerable()
 *
 * 구분 - 데이터(값)
 * object - 인스턴스, 오브젝트
 * 파라미터 - 프로퍼티 이름
 * 반환 - true, false
 *
 * - 오브젝트에서 프로퍼티를
 *    - 열거할 수 있으면 true 반환 [코드4]
 *    - 열거할 수 없으면 false 반환 [코드5]
 */
console.log("[코드4] 열거 가능");
let obj4 = { sports: "축구" };
console.log(obj4.propertyIsEnumerable("sports")); // true
/**
 * 1. {sports: "축구"} 형태로 생성한 인스턴스는
 * 2. obj의 프로퍼티를 열거할 수 있습니다.
 */

console.log("[코드5] 열거 불가");
let obj5 = { sports: "축구" };
Object.defineProperty(obj5, "sports", {
  enumerable: false
});
console.log(obj5.propertyIsEnumerable("sports")); // false

for (let name in obj5) {
  console.log(name);
}
/**
 * 1. {enumerable: false}로 열거 불가 설정
 * 2. for-in 문에서 프로퍼티가 열거되지 않습니다.
 * 3. Object(ES5)에서 다룹니다.
 */