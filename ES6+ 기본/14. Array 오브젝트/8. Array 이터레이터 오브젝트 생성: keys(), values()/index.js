/*
Array 이터레이터 오브젝트 생성 (key, value)

구분 ::: 데이터(값)
형태 ::: Array.prototype.keys()
반환 ::: Array 이터레이터 오브젝트

- Array 오브젝트를 Array 이터레이터 오브젝트로 생성, 반환

  - entries()와 같으며
  - [key, value] 형태에서 value는 반환하지 않고 key만 반환

- 배열 인덱스가 key가 됩니다. [코드1] [코드2]
*/
console.log("[코드1] next() 사용");
const iterator = ["A", "B"].keys();
console.log(iterator.next()); // {value: 0, done: false}
console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next()); // {value: undefined, done: true}
/**
 * 1. 생성한 Array 이터레이터 오브젝트는 [key] 형태입니다.
 * 2. value에 인덱스가 설정됩니다.
 */

console.log("[코드2] for-of로 전개");
const iterator2 = ["A", "B"].keys();
for (const property of iterator2) {
  console.log(property);  // 0 1
};
/**
 * 1. key만 설정되므로 값이 하나입니다. 따라서 분할 할당을 하지 않아도 됩니다.
 */

/*
values()

구분 ::: 데이터(값)
형태 ::: Array.prototype.values()
반환 ::: Array 이터레이터 오브젝트

- Array 오브젝트를 Array 이터레이터 오브젝트로 생성, 반환

- [key, value] 형태에서 key는 반환하지 않고 value만 반환

- 배열의 엘리먼트 값이 value가 됩니다. [코드3] [코드4]

- [Symbol.iterator]() 사용 [코드5]

- 값이 연동됩니다. [코드6]
*/

console.log("[코드3] next() 사용");
const iterator3 = ["A", "B"].values();
console.log(iterator3.next());  // {value: 'A', done: false}
console.log(iterator3.next());  // {value: 'B', done: false}
console.log(iterator3.next());  // {value: undefined, done: true}
/**
 * 1. 생성한 Array 이터레이터 오브젝트는 [value] 형태입니다.
 */

console.log("[코드4] for-of로 전개");
const iterator4 = ["A", "B"].values();
for (const property of iterator4) {
  console.log(property);  // A B
};
/**
 * 1. value만 설정되므로 값이 하나입니다.
 */

console.log("[코드5] Symbol.iterator() 사용");
const check = Array.prototype.values === Array.prototype[Symbol.iterator];
console.log(check); // true

const iterator5 = ["A", "B"][Symbol.iterator]();
for (const property of iterator5) {
  console.log(property);  // A B
};
/**
 * 1. Array.prototype.values()와 Array.prototype[Symbol.iterator]가 같습니다.
 * 2. 따라서 values() 대신에 [Symbol.iterator]()를 사용해도 결과가 같습니다.
 */

console.log("[코드6] 값 연동");
let list6 = ["A", "B"];
let iterator6 = list6.values();
list6[0] = "연동";
console.log(iterator6.next());  // {value: '연동', done: false}
console.log(iterator6.next());  // {value: 'B', done: false}
/**
 * 1. Array 이터레이터 오브젝트에서 배열의 메모리 주소를 참조하므로 값이 연동됩니다.
 */
