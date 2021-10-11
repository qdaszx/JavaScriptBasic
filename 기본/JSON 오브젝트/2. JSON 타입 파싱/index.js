/**
 * parse()
 * 구분 - 데이터(값)
 * object - JSON 오브젝트
 * 파라미터 1. 변환 대상
 *       2. 파싱 데이터로 실행할 함수opt
 * 반환 - 변환 결과
 *
 * - JSON 타입을 JS 타입으로 변환
 *    - [코드1] [코드2] [코드3] [코드4]
 * - 작성 주의
 *    - "123."을 "123.0"으로 작성
 * - "0123"처럼 첫 자리에 0 사용 불가
 * - 대분자 "NULL"사용 불가, "null" 사용
 * - 10진수 사용 [계속...]
 *
 * [계속...]
 */
console.log("[코드1] 값이 숫자일 때");
let value = "123";
try {
  var result = JSON.parse(value);
} catch (e) {
  console.log("JSON 파싱 에러");
};
console.log(result);  // 123
console.log(typeof result); // number
/**
 * 1. JSON 형태는 기본적으로 큰따옴표 사용
 * 2. 즉, String 타입이지만
 *    JSON.parse()에서 JS 타입에 맞도록 변환
 * 3. "123"은 문자열이지만 값이 숫자이므로
 *    Number 타입의 숫자로 변환
 * 4. 파싱 대상이 서버에서 받은 데이터일 때,
 *    try-catch 사용은 필수입니다.
 */

console.log("[코드2] true, false");
let value2 = "true";
let result2 = JSON.parse(value2);
console.log(result2); // true
console.log(typeof result2);  // boolean
/**
 * 1. "true"도 숫자처럼 true로  변환
 * 2. 설명 편의를 위해
 *    try-catch를 사용하지 않았으나
 *    try-catch 사용은 필수입니다.
 */

console.log("[코드3] 배열에 작성");
let value3 = '["ABC", "가나", "12"]'
let result3 = JSON.parse(value3);
console.log(result3); // ['ABC', '가나', '12']
/**
 * 1. 배열에 작성된 String 타입의 숫자는
 *    숫자로 변환하지 않습니다.
 */

console.log("[코드4] Object에 작성");
let value4 = '{"point": "123"}';
let result4 = JSON.parse(value4);
console.log(result4); // {point: '123'}
/**
 * 1. JS는 프로퍼티 이름에 큰따옴표를
 *    사용하지 않으므로 큰따옴표가 표시되지 않음
 */

/**
 * parse()
 * - 두 번째 파라미터 작성 [코드1]
 * - 첫 번째 파라미터의 JSON 문자열을 파싱하면
 *    - {book: "책", movie: "영화"} 형태가 됩니다.
 * - 파싱한 오브젝트를 하나씩 읽어가면서
 *   두 번째 파라미터의 함수를 실행
 * - 함수에서 값을 반환하면
 *   파싱 결과인 result 변수에 반영
 * - 값을 반환하지 않거나 undefined를 반환하면
 *   프로퍼티가 제외되므로 반환해야 합니다.
 */
console.log("[코드5] 두 번째 파라미터 작성");
let data5 = '{"book": "책", "movie": "영화"}';
let check = function (key, value) {
  return key === "book" ? "JS책" : value;
};
let result5 = JSON.parse(data5, check);
console.log(result5); // {book: 'JS책', movie: '영화'}
/**
 * 1. 프로퍼티 이름이 "book"이면
 *    "책"을 "JS책"으로 바꿉니다.
 */