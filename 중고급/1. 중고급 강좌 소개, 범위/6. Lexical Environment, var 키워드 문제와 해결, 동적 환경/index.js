// 정적 환경

/**
 * - function 키워드를 만나면
 *    - function 오브젝트를 생성하고
 *    - 스코프를 FO(function object)의 [[Scope]]에 설정
 *    - 이것은 함수 밖의 스코프가 설정되는 것
 * - 이 시점에서 스코프가 결정됨
 *    - 이것이 Lexical Environment
 * - 함수가 호출되면
 *    - FO의 [[Scope]]를
 *    - 실행 콘텍스트의 렉시컬 환경 컴포넌트의 외부 렉시컬 환경 참조에 설정
 */

var point = 123;
function book() {
  function getPoint() { };
};
book();

/**
 * var 키워드 문제
 * - 함수에서 var 키워드를 사용하지 않고
 *    - 변수를 선언하면
 *      글로벌 오브젝트에 설정됨
 *    - 렉시컬 환경 구조에 맞지 않음
 * - ES5 해결 방법
 *    - "ues strict" 사용
 * - ES6 해결 방법
 *    - let 변수, const 변수
 *    - 변수 자체에 스코프 제약을 둠
 */

/**
 * 동적 환경
 * - 실행 시점에 스코프 결정
 *    - with문
 *    - eval() 함수
 * - with 문은
 *    - strict 모드에서 에러 발생
 * - eval() 함수는
 *    - 보안에 문제 있음
 */