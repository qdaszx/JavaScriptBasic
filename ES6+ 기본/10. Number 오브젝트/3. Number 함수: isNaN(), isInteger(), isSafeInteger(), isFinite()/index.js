/*
Number 함수

isNaN()

구분 ::: 데이터(값)
형태 ::: Number.isNaN()
파라미터 ::: 비교 대상
반환 ::: NaN이면 true, 아니면 false

- NaN 값의 여부를 체크
    - NaN 값이면 true, 아니면 false 반환 [코드1]

- NaN 체크 방법
    - NaN === NaN
      결과가 false이므로 사용 불가
    - isNaN(), 글로벌 오브젝트
    - Number.isNaN()
    - Object.is(NaN, NaN): true
*/
console.log("[코드1] isNaN()");
console.log(Number.isNaN("ABC"), isNaN("DBF")); // false true
console.log(Number.isNaN(NaN), isNaN(NaN)); // true true
console.log(Number.isNaN(0 / 0), isNaN(0 / 0)); // true true
console.log(Number.isNaN("100"), isNaN("200")); // false false
/**
 * 1. 글로벌 오브젝트의 isNaN("DEF") 값 타입이 Number가 아닌 것을 체크합니다. DEF가 String 타입이므로 true 반환
 * 2. NaN와 0/0은 값이 NaN으므로 true가 됩니다.
 * 3. Number.isNaN("ABC") 값이 NaN이 아니므로 false가 됩니다.
 * 4. 글로벌 오브젝트의 isNaN("200") 값을 숫자로 변환하고 그 결과로 비교합니다. 변환한 값 200이 Number 이므로 false 반환
 */

/*
isInteger()

구분 ::: 데이터(값)
형태 ::: Number.isInteger()
파라미터 ::: 비교 대상
반환 ::: 정수이면 true, 아니면 false

- 파라미터 값이 정수이면 true 아니면 false 반환
- 정수로 인식 [코드2]
- 정수가 아닌 것으로 인식 [코드3]
*/
console.log("[코드2] 정수로 인식");
console.log(Number.isInteger(0)); // true
console.log(Number.isInteger(1.0)); //true
console.log(Number.isInteger(1.01));  // true
/**
 * 1. 1.0은 정수이고 1.01은 소수
 */

console.log("[코드3] 정수가 아닌 것");
console.log(Number.isInteger("12"));  // false
console.log(Number.isInteger(true));  // false
/**
 * 1. 값을 Number로 변환하여 체크하지 않습니다.
 * 2. Number로 변환하면, "12"와 true가 Number 이므로 정수로 인식됩니다.
 */

/*
isSafeInteger()

구분 ::: 데이터(값)
형태 ::: Number.isSafeInteger()
파라미터 ::: 비교 대상
반환 ::: safe 정수이면 true, 아니면 false

- 파라미터 값이 safe 정수이면 true 아니면 false 반환
- -(2의 53승 - 1) ~ (2의 53승 - 1): true 아니면 false
- true로 인식 [코드4]
- false로 인식 [코드5]
*/
console.log("[코드4]");
const isSafe = Number.isSafeInteger;
console.log(isSafe(7.0)); // true
console.log(isSafe(Number.MAX_SAFE_INTEGER)); // true
console.log(isSafe(Number.MIN_SAFE_INTEGER)); // true
/**
 * 1. 7.0은 정수이며, 값 범위에 속하므로 true
 */

console.log("[코드5] false로 인식");
const isSafe2 = Number.isSafeInteger;
console.log(isSafe2(7.1));  // false
console.log(isSafe2("100"));  // false
console.log(isSafe2(NaN));  // false
console.log(isSafe2(Infinity));  // false
/**
 * 1. 7.1은 정수가 아닙니다.
 * 2. 값을 Number로 변환하여 체크하지 않습니다.
 * 3. Number로 변환하면, "100"이 Number이므로 정수로 인식됩니다.
 */

/*
isFinite()

구분 ::: 데잍터(값)
형태 ::: Number.isFinite()
파라미터 ::: 비교 대상
반환 ::: 유한 값이면 true, 아니면 false

- 파라미터 값이 유한 값이면 true 아니면 false 반환
- 글로벌 오브젝트의 isFinite()와 체크 결과가 다름 [코드6]
- 함수는 오브젝트에 속해야 하므로 Number와 관련된 것은 Number 오브젝트의 함수 사용, 글로벌 오브젝트의 함수는 글로벌 사용이 목적
*/
console.log("[코드6] 유한 값 체크");
const num = Number.isFinite, global = isFinite;
console.log(num(100), global(200)); // true true
console.log(num("70"), global("80")); // false true
console.log(num(true), global(true)); // false true

console.log(num(NaN), global(NaN)); // false false
console.log(num(undefined), global(undefined)); // false false
/**
 * 1. 글로벌 오브젝트의 isFinite()는 파라미터 값을 Number로 변환하여 체크합니다.
 */