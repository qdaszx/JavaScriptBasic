/**
 * 엔진 해석 순서
 *
 * - 자바스크립트는 스크립팅 언어
 *    - 스크립팅 언어는
 *    - 작성된 코드를 위에서부터 한 줄씩
 *      해석(환경 설정)하고 실행
 *    - 하지만, 자바스크립트는 다릅니다.
 * - 중간에 있는 코드가 먼저 해석될 수도 있음
 * - 첫번째, 함수 선언문을 순서대로 해석
 *    - function sports(){};
 * - 두번째, 표현식을 순서대로 해석
 *    - var value = 123;
 *    - var book = function(){};
 */

/**
 * 함수 코드 작성 형태
 *
 * 1. 마지막 줄에서 book 함수 호출
 *    - book();
 * 2. title 변수 선언
 *    - var title = "JS책";
 * 3. 함수 선언문 작성
 *    - function getBook(){return title;}
 * 4. 함수 표현식 작성
 *    - var readBook = function(){};
 */
function book() {
  // debugger;
  let title = "JS책";
  function getBook() {
    return title;
  };
  let readBook = function () { };
  getBook();
};
book();

/**
 * 엔진 처리 상태
 *
 * 1. 마지막 줄에서 book() 함수를 호출하면
 *    - debugger에서 실행이 멈춥니다.
 * 2. title, readBook 값은 undefined
 * 3. getBook은 function 오브젝트
 * 4. getBook이 function 오브젝트라는 것은
 *    - function getBook(){}을 해석하는 것을 뜻합니다.
 * 5. title, readBook에 설정된 undefined도 값이며
 *    - 값이 있다는 것은 엔진이 해석한 것을 뜻합니다.
 *    - 해석하지 않으면
 *      title, readBook 값이 표시되지 않습니다.
 */
function book2() {
  console.log(title);
  console.log(readBook);
  console.log(getBook);
  // debugger;
  let title = "JS책";
  function getBook() {
    return title;
  };
  let readBook = function () { };
  getBook();
};
book2();