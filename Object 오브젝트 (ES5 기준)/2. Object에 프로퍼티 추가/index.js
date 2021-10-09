/**
 * defineProperty()
 * 구분 - 데이터(값)
 * object - Object 오브젝트
 * 파라미터 1. 대상 오브젝트
 *        2. 프로퍼티 이름
 *        3. 속성
 * 반환 - 대상 오브젝트
 *
 * - 대상 오브젝트에 프로퍼티 추가 또는
 *   프로퍼티 속성 변경
 * - 프로퍼티마다 상태를 갖고 있음
 *    - 상태란? 변경/삭제/열거 가능 여부
 *    - 상태가 가능일 때만 처리할 수 있음
 *    - 프로퍼티를 추가할 때 상태 결정 [코드1]
 */
console.log("[코드1] 프로퍼티 추가");
let obj = {};
Object.defineProperty(obj, "book", {
  value: "JS북",
  enumeralbe: true
});
console.log(obj); // {book: 'JS북'}
/**
 * 1. 첫 번째 파라미터에
 *    프로퍼티를 추가할 오브젝트(obj) 작성
 * 2. 두 번째 파라미터에 프로퍼티 이름(book) 작성
 * 3. 세 번째 파라미터 {value: "JS책"}에서
 *    - value는 프로퍼티 값을 나타내는 속성
 *    - "JS책"은 value의 속성 값으로
 *    - [실행 결과]처럼 프로퍼티 값이 됩니다.
 */

/**
 * definePropertyies()
 * 구분 - 데이터(값)
 * object - Object 오브젝트
 * 파라미터 1. 대상 오브젝트
 *        2. 프로퍼티 이름과 속성
 * 반환 - 대상 오브젝트
 *
 * - 다수의 프로퍼티를 추가하거나 속성 변경
 *    - 함수 기능은 defineProperty()와 같음 [코드2]
 */
console.log("[코드2] 다수의 프로퍼티 추가");
let obj2 = {};
Object.defineProperties(obj2, {
  soccer: {
    value: "축구", enumerable: true
  },
  basketball: {
    value: "농구", enumerable: true
  }
});
for (let name in obj2) {
  console.log(name + ":" + obj2[name]); // soccer:축구 basketball:농구
};