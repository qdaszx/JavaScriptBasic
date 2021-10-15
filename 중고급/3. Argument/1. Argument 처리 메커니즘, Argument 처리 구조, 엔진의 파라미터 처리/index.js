/**
 * Argument 처리 메커니즘
 *
 * Argument 처리 구조
 *
 * - 파라미터를 {key: value} 형태로 저장
 *    - 파라미터 수만큼 0부터 인덱스 부여
 *    - key로 사용
 *    - 파라미터로 받은 값을 value에 설정
 *    - {0: param1, 1: param2} [코드1]
 * - Array-like
 *    - key 값이 0부터 1씩 증가
 *    - length 프로퍼티가 있어야 함
 */
console.log("[코드1] Array-like");
function get() {
  return arguments;
};
console.log(get("A", "B")); // {0: A, 1: B}

/**
 * 엔진의 파라미터 처리
 *
 * 1. get() 함수를 호출하면서
 *    - 77과 100을 파라미터 값으로 넘겨 줍니다.
 * 2. 넘겨 받은 값을 함수의 파라미터 이름에 설정
 *    - 정적 환경의 선언적 환경 레코드에 설정
 *    - one: 77
 * 3. Argument 오브젝트를 생성합니다.
 * 4. 넘겨받은 파라미터 수를
 *    - Argument 오브젝트의 length 프로퍼티에 설정
 * 5. 넘겨받은 파라미터 수만큼 반복하면서
 *    - 0부터 key로 하여 순서대로 파라미터 값을 설정
 *    - {0: 77}, {1, 100} 형태가 됩니다.
 * 6. 함수의 초기화 단계에서 실행
 */
console.log("[코드2] 엔진의 파라미터 처리");
let get2 = function (one) {
  return one;
};
get(77, 100);