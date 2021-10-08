/**
 * 지금부터 다루는 7개 메소드는
 * 모두 콜백 함수를 호출합니다.
 * 키워드는 시맨틱과 독립성입니다.
 */

/**
 * forEach()
 *
 * 구분 - 데이터(값)
 * data - 반복 대상
 * 파라미터 1. 콜백 함수
 *        2. this로 참조할 오브젝트opt
 * 반환 - undefined
 *
 * - 배열의 엘리먼트를 하나씩 읽어가면서
 *   콜백 함수 호출
 * - 콜백 함수 파라미터
 *    - 엘리먼트 값, 인덱스, 배열 전체 [코드1]
 * - break, continue 사용 불가
 *   throw는 사용 가능
 * - 콜백 함수 분리(독립성) [코드2]
 * - this로 오브젝트 참조 [코드3]
 */
console.log("[코드1] 반복 처리 방법");
let list = ["A", "B", "C"];
list.forEach(function (el, index, all) {
  console.log(el + ":" + index + ":" + all);  // A:0:A,B,C B:1:A,B,C C:2:A,B,C
});
/**
 * 1. 배열의 첫 번째 엘리먼트인 "A"를 읽습니다.
 * 2. 콜백 함수를 호출하면서 파라미터에
 *    엘리먼트 값, 인덱스, 배열 전체 순서로 설정
 * 3. 콜백 함수의 함수 코드를 실행
 *    console.log() 실행
 * 4. 다음 엘리먼트를 읽습니다.
 * 5. 2번에서 4번을 배열 끝까지 반복합니다.
 */

console.log("[코드2] 콜백 함수 분리");
let list2 = ["A", "B", "C"];
let fn = function (el, index, all) {
  console.log(el + ":" + index + ":" + all);  //A:0:A,B,C B:1:A,B,C C:2:A,B,C
};

list.forEach(fn);
/**
 * 1. [코드 1]과 코드가 같습니다.
 * 2. 단지, 콜백 함수를 분리한 것뿐 입니다.
 */

console.log("[코드3] this로 오브젝트 참조");
let list3 = [1, 2];
let fn2 = function (el, index, all) {
  console.log(el + this.ten); // 11 12
};

list3.forEach(fn2, { ten: 10 });
/**
 * 1. this로 오브젝트를 참조합니다.
 * 2. this.ten의 값은 10입니다.
 * 3. 함수 안에서 값(데이터)을 사용하는 방법
 * - 파라미터, 변수, this로 참조, 함수 호출(반환값)
 * 4. 콜백 함수의 완전한 독립성 보장
 */
