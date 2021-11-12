/*
콜백 함수, 삭제, 지우기

forEach()

| 구분     | 데이터(값)               |
| :------- | :----------------------- |
| 형태     | Map.prototype.forEach()  |
| 파라미터 | callback 함수            |
|          | this로 참조할 object opt |
| 반환     | undefined                |

- Map 인스턴스를 반복하면서 callback 함수 호출
  - map(), filter() 등의 callback 함수가 동반되는 메소드 사용 불가

- callback 함수에 넘겨주는 파라미터
  - value, key, Map 인스턴스
    key, value 순서가 아님 [코드1]
  - 콜백 함수에서 this 사용 [코드2]
*/
console.log("[코드1] forEach()");
const obj = new Map([
  ["one", 100],
  ["two", 200]
]);
const callback = (value, key, map) => {
  console.log(`${key}, ${value}`);
};
obj.forEach(callback);  // one, 100 two, 200

console.log("[코드2] 콜백 함수에서 this 사용");
const obj2 = new Map([
  ['one', 100],
  ['two', 200]
]);
function callback2(value, key, map) {
  console.log(`${key}, ${value}, ${this.check}`);
};
obj2.forEach(callback2, { check: 50 }); // one, 100, 50 two, 200, 50
/**
 * 1. 콜백 함수를 일반 함수로 작성했습니다.
 * 2. 콜백 함수를 화살표 함수로 작성하면 this로 window 오브젝트를 참조합니다.
 * 3. 콜백 함수에서 this가 forEach()의 두 번째 파라미터에 작성한 오브젝트를 참조합나다.
 */

/*
delete()

| 구분     | 데이터(값)                   |
| :------- | :--------------------------- |
| 형태     | Map.prototype.delete()       |
| 파라미터 | key 값                       |
| 반환     | 삭제 성공: true, 실패: false |

Map 인스턴스에서 파라미터 값과 같은 entry 삭제

  - 같은 key가 있으면 true 반환, 없으면 false 반환 [코드3]
*/

console.log("[코드3] delete()");
const obj3 = new Map([
  ["one", 100],
  [{}, "오브젝트"]
]);
console.log(obj3.delete("one"));  // true
console.log(obj3.delete({})); // false

const sports3 = {};
obj3.set(sports3, "스포츠");
console.log(obj3.delete(sports3));  // true


/*
clear()

| 구분     | 데이터(값)            |
| :------- | :-------------------- |
| 형태     | Map.prototype.clear() |
| 파라미터 | 파라미터 없음         |
| 반환     | 없음                  |

Map 인스턴스의 모든 entry를 지움
  - Map 인스턴스를 삭제하는 것은 아님
  - 따라서 [key, value]를 추가할 수 있음  [코드4]

size 프로퍼티
  - Map 인스턴스의 entry 수를 반환
  - 개발자 코드로 수정할 수 없음
*/

console.log("[코드4] clear()");
const obj4 = new Map([
  ["one", 100],
  ["two", 200]
]);
console.log(obj4.size); // 2

obj4.clear();
console.log(obj4.size); // 0
obj4.set("add", "추가");
console.log(obj4.size); // 1

