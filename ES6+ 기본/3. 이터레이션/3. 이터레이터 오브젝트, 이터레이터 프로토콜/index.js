/*
이터레이터 오브젝트

- 이터레이터(iterator) 프로토콜
  값을 순서대로 생성하는 방법(규약)

- 이터레이터 오브젝트 [코드1]
  Symbol.iterator()를 호출하면
  이터레이터 오브젝트를 생성하여 반환
  이터레이터 오브젝트에 next()가 있음
  생성한 오브젝트를 이터레이터라고도 부름

이터레이터 오브젝트 구조
*/
console.log("[코드1] 이터레이터 오브젝트");
const list = [10, 20];
const obj = list[Symbol.iterator]();
console.log(obj.next());  // {value: 10, done: false}
console.log(obj.next());  // {value: 20, done: false}
console.log(obj.next());  // {value: undefined, done: true}
/**
 * 1. 이터레이터 오브젝트의 next()를 호출하면
 *    이터레이터를 호출한다고도 합니다.
 * 2. {value: 10, done: false}를 반환합니다.
 *    value는 [10, 20]에서 첫 번째 값이고
 *    done: false는 이터레이터 상태입니다.
 * 3. 두 번째 next() 호출
 * 4. {value: 20, done: false}를 반환합니다.
 *    value는 [10, 20]에서 두 번째 값이고
 *    done: false는 이터레이터 상태입니다.
 * 5. 세 번째 next() 호출
 * 6. {value: undefined, done: true} 반환
 *    undefined는 처리할 값이 없다는 것을 뜻하며
 *    done: true는 이터레이터의 종료를 뜻합니다.
 */

/// 구조
{
  // "use strict";
  // debugger;

  const list = [1, 2];
  /*
  1. list.__proto__를 펼치면
    Symbol(Symbol.iterator)가 있으므로
    이터레이터 오브젝트를 만들 수 있습니다.
  */
  // debugger;

  const obj = list[Symbol.iterator]();
  /*
  1. 위 형태로 호출하면
    이터레이터 오브젝트를 생성하여 반환합니다.

  2. obj.__proto__를 펼치면 next()가 있습니다.
    next()가 있으므로 obj는 이터레이터 오브젝트입니다.
  */

  console.log(obj.next());
  // {value: 1, done: false}가 출력됩니다.

  console.log(obj.next());
  // {value: 2, done: false}가 출력됩니다.

  console.log(obj.next());
  // {value: undefined, done: true}가 출력됩니다.
  // debugger;
};