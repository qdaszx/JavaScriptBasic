/*
deep copy

- Object를 할당하면 프로퍼티 값이 연동됨
    - 한 쪽 오브젝트의 프로퍼티 값을 바꾸면 다른 오브젝트의 프로퍼티 값도 바뀜 [코드1]

- assign() 함수로 복사 [코드2]

- 그래도 연동되는 형태 [코드3]

- 연동되지 않게 하려면 프로퍼티 단위로 복사 [코드4]

- JSON 함수 활용 [코드5]
*/
console.log("[코드1] 프로퍼티 값 연동()");
const sports = {
  item: "축구"
};
let copy = sports;
sports.item = "농구";
console.log(copy.item); // 농구
/**
 * 1. sports.item = "농구";
 * 2. copy.item 값도 바뀝니다.
 */

console.log("[코드2] assign() 함수로 복사");
const sports2 = {
  item: "축구"
};
let copy2 = {};
Object.assign(copy2, sports2);
sports2.item = "농구";
console.log(copy2.item);  // 축구
/**
 * 1. 연동되지 않습니다.
 */

console.log("[코드3] 그래도 연동되는 형태");
const book = {
  item: { title: "자바스크립트" }
};
let copy3 = {};
Object.assign(copy3, book);
copy3.item.title = "책";
console.log(book.item.title); // 책
/**
 * 1. {item: {title: "자바스크립트"}}
 * 2. Object 안에 Object가 있는 형태입니다.
 *    item.title 값이 연동됩니다.
 * 3. 이것은 프로퍼티를 복사하지 않고 Object 참조를 복사하기 때문입니다.
 */

console.log("[코드4] 프로퍼티 단위로 복사");
const book4 = {
  item: { title: "자바스크립트" }
};
let copy4 = {};
for (let key in book4) {
  let value = book4[key];
  copy4[key] = {};
  for (let name in value) {
    copy4[key][name] = value[name];
  };
};
book4.item.title = "책"
console.log(copy4.item.title);  // 자바스크립트
/**
 * 1. 프로퍼티 단위로 복사하면 연동되지 않지만
 * 2. 단계의 깊이가 유동적이면 코드가 복잡해집니다.
 * 3. 다단계 계층 구조에서 값이 연동되지 않도록 복사하는 것을 deep copy, deep clone이라고 부릅니다.
 */

console.log("[코드5] Deep Copy, Deep Clone");
const book5 = {
  item: { title: "자바스크립트" }
};
const copy5 = JSON.parse(JSON.stringify(book5));
book5.item.title = "책";
console.log(copy5.item.title) // 자바스크립트
/**
 * 1. JSON.stringify()로 문자열로 변환한 후
 * 2. JSON.parse()로 파싱하면 연동되지 않습니다.
 * 3. 이것도 하나의 방법입니다.
 */