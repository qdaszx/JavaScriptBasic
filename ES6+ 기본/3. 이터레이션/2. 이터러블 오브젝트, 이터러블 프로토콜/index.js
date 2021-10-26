/*
이터러블 오브젝트

- 이터러블 프로토콜이란?
  오브젝트가 반복할 수 있는 구조이어야 하며
  Symbol.iterator를 갖고 있어야 함 [코드1]

- 아래의 빌트인 오브젝트는
  디폴트로 이터러블 프로토콜을 갖고 있음
  즉, Symbol.iterator를 갖고 있음
  Array, Arguments, String,
  TypedArray, Map, Set, DOM NodeList
*/
console.log("[코드1] 이터러블 프로토콜");
const list = [10, 20];
console.log(list[Symbol.iterator]);

/*
이터러블 오브젝트

- 이터러블 오브젝트
  이터러블 프로토콜을 갖고 있는 오브젝트
  반복 구조, Symbol.iterator() [코드2]
  스펙에서는 @@iterator()로 표기

- 이터러블 오브젝트 구조

- 자체 오브젝트에는 없지만
  이터러블 오브젝트를 상속받아도 됩니다.
  즉, prototype chain(__proto__)에
  있으면 됩니다.
  예를 들어, Array 오브젝트를 상속받으면
  이터러블 오브젝트가 됩니다.
*/
console.log("[코드2] 이터러블 오브젝트");
const list2 = [10, 20];
console.log(list2[Symbol.iterator]);  // function values() { [native code] }

const obj = { one: 10, two: 20 };
console.log(obj[Symbol.iterator]);  // undefined
/**
 * 1. [] 리터럴로 생성한 list에
 *    Symbol.iterator가 있으므로
 *    Array는 이터러블 오브젝트입니다.
 * 2. {} 리터럴로 생성한 obj에
 *    Symbol.iterator가 없으므로
 *    Object는 이터러블 오브젝트가 아닙니다.
 * 3. for 문의 반복과 이터레이션이 차이가 있듯이
 *    for-in의 열거와 이터레이션은 차이가 있습니다.
 */

// 이터러블 오브젝트 구조
{
  // "use strict"
  // debugger;

  const list = ["A", "B"];
  /*
  1. 오른쪽 list를 펼치면 __proto__가 있으며
    __proto__를 펼치면
    Array 오브젝트의 메소드가 표시됩니다.

  2. 아래로 내려가면 Symbol(Symbol.iterator)가 있습니다.
    따라서 Array 오브젝트는 이터러블 오브젝트입니다.
  */
  // debugger;

  /*
  3. 또한 Symbol(Symbol.iterator)를 펼치면
    __proto__에 Function 오브젝트의 메소드가
    연결되어 있습니다.
    즉, Symbol.iterator는 함수입니다.

  4. Symbol.iterator가 함수이므로 호출할 수 있습니다.
  */
  // debugger;
}