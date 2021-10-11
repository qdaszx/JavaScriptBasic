/**
 * 함수 생명 주기
 *
 * 함수 분류
 * - function 분류
 *    - 빌트인 Function 오브젝트
 *    - function 오브젝트
 *    - function 인스턴스(new 연산자 사용)
 * - function 오브젝트 생성 방법
 *    - function 키워드 사용
 *    - function getBook(title){return title};
 * - JS 엔진이 function 키워드를 만나면
 *    - 이름이 getBook인 function 오브젝트 생성
 */

/**
 * 함수 생명 주기
 * - 함수 호출 [코드1]
 *    - getBook("JS북");
 *    - 함수를 호출하면서 파라미터 값을 넘겨 줌
 * - 함수 코드 실행
 *    - JS 엔진 컨트롤이 함수의 처음으로 이동
 *    - 파라미터 이름에 넘겨 받은 파라미터 값 매핑
 *    - 함수 코드 실행
 *    - return 작성에 관계없이 반환 값을 갖고
 *      함수를 호출한 곳으로 돌아 감
 */
console.log("[코드1] 함수 생명 주기");
function getBook(title) {
  return title;
};
let result = getBook("JS북");
console.log(result);  // JS북

/**
 * length 프로퍼티
 * - 함수의 파라미터 수가
 *    - 생성되는 function 오브젝트에 설정됨 [코드2]
 *    - 함수를 호출한 곳에서 보낸
 *      파라미터 수가 아님 [코드3]
 * - JS 엔진이 자동으로 설정
 */
console.log("[코드2] 파라미터 수 설정");
function add(one, two) {
  return one + two;
};
console.log(add.length);  // 2

console.log("[코드3] 앞에서 순서대로 값 설정");
function add2(one, two) {
  return one + two;
};
add(1, 2, 3, 4);
console.log(add2.length); // 2
/**
 * 1. add(1, 2, 3, 4)로 호출하면
 *    one에 1이 설정되고 two에 2가 설정됩니다.
 * 2. add() 함수를 호출한 곳에서 보낸
 *    값의 수가 아닙니다.
 * 3. length 값은 4가 아니라 2입니다.
 */