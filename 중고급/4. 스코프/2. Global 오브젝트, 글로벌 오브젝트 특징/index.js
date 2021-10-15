/**
 * Global 오브젝트
 *
 * 글로벌 오브젝트
 *
 * - var value = 100;
 *    - 100을 value 변수에 할당한 것은
 *    - value로 검색하여 값을 사용하기 위한 것
 * - 함수 안에 변수를 선언하면
 *    - 변수가 함수에 속하게 되지만
 * - value 변수를 함수 안에 작성하지 않음
 *    - value 변수가 속하는 오브젝트가 없으며
 *    - 이때, 글로벌 오브젝트에 설정됩니다.
 * - 이런 메커니즘을 구현할 수 있는 것은
 *    - 글로벌 오브젝트가 하나만 있기 때문
 */
console.log("[코드1] 글로벌 오브젝트");
var value = 100;
function book() {
  var point = 200;
  return value;
};
book();

/**
 * 글로벌 오브젝트 특징
 *
 * - JS 소스 파일 전체에서
 *    - 글로벌 오브젝트는 하나만 있음
 *    - new 연산자로 인스턴스 생성 불가
 * - JS 소스 파일 전체 기준
 *    - <script>에 작성된 모든 코드
 *    - 모든 코드에서 사용 가능
 * - def.js 파일의 코드에서
 *    - 글로벌 오브젝트에 작성된
 *    - 변수 value 값을 출력하고
 *    - book() 함수를 호출
 */


