/*
next()

구분 ::: 데이터(값)
형태 ::: generatorObject.next()
파라미터 ::: 제너레이터로 넘겨 줄 파라미터 값opt
반환 ::: {value: 값, done: ture/false}

- next()는 yield 단위로 실행
  - yield 수만큼 next()를 작성해야 yield 전체를 실행

- next()를 호출하면 이전 yield의 다음부터 yield까지 실행 [코드1]

- yield를 작성하지 않았을 때 [코드2]

- 제너레이터 함수에 return 문을 작성했을 때 [코드3]
*/

console.log("[코드1] 이전부터 다음까지");
function* sports(value) {
  value += 20;
  const param = yield ++value;
  value = param + value;
  yield ++value;
};
const obj = sports(10);
console.log(obj.next());  // {value: 31, done: false}
console.log(obj.next(20));  // {value: 52, done: false}
/**
1. 첫 번째의 obj.next()를 호출하면 value += 20을 실행하고 yield ++value;를 실행합니다.
2. {value: 31, done: false}를 반환합니다.
3. 왼쪽의 param에 값을 할당하지 않습니다.
4. 두 번째의 obj.next(20)을 호출하면 첫 번째 yield의 다음부터 다음의 yield까지 실행합니다.
5. 여기서 yield의 다음이란 파라미터 값 20을 param에 설정하는 것을 뜻합니다.
6. 20 + 31은 51이 되며
7. yield ++value; 에서 1을 더해 52를 반환합니다.
 */

console.log("[코드2] yield를 작성하지 않음");
function* sports2(value) {
  ++value;
  console.log(value); // 11
};
const obj2 = sports2(10);
console.log(obj2.next())  // {value: undefined, done: true}
/**
 * 1. 첫 번째 obj.next()를 호출하면 제너레이터 함수를 실행하여 value 값이 증가하지만
 * 2. yield가 없으므로 값이 반환되지 않습니다.
 */

console.log("[코드3] return 문 작성");
function* sports3(value) {
  return ++value;
};
const obj3 = sports3(10);
console.log(obj3.next()); // {value: 11, done: true}
console.log(obj3.next()); // {value: undefined, done: true}
/**
 * 1. 첫 번째 obj.next()를 호출하면
 * 2. return ++value에서 11을 반환합니다.
 * 3. return으로 값을 반환하지만 {done: true}입니다.
 */

/*
next()

- 함수는 호출할 때마다 변수에 초깃값을 설정

- 제너레이터 함수는 제너레이터 오브젝트를 생성할 때 초깃값을 설정
  - next()로 실행할 때마다 초깃값을 설정하지 않음
  - 변숫값을 그대로 유지
*/

// 변숫값을 그대로 유지
{
  "use strict"
  debugger;

  const sports = function* (param) {
    const one = param + 10;
    yield one;
    var two = 2;
    yield one + two;
  };
  const obj = sports(10);
  /**
   * 1. 제너레이터 함수에 2개의 yield가 있습니다. 또한 const one과 var two가 있습니다.
   *
   * 2. obj의 [[Scope]]를 펼치면 0: Local
   *    one: undefined, param: 10, two: undefined
   *
   * 3. param에 10이 있다는 것은
   *    sprots 함수 안으로 들어간 것입니다.
   *    sprots 함수가 호출되어
   *    실행 콘텍스트의 초기화 단계에서 초깃값을 설정한 것 입니다.
   *    단지, 함수 안의 코드를 실행하지 않은 것 입니다.
   */
  debugger;

  console.log(obj.next());
  /*
  const sports = function* (param) {
    const one = param + 10;
    yield one;
  };

  1. obj.next()를 호출하면 sports 제너레이터 함수 안으로 이동합니다.

  2. const one = param + 10 에서 멈추게 하면
    one: undefined, param: 10, two: undefined입니다.
    이 값은 제너레이터 오브젝트를 만들때 설정한 값입니다.

  3. const one = param + 10
    one 변수의 값이 20으로 변경됩니다.

  4. yield one 에서 {value: 20, done: false}를 반환합니다.
  */
  debugger;

  console.log(obj.next());
  /*
  const sports = function* (param) {
    var two = 2;
    yield one + two;
  };

  1. obj.next()를 호출하면 sports 제네레이터 함수 안으로 이동합니다.

  2. var two = 2;에서 멈추게 하면 one: 20, two: undefined입니다.
    one 변숫값 20은 이전 처리에서 설정한 값입니다.
  */
  debugger;

  /*
  3. 함수를 빠져 나온 후 다시 obj.next()를 호출하면 함수 안으로 이동하게 되며 함수 안의 변수에 초깃값을 설정하는데 앞의 obj.next()로 one 변수에 할당한 값이 그대로 남아 있습니다.

  4. 이것이 제너레이터 함수의 특징입니다.
    제네레이터 오브젝트를 생성할 때 초깃값을 설정하고 next()를 호출할 때마다 초깃값을 설정하지 않습니다.
  */
  debugger;
}