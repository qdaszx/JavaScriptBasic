/**
 * this 참조 범위
 *
 * this와 strict 모드
 *
 * - 오브젝트.함수이름() 형태로 함수 호출
 *    - 글로벌 오브젝트는 오브젝트 이름이 없으므로
 *    - 함수 이름만 작성하여 호출
 * - strict 모드에서는
 *    - window.book()처럼 book() 앞에
 *    - window를 글로벌 오브젝트로 작성
 * - 함수 앞에 오브젝트를 작성하지 않으며
 *    - this 바인딩 컴포넌트에 undefined가 설정되므로
 *    - this로 window를 참조할 수 없음 [코드1] [코드2]
 */
console.log("[코드1] 오브젝트 작성하지 않음");
function book() {
  "use strict";
  return this;
};
var result = book();
console.log(result);  // undefined
/**
 * 1. 호출하는 book() 함수 앞에
 *    오브젝트를 작성하지 않으면
 * 2. return this에서 undefined 반환
 * 3. this 바인딩 컴포넌트에 undefined가
 *    설정된다는 뜻
 */

console.log("[코드2] window 오브젝트 작성");
function book2() {
  "use strict";
  return this;
};
var obj = window.book2();
console.log(obj === window);  // true
/**
 * 1. 호출하는 book() 함수 앞에
 *    window 오브젝트 작성
 * 2. book() 함수가 글로벌 함수이므로 호출되며
 *  - return this에서 window 오브젝트 반환
 */

/**
 * this 참조 오브젝트
 *
 * - this가 참조하는 오브젝트
 * - 마지막 줄에서 book.member.get() 호출
 *    - this가 member 오브젝트 참조
 *    - book은 get()을 호출하는 경로 역할
 * - console.log(this === book.member);
 *    - [실행 결과]에 true가 출력되며
 *    - this가 book.member를 참조하기 때문
 *    - 즉, this 바인딩 컴포넌트에
 *      book.member 오브젝트가 설정됩니다.
 * - console.log(this.point);
 *    - this가 book.member를 참조하므로
 *    - book.point 값인 100을 출력하지 않고
 *      book.member의 200을 출력합니다.
 */
console.log("[코드3] this 참조 오브젝트");
var book3 = {
  point: 100,
  member: {
    point: 200,
    get: function () {
      console.log(this === book3.member); // true
      console.log(this.point);  // 200
    }
  }
};
book3.member.get();

/**
 * [정리 시간]
 *
 * - 마지막 줄에서 fn()을 호출하면
 *    - book.get() 함수가 호출됩니다.
 * - console.log(this === window)에서
 *    - true가 출력되는 논리를 제시하세요.
 * - console.log(this.value)에서
 *    - undefined가 출력되는 논리를 제시하세요.
 */
console.log("[코드4] 정리 시간");
var book4 = {
  value4: 123,
  get: function () {
    var value4 = 456;
    console.log(this === window); // true
    console.log(this.value4); // undefined
  }
};
var fn = book4.get;
fn();

/**
 * [정리 시간]
 *
 * - 마지막 줄에서 book()을 호출합니다.
 * - [실행 결과] 값이 출력된 논리를 제시하세요.
 *    - this.getTitle()
 *    - getTitle()
 */
console.log("[코드5] 정리 시간");
function getTitle() {
  console.log("HTML책");
};
var book5 = function () {
  function getTitle() {
    console.log("JS책");
  };
  this.getTitle();  // HTML책
  getTitle(); // JS책
};
book5();