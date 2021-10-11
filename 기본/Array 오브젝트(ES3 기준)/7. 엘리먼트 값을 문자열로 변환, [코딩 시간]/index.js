/**
 * join()
 *
 * 구분 - 데이터(값)
 * data - 기준
 * 파라미터 - 분리자opt, 디폴트: 콤마(,)
 * 반환 - 연결한 문자열
 *
 * - 엘리먼트와 분리자를
 *   하나씩 결합하여 문자열로 연결
 *    - [0] 인덱스, 분리자, [1] 인덱스, 분리자
 * - 마지막 엘리먼트는
 *   분리자를 연결하지 않음 [코드1]
 * - 파라미터를 작성하지 않으면 콤마로 분리 [코드2]
 * - 파라미터에 빈 문자열 작성 [코드3]
 */
console.log("[코드1] 구분자 작성");
let value = [1, 2, 3];
let result = value.join("##");
console.log(result);  // 1##2##3
console.log(typeof result); // string

console.log("[코드2] 파라미터를 작성하지 않음");
let value2 = [1, 2, 3];
let result2 = value2.join();
console.log(result2); // 1,2,3

console.log("[코드3] 빈 문자열 작성");
let value3 = [1, 2, 3];
let result3 = value3.join("");
console.log(result3); // 123
/**
 * 1. 엘리먼트 값만 연결하여 반환
 * 2. 사용 빈도수가 높습니다.
 * 3. 데이터로 HTML의 마크업을 만들어
 *    한 번에 표시할 때 사용
 *    예: <table>
 */

/**
 * toString()
 *
 * 구분 - 데이터(값)
 * data - 변환 대상
 * 파라미터 - 사용하지 않음
 * 반환 - 변환한 값
 *
 * - 배열의 엘리먼트 값을 문자열로 연결
 *    - 콤마로 엘리먼트를 구분 [코드4]
 */
console.log("[코드4] 문자열로 연결");
let result4 = ["A", "B", "C"].toString();
console.log(result4); // A,B,C
console.log([["가"], ["다"]].toString()); // 가,다
/**
 * 1. 2차원 배열의 각 엘리먼트 값을
 *    1차원 배열을 펼치고
 * 2. 다시 1차원을 문자열로 연결하여 반환합니다.
 */

/**
 * toLocaleString()
 *
 * 구분 - 데이터(값)
 * data - 변환 대상
 * 파라미터 - 사용하지 않음
 * 반환 - 변환한 값
 *
 * - 엘리먼트 값을 지역화 문자로 변환
 *    - 문자열을 콤마로 연결하여 반환 [코드5]
 */
console.log("[코드5] 지역화 문자로 변환");
let value4 = [12.34, 56];
console.log(value4.toLocaleString("zh-Hans-CN-u-nu-hanidec"));  // 一二.三四,五六


/**
 * [코딩 시간]
 * - 요구 사항
 *    <ul>
 *        <li id=id1>id1</li>
 *        <li id=id2>id2</li>
 *    </ul>
 * - JS로 <li>를 10개 만들어
 *   웹 페이지에 표시합니다.
 * - #id1에서 1은 일련번호로
 *   1부터 10까지 사용합니다. [조건, 힌트]
 *
 * [조건, 힌트]
 * - 조건
 *    - for() 사용
 *    - push(), join() 사용
 *      즉, 문자열을 배열 끝에 첨부한 후
 *      엘리먼트를 문자열로 결합
 * - 힌트
 *    - document.body.innerHTML = 결합한 문자열;
 *    - 결합한 문자열을 <body>의 차일드로
 *      첨부하게 되며, 리스트가 표시됩니다.
 */
const ul = ["<ul>"];
for (let i = 1; i < 11; i++) {
  ul.push("<li id=id" + i + ">id" + i + "</li>");
};
ul.push("</ul>");
let res = ul.join("");
document.body.innerHTML = res;

