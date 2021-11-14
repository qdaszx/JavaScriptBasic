/*
콜백 함수, 삭제, 지우기

| 구분     | 데이터(값)               |
| :------- | :----------------------- |
| 형태     | Set.prototype.forEach()  |
| 파라미터 | callback 함수            |
|          | this로 참조할 object opt |
| 반환     | undefined

Set 인스턴스를 반복하면서 callback 함수 호출
  - map(), filter() 등의 callback 함수가 동반되는 메소드 사용 불가

callback 함수가 넘겨주는 파라미터
  - value, key(value), Set 인스턴스 [코드1]
  - 콜백 함수에서 this 사용 [코드2]
*/
console.log("[코드1] forEach()");
const obj = new Set([
  "one", () => { }
]);
function callback(value, key, set) {
  console.log(value); // one () => {}
};
obj.forEach(callback);

console.log("[코드2] 일반 함수로 콜백 함수 작성");
const obj2 = new Set([
  "one", "two"
]);
function callback2(value, key, set) {
  console.log(`${value}, ${this.check}`); // one, ABC two, ABC
};
obj2.forEach(callback2, { check: "ABC" });
/**
 * 1. 콜백 함수에서 this가 forEach()의 두 번째 파라미터에 작성한 오브젝트를 참조하게 하려면 일반 함수로 작성해야 합니다.
 */

/*
delete()

| 구분     | 데이터(값)                   |
| :------- | :--------------------------- |
| 형태     | Set.prototype.delete()       |
| 파라미터 | key 값                       |
| 반환     | 삭제 성공: true, 실패: false |

Set 인스턴스에서 파라미터 값과 같은 엘리먼트 삭제

같은 value가 있어 삭제에 성공하면 true 반환
  - 삭제에 실패하면 false 반환 [코드3]
*/

console.log("[코드3] delete()");
const obj3 = new Set([
  "one", "two"
]);
console.log(obj3.delete("one"));  // true
console.log(obj3.delete("one"));  // false

/*
clear()

| 구분     | 데이터(값)            |
| :------- | :-------------------- |
| 형태     | Set.prototype.clear() |
| 파라미터 | 파라미터 없음         |
| 반환     | 없음                  |

Set 인스턴스의 모든 엘리먼트를 지움
  - Set 인스턴스를 삭제하는 것은 아님
  - 따라서 value를 추가할 수 있음 [코드4]
*/

console.log("[코드4] clear()");
const obj4 = new Set([
  "one", "two"
]);
console.log(obj4.size); // 2

obj4.clear();
console.log(obj4.size); // 0
obj4.add("one");
console.log(obj4.size); // 1