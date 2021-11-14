/*
WeakSet 오브젝트

Set 오브젝트와 차이
  - 오브젝트만 value 값으로 사용할 수 있음
  - number 등의 프리미티브 타입 사용 불가

개념은 WeakMap과 같음
  - value만 작성하는 것이 다름
  - value의 참조가 바뀌면 GC 대상

지원 메소드
  - has(), add(), delete()
*/

/*
new WeakSet()

| 구분     | 데이터(값)              |
| :------- | :---------------------- |
| 형태     | new WeakSet()           |
| 파라미터 | 오브젝트opt             |
| 반환     | 생성한 WeakSet 인스턴스 |

WeakSet 인스턴스 생성, 반환

파라미터
  - 대괄호[] 안에 오브젝트 작성 [코드1]
*/
console.log("[코드1] WeakSet() 인스턴스 생성");
const empty = new WeakSet();

const sports = {};
const obj = new WeakSet([
  sports
]);
/**
 * 1. 파라미터를 작성하지 않아도 됩니다.
 * 2. new 연산자를 사용합니다.
 */

/*
has()

| 구분     | 데이터(값)                  |
| :------- | :-------------------------- |
| 형태     | WeakSet.prototype.has()     |
| 파라미터 | 오브젝트                    |
| 반환     | 존재하면 true, 아니면 false |

WeakSet 인스턴스에서 value의 존재 여부 반환
  - 존재하면 true, 아니면 false 반환 [코드2]
*/
console.log("[코드2] has()");
const fn = () => { };
const obj2 = new WeakSet([
  fn
]);
console.log(obj2.has(fn));  // true

/*
add()

| 구분     | 데이터(값)              |
| :------- | :---------------------- |
| 형태     | WeakSet.prototype.add() |
| 파라미터 | value, 오브젝트         |
| 반환     | value가 설정된 인스턴스 |

WeakSet 인스턴스에 value 설정
  - 파라미터에 value로 설정될 오브젝트 작성 [코드3]
*/
console.log("[코드3] add()");
const obj3 = new WeakSet();
const fn3 = () => { };
obj3.add(fn3);
console.log(obj3.has(fn3)); // true

/*
delete()

| 구분     | 데이터(값)                 |
| :------- | :------------------------- |
| 형태     | WeakSet.prototype.delete() |
| 파라미터 | key, 오브젝트              |
| 반환     | 삭제 성공 true, 실패 false |

WeakSet 인스턴스에서
  - value와 일치하는 엘리먼트 삭제 [코드4]
  - 삭제 성공이면 true 반환
  - 삭제를 실패하면 false 반환
*/
console.log("[코드4] delete()");
const fn4 = () => { };
const obj4 = new WeakSet([
  fn4
]);
console.log(obj4.delete(fn4));  // true
console.log(obj4.has(fn4)); // false