/**
 * 블록 스코프 유형
 *
 * function 블록
 *
 * - function name(){}도 블록 스코프
 * - function 안과 밖에
 *    - 같은 이름의 let 변수 선언 가능
 *    - 스코프가 다르기 때문 [코드1]
 * - function 밖의 let 변수를
 *    - function 안에서 사용 가능(클로저) [코드2]
 */
console.log("[코드1] function 블록");
let sports = "축구";
function show() {
  let sports = "농구";
  console.log("안: ", sports);
};
show(); // 안: 농구
console.log("밖: ", sports);  // 밖: 축구

console.log("[코드2] 함수 밖 변수 사용(클로저)");
let sports2 = "축구";
function show2() {
  console.log(sports2);
};
show2();  // 축구

/**
 * try-catch
 *
 * - try-catch 문도 블록 스코프
 * - try 블록{} 기준으로
 *    - 안과 밖에 같은 이름의
 *      let 변수 선언 가능 [코드3]
 * - catch()에서 try 밖의 변수 사용 [코드4]
 */
console.log("[코드3] try-catch");
let sports3 = "축구";
try {
  let sports3 = "농구";
  console.log("안: ", sports3); // 안: 농구
} catch (e) { };
console.log("밖: ", sports3); // 밖: 축구
/**
 * 1. try 블록의 안과 밖에
 *    let sports를 선언했으며
 * 2. 안과 밖이 스코프가 다르므로
 *    변숫값이 각각 설정됩니다.
 */

console.log("[코드4] try 밖의 변수 사용");
let sports4 = "축구";
try {
  let sports4 = "농구";
  console.log("안: ", sports4); // 안: 농구
  abc = error;
} catch (e) {
  console.log("catch: ", sports4);  // catch: 축구
};
console.log("밖: ", sports4); // 밖: 축구
/**
 * 1. let sports = "농구";
 *    try 블록에서 값을 할당합니다.
 * 2. abc = error;
 *    error 변수가 없으므로 에러가 발생합니다.
 * 3. console.log("catch: ", sports)
 *    try 블록 안에서 선언한 sports 값을
 *    출력하지 않고 try 밖의 sports 값을 출력합니다.
 */

/**
 * switch-case
 *
 * - switch 문도 블록 스코프
 * - switch 블록 기준으로
 *    - 같은 이름의 let 변수 작성 불가 [코드1]
 *    - case, default는 블록 스코프가 아님
 */
console.log("[코드5] switch-case");
let item = 1;
switch (item) {
  case 1:
    let sports;
    break;
  case 2:
    // let sports;
  default:
    console.log(sports);
};
/**
 * 1. // let sports;
 * 2. switch 블록 안에서
 *    let을 사용하여 선언한 변수가 있는데
 *    다시 let을 사용하여 변수를 선언하므로
 *    에러가 발생합니다.
 * 3. 그래서 주석으로 처리했습니다.
 * 4. 실행 에러가 아니라 컴파일 에러
 */