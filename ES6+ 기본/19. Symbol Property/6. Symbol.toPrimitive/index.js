/*
Symbol.toPrimitive

toPrimitive

- 오브젝트를 대응하는 Primitive 값으로 변환
- 대응, 기대하는 타입
  - number, string, default
  - ToPrimitive 스펙
- 오브젝트를 문자열에 대응 [코드1]
- 오브젝트를 숫자에 대응 [코드2]
- Symbol.toPrimitive() 사용
*/

console.log("[코드1] 오브젝트를 문자열에 대응");
const point = { bonus: 100 };
console.log(point.toString());  // [object Object]

const book = {
  toString() {
    return "책"
  }
};
console.log(`${book}`); // index.js:24 책
/**
 * 1. 문자열 대응은 toString()을 사용합니다.
 * 2. point.toString()
 *    Object.prototype.toString()가 호출됩니다.
 * 3. `${book}`
 *    book 오브젝트의 toString()이 호출됩니다.
 */

console.log("[코드2] 오브젝트를 숫자에 대응");
const point2 = { bonus: 100 };
console.log(point2.valueOf());

const book2 = {
  toString() { return 70 },
  valueOf() { return 30 }
};
console.log(book2 * 20);
/**
 * 1. 숫자 대응은 valueOf()를 사용합니다.
 * 2. point.valueOf()
 *    Object.prototype.valueOf()가 호출됩니다.
 * 3. book * 20
 *    book 오브젝트의 valueOf()가 호출되며 toString()이 호출되지 않습니다.
 * 4. valueOf()를 작성하지 않으면 toString()이 호출됩니다.
 */


// Symbol.toPrimitive() 사용
console.log("Object에 대응");
const obj = {
  [Symbol.toPrimitive](hint) {
    return hint === "number" ? 30 : hint === "string" ? "책" : "default";
  }
};
console.log(20 * obj);  // 600
console.log(`${obj}` + 100);  // 책100
console.log(obj + 50);  // default50
console.log("default" == obj);  // true
/**
- 20 * obj
  - 20을 곱하는 숫자 연산으로 처리
  - toPrimitive(hint)의 hint에 엔진이 "number"를 설정합니다.
  - 30을 반환하며 20 * 30 = 600을 출력

- `${obj}` + 100
  - hint에 "string"이 설정됩니다.

- obj + 50
  - hint에 "default"가 설정됩니다.

- "default" == obj
  - == 비교는 hint에 "default"가 설정됩니다.
 */



