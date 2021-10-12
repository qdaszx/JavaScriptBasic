/**
 * - 식별자 해결 Identifier Resolution
 *    - 사용할 변수/함수를 결정하는 것
 *    - 예: point 변수
 *    - 신속, 정확한 검색을 위해 스코프 필요
 * - 스코프에서 이름 찾기 위해
 *    - 스코프에 이름을 설정
 *    - 값은 변경되지만, 이름은 변경되지 않음
 *    - 식별자 해결 대상은 이름
 * - resolution의 사전적 의미 : 해결, 결정
 *    - 결정도 시맨틱적으로 맞음
 */

// 식별자 해결
let point = 100;
function getPoint() {
  let point = 200;
  return point;
};
let result = getPoint();
console.log(result);  // 200

/**
 * 스코프 용도
 * - 식별자 해결을 수단, 방법
 *    - 스코프가 목적이 아님
 * - 식별자가 유일하면
 *    - 스코프는 필요하지 않음
 *    - 하지만, 유일하게 작성하는 것은 불가능
 *    - 그래서 스코프가 필요
 */