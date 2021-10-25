/*

Arrow Function

- Arrow의 사전적 의미
    - 화살, 화살표 =>
    - 강좌에서는 화살표 함수로 표기
- 코드 형태
    - (param) => {함수 코드} [코드1]
- function(){}의 축약 형태이지만
    - 고려할 사항도 있음(this 참조가 다름)
- 강좌에서 화살표 함수와 전통적인 함수의 구분이 필요할 때
    - 전통적인 형태를 일반 함수라고 부름

*/
console.log("[코드1] 화살표 함수");
const add = function (one, two) {
  return one + two;
};
console.log(add(1, 2)); // 3

const total = (one, two) => {
  return one + two;
};
console.log(total(1, 2)); // 3
/**
 * 1. function 키워드 대신에
 *    화살표 => 사용
 * 2. =>표 양쪽에 공백 작성 가능
 */

/*

함수 블록 사용

- 함수 블록과 return 작성 생략 [코드3]
- 함수 블록{}만 작성한 형태 [코드4]
- {key: value}를 반환하는 형태 [코드5]

*/
console.log("[코드3] 함수 블록{}과 return 작성 생략");
const total3 = (one, two) => one + two;
console.log(total3(1, 2));  // 3
/**
 * 1. 함수 블록{}과 return을 생략한 형태로
 *    {return one + two}와 같습니다.
 * 2. => 앞에서 줄을 분리하면 SyntaxError
 * 3. => 뒤에서 줄을 분리할 수 있습니다.
 *    (one, two) =>
 *    one + two;
 */

console.log("[코드4] 함수 블록{}만 작성한 형태");
const total4 = (one) => { };
console.log(total4(1)); // undefined
/**
 * 1. 함수 블록{}만 작성하면 undefined 반환
 * 2. 함수 블록에 return을 작성하지 않은 것과 같음
 * 3. return을 작성하지 않으면
 *    디폴트로 undefined를 반환합니다.
 * 4. 화살표 함수이기 때문이 아니라 JS문법입니다.
 */

console.log("[코드5] {key: value} 반환");
const point = (param) => ({ book: param });
const result = point("책");
for (const key in result) {
  console.log(key + ":" + result[key]); // book: 책
};
/**
 * 1. {key: value}를 소괄호()로 감싸면
 *    {key: value}를 반환합니다.
 * 2. 소괄호()를 작성하지 않으면
 *    undefined를 반환합니다.
 */

/*

파라미터 사용

- 파라미터가 하나일 때 [코드6]
- 파라미터가 없으면 소괄호만 작성 [코드7]

*/
console.log("[코드6] 파라미터가 하나일 때");
const get = param => param + 20;
console.log(get(10)); // 30
/**
 * 1. 파라미터가 하나이면
 *    (param)에서 소괄호를 생략할 수 있습니다.
 * 2. get(10)에서 10이 param에 설정됩니다.
 */


console.log("[코드7] 파라미터가 없을 때");
const get2 = () => 10 + 20;
console.log(get2());  // 30
/**
 * 1. 파라미터가 없으면
 *    소괄호만 작성할 수 있습니다.
 */