/**
 * let 변수, const 변수
 *
 * 변수 구분
 *
 * - 로컬(지역) 변수, 글로벌(전역) 변수
 * - 변수를 구분하는 이유는?
 *    - 기능과 목적이 다르기 때문
 * - 글로벌 변수의 기능, 목적
 *    - 다른 js 파일에서 변숫값 공유
 *    - 파일에서 공통 변수 개념으로 사용
 *    - 의도는 좋으나 처리 속도가 떨어짐
 * - 로컬 변수의 기능, 목적
 *    - 빠르게 식별자를 해결하기 위해
 *      가까운 스코프의 변수를 사용하려는 것
 * - var 키워드 문제
 *
 * 글로벌 변수 오해
 *
 * - 글로벌 변수는
 *    - 글로벌 오브젝트의 로컬 변수
 *    - var value = 100처럼
 *    - var 키워드 사용이 정상
 * - var 키워드를 작성하지 않으면
 *    - 글로벌 변수로 간주하는데
 *    - 이것이 문제 [코드1]
 */
console.log("[코드1] 글로벌 변수 문제");
// "use strict";
value = 100;
function point() {
  value = 300;
  console.log("함수:", value);
};
point();  // 함수: 300
/**
 * 1. var 키워드를 사용하지 않고
 *    value를 글로벌 변수로 선언하고 100 할당
 * 2. point() 함수 안에서 value 변수에 300 할당
 *    value 변수가 로컬 변수가 아니므로
 *    글로벌 오브젝트의 value 변수에 300 할당
 * 3. 함수 안에서 글로벌 변수에
 *    값을 설정하는 것은 좋은 모습이 아닙니다.
 * 4. 로컬 변수와 글로벌 변수를
 *    구분한 목적을 생각해야 합니다.
 */

/**
 * use strict 사용
 *
 * - 함수 안에서
 *    - var 키워드를 사용하지 않으면
 *      에러 발생 [코드2]
 *    - ES5에서 도입했으나
 *      근본적인 접근은 아님
 * - ES6+
 *    - "use strict"가 디폴트 환경
 *    - 전체는 아님
 */
console.log("[코드2] 글로벌 변수 사용 불가");
"use strict";
function point2() {
  try {
    value2 = 300;
  } catch (e) {
    console.log("글로벌 변수 사용 불가");
  };
};
point2(); //  글로벌 변수 사용 불가