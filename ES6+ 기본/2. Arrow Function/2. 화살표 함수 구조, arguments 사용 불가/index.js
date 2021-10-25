/*
화살표 함수 구조

- function을 =>로  표기하는 것이 전부가 아님
- 화살표 함수는 일반 함수와 구조가 다름
  - 화살표 함수 나름의 특징이 있음
*/

{
  // debugger;
  // "use strict"

  const book = function () {
    return 100;
  };
  /*
    1. 오른쪽의 book을 전개하면
      prototype과 constructor가 있습니다.
  */
  // debugger;

  const point = () => 100;
  /*
  1. 오른쪽의 point를 전개하면
    prototype과 constructor가 없습니다.
  2. prototype에 메소드를 연결하여 확장할 수 없습니다.
  3. prototype이 없으므로 그만큼 가볍습니다.
  4. new 연산자로 인스턴스를 생성할 수 없습니다.
  5. 이것이 화살표 함수의 특징이며 용도입니다.
  */
  // debugger;
};

/*
arguments 사용 불가

- arguments 사용할 수 없음
- arguments 대신에 rest 파라미터 사용
  뒤에서 다룹니다.
*/

{
  // "use strict"
  // debugger;

  const point2 = () => {
    try {
      const args = arguments;
    } catch (error) {
      console.log("arguments 사용 불가");
    };
  };
  point2(10, 20);
  /*
  1. point(10, 20) 형태로 호출하면
    일반 함수에서는 arguments에 10, 20이 설정되지만
  2. 화살표 함수에서 ReferenceError가 발생합니다.
    즉, arguments를 사용할 수 없습니다.
  3. 오른쪽의 point 함수 구조를 전개하면
    arguments가 표시는 됩니다.
  */
  // debugger;
};