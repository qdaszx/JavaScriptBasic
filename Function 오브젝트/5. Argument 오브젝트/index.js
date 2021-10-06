/**
 * 아규먼트 오브젝트
 * - 함수가 호출되어 함수 안으로 이동했을 때
 *   arguments 이름으로 생성되는 오브젝트
 * - 함수를 호출한 곳에서 넘겨 준 값을 순서대로 저장
 * - 호출된 함수에 파라미터를 작성한 경우
 *    - 호출된 함수의 파라미터에도 값을 설정하고
 *      아규먼트 오브젝트에도 저장 [코드1]
 *    - apply()와 아규먼트 오브젝트 [코드2]
 * - 파라미터라고 부른 것은
 *   아규먼트 오브젝트와 구분하기 위한 것
 */
console.log("[코드1] 모든 파라미터 값 저장");
function getTotal(one) {
  return one + arguments[1] + arguments[2];
};
let result = getTotal(10, 20, 30);
console.log(result);  // 60
/**
 * 1. getTotal()을 호출합니다.
 *    10, 20, 30을 파라미터 값으로 넘겨 줍니다.
 * 2. 함수가 호출을 받게 되면
 *    함수 안에 arguments 이름을 가진 오브젝트를 생성
 * 3. 10, 20, 30이 arguments에 순서대로 설정됩니다.
 *    arguments[0]처럼 인덱스를 사용하여 값을 사용
 * 4. getTotal()의 one 파라미터에 10이 설정됩니다.
 */

console.log("[코드2] apply()와 아규먼트 오브젝트");
function getTotal2(one) {
  return one + arguments[1] + arguments[2];
};
let result2 = getTotal2.apply(this, [10, 20, 30]);
console.log(result2); // 60
/**
 * 1. apply()의 두 번째 파라미터가 배열이며
 *    파라미터 값이 유동적입니다.
 * 2. 이때 arguments를 사용하여
 *    유동적인 파라미터 수에 대응할 수 있습니다.
 *
 * 3. 사용 사례
 * - 웹페이지에서 "좋아하는 음악"을
 * - checkbox로 선택받으면 선택한 수가 유동적입니다.
 * - apply()와 아규먼트 오브젝트로 대응할 수 있습니다.
 */