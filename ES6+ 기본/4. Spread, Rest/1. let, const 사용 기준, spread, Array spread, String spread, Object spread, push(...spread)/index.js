/*
Spread, Rest

- 강좌의 let, const 변수 사용 기준
    - let: 변경할 수 있다.
    - const: 변경할 수 없다.

- let, const 변수의 시맨틱을 우선하여 사용
    - 값이 변경되면 let
    - 초깃값이 변경되지 않으면 const [코드1]
*/
console.log("[코드1] let, const 사용 기준");
const list = [10, 20];

let values = [10, 20];
values.push(30, 40);

for (let k = 0; k < list.length; k++) { };

const book = (param) => param + 10;

/*
spread

Syntax: [...iterable]

- [...iterable]
    - [...]처럼 []안에 점(.) 3개를 작성하고
    - 이어서 이터러블 오브젝트 작성 [코드2]

- 이터러블 오브젝트를 하나씩 전개

- {key: value}의 Object가
    - 이터러블 오브젝트은 아니지만 전개 가능

- 강좌의 용어 사용 기준
    - spread, 분리, 전개를 사용
*/
console.log("[코드2] spread 형태");
const list2 = [21, 22];
console.log(11, ...list, 12); // [11, 21, 22, 12]

const obj = { key: 50 };
console.log({ ...obj });  // {key: 50}

/*
Array spread

- spread 대생 배열을
  작성한 위치에 엘리먼트 단위로 분리(전개)

- Array spread 작성 형태 [코드3]

- 값이 대체되지 않고 전개 [코드4]
*/
console.log("[코드3] Array spread");
const one = [21, 22];
const two = [31, 32];
const result = [11, ...one, 12, ...two];
console.log(result);  // [11, 21, 22, 12, 31, 32]
console.log(result.length); // 6
/**
 * 1. ...one
 *    one 배열의 [21, 22]를
 *    엘리먼트 단위로 분리(전개)합니다.
 * 2. ...two 위치에
 *    two 배열의 [31, 32]를
 *    엘리먼트 단위로 분리(전개)합니다.
 */

console.log("[코드4] 값이 대체되지 않음");
const one2 = [11, 12];
const result2 = [11, 12, ...one];
console.log(result2); // [11, 12, 11, 12]
console.log(result.length); // 4
/**
 * 1. 앞에 11과 12가 있지만
 *    값을 대체하지 않고
 *    ...을 작성한 위치에 전개합니다.
 */

/*
String spread

- spread 대상 문자열을
  작성한 위치에 문자 단위로 전개

- String spread 작성 형태 [코드5]
*/
console.log("[코드5] String spread");
const target = "ABC";
console.log(...target); // [A, B, C]
/**
 * 1. [...target];
 * 2. target의 "ABC"를 문자 단위로 분리하여
 *    ...target 위치에 설정
 */

/*
Object spread

- spread 대상 Object를
  작성한 위치에 프로퍼티 단위로 전개

- Object spread 작성 형태 [코드6]

- 프로퍼티 이름이 같으면 값 대체 [코드7]
*/
console.log("[코드6] Object spread");
const one6 = { key1: 11, key2: 22 };
const result6 = { key3: 33, ...one };
console.log(result6);  // {key3: 33, key1: 11, key2: 22}
/**
 * 1. ...one
 *    one 오브젝트의 프로퍼티를 전개
 */

console.log("[코드7] 프로퍼티 값 대체");
const one7 = { book: 10, music: 20 };
const result7 = { book: 30, ...one };
console.log(result7); // {book: 10, music: 20}
// const check = [...one];
/**
 * 1. {book: 30}과 {book: 10}에서
 *    프로퍼티 이름이 같으므로
 *    30이 뒤에 작성한 10으로 대체됩니다.
 * 2. Object는 이터러블 오브젝트가 아니므로
 *    [...one] 형태로 작성하면 에러가 발생합니다.
 */

/*
push(...spread)

- push() 파라미터에 spread 대상 작성
- 배열 끝에 대상을 분리하여 첨부 [코드8]
*/
console.log("[코드8] String spread");
let result8 = [21, 22];
const five = [51, 52];
result8.push(...five);
console.log(result8); // [21, 22, 51, 52]

result8.push(..."abc");
console.log(result8); // [21, 22, 51, 52, a, b, c]
/**
 * 1. result 배열 끝에 첨부
 * 2. 배열이면 엘리먼트로 분리하여 첨부하고
 *    문자열이면 문자 단위로 분리하여 첨부
 */