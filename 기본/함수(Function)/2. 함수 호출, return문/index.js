/**
 * 호출 받는 함수
 * - 함수는 호출되어야 실행됩니다. [코드1]
 * - 호출받는 함수
 *    - 함수가 호출되었을 때 실행되는 함수
 *    - 함수라고 하면 호출받는 함수를 지칭
 * - 파라미터
 *    - 호출한 함수에서 넘겨준 값을 받음
 *    - (one, two)처럼
 *      소괄호() 안에 파라미터 이름 작성
 */

console.log("[코드1] 호출받는 함수")
function setValue(one, two) {
  let total = one + two;
};

setValue(10, 20);

/**
 * 함수 호출
 * - setValue() 형태로 호출 [코드1]
 *    - 함수 이름과 소괄호()를 작성
 *    - setValue만 작성하면 호출되지 않음
 * - 파라미터
 *    - 호출된 함수에 넘겨줄 값 작성
 *    - setValue(10, 20)처럼 소괄호() 안에 작성
 *    - JS에서 지원하는 타입 작성
 *    - 콤마(,)로 구분하여 다수 작성 가능
 */

console.log("[코드1] 함수 호출, 실행 순서")
function setValue(one, two) {
  let total = one + two;
};

setValue(10, 20);
/**
 * 1. 호출받는 함수 작성
 * 2. setValue(10, 20) 형태로 함수 호출
 *    파라미터 값으로 10과 20을 넘겨 줍니다.
 * 3. 호출된 함수에서
 *    10을 one에, 20을 two에 설정합니다.
 *    즉, 왼쪽에서 오른쪽으로 설정
 * 4. setValue() 함수의 함수 코드 실행
 * 5. 일반적으로 호출받는 함수를
 *    소스 파일 위에 작성하고
 *    함수 호출을 아래에 작성합니다.
 */

/**
 * return
 * - 형태:
 *    return 표현식opt;
 * - 표현식의 평가 결과 반환 [코드3]
 * - return 또는 표현식을 작성하지 않으면
 *    undefined 반환 [코드4]
 * - return과 표현식을 한 줄에 작성 [코드5]
 */

console.log("[코드3] 표현식 결과 반환")
function getPoint() {
  return 10 * 30;
};
let result = getPoint();
console.log(result);  // 300
/**
 * 실행순서
 *    1. getPoint() 함수 호출
 *    2. return의 오른쪽 표현식(10 * 30)을 평가
 *    3. 평가 결과 300을 반환
 *    4. 300을 갖고 getPoint()로 돌아갑니다.
 *    5. 300을 result 변수에 할당합니다.
 */

console.log("[코드4] undefined 반환")
function getPoint2() {

};
let result2 = getPoint2();
console.log(typeof result2);  // undefined
/**
 * 1. return을 작성하지 않으면
 * 2. 값을 반환하지 않는 것이 아니라
 *    undefined 값을 반환
 *    JS에서 undefined는 값입니다.
 */

console.log("[코드5] 줄을 분리하여 표현식 작성")
function getPoint3() {
  return
  10 * 30;
};
let result3 = getPoint3();
console.log(result3); // undefined
/**
 * 1. return 끝에 세미콜론을 자동으로 첨부합니다.
 * 2. return 문에서 return하므로
 *    10 * 30을 수행하지 않게 됩니다.
 */