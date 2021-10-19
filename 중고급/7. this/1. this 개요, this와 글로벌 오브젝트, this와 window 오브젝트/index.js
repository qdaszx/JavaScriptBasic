/**
 * this
 *
 * this 개요
 *
 * - 키워드
 * - obj.name() 형태로 호출한
 *    - 함수(메소드)에서 this로
 *    - 인스턴스(오브젝트)를 참조
 * - 실행 콘텍스트의
 *   this 바인딩 컴포넌트에 바인딩
 */

/**
 * this와 글로벌 오브젝트
 *
 * - 글로벌 오브젝트에서 this는
 *    - 글로벌 오브젝트 참조
 * - this와 window 오브젝트
 *    - window는
 *    - JS에서 만든 것이 아니며
 *    - 글로벌 오브젝트의 스코프도 아님
 *    - window와 글로벌 오브젝트를
 *      같은 선상에서 사용
 * - Host 오브젝트 개념 적용
 *
 * - 글로벌 오브젝트에 코드 작성
 *   window.onload = function(){
 *    // 안이 아니라 밖에 코드 작성
 *   };
 * - this가 window 참조 [코드1]
 * - this로 글로벌 변수 사용 [코드2]
 * - window로 글로벌 변수 사용 [코드3]
 * - this.value = 100; 형태로 값 할당 [코드4]
 */
console.log("[코드1] this와 window");
console.log(this === window); // true
/**
 * 1. ture가 출력된 것은 값과 타입이 같다는 것
 */

console.log("[코드2] this로 글로벌 변수 악세스");
var value = 100;
console.log(this.value);  // 100
/**
 * 1. var value = 100;
 *    value는 글로벌 변수
 * 2. this.value;
 * - this가 글로벌 오브젝트를 참조하므로
 * - this.value 형태로 글로벌 변수 사용 가능
 */

console.log("[코드3] window로 글로벌 변수 악세스");
var value2 = 100;
console.log(window.value2); // 100
/**
 * 1. window.value
 * 2. window가 글로벌 오브젝트를 참조하므로
 *    window.value 형태로 글로벌 변수 사용 가능
 */

console.log("[코드4] this로 값 할당");
this.value3 = 100;
console.log(window.value3); // 100
/**
 * 1. this.value = 100;
 * 2. this가 글로벌 오브젝트를 참조하므로
 *    글로벌 오브젝트에 설정됩니다.
 * 3. window가 글로벌 오브젝트를 참조하므로
 *    value를 사용할 수 있습니다.
 * 4. window 오브젝트와 같이 다른 오브젝트를
 *    마치 내것 처럼 사용하는 개념을
 *    Host 오브젝트라고 합니다.
 *    DOM 오브젝트도 Host 오브젝트입니다.
 */

/**
 * this와 window 오브젝트
 *
 * - window.onload = function(){//여기에 코드 작성};
 * - this가 window 참조 [코드5]
 * - this로 로컬(지역) 변수 사용 [코드6]
 * - this.value = 100; 형태로 값 할당 [코드7]
 */
console.log("[코드5] this와 window");
window.onload = function () {
  console.log(this === window); // true
};
/**
 * 1. true가 출력된 것은 값과 타입이 같다는 것
 * 2. this가 window를 참조하는 것은
 *  - window.onload = function(){...}에서
 *  - onload()가 window의 핸들러 함수이기 때문입니다.
 */

console.log("[코드6] this로 지역 변수 악세스");
window.onload = function () {
  var value = 100;
  console.log(this.value);  // undefined
};
/**
 * 1. var value = 100;
 *    value는 핸들러 함수의 지역 변수
 * 2. this.value;
 *  - this가 window 오브젝트를 참조하므로
 *  - this.value로 지역 변수에 악세스할 수 없습니다.
 */

console.log("[코드7] this로 값 할당");
window.onload = function () {
  this.value2 = 100;
  console.log(window.value2);  // 100
};
/**
 * 1. this.value = 100;
 * 2. this가 window 오브젝트를 참조하므로
 *    window 오브젝트에 설정됩니다.
 */