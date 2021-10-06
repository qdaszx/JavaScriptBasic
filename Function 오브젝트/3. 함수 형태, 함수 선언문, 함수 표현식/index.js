/**
 * 함수 형태
 * - 함수 선언문
 *    - Function Declaration
 *    - function getBook(book){코드}
 * - 함수 표현식
 *    - Function Expression
 *    - let getBook = function(book){코드}
 */

/**
 * 함수 선언문
 * 구분 - 데이터(값)
 * function - function 키워드
 * 식별자 - 함수 이름
 * 파라미터 - 파라미터 리스트opt
 * 함수 블록 - {실행 가능 코드opt}
 * 반환 - 생성한 function 오브젝트
 *
 * - function getBook(title){함수 코드} 형태 [코드1]
 *    - function 키워드, 함수 이름,
 *      블록{}은 작성 필수
 *    - 파라미터, 함수 코드는 선택
 * - 함수 이름을 생성한 function 오브젝트의
 *   이름으로 사용
 */
console.log("[코드1] 함수 선언문 형태");
function getBook(title) {
  return title;
};
let result = getBook("JS책");
console.log(result);  // JS책

/**
 * 함수 표현식
 * 구분 - 데이터(값)
 * function - function 키워드
 * 식별자 - 함수 이름opt
 * 파라미터 - 파라미터 리스트opt
 * 함수 블록 - {실행 가능한 코드opt}
 * 반환 - 생성한 function 오브젝트
 *
 * - let getBook = function(title){코드} [코드2]
 *    - function 오브젝트를 생성하여 변수에 할당
 *    - 변수 이름이 function 오브젝트 이름이 됨
 * - 식별자 위치의 함수 이름은 생략 가능
 *    - let name = function abc(){}에서
 *      abc가 식별자 위치의 함수 이름 [코드3]
 */
console.log("[코드2] 함수 표현식 형태");
let getBook2 = function (title) {
  return title;
};
let result2 = getBook2("JS책");
console.log(result2); // JS책

console.log("[코드3] 식별자 위치의 함수 이름");
let getBook3 = function inside(value) {
  if (value === 102) {
    return value;
  };
  console.log(value);
  return inside(value + 1);
};
getBook3(100);  // 100 101
/**
 * 1. inside 이름으로 function 오브젝트를 생성하여
 *    getBook 변수에 할당합니다.
 * 2. 함수 외부에서 inside()를 호출할 수 없으며
 *    getBook()을 호출하여 함수 안으로 이동한 후
 *    inside()를 호출할 수 있습니다.
 * 3. 함수 안에서 inside()를 호출하는 것은
 *    자신을 호출하는 것이므로
 *    무한으로 반복하여 호출하게 됩니다.
 * 4. 함수가 종료되도록 조치를 취해야 합니다.
 */

// 왜 두가지 형태가 있나 -> 이유가 있다 중고급과정에서 다룬다
// 함수 선언문이 먼저 function 오브젝트를 만들고 그 다음에 함수 표현식으로 function 오브젝트를 만든다 -> 큰 차이 : 순서가 다르다. 이에 따른 동반되는 처리가 다르다
