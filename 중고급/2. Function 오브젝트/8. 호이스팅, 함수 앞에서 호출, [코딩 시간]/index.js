/**
 * 함수 앞에서 호출
 *
 * - 함수 선언문은 초기화 단계에서
 *    - function 오브젝트를 생성하므로
 *    - 어디에서도 함수를 호출할 수 있음
 * - 함수 앞에서 호출 가능
 *    - 호이스팅이라고 합니다. [코드1]
 *    - 용어보다 개념으로 접근
 * - 초기화 단계에서
 *    - 값이 있으면 초기화하지 않음 [코드2]
 */
console.log("[코드1] 호이스팅");
let result = book();
console.log(result);  // 호이스팅

function book() {
  return '호이스팅';
};

console.log("[코드2] 초기화하지 않음");
let result2 = book2();
console.log(result2); // 호이스팅

function book2() {
  return "호이스팅";
};
book2 = function () {
  return "함수 표현식";
};

/**
 * [코딩 시간]
 *
 * - 목적
 *    - JS의 {name: value} 이해
 *    - 함수 표현식과 함수 선언문 이해
 * - 4개의 코드로 실행하고
 *   결과가 나오는 이유를 설명하세요
 * - 함수 이름은 같으며 가운데에서 함수 호출
 *
 *  1. 함수 선언문, 함수 호출(), 함수 선언문 [코드3]
 *  2. 함수 표현식, 함수 호출(), 함수 표현식
 *  3. 함수 선언문, 함수 호출(), 함수 표현식
 *  4. 함수 표현식, 함수 호출(), 함수 선언문
 */

console.log("[코드3] 코딩 시간");
function book3() {
  function getBook() {
    return "책1";
  };
  // 여기서 함수 호출
  console.log(getBook()); // 책2
  function getBook() {
    return "책2";
  };
};
book3();
/**
 * 1. 한번 돌때 선언문을 네임벨류 형식으로 만든다.
 * 2. getBook 함수가 있지만 제일 나중에 나온 getBook 함수를 마지막 getBook: function 오브젝트로 인식하여
 * 3. 세번째 돌때 코드 실행을 할땐 마지막에 나온 getBook함수에 값이 할당되어 값을 전달할 것이다.
 */

function book4() {
  let getBook = function () {
    return "책1";
  };
  // 여기서 함수 호출
  console.log(getBook()); // 책1
  getBook = function () {
    return "책2";
  };
};
book4();
/**
 * 함수 표현식으로는 제일 처음 등록한 변수에 할당된 function 오브젝트가 등록된다.
 * 자바스크립트는 함수 선언문이 아니라면 자신 보다 아래 있는 변수에 할당된 값을 읽을 수 없기 때문에 두번째 getBook변수에 할당된 함수는 읽을 수 없다.
 * 그러므로 첫번째 getBook변수에 할당된 function 오브젝트에 값을 출력하게 되는 것이다.
 */

function book5() {
  function getBook() {
    return "책1";
  };
  // 여기서 함수 호출
  console.log(getBook()); // 책1
  getBook = function () {
    return "책2";
  }
}
book5();
/**
 * 함수 선언문이 표현식보다 먼저 네임벨류 형식으로 등록되기 때문에 표현식으로 설정된 값은 등록되지 않고 처음에 등록한 선언문에 값이 등록하여 반환됩니다.
 * 첫번째 돌면서 등록된 값은 변경되지 않습니다. 그리고 표현식이 코드가 밑에 있기 때문에 애초에 등록자체가 안되므로 선언문에 값이 등록될 수 밖에 없는 구조입니다.
 */

function book6() {
  getBook = function () {
    return "책1";
  }
  // 여기서 함수 호출
  console.log(getBook()); // 책1
  function getBook() {
    return "책2";
  };
}
book6();
/**
 * 첫번째 돌때 선언문으로 등록되어 있는 getBook 함수가 등록되지만
 * 두번째 돌때 getBook 변수에 설정된 함수가 다시 등록되면서
 * 세번째 돌때 가장 가깝게 있는 표현식으로 값을 반환한다고 생각합니다.
 *
 */
