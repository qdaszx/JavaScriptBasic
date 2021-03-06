/**
 * 파라미터 매핑
 *
 * 함수 호출
 *
 * - 함수가 호출되면 3개의 파라미터 값을
 *   실행 콘텍스트로 넘겨 줍니다.
 *    - 함수를 호출한 오브젝트
 *    - 함수 코드
 *    - 호출한 함수의 파라미터 값
 * - 함수를 호출한 오브젝트를
 *    - this 바인딩 컴포넌트에 설정하여 this로 참조
 * - 함수 코드
 *    - function 오브젝트의 [[Code]]에 설정되어 있음
 * - 호출한 함수의 파라미터 값
 *    - 호출된 함수의 Argument 오브젝트에 설정
 */

/**
 * 파라미터 값 매핑
 *
 * - 파라미터 값 매핑이란?
 *    - 호출한 함수에서 넘겨 준 파라미터 값을
 *    - 호출된 함수의 파라미터 작성 순서에 맞추어
 *      값을 매핑하는 것
 * - 엔진 처리 관점
 *    - 실행 콘텍스트로 넘겨 준 파라미터 값과
 *    - function 오브젝트의 [[FormalParameters]]에
 *      작성된 이름에 값을 매핑하고
 *    - 결과를 선언적 환경 레코드에 설정하는 것
 */

/**
 * 파라미터 이름에 값 매핑 방법
 *
 * 1. 실행 콘텍스트로 넘겨준 파라미터 값을
 *    - 설명 편의를 위해 param이라고 하겠습니다.
 * 2. getTotal 오브젝트의 [[FomalParameters]]에서
 *    - 호출된 함수의 파라미터 이름을 구합니다.
 *    - 설명 편의를 위해 name이라고 하겠습니다.
 *    - name은 ["one", "two"]형태 입니다.
 *    - [[FormalParameters]]는
 *      function 오브젝트를 생성할 때 설정합니다.
 * 3. name 배열을 하나씩 읽습니다.
 * 4. param에서 index 번째의 값을 구합니다.
 *    - 인덱스에 값이 없으면 undefined 반환
 * 5. name의 파라미터 이름과 4번에서 구한 값을
 *    - 선언적 환경 레코드에
 */
console.log("[코드1] 파라미터 값 매핑");
var obj = {};
obj.getTotal = function (one, two) {
  return one + two;
};
console.log(obj.getTotal(11, 22, 77));  // 33