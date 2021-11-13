# Map과 WeakMap 차이

참조하는 object를 삭제하면 Map은 그대로 갖고 있지만 WeakMap은 GC 처리로 삭제됩니다.

```js
console.log("Map과 WeakMap 차이");
let mapObj = new Map();
(function () {
  const obj = { key: "value" };
  mapObj.set(obj, "Map");
})();

let weakObj = new WeakMap();
(function () {
  const obj = { key: "vlaue" };
  weakObj.set(obj, "WeakMap");
})();
```

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

```js
{
  ("use strict");
  debugger;

  let mapObj = new Map();
  (function () {
    const obj = { key: "value" };
    mapObj.set(obj, "Map");
  })();
  debugger;
  /*
  1. mapObj를 펼치면 entry가 있습니다.
  */

  let weakObj = new WeakMap();
  (function () {
    const obj = { key: "value" };
    weakObj.set(obj, "WeakMap");
  })();
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
}
```

### 정리

즉시 함수 처리로 확인했으며

참조하는 object를 삭제하면 Map은 그대로 갖고 있지만, WeakMap은 CG 처리로 즉시 삭제됩니다.

Map은 열거하거나 반복해서 처리할 수 있습니다.

WeakMap은 열거도 할 수 없고 전개도 할 수 없습니다.

오직 WeakMap의 key로 설정된 오브젝트를 설정하거나 읽거나 삭제만 할 수 있습니다.

이것은 GC 처리로 인해서 WeakMap에 등록된 [[Entry]]가 유동적으로 변하기 때문입니다.

Map은 한번 설정하면 똑같은 숫자가 나오지만 WeakMap은 사이사이에 지시가 발생하면 처음엔 10개 읽혀지다가 나중엔 9개가 읽혀질 수 있습니다.

이러한 불일치가 있을 수 있기 때문에 전개나 열거를 할 수가 없고, 오직 key로만 처리할 수 있는 메소드만 지원하는 것 입니다.

**object가 삭제되거나 변경될 가능성이 있다면 Map 오브젝트를 사용할 수 없고 WeakMap 오브젝트를 사용해야 합니다.**
