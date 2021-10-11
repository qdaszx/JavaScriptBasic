/**
 * if
 * - 형태:
 *    if (표현식) 문장1
 *    if (표현식) 문장1 else 문장2
 * - 조건에 따른 처리
 *    - 먼저 표현식을 평가
 *    - 평가 결과를 true/false로 변환
 *    - true이면 문장1 실행 [코드1] [코드2]
 *    - false이면 문장2 실행 [코드3] [코드4]
 */

console.log("[코드1] 블록 사용하지 않음")
let a = 1, b = 1;
if (a === b) console.log("블록을 사용하지 않음"); // 블록을 사용하지 않음

if (a === b)
  console.log("1번 줄") // 1번 줄
  console.log("2번 줄");  // 2번 줄
/**
 * 1. 한 줄에 이어서 작성
 * 2. 줄을 바꿔 작성
 *    세미콜론(;)까지 if 조건 실행
 */


console.log("[코드2] 블록 사용")
let a2 = 1, b2 = 1;
if (a2 === b2) {
  console.log("블록 사용"); // 블록 사용
};
/**
 * 1. 블록에 작성한 모든 문장 실행
 * 2. 블록 사용 권장
 *    - 확장성과 일관성을 위해서입니다.
 */

console.log("[코드3] if else, 블록 사용하지 않음")
let a3 = 1, b3 = 2;
if (a3 === b3)
  console.log("블록 사용하지 않음, true");
else
  console.log("블록 사용하지 않음, else");  // 블록 사용하지 않음, else
/**
 * 1. 블록을 사용하지 않은 형태
 */

console.log("[코드4] if else, 블록 사용")
let a4 = 1, b4 = 2;
if (a4 === b4) {
  console.log("블록 사용, true");
} else {
  console.log("블록 사용, else"); // 블록 사용, else
}

/**
 * debugger
 * - debugger 위치에서 실행 멈춤
 *    - 브라우저의 개발자 도구 창이 열려 있을 때만 멈춤
 *    - 열려있지 않으면 멈추지 않음
 *    - ES5부터 지원 [코드5]
 */

console.log("[코드5] debugger")
let sports = "스포츠";
debugger;
console.log(sports);
/**
 * 1. debugger가 있는 위치에서 실행이 멈춥니다.
 */

/**
 * debugger 실행
 * 1. 개발자 도구 열기 (Cmd + Opt + I)
 *    1. Chrome 맞춤설정 및 제어
 *    2. 도구 더보기
 *    3. 개발자 도구 (D)
 * 2. 브라우저 새로고침 실행 (F5)
 * 3. debugger 위치에서 실행 멈춤
 * 4. debugger 종료 (F8)
 */