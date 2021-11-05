/*
Array 이터레이터 오브젝트 생성

구분 ::: 데이터(값)
형태 ::: Array.prototype.entries()
반환 ::: Array 이터레이터 오브젝트

- Array 오브젝트를 Array 이터레이터 오브젝트로 생성, 반환

- 배열의 엘리먼트를 [key, value] 형태로 변환 [코드1]
    - Array 이터레이터 오브젝트 구조

- for-of 문으로 전개 [코드2] [코드3]

- 이터레이터는 다시 반복할 수 없습니다. [코드4]
*/

console.log("[코드1] Array 이터레이터 오브젝트 생성");
const iterator = ["A", "B"].entries();
console.log(iterator.next().value); // [0, 'A']
console.log(iterator.next().value); // [1, 'B']
/**
 * 1. ["A", "B"].entries(): Array 이터레이터 오브젝트를 생성합니다.
 * 2. Array 이터레이터 오브젝트는 [key, value] 형태입니다.
 * 3. 배열의 인덱스가 key가 되고 엘리먼트 값이 value가 됩니다.
 */

// Array 이터레이터 오브젝트 구조
{
  'uss strict'
  debugger;

  const list = ["A", "B"];
  const iterator = list.entries();
  /*
  1. 오른쪽의 iterator를 펼치면 __proto__가 있습니다.

  2. 이를 펼치면 next()가 있습니다.

  3. 따라서 이터레이터 오브젝트이며 next()를 호출할 수 있습니다.
  */

  const result = iterator.next();
  /*
  1. 오른쪽의 result를 펼치면 value가 있으며, done: false가 있습니다.

  2. value의 타입은 Array이며 이를 펼치면 0: 0, 1: "A", length: 2

  3. result.value는 Array 오브젝트 형태입니다. list에 Array 오브젝트를 할당했으며 result.value와 list가 같습니다.
  다만, done: false가 있는 것이 Array 오브젝트와 다릅니다.
  4. 이 형태가 Array 이터레이터 오브젝트 구조입니다.
  */
  console.log(result);
  debugger;

  console.log(iterator.next().value);
  /*
  1. value 프로퍼티로 값을 구해야 done: false를 제외하고 값을 구할 수 있습니다.
  */
  debugger;
};

console.log("[코드2] Array 이터레이터 오브젝트 전개");
const iterator2 = ["A", "B"].entries();
for (const property of iterator2) {
  console.log(property);  // [0, "A"] [1, "B"]
};
/**
 * 1. 전개만 할 때에는 nex()가 불편합니다.
 * 이유는, 끝난 것을 체크해야 하기 때문입니다.
 * 2. 연속해서 전개만 할 때는 for-of가 편리합니다.
 * 3. of 앞의 property 변수에 [0, A] 형태로 설정되므로 값을 사용하려면 코드를 추가해야 하며 이때 분할 할당을 사용하면 편리합니다.
 */

console.log("[코드3] 분할 할당");
const iterator3 = ["A", "B"].entries();
for (const [key, value] of iterator3) {
  console.log(`${key}: ${value}`);  // 0: A 1: B
};
/**
 * 1. 분할 할당으로 key, value를 분해할 수 있습니다.
 */

console.log("[코드4] 다시 반복 불가");
const iterator4 = ["A", "B"].entries();
for (const [key, value] of iterator4) {
  console.log(`${key}: ${value}`);  // 0: A 1: B
};
for (const property of iterator4) {
  console.log("다시 전개");
};
console.log(iterator4.next());  // {value: undefined, done: true}
/**
 * 1. 끝까지 읽은 이터레이터 오브젝트를 다시 읽을 수 없습니다.
 * 2. for (const property of iterator){}에서 "다시 전개"가 출력되지 않은 것은 다시 읽을 수 없기 때문입니다.
 * 3. iterator.next() 이터레이터 오브젝트를 전부 읽으면 {value: undefined, done: true}를 반환합니다.
 */