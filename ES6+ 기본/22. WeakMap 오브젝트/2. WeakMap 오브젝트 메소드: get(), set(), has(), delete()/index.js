/*
WeakMap 오브젝트 메소드

get()

| 구분     | 데이터(값)              |
| :------- | :---------------------- |
| 형태     | WeakMap.prototype.get() |
| 파라미터 | key, 오브젝트           |
| 반환     | 엘리먼트 value          |


WeakMap 인스턴스에서
  - key 값이 같은 value 반환
  - 존재하지 않으면 undefined 반환 [코드1]
*/
console.log("[코드1] get()");
const fn = () => { };
const obj = new WeakMap([
  [fn, "함수"]
]);
console.log(obj.get(fn)); // 함수

/*
set()

| 구분     | 데이터(값)                   |
| :------- | :--------------------------- |
| 형태     | WeakMap.prototype.set()      |
| 파라미터 | key, 오브젝트                |
|          | value, 임의의 값             |
| 반환     | key, value가 설정된 인스턴스 |

WeakMap 인스턴스에 key, value 설정 [코드2]

첫 번째 파라미터에 key로 사용할 오브젝트 작성
  - string과 같은 프리미티브 값 사용 불가

두 번째 파라미터는 값
  - 첫 번째 파라미터의 오브젝트에 대한 값?
  - 오브젝트 구분 등의 용도
    오브젝트에 따라 연동하는 함수 등록
*/
console.log("[코드2] set()");
const fn2 = function () { };
const obj2 = new WeakMap([
  [fn2, "함수"]
]);
console.log(obj2.get(fn2)); // 함수

obj2.set(fn2, "함수 변경");
console.log(obj2.get(fn2)); // 함수 변경
/**
 * 1. obj.set(fn, "함수 변경");
 * 2. fn의 메모리 주소가 key로 등록되어 있으며 같은 메모리 주소로 값을 설정하므로
 * 3. [fn, "함수"]에서 "함수"가 "함수 변경" 으로 변경됩니다.
 */

/*
has()

| 구분     | 데이터(값)                  |
| :------- | :-------------------------- |
| 형태     | WeakMap.prototype.has()     |
| 파라미터 | key, 오브젝트               |
| 반환     | 존재하면 true, 아니면 false |

WeakMap 인스턴스에서
  - key의 존재 여부 반환
  - 존재하면 true, 아니면 false 반환 [코드3]
*/

console.log("[코드3] has()");
const obj3 = {};
const weakObj = new WeakMap([
  [obj3, "오브젝트"]
]);
console.log(weakObj.has(obj3)); // true

/*
delete()

| 구분     | 데이터(값)                 |
| :------- | :------------------------- |
| 형태     | WeakMap.prototype.delete() |
| 파라미터 | key, 오브젝트              |
| 반환     | 삭제 성공 true, 실패 false |

WeakMap 인스턴스에서
  - key와 일치하는 entry 삭제 [코드4]
  - 삭제를 성공하면 true 반환
  - 삭제를 실패하면 false 반환
*/

console.log("[코드4] delete()");
const fn4 = function () { };
const obj4 = new WeakMap([
  [fn4, "함수"]
]);
console.log(obj4.delete(fn4));  // true
console.log(obj4.has(fn4)); // false