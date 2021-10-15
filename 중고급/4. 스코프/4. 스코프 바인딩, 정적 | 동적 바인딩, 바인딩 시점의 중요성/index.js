/**
 * 스코프 바인딩
 *
 * 바인딩
 *
 * - 구조적으로 결속된 상태로 만드는 것
 *    - 대상: 프로퍼티 이름
 * - 바인딩 목적
 *    - 스코프 설정, 식별자 해결
 * - 바인딩 시점 구분
 *    - 정적 바인딩 (Lexical, Static Binding)
 *    - 동적 바인딩 (Dynamic Binding)
 */

/**
 * 정적, 동적 바인딩
 *
 * - 정적(렉시컬) 바인딩
 *    - 초기화 단계에서 바인딩
 *    - 함수 선언문 이름을 바인딩
 *    - 표현식(변수, 함수) 이름을 바인딩
 * - JS는 대부분 정적 바인딩
 * - 동적(다이나믹) 바인딩
 *    - 실행할 때 바인딩
 *    - eval() 함수, with문
 */

/**
 * 바인딩 시점의 중요성
 *
 * - 바인딩 서점이 중요한 이유
 *    - 바인딩할 때 스코프가 결정되기 때문
 * - function 오브젝트 생성 시점에 스코프 결정
 *    - 스코프를 function 오브젝트의 [[Scope]]에 설정
 *    - 스코프가 변경되지 않음
 * - 함수 안의 모든 함수의 스코프가 같음
 */
function book2() {
  var point2 = 100;
  function add() { point2 += 200 };
  function get() { return point2 };
};

/**
 * 스코프 바인딩
 *
 * 1. 마지막 줄에서 book() 함수 호출
 *    - 초기화 단계에서 함수와 변수 이름을
 *    - 선언적 환경 레코드에 바인딩
 *    - 발음 편의를 위해 레코드라고 부릅니다.
 * 2. function add(param){...}
 *    - function 오브젝트 생성
 *    - add 함수가 속한 스코프(영역)를
 *      add 오브젝트의 [[Scope]]에 설정
 *    - add 이름에 레코드에 바인딩
 * 3. var point = 100;
 *    - point 이름을 레코드에 바인딩
 * 4. var get = function(){...}
 *    - get 이름을 레코드에 바인딩
 * 5. 바인딩으로 함수와 변수의 식별자가 해결됨
 *
 * ---- 코드 실행 ----
 *
 * 6. var point = 100;
 *    - point 변수에 100 할당
 * 7. var get = function(){...}
 *    - function 오브젝트 생성, get에 할당
 *    - get 함수가 속한 스코프(영역)를
 *      get 오브젝트의 [[Scope]]에 설정
 *
 * ---- add() 함수 호출 ----
 *
 * 8. add(200) 함수를 호출합니다.
 * 9. point += param;
 *    - 먼저 레코드에서 point 이름을 찾습니다.
 *    - point가 없으므로 다시 검색하게 되며
 *    - add 오브젝트의 [[Scope]]를 스코프로 사용
 *    - book 오브젝트가 스코프이며
 *      point가 있으므로 값을 더합니다.
 *
 * ---- get() 함수 호출 ----
 *
 * 10. get() 함수를 호출합니다.
 * 11. return point;
 *    - 레코드에 point가 없으므로 다시 검색
 *    - get 오브젝트의 [[Scope]]를 스코프로 사용
 *    - book 오브젝트가 스코프이며
 *      point가 있으므로 값을 반환합니다.
*/
console.log("[코드1] 스코프 바인딩");
function book() {
  var point = 100;
  function add(param) {
    point += param;
  };
  var get = function () {
    return point;
  };
  add(200);
  console.log(get()); // 300
};
book();

/**
 * 동적 바인딩
 *
 * - 코드를 실행할 때마다 바인딩
 *    - with 문
 *    - eval() 함수
 * - with 문
 *    - "use strict" 환경에서 에러 발생
 * - eval() 함수
 *    - 보안에 문제 있음
 */