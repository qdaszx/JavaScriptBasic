/*
Symbol 메소드

toString()

구분 ::: 데이터(값)
형태 ::: Symbol.prototype.toString()
파라미터 ::: 파라미터 없음
반환 ::: 변환한 문자열

- Symbol을 생성했던 형태를 문자열로 변환하여 반환 [코드1]
  - Symbol 값은 반환되지 않음

- +로 문자열을 연결하면 TypeError
  - toString()으로 변환하면 연결은 되지만 Symbol 값은 연결되지 않음
*/
console.log("[코드1] toString()");
console.log(Symbol("100").toString());  // Symbol(100)
const sym = Symbol.for("book");
console.log(sym.toString());  // Symbol(book)

try {
  console.log(Symbol() + "ABC");
} catch {
  console.log("+로 연결 불가"); // +로 연결 불가
};

/*
description

- Symbol.prototype.description
- Syntax, ES2019
  - Symbol("설명").description;
  - Symbol.for("키").description;
  - Symbol.iterator.description;

- Symbol 오브젝트의 주석, 설명을 반환 [코드2]
  - Symbol() 함수의 파라미터를 반환

- toString()과 차이 [코드3]
*/

console.log("[코드2] description");
console.log(Symbol("sports").description);  // sports
console.log(Symbol.for("book").description);  // book
console.log(Symbol.iterator.description); // Symbol.iterator

console.log("[코드3] toString()과 차이");
console.log(Symbol("book").toString()); // Symbol(book)
console.log(Symbol("").toString()); // Symbol()
console.log(Symbol().toString()); // Symbol()

console.log(Symbol.for("book").description);  // book
console.log(Symbol("book").description);  // book
console.log(Symbol("").description);  //  ""
console.log(Symbol().description);  // undefined

/*
valueOf()

구분 ::: 데이터(값)
형태 ::; Symbol.prototype.valueOf()
파라미터 ::: 파라미터 없음
반환 ::: 프리미티브 값

- valueOf()가 프리미티브 값을 반환하지만
  - Symbol은 값을 반환하지 않고
  - Symbol을 생성한 형태를 반환

- Symbol.for()는 for를 제외하고 반환
*/

console.log("[코드4] valueOf()");
console.log(Symbol("100").valueOf()); // Symbol(100)
console.log(Symbol.for("200").valueOf()); // Symbol(200)

/*
getOwnPropertySymbols()

구분 ::: 데이터(값)
형태 ::: Object.getOwnPropertySymbols()
파라미터 ::: Object
반환 ::: 배열

- Object의 함수지만 Symbol이 대상이므로 여기서 다룸

- 파라미터의 Object에서 Symbol만 배열로 반환
  - 다른 프로퍼티는 반환하지 않음
*/

console.log("[코드5] getOwnPropertySymbols()");
const obj = { point: 100 };
obj[Symbol("one")] = 200;
obj[Symbol.for("two")] = 300;
console.log(Object.getOwnPropertyNames(obj)); // ['point']
const list = Object.getOwnPropertySymbols(obj);
for (const sym of list) {
  console.log(`${sym.description}: ${obj[sym]}`);
};
/**
 * 1. Object.getOwnPropertyName(obj)
 *    obj에서 프로퍼티 이름을 배열로 반환합니다.
 *    Symbol은 반환하지 않습니다.
 * 2. Object.getOwnPropertySymbols(obj)
 *    obj에서 Symbol만 배열로 반환합니다.
 * 3. for-of 문으로 전개됩니다.
 */