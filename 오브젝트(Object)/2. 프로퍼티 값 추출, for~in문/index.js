/**
 * 프로퍼티 값 추출
 * - 오브젝트에서 프로퍼티 값 추출
 *    - var obj = {book: "책"}
 *    - var value = obj.book;
 * - obj 오브젝트에 프로퍼티 이름인
 *    - book이 있으면 프로퍼티 값 반환
 *    - book이 없으면 undefined 반환 [코드1]
 */

console.log("[코드1] 프로퍼티 값 추출");
let obj = { book: "책" };
console.log(obj.book);    // 책
console.log(obj["sports"]);   // undefined
/**
 * 1. obj.book
 *    obj 오브젝트에 프로퍼티 이름으로
 *    book이 있으므로
 *    프로퍼티 값인 "책"이 반환됩니다.
 * 2. obj["sports"]
 *    obj 오브젝트에 프로퍼티 이름으로
 *    sports가 없으므로 undefined가 반환됩니다.
 */

/**
 * for ~ in
 * - 오브젝트에서 프로퍼티를 열거 [코드2]
 * - 형태:
 *    for (변수 in 오브젝트) 문장;
 *    for (표현식 in 오브젝트) 문장;
 * - for (var item in sports) {코드}
 *    - 프로퍼티 이름이 item에 설정
 *    - sports[item]으로 프로퍼티 값을 구함
 *    - 프로퍼티를 작성한 순서대로
 *      읽혀진다는 것을 보장하지 않음 (ES3)
 *    ES5부터는 작성한대로 읽혀진다.
 */

console.log("[코드2] 프로퍼티 열거");
let sports2 = {
  soccer: "축구",
  baseball: "야구"
};
for (let item in sports2) {
  console.log(item);    // soccer baseball
  console.log(sports2[item]);   // 축구 야구
};