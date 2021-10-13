/**
 * function 형태
 *
 * - 빌트인 Function 오브젝트
 *    - Function.prototype.call()
 * - function 오브젝트
 *    - function book() {...}
 *    - var book = function() {...}
 *    - 인스턴스이지만, new 연산자로
 *      생성한 인스턴스와 구분하기 위해
 *      강좌에서는 function 오브젝트로 표기
 * - function 인스턴스
 *    - new Book()처럼 new 연산자를 사용하여
 *    - Book.prototype에 연결된 메소드로 생성
 */

/**
 * function 오브젝트 생성
 *
 * - var book = function() {...};
 * - 엔진이 function 키워드를 만나면
 *    - 빌트인 Function 오브젝트의
 *    - prototype에 연결된 메소드로
 *    - function 오브젝트 생성
 * - 생성한 오브젝트를 book 변수에 할당
 * - book() 형태로 호출
 *    - function 오브젝트이므로 호출할 수 있음
 */

/**
 * 오브젝트 저장
 *
 * - 함수를 호출하려면
 *    - 생성한 function 오브젝트를 저장해야
 * - function 오브젝트 저장 형태
 *    - {name: value} 형태로 저장
 *    - {book: 생성한 function 오브젝트} 형태
 * - 함수를 호출하면
 *    1. 저장된 오브젝트에서 함수 이름(book)으로 검색
 *    2. value 값을 구하고
 *    3. value가 function 오브젝트이면 호출
 */

/**
 * 생각의 전환
 *
 * - 함수가 호출되면 엔진은
 *    - 함수의 변수와 함수를
 *      {name: value} 형태로
 *      실행 환경을 설정하고 함수 코드를 실행
 * - {name: value} 형태로 생각을 전환해야
 *    - JS의 아키텍처와 메커니즘을
 *      쉽게 이해할 수 있습니다.
 * - function(){} 코드를 보면
 *    - 함수의 변수와 함수가
 *      {name: value} 형태로
 *      연상되어야 합니다.
 */