/**
 * 클로저와 무명 함수
 *
 * - 무명 함수 안에 작성한 값, 함수는
 *    - 무명 함수가 끝나면 지워집니다.
 *    - 따라서 다시 사용하려면 저장 필요
 *    - 한편, 무명 함수는 저장하지 않으려는 의도로 사용
 * - 클로저 활용
 *    - 클로저는 함수 밖 스코프의
 *      변수와 함수를 사용할 수 있습니다.
 *    - 변수는 외부에서 직접 접근할 수 없으므로 정보 보호
 *    - 무명 함수 안에서
 *      클로저의 변수를 가진 함수를 반환하면
 *      함수의 재사용과 정보 보호를 할 수 있습니다.
 */

/**
 * 예시
 *
 * - function getPoint(param){...}
 *    - [[Scope]]에 스코프 설정
 * - return getPoint;
 *    - 즉시 실행 함수에서 getPoint 함수 반환
 *    - book 변수에 할당
 *    - point 변숫값을 사용할 수 있습니다.
 * - console.log(book(200));
 *    - 반환된 함수를 호출하면서
 *      200을 파라미터 값으로 넘겨 줍니다.
 * - function getPoint(param){
 *     return point + param;
 *   };
 *    - getPoint function 오브젝트의 [[Scope]]에
 */
console.log("[코드1] 클로저와 무명 함수");
var book = (function () {
  var point = 100;
  function getPoint(param) {
    return point + param;
  };
  return getPoint;
}());
console.log(book(200)); // 300

/**
 * JS에서 클로저
 *
 * - 함수에서 함수 밖의 변수 사용은
 *    - JS의 기본 메커니즘
 * - 논리적 근거는
 *    - 외부 렉시컬 환경 참조에
 *      함수가 속한 스코프가 설정되기 때문
 * - 클로저는 이를 나타내는 용어
 *    - 용어보다 논리적 구조 이해
 */