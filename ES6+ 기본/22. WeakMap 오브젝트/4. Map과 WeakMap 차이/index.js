/*
Map과 WeakMap 차이

참조하는 object를 삭제하면 Map은 그대로 갖고 있지만 WeakMap은 GC 처리로 삭제됨

Map과 WeakMap 차이
*/

// Map과 WeakMap 차이

console.log("Map과 WeakMap 차이");
let mapObj = new Map();
(function () {
  const obj = { key: "value" };
  mapObj.set(obj, "Map");
}());

let weakObj = new WeakMap();
(function () {
  const obj = { key: "vlaue" };
  weakObj.set(obj, "WeakMap");
}());
/*
1. let mapObj = new Map();
(function(){...}());
  - 즉시 실행 함수는 일회용으로 변수를 저장하지 않을 때 사용합니다.
  - 함수가 끝나면 obj 변수를 GC가 메모리에서 지웁니다.
  - Map은 obj 변수가 지워지더라도 Map에 설정된 obj를 지우지 않고 유지합니다.

2. const weakObj = new WeakMap();
(function(){...}());
  - 앞의 실행 환경과 같습니다.
  - 다만, Map이 아닌 WeakMap에 저장합니다.
  - WeakMap은 obj 변수가 삭제되면 WeakMap에 설정된 obj를 삭제합니다.
*/

// Map과 WeakMap 차이

{
  "use strict"
  debugger;

  let mapObj = new Map();
  (function () {
    const obj = { key: "value" };
    mapObj.set(obj, "Map");
  }());
  debugger;
  /*
  1. mapObj를 펼치면 entry가 있습니다.
  */

  let weakObj = new WeakMap();
  (function () {
    const obj = { key: "value" };
    weakObj.set(obj, "WeakMap");
  }());
  debugger;
  /*
  1. weakObj를 펼치면 entry가 있습니다.
  */

  setTimeout(function () {
    debugger;
    console.log(weakObj);
    console.log(mapObj);
    /*
    1. mapObj에는 entry가 있지만 weakObj에는 없습니다.

    2. GC가 obj를 지우면 WeakMap의 obj도 지우기 때문입니다.
    */
  }, 10000);
  debugger;
};