/*
for-of 문

- Syntax: for (variable of iterable){}
- 이터러블 오브젝트를 반복 [코드1]
- iterable
    - 이터러블 오브젝트를 작성
    - 표현식을 작성하면 평가 결과를 사용
- variable
    - 변수 이름 작성
    - 이터러블 오브젝트를 반복할 때마다 variable에 값이 할당됨
*/
console.log("[코드1] for-of");
const list = [1, 2, 3];
for (let k = 0; k < list.length; k++) {
  console.log(list[k]); // 1 2 3
};

for (let value of list) {
  console.log(value); // 1 2 3
};

/*
for-of

- 배열
  - 배열을 반복하면서 엘리먼트를 하나씩 전개 [코드2]

- String
  - 문자열을 반복하면서 문자를 하나씩 전개 [코드3]

- NodeList
  - NodeList를 반복하면서 엘리먼트를 하나씩 전개 [코드4]

*/
console.log("[코드2] for-of, Array");
for (let value of [1, 2, 3]) {
  console.log(value); // 1 2 3
};

console.log("[코드3] for-of, String");
for (let value of "ABC") {
  console.log(value); // A B C
};

console.log("[코드4] for-of, NodeList");
const nodes = document.querySelectorAll(".show");
for (let node of nodes) {
  console.log(node.textContent);  // 첫 번째 두 번째 세 번째
};

/*
for-in, for-of 차이

- for-in
  - 열거 가능한 프로퍼티가 대상 [코드5]
  - {key: value} 형태는 디폴트가 enumerable: true
  - Object.defineProperty()는 디폴트가 enumerable: false

- for-of
  - 이터러블 오브젝트가 대상
  - Object는 전개되지 않음
  - prototype의 프로퍼티도 전개되지 않음
*/
console.log("[코드5] 열거 가능한 프로퍼티가 대상");
const obj = {};
Object.defineProperties(obj, {
  sports: {
    enumerable: false, value: "스포츠"
  },
  book: {
    enumerable: true, value: "책"
  },
});
for (let item in obj) {
  console.log(item + ": " + obj[item]); // book: 책
};

/*
for-of, Object

- Object는 이터러블 오브젝트가 아니므로 for-of 사용 불가

- Object를 for-of로 전개할 수 있는 방법
  - Object.keys()로 프로퍼티 이름을 배열로 만들고 만든 배열을 for-of로 전개 [코드6]
*/
console.log("[코드6] for-of, Object");
const sports = {
  soccer: "축구",
  baseball: "야구"
};
const keyList = Object.keys(sports);

for (let key of keyList) {
  console.log(key + ": " + sports[key]);  // soccer: 축구  baseball: 야구
};