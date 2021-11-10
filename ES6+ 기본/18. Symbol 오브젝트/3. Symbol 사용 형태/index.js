/*
Symbol 사용 형태

- Object의 프로퍼티 키로 사용
  - Symbol 값이 유일하므로 중복되지 않음
  - symbol-keyed propert라고 부름 [코드1]
  - 프로퍼티 값 추출 방법 [코드2]

- Object에서 함수 이름으로 사용 [코드3]

- for-in 문에서 사용
  - Symbol이 열거되지 않음
  - [[Enumerable]]:false이기 때문 [코드4]

- Object.getOwnPropertySymbols()로 열거 가능
  - 다음 절에서 다룹니다.

- for-of문에서 사용
  - 배열 안에 Symbol() 작성 [코드5]

- JSON.stringify() 에서 사용
  - Symbol 값이 문자열로 변환되지 않음 [코드6]
*/
console.log("[코드1] symbol-keyed property");
const sym = Symbol("설명");
const obj = { [sym]: 100 };
/**
 * 1. const obj = {[sym]: 100};
 * 2. Symbol 값을 Object의 프로퍼티 키로 사용했습니다.
 * 3. [sym]처럼 대괄호 안에 Symbol()로 할당한 변수 이름을 작성합니다.
 * 4. 이를 symbol-keyed property 라고 부릅니다.
 */

console.log("[코드2] 프로퍼티 값 추출");
const sym2 = Symbol("설명");
const obj2 = { [sym2]: 100 };
console.log(obj2[sym2]);  // 100
console.log(obj2.sym2); // undefined
/**
 * 1. obj[sym]
 *    Symbol() 결과를 할당한 sym을 프로퍼티 키로 사용하여 값을 구합니다.
 * 2. 프로퍼티 값인 100이 출력됩니다.
 * 3. obj.sym
 *    undefined가 출력되며 obj[sym] 형태를 사용해야 합니다.
 */


console.log("[코드3] 함수 이름으로 사용");
const sym3 = Symbol("함수 이름");
const obj3 = {
  [sym3](param) {
    return param;
  }
};
console.log(obj3[sym3](200)); // 200
/**
 * 1. [sym](param){} 형태로 함수를 정의하고
 * 2. obj[sym](200) 형태로 호출합니다.
 */

console.log("[코드4] for-in문");
const obj4 = {
  [Symbol("100")]: 100,
  two: 200
};
for (let key in obj4) {
  console.log(key); // two
};
/**
 * 1. Object에 symbol-keyed 프로퍼티를 사용하여 프로퍼티 값을 작성했습니다.
 * 2. for-in 문으로 열거되지 않습니다. 에러가 나지 않습니다.
 */

console.log("[코드5] for-of 문");
const list = [Symbol("100")];
for (let value of list) {
  console.log(value); // Symbol(100)
};

console.log("[코드6] JSON.stringify()");
const sym6 = Symbol("JSON");
const result = JSON.stringify({ [sym6]: "ABC" });
console.log(result);  // {}
/**
 * 1. JSON.stringify()는 Object의 프로퍼티 키와 값을 {"key": "value"} 형태로 변환합니다.
 * 2. Symbol은 변환에서 제외됩니다.
 * 3. 이것은, Symbol 값을 외부에 노출하지 않기 위해서 입니다.
 * 4. 빈 오브젝트가 반환됩니다.
 */