/*
Symbol.isConcatSpreadable

- Array.prototype.concat() 은 배열의 엘리멘트를 전개하여 반환 [코드1]

- [Symbol.isConcatSpreadable] = true
  - one 배열 끝에 two 배열의 엘리먼트를 하나씩 연결

- [Symbol.isConcatSpreadable] = false
  - 전개하지 않고 two 배열 자체를 연결

- Array-Like 전개 [코드2]
*/

console.log("[코드1] 배열이 대상");
const one = [10, 20], two = ["A", "B"];
const show = () => {
  console.log(one.concat(two));
};
show(); // [10, 20, 'A', 'B']
two[Symbol.isConcatSpreadable] = true;
show(); // [10, 20, 'A', 'B']
two[Symbol.isConcatSpreadable] = false;
show(); // [10, 20, ['A', 'B']]
/**
1. 대상이 Array이면 전개하는 것이 디폴트입니다.
2. @@isConcatSpreadable을 true로 처리
 */

console.log("[코드2] Array-like가 대상");
const one2 = [10, 20];
const like = { 0: "A", 1: "B", length: 2 };
const show2 = () => {
  console.log(one2.concat(like));
};
show2();  // [10, 20, {0: A, 1: B, length: 2}]
like[Symbol.isConcatSpreadable] = true;
show2();  // [10, 20, 'A', 'B']
like[Symbol.isConcatSpreadable] = false;
show2()  // [10, 20, {0: A, 1: B, length: 2}]
/**
1. 대상이 Array-Like 이면 전개하지 않는 것이 디폴트입니다. Array와 반대입니다.
2. @@isConcatSpreadable을 false로 처리
3. Array-Like에서 값만 전개합니다.
 */