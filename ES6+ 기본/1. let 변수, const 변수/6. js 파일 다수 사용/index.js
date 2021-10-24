/**
 * js 파일 다수 사용
 *
 *  다수의 js 파일 사용
 *
 * - 모든 js 파일에서
 *    - 글로벌 오브젝트에 작성한
 *      var 변수와 let 변수를 공유
 * - 블록 안에 작성하면 공유하지 않습니다.
 */

// "use strict"

/**
 * 1. 현재 위치는 글로벌 오브젝트입니다.
 *
 * 2. html 파일에 2개의 js 파일을 작성했습니다.
 *    <script src="./first.js" defer></script>
 *    <script src="./second.js" defer></script>
 *
 * 3. 현재 first.js를 실행하고 있습니다.
 */

// debugger;

var globalVar = "var 변수";
// 글로벌(window) 오브젝트에 설정됩니다.

let globalLet = "let 변수";
/**
 * 1. 글로벌(window) 오브젝트에 설정되지 않고
 *    오른쪽의 Script에 설정됩니다.
 *
 * 2. Script는 스펙에 정의된 이름입니다.
 */

{
  let globalBlock = "block의 let 변수";
  // 오른쪽의 Script에 설정되지 않고
  // 오른쪽의 Block에 설정됩니다.
  // debugger;
}

// debugger;
// first 파일에 이어서 실행된 것입니다.

console.log(globalVar);
/**
 * 1. var globalVar = "var 변수";
 *
 * 2. 글로벌 오브젝트에서
 *    var 키워드를 사용해서 선언한 변수는
 *    window 오브젝트에 설정되며
 *    모든 js 파일에서 변수를 공유합니다.
 *
 * 3. console에 "var 변수"가 출력됩니다.
 */
// debugger;

console.log(globalLet);
/**
 * 1. let globalLet = "let 변수";
 *
 * 2. 글로벌 오브젝트에서
 *    let 키워드를 사용해서 선언한 변수는
 *    오른쪽의 Script에 설정되며
 *    모든 js 파일에서 변수를 공유합니다.
 *
 * 3. 따라서 console에 "let 변수"가 출력됩니다.
 */
// debugger;

try {
  console.log(globalBlock);
} catch (e) {
  console.log("globalBlock은 공유되지 않습니다.");
};
/**
{
  let globalBlock = "block의 let 변수";
};
1. 글로벌 오브젝트에 작성했지만 블록 안에 작성한 변수입니다.

2. 이렇게 블록 안에 작성한 변수는 공유되지 않아 에러가 발생합니다.
 */

//-------------------
function showLocal() {
  // 함수가 스코프이며 var, let 변수 모두
  // 오른쪽 Local에 표시됩니다.
  var localVar = "var";
  let localLet = "let";
  {
    // 오른쪽 Block에 표시됩니다.
    let blockLet = "block";
    // debugger;
  };
};
showLocal();

/**
 * 다수의 js 파일 사용 정리
 *
 * - 글로벌 오브젝트에 작성 [코드1]
 *    - var 변수: window에 설정, 공유
 *    - let 변수: Script에 설정, 공유
 *        - window.sports = {}처럼
 *          의도적으로 작성하지 않아도 됨
 *    - { let 변수 }: Block에 설정, 공유하지 않음
 *        - 글로벌 오브젝트에서만 사용하는 로컬 변수로 사용
 *
 * - 함수에 작성 [코드2]
 *    - var 변수, let 변수: Local
 *    - { let 변수 }: Block;
 */
console.log("[코드1] 글로벌 오브젝트에 작성");
var globalVar2 = "var 변수";
let globalLet2 = "let 변수";
{
  let globalBlock2 = "block 변수";
};

console.log("[코드2] 함수에 작성");
function showLocal2() {
  var localVar = "var 변수";
  let localLet = "let 변수";
  {
    let blockLet = "block 변수";
  };
};