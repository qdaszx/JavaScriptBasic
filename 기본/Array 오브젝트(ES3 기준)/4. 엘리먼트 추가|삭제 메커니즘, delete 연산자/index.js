/**
 * 엘리먼트 추가
 * - 배열에 엘리먼트를 추가하는 방법
 *    - 삽입할 위치에 인덱스 지정 [코드1]
 *    - 표현식으로 인덱스 지정 [코드2]
 */
console.log("[코드1] 삽입할 위치에 인덱스 지정");
let value = [1, 2];
value[4] = 5;
console.log(value); // [1, 2, undefined, undefined, 5]
/**
 * 1. 값을 설정하지 않은
 *    추가된 엘리먼트에 undefined 설정
 */

console.log("[코드2] 표현식으로 인덱스 지정");
let value2 = [1, 2];
value2[value2.length + 2] = 5;
console.log(value2); // [1, 2, undefined, undefined, 5]
/**
 * 1. 인덱스에 값을 더해 인덱스로 사용
 */

/**
 * delete 연산자
 *
 * 구분 - 데이터(값)
 * object - 매치 대상
 * 프로퍼티 - 삭제할 프로퍼티 이름
 * 인덱스 - 배열의 인덱스
 * 반환 - 삭제 성공: true, 실패: false
 *
 * - var 변수는 삭제 불가 [코드3]
 * - 글로벌 변수는 삭제 가능 [코드4]
 * - {name: value} 삭제 방법
 *    - 삭제할 프로퍼티 이름 작성 [코드5] [코드6]
 *    - ES5에서 삭제 불가 설정 가능
 * - 인덱스로 배열의 엘리먼트 삭제 [코드7]
 */
console.log("[코드3] 변수는 삭제 불가");
var value3 = 123;
console.log(delete value3); // false
/**
 * 1. var 변수를 삭제할 수 없습니다.
 * 2. 삭제 실패로 처리하여 false가 반환됩니다.
 */

console.log("[코드4] 글로벌 변수는 삭제 가능");
value4 = "글로벌 변수";
console.log(delete value4); // true

try {
  console.log(value4);
} catch (e) {
  console.log("존재하지 않음"); // 존재하지 않음
};
/**
 * 1. var 키워드를 사용하지 않은 글로벌 변수는
 *    삭제할 수 있습니다.
 * 2. 삭제하게 되어 true가 반환됩니다.
 */

console.log("[코드5] 오브젝트의 프로퍼티 삭제");
let book = { title: "책" };
console.log(delete book.title); // true
console.log(book.title);  // undefined
/**
 * 1. 오브젝트 이름.프로퍼티 이름 형태로 작성
 * 2. 오브젝트에 프로퍼티 이름이 없으면
 *    undefined 반환
 */

console.log("[코드6] 오브젝트 전체 삭제");
var book2 = { title: "책" };
console.log(delete book2);  // false

sports = { item: "축구" };
console.log(delete sports); // true
/**
 * 1. var 변수에 오브젝트를 할당하면
 *    오브젝트 전체를 삭제할 수 없습니다.
 * 2. var 키워드를 사용하지 않은 변수에 할당하면
 *    삭제할 수 있습니다.
 * 3. var 키워드를 사용해야 하는 또 하나의 목적
 */

console.log("[코드7] 인덱스로 삭제");
let value5 = [1, 2, 3, 4];
console.log(delete value5[1]);  // true
console.log(value5.length); // 4
/**
 * 1. 1번 인덱스가 존재하므로
 *    삭제되며 true 반환
 * 2. 삭제하였으므로 length가 4에서 3으로
 *    줄어야 하는데 변하지 않고 4가 출력
 * 3. 이것은 배열 처리 메커니즘 때문입니다.
 *    다음 페이지에서 살펴봅니다.
 */

/**
 * 배열 엘리먼트 삭제 메커니즘
 * - 삭제된 인덱스에 undefined 설정 [코드8]
 *    - 배열을 읽을 때 제외 시켜야 합니다.
 */
console.log("[코드8] 배열 삭제 메커니즘");
let value6 = [1, 2, 3, 4];
delete value6[1];
console.log(value6);  // [1, undefined, 3, 4]

for (let k = 0; k < value6.length; k++) {
  console.log(value6[k]); // 1 undefined 3 4
}
/**
 * 1. 삭제한 인덱스에 undefined가 설정됩니다.
 * 2. 앞으로 하나씩 당겨서 엘리먼트를 이동하면
 *    처리 시간이 걸리기 때문
 */