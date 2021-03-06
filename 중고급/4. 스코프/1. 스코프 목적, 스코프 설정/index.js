/**
 * Scope
 *
 * 스코프 목적
 *
 * - 범위를 제한하여
 *    - 식별자를 해결하려는 것
 *    - 스코프에서 식별자를 해결
 * - 식별자 해결(Identifier Resolution)
 *    - 변수 이름, 함수 이름을 찾는 것
 *    - 이때 스코프를 사용
 *    - 이름을 찾게 되면 값을 구할 수 있음
 *    - 크게는 이름을 설정하는 것도 식별자 해결
 * - 스코프는 식별자 해결을 위한 것
 */

/**
 * 스코프 설정
 *
 * 1. 엔진이 function book(){}을 만나면
 * 2. function 오브젝트를 생성하고
 * 3. 스코프를 설정합니다.
 *    - 생성한 function 오브젝트의
 *    - [[Scope]]에 스코프를 설정합니다.
 *    - 즉, 이때 스코프가 결정됩니다.
 * 4. JS의 스코프 설정 메커니즘입니다.
 * 5. 마지막 줄에서 book() 함수를 호출합니다.
 * 6. 엔진 컨트롤이 book 함수 안으로 이동합니다.
 * 7. function get(){}을 만나게 되며
 *    - function 오브젝트를 생성합니다.
 * 8. 스코프를 설정합니다.
 *    - function 오브젝트의
 *    - [[Scope]]에 스코프를 설정합니다.
 *    - 이때 스코프가 결정됩니다.
 * 9. get() 함수를 호출합니다.
 */
console.log("[코드1] 스코프 설정");
function book() {
  let point = 123;
  function get() {
    console.log(point);
  };
  get();
};
book();