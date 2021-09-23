// Number타입 String타입

/**
 * 데이터 타입 분류
 * - 언어 타입과 스펙 타입
 * - 언어 타입
 *  - JS 프로그램에서 사용할 수 있는 타입
 *  - Undefined, Null, Boolean, String, Number, Object
 * - 스펙(문서) 타입
 *  - 언어 알고리즘을 위한 타입으로 JS프로그램에서 사용 불가
 *  - Reference, List, Completion, Property Descriptor, Data Block, Lexical Environment, Lexical Record 등
 */

/**
 * Number 타입
 * - Number 타입
 *  - 부호(+, -)를 가진 값 [코드1]
 * - 숫자 값 범위
 *  - 18,437,736, 874, 454, 810, 627 (2의 64승 - 2의 53승 + 3)
 * - Number타입의 특수한 3개 값
 *  - NaN: Not-a-Number [코드2]
 *  - Infinity: 양수 무한대
 *  - -Infinity: 음수 무한대
 */

console.log("[코드1] Number타입")
let point = 123;
console.log(typeof point);  // number
point = -1.23;
console.log(typeof point);  // number

/**
 *
 */

console.log("[코드2] Not-a-Number")
let point2 = 1 * "A";
console.log(point2);  // NaN

/**
 * 1. NaN는 값이 숫자가 아닌 것을 나타내는 값입니다.
 * 프로그램을 죽지 않게 하기 위해서 숫자가 아니라는 값을 설정해줬다 (자바스크립트의 방향성)
 */

/**
 * String 타입
 * - 문자 타입
 *  - 값을 "" 또는 ''사이에 작성
 *  - 최대 문자수: 2의 53승 - 1
 * - 큰따옴표와 작은따옴표를 같이 사용할 때
 *  - 따옴표 작성 방법 [코드3]
 * - 따옴표에 숫자를 작성하면 문자 타입이 됩니다. [코드4]
 */

console.log("[코드3] String 타입")
let point3 = "책, '123'";
console.log(point3);  // 책, '123'
point3 = '책, "123"';
console.log(point3);  // 책, "123"

/**
 * 1, 작은 따옴표를 표시하려면 큰따옴표 안에 작은따옴표를 작성합니다.
 * 2. 큰따옴표를 표시하려면 작은따옴표 안에 큰따옴표를 작성합니다.
 */

console.log("[코드4] 타입 변환")
let value = "123";
console.log(typeof value); // string

/**
 * 1. 123이 Number 타입에서 String 타입으로 변환됩니다.
 */

