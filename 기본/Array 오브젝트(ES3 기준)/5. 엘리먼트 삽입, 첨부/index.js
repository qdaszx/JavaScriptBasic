/**
 * unshift()
 *
 * 구분 - 데이터(값)
 * data - 기준
 * 파라미터 - [item1 [, item2 [, ...]]]opt
 * 반환 - 추가 후의 length
 *
 * - 0번 인덱스에 파라미터 값 삽입
 * - 배열에 있던 엘리먼트는 뒤로 이동 [코드1]
 */
console.log("[코드1] 0번 인덱스에 삽입");
let value = [1, 2];
value.unshift(345, 67);
console.log(value); // [345, 67, 1, 2]

/**
 * push()
 *
 * 구분 - 데이터(값)
 * data - 첨부 기준
 * 파라미터 - [item1 [, item2 [, ...]]]opt
 * 반환 - 첨부 후의 length
 *
 * - 배열 끝에 파라미터 값을 첨부 [코드2]
 */
console.log("[코드2] 배열 끝에 첨부");
let value2 = [1, 2];
value2.push(345, 67);
console.log(value2);  // [1, 2, 345, 67]

/**
 * concat()
 *
 * 구분 - 데이터(값)
 * data - 연결 기준
 * 파라미터 - [item [, item2 [, ...]]]opt
 * 반환 - 연결 결과
 *
 * - 배열에 파라미터 값을 연결하여 반환 [코드3]
 * - 파라미터가 1차원 배열이면 값만 반영 [코드4]
 */
console.log("[코드3] 배열에 파라미터 값 연결");
let value3 = [1, 2];
let result = value3.concat(3, 4);
console.log(result);  // [1, 2, 3, 4]

console.log("[코드4] 값만 반영");
let value4 = [1, 2];
let result2 = value4.concat([3], [4]);
console.log(result2); // [1, 2, 3, 4]