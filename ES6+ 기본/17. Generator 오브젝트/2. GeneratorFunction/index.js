/*
GeneratorFunction

구분 ::: 데이터(값)
형태 ::: new GeneratorFunction()
파라미터 ::: [param[, [paramN]]], functionBody opt
반환 ::: Generator 오브젝트

- GeneratorFunction.constructor를 사용하여
  - 제너레이터 함수를 생성
  - 파라미터를 문자열로 작성 [코드1]
  - 마지막 파라미터가 함수 코드가 되고 앞은 파라미터 이름이 됩니다.

- 제너레이터 함수 구조
*/

console.log("[코드1] GeneratorFunction");
const fn = new Function("one", "return one");
console.log(fn(100)); // 100

const create = Object.getPrototypeOf(function* () { }).constructor;

const sports = new create("one", "yield one");
const obj = sports(100);
console.log(obj.next());  // {value: 100, done: false}
/**
 * 1. 코드 설명은 다음 페이지에서 합니다.
 * 2. 상황에 따라 함수를 만들어 쓸 때 사용
 */

// 제너레이터 함수 구조
{
  'use strict'
  debugger;

  const gen = function* () { };
  /**
   * 1. 오른쪽의 gen을 펼치면 prototype이 있습니다.
   * 이것을 펼치면 constructor가 있어야 하는데 없습니다.
   * 또한 메소드로 없습니다.
   *
   * 2. __proto__가 있으며 이것을 펼치면 constructor가 있습니다.
   * __proto__에 다른 오브젝트의 prototype에 연결된 프로퍼티를 인스턴스 개념으로 생성하여 첨부한 것이 표시됩니다.
   *
   * 3. 즉, GeneratorFunction의 constructor가 첨부된 것입니다.
   */
  debugger;
};

console.log("[코드2] GeneratorFunction");
const create2 = Object.getPrototypeOf(function* () { }).constructor;
console.log(create2); // ƒ GeneratorFunction() { [native code] }

const sports2 = new create2("one", "yield one;");
console.log(typeof sports2);  // function

const obj2 = sports2(100);
console.log(obj2.next()); // {value: 100, done: false}

/*
1. create = (function*(){}).constructor;
  - 제너레이터 함수를 생성하는 constructor(생성자)를 할당합니다.
2. constructor가 할당되므로 new 연산자로 생성자 함수를 호출할 수 있습니다.
3. console.log(create);
  - function GeneratorFunction(){} 출력
  - function 오브젝트 형태입니다.
4. sports = new create(param)
  - GeneratorFunction을 사용하여 제너레이터 함수를 생성하고 sports 변수에 할당합니다.
  - param에 파리미터와 함수 코드를 작성
    one: 파라미터 이름
    yield one: 함수 코드
5. console.log(typeof sports)
  - new 연산자를 사용했는데 sports가 object가 아니라 function입니다.
6. function이라는 것은
  - function*sports()로 제너레이터 함수를 선언한 것을 뜻합니다.
  - 즉, 지금까지 제너레이터 함수를 선언하는 처리를 한 것입니다.
7. const obj = sports(100);
  - 제너레이터 함수를 호출합니다.
  - 제너레이터 오브젝트 생성, 반환
  - 함수 코드를 실행하지 않습니다.
  - 100이 one에 매핑됩니다.
8. obj.next()
  - 제너레이터 오브젝트는 이터레이터 오브젝트이며
  - obj에 이터레이터 오브젝트가 할당되어 있으므로
  - next()를 호출할 수 있습니다.
  - {value: 100, done: false} 출력
*/