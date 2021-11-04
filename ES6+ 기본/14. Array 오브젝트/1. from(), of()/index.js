/*
Array 오브젝트

구분 ::: 데이터(값)
형태 ::: Array.from()
파라미터 ::: 1. 변환 대상, 이터러블 오브젝트 2. 전개할 때마다 호출할 함수opt 3. 호출된 함수에서 this로 참조할 오브젝트opt
반환 ::: Array 오브젝트

- 첫 번째 파라미터의 오브젝트를 Array 오브젝트로 변환 [코드1] [코드2] [코드3]

- 두 번째 파라미터에 함수 작성opt
    - 이터러블 오브젝트를 전개할 때마다 호출 [코드4]

- 세 번째 파라미터에 오브젝트 작성 opt
    - 호출된 함수에서 this로 참조 [코드5]
*/
console.log("[코드1] Array 오브젝트로 변환, 반환");
const like = { 0: "zero", 1: "one", length: 2 };
const list = Array.from(like);
console.log(list);  //  ['zero', 'one']

console.log(Array.from("ABC")); //  ['A', 'B', 'C']
/**
 * 1. Array-like 오브젝트를 Array 오브젝트로 변환하여 반환합니다.
 * 2. "ABC"를 문자 단위로 분리하여 배열로 반환
 */

console.log("[코드2] arguments 반환");
function args() {
  return Array.from(arguments);
};
console.log(args(1, 2, 3)); //  [1, 2, 3]
/**
 * 1. Argument 오브젝트는 Array-like입니다.
 */

console.log("[코드3] Node List");
const nodes = document.querySelectorAll(".sports");
const show = (node) => console.log(node.textContent);
Array.from(nodes).forEach(show);  // 축구 농구
/**
 * 1. NodeList가 이터러블 오브젝트이므로 Array.from()으로 읽을 수 있습니다.
 */

console.log("[코드4] 콜백 함수 호출");
const like4 = { 0: "zero", 1: "one", length: 2 };
console.log(Array.from(like4, value => {
  return value + "변경";  // ['zero변경', 'one변경']
}));
/**
 * 1. 이터러블 오브젝트를 하나씩 읽습니다.
 * 2. 읽은 값을 넘겨주면서 콜백 함수를 호출합니다.
 * 3. 콜백 함수에서 반환된 값을 배열에 첨부하여 반환합니다.
 */

console.log("[코드5] this로 오브젝트 참조");
const like5 = { 0: 10, 1: 20, length: 2 };
console.log(Array.from(like5, function (value) {
  return value + this.plus; //  [80, 90]
}, { plus: 70 }));
/**
 * 1. 콜백 함수에서 this로 3번째 파라미터의 오브젝트를 참조합니다.
 * 2. 화살표 함수를 사용하면 콜백 함수에서 3번째 파라미터의 오브젝트를 참조하지 않습니다.
 */

/*
of()

구분 ::: 데이터(값)
형태 ::: Array.of()
파라미터 ::: 변환 대상 값, 다수 작성 가능
반환 ::: Array 오브젝트

- 파라미터 값을 Array로 변환, 반환 [코드6]

- 파라미터에 변환 대상 값을 작성
    - 콤마로 구분하여 다수 작성 가능
*/
console.log("[코드6] Array로 변환, 반환");
const result = Array.of(1, 2, 3);
console.log(result);  // [1, 2, 3]
console.log(Array.of());  // []
/**
 * 1. Array 오브젝트를 생성하고
 * 2. 파라미터 값 1, 2, 3를 Array 오브젝트에 첨부하여 반환합니다.
 * 3. 파라미터를 작성하지 않으면 빈 Array 오브젝트를 반환합니다.
 */