// set() 트랩-2

/*
set()의 4번째 파라미터

set() 트랩의 4번째 파라미터에 Proxy 인스턴스가 설정됩니다. [코드1]

const obj = Object.create(proxy, {프로퍼티})
  - 4번째 파라미터에 Object.create()로 생성한 인스턴스가 설정됩니다.
  - 전체 코드입니다.

Object.create()와 인스턴스 구조
*/
console.log("[코드1] Proxy 인스턴스 설정");
const target = { point: 100 };
const handler = {
  set(target, key, value, receiver) {
    console.log(Object.is(target, receiver));
    console.log(receiver.point);
  }
};
const obj = new Proxy(target, handler);
obj.point = 500;  // false 100
/**
 * 1. obj.point = 500;
 *    set() 트랩이 호출됩니다.
 * 2. 트랩: set(target, key, value, receiver) {...}
 *    set() 트랩의 receiver 파라미터에 obj.point = 500의 obj가 설정됩니다.
 *    즉, Proxy 인스턴스가 설정됩니다.
 * 3. 트랩: console.log(Object.is(target, receiver));
 *    target과 receiver가 같지 않으므로 false가 출력됩니다.
 * 4. 트랩: console.log(receiver.point)
 *    receiver(Proxy 인스턴스)에 get() 트랩이 없으므로 target의 [[Get]]을 호출하며, 100을 반환합니다.
 * 5. 500이 반환되지 않는 이유는 아시지요?
 *    기본 오퍼레이션
 */

// Object.create()와 인스턴스 구조
{
  "use strict"
  debugger;

  const target = { point: 500 };
  const handler = {
    set(target, key, value, receiver) {
      target[key] = value + 200;
      target.title = receiver.title + ", JS";
      return true
    }
  };
  const proxy = new Proxy(target, handler);
  /*
  1.Proxy 인스턴스를 생성하여 proxy 변수에 할당합니다.

  2. proxy에 [[Handler]]가 있으며, 그 안에 set() 트랩이 있습니다.
    [[Target]]이 있으며, 그 안에 {point: 500}이 있습니다.
  */
  debugger;

  const obj = Object.create(proxy, {
    title: { value: "책" }
  });
  /*
  1. create() 함수는 두 번째 파라미터로 인스턴스를 생성하고 {title: "책"}을 인스턴스 프로퍼티로 설정합니다.

  2. 생성한 인스턴스의 __proto__에 첫 번째 파라미터를 첨부합니다.
    [[Handler]]의 set() 트랩과 [[Target]]의 {point: 500}을 사용할 수 있게 됩니다.
  */
  debugger;

  obj.point = 100;
  /*
  1. obj.__proto__에 연결된 [[Handler]]의 set() 트랩이 호출됩니다.
  */
  debugger;

  /*
  set(target, key, value, receiver) {...}
  1. receiver 파라미터에 obj가 설정됩니다.
    receiver에서 title: {value: "책"} 을 참조할 수 있으며 [[Handler]]와 [[Target]]을 참조할 수 있습니다.

  2. 이처럼 set() 트랩에서 Proxy 이외의 다른 오브젝트를 참조할 수 있습니다.
  */
  debugger;

  /*
  target[key] = value + 200;
  1. value 값 100에 200을 더해 target의 key("point")에 할당합니다.
    target 오브젝트의 point 프로퍼티 값이 300으로 바뀝니다.
  */
  debugger;

  /*
  target.title = receiver.title + ", JS";
  1. receiver(obj 인스턴스)에 title 프로퍼티가 있으며 값은 "책"입니다.

  2. target 오브젝트의 title 프로퍼티에 연결한 문자열을 설정합니다.
    이때, target이 아닌 receiver에 값을 설정하면 receiver가 읽기 전용이므로 에러가 발생합니다.
  */
  debugger;

  /*
  return true;
  1. return true; 는 호출한 곳으로 true를 반환하는 것이 아니라 엔진에게 성공적으로 처리된 것을 알려주는 것입니다.
  */
  debugger;

  console.log(obj.title);
  /*
  1. obj를 펼치면 인스턴스 프로퍼티로 {title: "책"}이 있으며 [[Target]]에 {title: "책, JS"}가 있습니다.

  2. 인스턴스 구조의 위에서부터 검색하므로 인스턴스 프로퍼티 값인 "책"이 반환됩니다.
  */
  debugger;

  console.log(target.title);
  /*
  1. Proxy가 아닌 target 오브젝트의 [[Get]]을 호출합니다. 따라서 "책, JS'가 출력됩니다.
  */
  debugger;
}

/*
set()과 this

set() 트랩에서 this는 handler 오브젝트를 참조합니다. [코드3]
*/
console.log("[코드2] this가 핸들러 참조");
const target3 = { point: 100 };
const handler3 = {
  point: 123,
  set(target, key, value, receiver) {
    console.log(this.point);  // 123
    this.book = "책";
  }
};
const obj3 = new Proxy(target3, handler3);
obj3.point = 500;
console.log(handler3.book); // 책
console.log(target3.book);  // undefined
/**
 * 1. console.log(this.point);
 *    this가 handler 오브젝트를 참조하므로 handler의 {point: 123}에서 123을 반환합니다.
 * 2. this.book = "책";
 *    this가 handler 오브젝트를 참조하므로 handler에 {book: "책"}이 설정됩니다.
 */
