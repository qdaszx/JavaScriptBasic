// handler, trap

/*
target

target은
  - Proxy 대상 오브젝트입니다.
  - Array, Object 등을 사용할 수 있습니다.

const obj = new Proxy(target, {}) 형태에서
  - 첫 번째 파라미터에 target을 작성합니다.
  - 이렇게 Proxy 인스턴스를 생성하므로
  - Proxy 인스턴스의 target이 연결됩니다.
*/

/*
trap, handler

trap
  - OS(Operating System)에서 사용하는 용어로
  - 실행 중인 프로그램에 이상이 발생했을 때, 실행을 중단하고 사전에 정의된 제어로 전환

가운데 사람이 밥을 받아
  - 자신 앞에 있는 수저를 같이 건네 준다면 Proxy에 수저를 건네주는 코드가 필요합니다.
  - 이것이 Proxy를 사용하는 목적입니다. [코드1]

const handler = {...}
  - 오브젝트에 get(), set()이 있습니다.
  - handler를 핸들러 오브젝트라고 하며 약칭으로 핸들러라고 부릅니다.
*/
console.log("[코드1] Trap");
const target = { food: "밥" };
const handler = {
  get(target, key) {
    return target[key] + ", 수저";
  },
  set(target, key) { }
};
const middle = new Proxy(target, handler);
const left = middle.food;
console.log(left);  // 밥, 수저
/**
 * 1. trap과 handler를 대략적으로 살펴봅니다. 자세한 것은 계속해서 다룹니다.
 * 2. get()이 getter이고 set()이 setter입니다.
 * 3. get()과 set()을 trap이라고 합니다.
 * 4. const left = middle.food;
 *    middle.food를 실행하면 [[Get]] 대신에 get() 트랩을 실행합니다.
 * 5. target[key은 target의 [[Get]]이 실행됩니다.
 *    target[key] 값이 "밥"이므로 콘솔에 "밥, 수저"를 반환합니다.
 */