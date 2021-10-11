/**
 * 자바스크립트 특징
 * - 자바스크립트는 스크립팅(Scripting) 언어
 * - 스크립팅 언어 특징
 *    - 소스 파일의 코드를 사전에 컴파일하여
 *      실행 파일을 만들어 놓지 않고
 *    - 사용하는 시점에 컴파일하고 실행 [코드1]
 *    - 장점을 활용하는 지혜 필요
 * - 컴파일 순서
 *    - 소스 파일의 위에서부터 아래로 컴파일
 *    - function 키워드를 만나면
 *      function 오브젝트를 생성
 *    - 이때, 함수 안의 코드는 컴파일하지 않음
 *      함수가 호출되었을 때, 위의 방법으로 컴파일
 */
console.log("[코드1] book.js 파일");
let value = 123;
let book = function () {
  let point = 456;
  let getPoint = function () {
    return point;
  }
  getPoint();
};
book();

/**
 * JS와 객체지향
 * - 객체 지향 프로그래밍 언어
 *   OOP: Object Oriented Programming
 * - 자바스크립트는 객체 지향 언어
 *    - ES5 스펙에 아래와 같이 기술되어 있음
 *    ECMAScript is an object-oriented programming language
 * - 자바스크립트 OOP 구현
 *    - 다른 언어의 OOP 구현과 차이가 있으므로
 *      비교하는 것은 의미 없음
 *    - JS 특징이 반영된 OOP 구현
 */

/**
 * OOP의 객체
 * - 강좌에서 필요한 것만 간략하게 다룹니다.
 * - 객체 Object
 *    - 개념적 접근
 *    - 행위 (Behavior)와 속성 (Attribute)으로 구성
 *    - 행위: 먹다, 마시다
 *    - 속성: 밥, 사이다 [++]
 *
 * [++]
 * - 객체를 형상화하면
 *    - 행위가 메소드가 되고
 *    - 속성이 프로퍼티가 됩니다.
 *    - 객체기 클래스로 됩니다.
 * - 클래스 Class
 *    - 행위와 속성을 정의한 것으로
 *    - 인스턴스로 생성하여 프로그램에서 사용
 */