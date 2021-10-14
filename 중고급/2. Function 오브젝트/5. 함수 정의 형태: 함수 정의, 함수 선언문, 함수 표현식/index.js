/**
 * 함수 정의
 *
 * - 함수 정의 Function Definition
 *    - 함수 코드가 실행될 수 있도록
 *      JS 문법에 맞게 함수를 작성하는 것
 * - 함수 정의 형태
 *    - 함수 선언문 Function Declaration
 *    - 함수 표현식 Function Expression
 *    - new Function(param, body)
 *      문자열로 작성
 */

/**
 * 함수 선언문
 *
 * 구분 - 타입 - 데이터(값)
 * function - Function - function 키워드
 * 식별자 - String - 함수 이름
 * 파라미터 - Any - 파라미터 리스트opt
 * 함수 블록 - Object - {실행 가능 코드opt}
 * 반환 - Function - 생성한 Function 오브젝트
 *
 * - function getBook(title){함수 코드}
 *    - function, 함수 이름, 블록{} 작성은 필수
 *    - 파라미터, 함수 코드는 선택 [코드1]
 * - 엔진이 function 키워드를 만나면
 *    - function 오브젝트를 생성하고
 *    - 함수 이름을 function 오브젝트 이름으로 사용
 */
console.log("[코드1] 함수 선언문");
function book(one, two) {
  return one + ", " + two;
};
console.log(book("JS", "DOM")); // JS, DOM

/**
 * 함수 표현식
 *
 * 구분 - 타입 - 데이터(값)
 * function - Function - function 키워드
 * 식별자 - String - 함수 이름opt
 * 파라미터 - Any - 파라미터 리스트opt
 * 함수 블록 - Object - {실행 가능 코드opt}
 * 반환 - Function - 생성한 Function 오브젝트
 *
 * - var getBook = function(title){함수 코드}
 *    - function 오브젝트를 생성하여 변수에 할당
 *    - 변수 이름이 function 오브젝트 이름 [코드2]
 * - 식별자 위치의 함수 이름은 생략 가능
 *    - var name = function abc(){}에서
 *      abc가 식별자 위치의 함수 이름 [코드3]
 */
console.log("[코드2] 함수 표현식");
let getBook = function (title) {
  return title;
};
getBook("JS책");

console.log("[코드3] 식별자 위치의 함수 이름");
let getBook2 = function inside(value) {
  if (value === 102) {
    return value;
  };
  console.log(value); // 100 101
  return inside(value + 1);
};
getBook2(100);
/**
 * 1. inside 이름으로 function 오브젝트를 생성하여
 *    getBook 변수에 할당합니다.
 * 2. inside()를 호출할 수 없으며
 *    getBook()을 호출하여 함수 안으로 이동한 후
 *    inside()를 호출할 수 있습니다.
 * 3. 함수 안에서 inside()를 호출하는 것은
 *    자신을 호출하는 것이므로
 *    무한으로 반복하여 호출하게 됩니다.
 * 4. 함수가 종료되도록 조치를 취해야 합니다.
 */
