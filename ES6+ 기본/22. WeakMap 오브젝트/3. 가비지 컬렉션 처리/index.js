/*
가비지 컬렉션 처리

참조하는 object가 바뀌면 참조했던 오브젝트가 가비지 컬렉션 처리됨

가비지 컬렉션 처리

*/

// 가비지 컬렉션 처리

console.log("참조 오브젝트 변경");
let obj = new WeakMap();
let sports = () => { point: 1 };
obj.set(sports, "변경전");

sports = () => { point: 2 };
obj.set(sports, "변경후");
/*
1. let sports = () => {point: 1};
obj.set(sports, "변경전");
  - sports에 Function 오브젝트를 할당하고 이것을 WeakMap 인스턴스에 key로 설정

2. sports = () => {point: 2};
  - 새로운 함수를 생성하여 할당합니다.
  - 바로 위의 sports가 참조하는 메모리 주소가 바뀝니다.
  - sports가 참조하는 메모리 주소가 바뀌면 앞의 sports가 참조했던 오브젝트를 호출할 수 없게 됩니다.
  - 이렇게 사용할 수 없게 된 {point: 1} 오브젝트는 GC 대상이 됩니다.
  - 엔진이 주기적으로 GC 처리를 합니다.

3. obj.set(sports, "변경 후");
  - sports를 key로 하여 WeakMap에 설정합니다.
  - 앞에서 sports를 key로 하여 설정했으며 여기서 sports를 key로 하여 설정하므로 값이 대체 되어야 하지만
  - 두 개의 sports가 참조하는 주소가 다르므로 sports가 추가됩니다.
*/

// WeakMap 인스턴스의 GC 상태

{
  "use strict"
  debugger;

  let obj = new WeakMap();
  let sports = () => { point: 1 };
  obj.set(sports, "변경전");
  debugger;
  /*
  1. 아래에서 sports 변수를 {point: 2}를 할당하므로 sports가 참조하는 오브젝트가 바뀝니다.
  */

  sports = () => { point: 2 };
  obj.set(sports, "변경후");
  debugger;
  /*
  1. obj의 [[Entries]]를 펼치면 0과 1이 있습니다.
  변숫값은 바뀌어 하나이지만 WeakMap 인스턴스에는 두 개가 있습니다.

  2. {point: 1}과 {point: 2}의 메모리 주소가 다르며 sports는 사람이 보는 것으로 WeakMap은 값인 메모리 주소가 다르므로 각각 저장합니다.

  3. 그래서 sports로 저장하지 않고 인덱스를 부여하여 저장하는 것입니다.
  엔진은 인덱스가 key이며 sports는 프로퍼티 value에서 프로퍼티 키입니다.
  */

  setTimeout(function () {
    debugger;
    console.log(obj.get(sports));
  }, 10000);
  debugger;
  /*
  1. {point: 1}의 sports를 사용할 수 없으므로 GC가 {point: 1}의 sports를 메모리에서 지웁니다.
  또한 obj의 "변경전"도 삭제합니다.

  2. 인덱스 1번이 0번이 됩니다.

  3. Map 오브젝트에서 entry를 삭제해도 인덱스를 정리합니다.
  */
}