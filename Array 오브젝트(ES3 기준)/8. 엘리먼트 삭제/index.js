/**
 * shift()
 *
 * 구분 - 데이터(값)
 * data - 대상
 * 파라미터 - 사용하지 않음
 * 반환 - 삭제한 엘리먼트
 *
 * - 배열의 첫 번째 엘리먼트 삭제
 * - 삭제한 엘리먼트 값이 undefined로
 *   남지 않고 완전히 삭제됨
 *    - length 값이 하나 줄어 듬 [코드1]
 * - 빈 배열이면 undefined가 반환 됨 [코드2]
 */
console.log("[코드1] 첫 번째 엘리먼트 삭제");
let value = [1, 2, 34];
console.log(value.shift()); // 1
console.log(value); // [2, 34]

console.log("[코드2] 빈 배열");
let result = [].shift();
console.log(result);  // undefined

/**
 * pop()
 *
 * 구분 - 데이터(값)
 * data - 대상
 * 파라미터 - 사용하지 않음
 * 반환 - 삭제한 엘리먼트
 *
 * - 배열의 마지막 엘리먼트 삭제
 * - 삭제한 엘리먼트 값이 undefined로
 *   남지 않고 완전히 삭제됨
 *    - length 값이 하나 줄어 듬 [코드3]
 * - 빈 배열이면 undefined 반환 [코드4]
 */
console.log("[코드3] 마지막 엘리먼트 삭제");
let value2 = [1, 2, 34];
console.log(value2.pop());  // 34
console.log(value2);  // [1, 2]

console.log("[코드4] 빈 배열");
let result2 = [].pop();
console.log(result2); // undefined

/**
 * splice()
 *
 * 구분 - 데이터(값)
 * data - 대상
 * 파라미터 1. 시작 인덱스, 디폴트: 0
 *        2. 삭제할 엘리먼트 수
 *        3. 추가할 엘리먼: [item1 [, ...]]opt
 * 반환 - [결과]
 *
 * - 엘리먼트를 삭제하고
 *   삭제한 엘리먼트 반환 [코드5]
 * - 삭제한 위치에 세 번째 파라미터 삽입 [코드6]
 * - 파라미터를 작성하지 않으면? [코드7]
 */
console.log("[코드5] 파라미터 모두 작성");
let value3 = [1, 2, 3, 4, 5];
console.log(value3.splice(1, 3)); // [2, 3, 4]
console.log(value3);  // [1, 5]
/**
 * 1. 1번 인덱스부터 엘리먼트 3개를 삭제
 * 2. 뒤의 엘리먼트가 앞으로 당겨집니다.
 */

console.log("[코드6] 세 번째 파라미터 작성");
let value4 = [1, 2, 3, 4, 5];
console.log(value4.splice(1, 3, "A", "B")); // [2, 3, 4]
console.log(value4);  // [1, 'A', 'B', 5]

console.log("[코드7] 파라미터를 작성하지 않음");
let value5 = [1, 2, 3, 4, 5];
console.log(value5.splice()); // []
console.log(value5);  // [1, 2, 3, 4, 5]
/**
 * 1. 삭제하지 않습니다.
 * 2. 삭제한 것이 없으므로 빈 배열 반환
 */