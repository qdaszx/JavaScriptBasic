// Boolean 타입, Object 타입

/**
 * Boolean 타입
 * - 불리언 타입
 *  - 값: true, false [코드1]
 */

console.log("[코드1] Boolean 타입")
console.log(true);
console.log(false);

/**
 * Object 타입
 * - Object 형태
 *  = {name: value} 형태 [코드2]
 * - 프로퍼티
 *  - name과 value 하나를 지칭
 * - Object는 프로퍼티 집합
 */

console.log("[코드2] Object 타입")
let book = {
  title: "책", point: 123
};
console.log(book);  //{title: '책', point: 123}

/**
 * 1. 중괄호{} 안에 key: value 형태로 작성합니다.
 * 2. 콜론(:)을 기준으로 왼쪽을 프로퍼티 key 또는 name이라고 부르며 오른쪽을 프로퍼티 값이라고 부릅니다.
 * es5에서는 키, 네임을 따지지 않아도 됩니다
 */

/**
 * 타입 정리
 * - JS의 기본 데이터 타입 정리
 * - 기본 데이터 타입을 Primitive 타입이라고 합니다. [코드3]
 * - 데이터 타입이 같다? [코드4]
 */

console.log("[코드3] 프리미티브 데이터 타입")
console.log(typeof 123);  // number
console.log(typeof "문자열"); //string
console.log(typeof true); // boolean
console.log(typeof undefined);  //undefined

/**
 * 1. 시맨틱적으로 데이터 타입을 짐작할 수 있습니다.
 */

console.log("[코드4] object 데이터 타입")
console.log(typeof null); //object
console.log(typeof { book: "책" }); //object

/**
 * 1. null과 {book: "책"}의 데이터 타입이 object입니다.
 * 2. null의 데이터 타입이 null이 아닙니다. (설계 미스, es6에서 해결책 나옴)
 * 3. 이에 대해서는 관련된 곳에서 다룹니다.
 */