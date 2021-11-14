/*
값 추가, 존재 여부 체크 메소드

add()


| 구분     | 데이터(값)              |
| :------- | :---------------------- |
| 형태     | Set.prototype.add()     |
| 파라미터 | value                   |
| 반환     | value가 설정된 인스턴스 |

Set 인스턴스 끝에 value 추가 [코드1]

사용 형태
  - 함수를 생성하여 value로 사용 [코드2]
  - value에 생성한 함수 이름 작성 [코드3]
  - Object를 value로 사용 [코드4]
*/
console.log("[코드1] add()");
let obj = new Set();
obj.add("축구").add("농구");
obj.add("축구");
for (let value of obj) {
  console.log(value); // 축구 농구
};
/**
 * 1. obj.add("축구").add("농구");
 * 2. add()를 실행한 후 인스턴스를 반환하므로 method chain 형태로 add()를 작성할 수 있습니다.
 * 3. 세 번째의 add()에서 "축구"가 있으므로 첨부되지 않습니다.
*/

console.log("[코드2] 함수를 생성하여 value로 사용");
let obj2 = new Set();
obj2.add(function sports() { return 100; });
obj2.add(function sports() { return 200; });
for (let value of obj2) {
  console.log(value()); // 100, 200
};
/**
 * 1. 같은 이름의 function을 작성한 형태
 * 2. Function 오브젝트의 메모리 주소가 다르므로 이름이 같더라도 설정됩니다.
 * 3. for-of로 전개된 value에 함수가 설정되므로 호출할 수 있습니다.
 * 출력된 값은 함수에서 return한 값입니다.
 */

console.log("[코드3] value에 설정된 함수 이름 작성");
const sports3 = () => { return 100; };
let obj3 = new Set();
obj3.add(sports3);
obj3.add(sports3);
for (let value of obj3) {
  console.log(value()); // 100
};
/**
 * 1. Function 오브젝트를 생성한 후 함수 이름으로 등록하면 하나만 설정됩니다.
 * 2. 이것은 함수 이름으로 참조하는 Function 오브젝트의 메모리 주소가 같기 때문입니다.
 */

console.log("[코드4] Object를 value로 사용");
const sports4 = {
  "축구": 11, "야구": 9
};
let obj4 = new Set();
obj4.add(sports4);
for (let value of obj4) {
  console.log(value); // {축구: 11, 야구: 9}
};

/*
has()

| 구분     | 데이터(값)                        |
| :------- | :-------------------------------- |
| 형태     | Set.prototype.has()               |
| 파라미터 | key 값                            |
| 반환     | key가 존재하면 true, 아니면 false |

Set 인스턴스에서 값의 존재 여부를 반환
  - 존재하면 true, 아니면 false 반환 [코드5]

get() 메소드가 없으므로 has()로 값의 존재 여부를 체크한 후 존재하면 체크한 값을 값으로 사용
*/

console.log("[코드5] has()");
const sports5 = () => { };
const obj5 = new Set([
  sports5
]);
console.log(obj5.has(sports5)); // true
console.log(obj5.has("book"));  // false

