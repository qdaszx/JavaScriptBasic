/**
 * 호이스팅
 *
 * - ES5의 실행 콘텍스트 처리 순서
 *    1. 함수 선언문 설정
 *    2. 변수 이름을 바인딩
 *       변숫값은 undefined
 *    3. 소스 코드 실행 [코드1]
 *
 * - let 변수는 호이스팅되지 않음
 *    - 즉, let 변수 앞에서 변수 사용 불가 [코드2]
 *
 * - let 변수를 인식하는 시점
 *
 * - block 안에 let 변수 작성
 *
 */
console.log("[코드1] 호이스팅");
console.log("music 변수", music); // music 변수: undefined
var music = "음악";
/**
 * 1. console.log("music 변수", music);
 *    코드 아래에 var music = "음악"이 있습니다.
 * 2. 변수가 아래에 있지만
 *    식별자 해결을 할 수 있습니다.
 *    단, 이 위치에서 music 값은 undefined
 * 3. 이것을 호이스팅이라고 합니다.
 * 4. 식별자 해결을 하지 못하면 에러가 발생합니다.
 */

console.log("[코드2] 호이스팅되지 않음");
try {
  console.log(sports);
} catch (e) {
  console.log("호이스팅 불가"); // 호이스팅 불가
};
let sports = "축구";

// "use strict"
// debugger;

// 변수가 모두 아래에 작성되어 있습니다.
console.log(globalVar);
/*
1. console에 undefined가 출력됩니다.
2. 오른쪽의 Global(Window)를 펼치면
  globalVar 변숫값이 undefined이지만
  변수가 표시됩니다.
3. 반면, globalLet 이름은 표시되지 않습니다.
  변수로 인식하지 않은 것을 뜻합니다.
*/
// debugger;

var globalVar = "var 변수";
/*
1. globalVar 변수에 "var 변수"가 할당됩니다.
  이때 초기값인 undefined가 변경됩니다.
*/
// debugger;

try {
  console.log(globalLet);
} catch (e) {
  console.log("globalLet 인시하지 못함");
};
/*
1. 아래의 globalLet을 인식하지 못해 에러가 발생합니다.
*/

let globalLet;
/*
1. 비로소 이때 오른쪽 Script에 globalLet이 표시됩니다.
  즉, 변수 선언을 실행해야 표시됩니다.
2. 값을 할당하지 않고 변수를 선언만 하면
  엔진이 undefined를 할당합니다.
*/
// debugger;

console.log(globalLet);
/*
1. let 변수는,
  변수 선언을 실행한 후에 변수를 인식할 수 있습니다.
  즉, 식별자를 해결할 수 있습니다.
*/
// debugger;

// --------

// "use strict"
// debugger;

// block 안에 변수 작성
{
  console.log(variable);
  /*
  1. 오른쪽의 Global(Window)를 펼치면
    variable의 변숫값이 undefined이지만
    변수 이름이 표시됩니다.
  2. blockLet 변수도 undefined로 표시됩니다.
    하지만, 호이스팅으로 변수를 사용할 수는 없습니다.
  3. 앞에서 글로벌 변수는 Script에
    변수가 표시되지 않았습니다.
  */

  var variable = "var 변수";
  let blockLet = "let 변수";
  /*
  1. let 변수가 별도의 영역에 설정되는 개념을
    MDN에 "temporal dead zone"으로
    기술되어 있습니다.
    ES6 스펙에 작성된 용어는 아닙니다.
  2. temporal에서 let 변수가 undefined인 상태를
    나타내는 뉘앙스가 풍기며
    dead zone에서 let 변수에 값을 할당한 후에는
    임시 상태가 해제되어
    변수를 사용할 수 있다는 뉘앙스가 풍깁니다.
  3. 아래에서 위의 개념을 같이 정리하겠습니다.
  */
  // debugger;

  /*
  1. 개념적인 접근입니다만
  2. 초기화 단계(코드를 실행하기 전)에서 정적 환경의
    선언적 환경 레코드에 변수 이름을 바인딩합니다.
  3. 이때, var 변수는 undefined를 초깃값으로 설정하고
    let 변수는 초깃값을 설정하지 않습니다.
  4. 엔진에서 이런 처리를
    초기화자(Initializer)로 구분하고 있습니다.
  */
  // debugger;

  /*
  5. 변수 이름으로 식별자를 해결할 때
    변수에 값이 있으면 변수로 인식하고
    변수에 값이 없으면 변수로 인식하지 않는 개념입니다.
  6. let 변수 선언을 실행하면 그때 값이 설정되며,
    값을 할당하지 않고 변수를 선언만 하면
    엔진이 undefined를 할당합니다.
  7. 따라서, 변수 언언을 실행한 후에는
    변수가 값을 갖고 있으므로 변수를 인식할 수 있습니다.
  8. 엔진에서는 초기화자(Initializer)와
    Binding List 메커니즘을 사용합니다.
  */
  // debugger;
};