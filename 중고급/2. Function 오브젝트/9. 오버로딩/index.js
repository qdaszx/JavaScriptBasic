/**
 * 오버 로딩
 *
 * - 오버 로딩 형태 [코드1]
 * - 함수 이름이 같더라도
 *    - 파라미터 수 또는 값 타입이 다르면 각각 존재
 * - 함수를 호출하면
 *    - 파라미터 수와 값 타입이 같은
 *      함수가 호출됨
 * - JS는 오버로딩을 지원하지 않음
 *    - JS는 파라미터 수와 값 타입을 구분하지 않고
 *    - {name: value} 형태로 저장하기 때문
 */
console.log("[코드1] 오버로딩 형태");
function book(one) { };
function book(one, two) { };
function book(one, two, three) { };

book(one, two); // error : Uncaught ReferenceError: one is not defined

/**
 * 오버로딩 미지원: 함수 선언문 초기화
 *
 * 1. 마지막 줄에서 book() 함수를 호출하면
 * 2. function getBook(){return "책1";}을 만나
 *    - getBook 오브젝트를 생성합니다.
 * 3. getBook()을 호출하지 않고 아래로 내려갑니다.
 * 4. function getBook(){return "책2";}를 만나
 *    - getBook 오브젝트를 생성합니다.
 *    - 2번의 오브젝트와 이름이 같으므로
 *    - 여기서 생성한 getBook 오브젝트로 대체됩니다.
 * 5. {name: value} 형태에서
 *    - 이름(name)이 값으므로 값(value)이 변경됩니다.
 *
 * 오버로딩 미지원: 변수 초기화
 *
 * 6. book 함수의 첫 번째 줄로 이동합니다.
 * 7. 함수 표현식과 변수에 undefined를 설정하지만
 *    - 설정할 대상이 없습니다.
 * 8. 다시 book 함수의 첫 번째 줄로 이동합니다.
 *
 * 오버로딩 미지원: 코드 실행
 *
 * 9. function getBook(){return "책1";};
 *    - 함수 선언문이므로 아래로 내려갑니다.
 * 10. getBook() 함수를 호출합니다.
 * 11. return "책2";의 getBook 함수가 실행됩니다.
 *    - 함수 이름이 같으므로
 *      위의 함수가 아래 함수로 대체되었기 때문
 *    - "책2"가 [실행결과]에 출력됩니다.
 * 12. 호출한 함수로 돌아와 다음 코드를 수행합니다.
 * 13. function getBook(){return "책2";};
 *    - 함수 선언문이므로 처리하지 않습니다.
 */
function book2() {
  function getBook() {
    return "책1";
  };
  getBook();
  function getBook() {
    return "책2";
  };
};
book2();