/**
 * 함수 코드 해석 순서
 *
 * 1. 함수 선언문 해석
 *    - function getBook(){};
 * 2. 변수 초기화
 *    - var title = undefined;
 *    - var readBook = undefined;
 * 3. 코드 실행
 *    - var title = "JS책";
 *    - var readBook = function(){};
 *    - getBook();
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
 * 함수 선언문 해석
 *
 * 1. 마지막 줄에서 book() 함수를 호출합니다.
 * 2. 엔진 제어가 book 함수의 첫 번째 줄로 이동
 *    - debugger를 실행하지 않습니다.
 * 3. 함수 안에서 함수 선언문을 찾습니다.
 *    - 위에서 아래로 내려가면서 하나씩 검색
 * 4. function getBook(){}이 함수 선언문이므로
 *    - function 오브젝트를 생성합니다.
 * 5. 더 이상 함수 선언문이 없으므로
 *    - 다시 함수의 첫 번째 줄로 이동합니다. [계속...]
 */
function book2() {
  // debugger;
  let title = "JS책";
  function getBook() {
    return title;
  };
  let readBook = function () { };
  getBook();
};
book2();

/**
 * 변수 초기화
 *
 * 6. debugger를 실행하지 않습니다.
 * 7. var title = "JS책";
 *    - title 변수에 undefined를 할당합니다.
 *    - "JS책"을 할당하지 않습니다.
 * 8. function getBook(){}은
 *    - 초기화를 했으므로 초기화하지 않습니다.
 * 9. var readBook = function(){};
 *    - readBook 변수에 undefined를 할당합니다.
 *    - 함수 표현식을 변수를 선언만 합니다.
 * 10. 여기까지가 초기화 단계이며
 *    - 다시 함수의 첫 번째 줄로 이동합니다. [계속...]
 */

/**
 * 코드 실행
 *
 * 1. debugger를 실행하며, 실행이 멈춥니다.
 * 2. var title = "JS책";
 *    - title 변수에 "JS책"을 할당합니다.
 * 3. function getBook(){return title};
 *    - 실행이 아닌 선언이므로 다음 줄로 이동
 * 4. var readBook = function(){};
 *    - function 오브젝트를 생성하여
 *      readBook 변수에 할당
 *    - readBook이 function 오브젝트가 되므로
 *      이제 readBook 함수를 호출할 수 있습니다.
 * 5. getBook() 함수를 호출합니다.
 *    - 지금까지와 같은 순서와 방법으로
 *    - getBook() 함수의 함수와 변수를 초기화하고 코드 실행
 */