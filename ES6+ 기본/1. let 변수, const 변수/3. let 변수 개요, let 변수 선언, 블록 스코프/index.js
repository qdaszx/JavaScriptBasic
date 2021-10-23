/**
 * let 변수
 *
 * let 변수 개요
 *
 * - let book = "책";
 *    - 블록 스코프를 가진 변수
 *    - 변수가 선언된 블록이 스코프
 * - 스코프 적용 기준
 *    - 블록{}, 문, 표현식 [코드1]
 * - 블록{} 안과 밖이 스코프가 다름
 *    - 변수 이름이 같아도 값이 대체되지 않음
 */
console.log("[코드1]");
let sports = "축구";
if (sports) {
  let sports = "농구";
  console.log("안:", sports); // 안: 농구
};
console.log("밖:", spoorts);  // 밖: 축구

/**
 * let 변수 선언
 *
 * - Syntax
 *    - let name1 [= value1][,name2 [= value2]]
 * - name1, name2에 변수 이름 작성
 *    - 식별자로 사용
 *    - []는 생략 가능을 나타냄
 *    - 값을 할당하지 않아도 됨 [코드2]
 * - value1. value2에 초깃값 작성
 *    - 표현식 작성 가능, 평가 결과 사용 [코드3]
 */
console.log("[코드2] 변수 이름 선언");
let book;
let one, two;
/**
 * 1. let book;
 *    값을 할당하지 않고 변수만
 *    선언할 수 있습니다.
 *    초깃값으로 undefined가 할당됩니다.
 * 2. let one, two;
 *    콤마로 구분하여 다수를 선언할 수 있습니다.
 */

console.log("[코드3] 변수에 초깃값 할당");
let book2 = "책";
let one2 = 1, two2 = (10 + 20);
// let five = 5, let six = 6;
// let five = 5, var six = 6;
/**
 * 1. let book = "책";
 *    변수를 선언하고 초깃값을 할당했습니다.
 * 2. let one = 1, two = (10 + 20);
 *    콤마로 구분하여 다수의 변수를 선언하고
 *    값을 할당한 형태입니다.
 * 3. let five = 5, let six = 6;
 *    SyntaxError 발생
 *    let을 처음에 한번만 작성합니다.
 * 4. let five = 5, var six = 6;
 *    콤마로 구분하여
 *    let과 var을 같이 사용할 수 없습니다.
 */

/**
 * 블록 스코프
 *
 * - 블록 기준
 *    - 중괄호 {코드}
 *    - function name(){코드}
 *    - if (a===1){코드}
 * - 블록 안과 밖이 스코프가 다름
 *    - 변수 이름이 같아도 값이 대체되지 않음 [코드4] [코드5]
 * - 스코프에 같은 이름 사용 불가
 */
console.log("[코드4] 블록 스코프");
let sports4 = "축구";
if (sports4) {
  let sports4 = "농구";
  console.log("안:", sports4);  // 안: 농구
};
console.log("밖:", sports4);  // 밖: 축구
/**
 * 1. if (sports){...}
 *    블록{} 안과 밖에서 let sports를 작성했으며
 *    스코프가 다르므로
 *    같은 이름을 사용할 수 있습니다.
 * 3. 변숫값이 대체되지 않고 유지됩니다.
 * 4. 블록 안에서 블록 밖의 변수는 접근할 수 있지만
 * 4. 블록 밖에서 블록 안의 변수를 접근할 수 없습니다.
 */

console.log("[코드5] 블록 스코프");
let sports5 = "축구";
sports5 = "농구";
console.log(sports5); // 농구
// let sports5 = "배구";
{
  let sports6 = "탁구";
  console.log(sports6);  // 탁구
};
/**
 * 1. sports = "농구";
 *    스코프에서 sports 식별자를 해결합니다.
 *    바로 앞에 있으므로 값을 할당합니다.
 * 2. // let sports = "배구";
 *    let을 사용하여 같은 스코프에 같은 이름의
 *    변수를 선언할 수 없습니다.
 * 3. { let sports = "탁구"; }
 *    블록{}을 사용했으며 스코프가 다르므로
 *    let을 사용하여 변수를 선언할 수 있습니다.
 */