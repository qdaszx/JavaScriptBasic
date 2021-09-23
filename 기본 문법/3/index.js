/**
 * 데이터 타입
 * - 데이터의 사전적 의미는 자료
 *  - 강좌에서는 데이터로 표기
 * - 데이터 타입 형태
 *  - 숫자 타입: var value = 123;
 *  - 문자 타입: var value = "sports";
 * - typeof 연산자
 *  - 데이터(값) 타입 반환
 *  - typeof value에 데이터를 작성 [코드1]
 * - 키워드
 *  - 특별한 기능을 가진 단어
 */

console.log("[코드1] 데이터 타입");

let point = 123;
console.log(typeof point); // number

let book = "책";
console.log(typeof book); // string

/**
 * 1. 123은 숫자이므로 데이터 타입은 number
 * 2. "책"은 문자이므로 데이터 타입은 string문자는 "책"처럼 큰따옴표 안에 작성하거나 '책'처럼 작은따옴표 안에 작성합니다.
 * 3. typeof 연산자는 고려사항이 있으며 관련된 곳에서 다시 다룹니다.
 */

/**
 * 데이터 타입
 * - 데이터 타입을 자료형이라고도 부름
 *  - 강좌에서는 데이터 타입으로 표기
 * - 데이터는 타입을 가짐
 *  - JS는 데이터를 기준으로 타입을 결정
 *  - 타입을 먼저 선언하고 타입에 맞는 데이터를 할당하지 않음 [코드2]
 */

console.log("[코드2] 데이터 타입")

let point2 = 123;
console.log(typeof point2); // number
point2 = "책";
console.log(typeof point2); // string

/**
 * 1. point2 변수에 123을 할당하면 point2 변수의 데이터 타입은 number입니다.
 * 2. 다시 point 변수에 "책"을 할당하면 point2 변수의 데이터 타입은 string이 됩니다.
 * 3. JS는 이처럼 데이터(값)에 따라 데이터 타입이 결정됩니다.
 */