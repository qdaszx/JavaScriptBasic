/*
Rest 파라미터

function spread

- 호출하는 함수의 파라미터에 spread 대상 작성 [코드1]

- 처리 순서 및 방법
    - 함수가 호출되면 우선, 파라미터의 배열을 엘리먼트 단위로 전개
    - 전개한 순서대로 파라미터 값으로 넘겨 줌
    - 호출받는 함수의 파라미터에 순서대로 매핑됨
*/
console.log("[코드1] function spread");
function add(one, two, three) {
  console.log(one + two + three);
};

const values = [10, 20, 30];
add(...values); // 60
/**
 * 1. one: 10, two: 20, three: 30이 매핑됩니다.
 */

/*
rest 파라미터

Syntax: function(param, paramN, ...name)

- 분리하여 받은 파라미터를 배열로 결합  [코드2]
    - spread: 분리, rest: 결합

- 작성 방법
    - 호출받은 함수의 파라미터에 ...에 이어서 파라미터 이름 작성
    - 호출한 함수에서 보낸 순서로 매핑

- 파라미터와 Rest 파라미터 혼합 사용 [코드3]

*/
console.log("[코드2] rest 파라미터");
function point(...param) {
  console.log(param); // [10, 20, 30]
  console.log(Array.isArray(param));  // true
};
const values2 = [10, 20, 30];
point(...values2);

console.log("[코드3] 혼합 사용");
function point2(ten, ...rest) {
  console.log(ten); // 10
  console.log(rest);  //  [20, 30]
};
const values3 = [10, 20, 30];
point2(...values3);
/**
 * 1. ten에 10이 설정되고
 * 2. 설정되지 않은 나머지 값 전체가
 *    파라미터 rest에 설정됩니다.
 *    그래서 rest 파라미터입니다.
 * 3. 나머지라는 시맨틱을 나타내기 위해서
 *    파라미터 이름을 rest로 사용하기도 합니다.
 */

/*
Array-like

- Object 타입이지만
    - 배열처럼 이터러블 가능한 오브젝트
    - for()문으로 전개할 수 있음 [코드4]

- 작성 방법
    - 프로퍼티 key 값을 0부터 1씩 증가하면서 프로퍼티 값을 작성
    - length에 전체 프로퍼티 수 작성
*/
console.log("[코드4] Array-like");
const values4 = { 0: "가", 1: "나", 2: "다", length: 3 };
for (let k = 0; k < values4.length; k++) {
  console.log(values4[k]);  // 가 나 다
};
/**
 * 1. length 프로퍼티는 전개되지 않습니다.
 * 2. for~in 문으로 전개하면 length 프로퍼티도 전개됩니다.
 */


/*
rest와 arguments 차이

- Argument 오브젝트
    - 파라미터 작성에 관계없이 전체를 설정
    - Array-like 형태
    - Array 메소드를 사용할 수 없음
    - __proto__가 Object

- rest 파라미터
    - 매핑되지 않은 나머지 파라미터만 설정
    - Array 오브젝트 형태
    - Array 메소드를 사용할 수 있음
    - __proto__가 Array
*/

/// Argument 오브젝트 __proto__가 Object

{
  // "use strict"
  // debugger;

  // Argument 오브젝트
  function book() {
    const param = arguments;
  };
  book(10, 20, 30);
  // arguments의 __proto__가 Object
  // debugger;

  // rest 파라미터
  function point(...rest) {
    // debugger;
  };
  point(10, 20, 30);
  // rest의 __proto__가 Array
  // debugger;
};