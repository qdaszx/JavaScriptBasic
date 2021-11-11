/*
Symbol.match

Well-Known Symbol

- Well-Known Symbol 을 지원하는 String 메소드
  - match()
  - replace()
  - search()
  - split()

- String.prototype.match()
  - 문자열에 패턴을 매치하고 매치된 결과를 배열로 반환 [코드1]
*/
console.log("[코드1] String.match()");
const result = "Sports".match(/s/);
console.log(result);  // ['s']
/**
 * 1. 문자열 "Sports"에 패턴 /s/를 매치합니다.
 *    처음 S는 대문자이므로 매치가 되지 않지만 끝 s는 소문자이므로 매치가 됩니다.
 * 2. 매치된 결과를 배열로 반환합니다.
 */

/*
Symbol.match()

- Symbol.match()
  - 개발자 코드를 함수 블록에 작성
  - String.prototype.match() 대신에 Symbol.match()가 실행됨 [코드2]

- Symbol.match = false
  - // 를 패턴으로 인식하지 않고 문자열로 인식 [코드3]

- 메소드를 오버라이드 하는 것이므로 메소드의 시맨틱은 유지해야 합니다.
*/
console.log("[코드2] Symbol.match()");
const sports = {
  base: "ball",
  [Symbol.match](value) {
    return this.base.indexOf(value) < 0 ? "없음" : "있음";
  }
}
console.log("al".match(sports));  // 있음
/**
 * 1. "ball"에 "al"이 있으면 "있음"을 반환하고 없으면 "없음"을 반환합니다.
 * 2. "al".match(sports)
 * 3. sports 오브젝트에서 Symbol.match 작성 체크 없으면 String.prototype.match()를 호출하고 있으면 Symbol.match()를 호출합니다.
 * 4. Symbol.match(value)를 호출하면서 "al"를 파라미터 값으로 넘겨 줍니다.
 */

console.log("[코드3] 문자열로 인식")
try {
  "/book/".startsWith(/book/);
} catch {
  console.log("정규 표현식으로 처리");  // 정규 표현식으로 처리
};

let check = /book/;
check[Symbol.match] = false;
console.log("/book/".startsWith(check));  // true
/**
 * 1. 파라미터 /book/을 패턴으로 처리합니다.
 *    정규 표현식을 사용할 수 없으므로 에러 발생
 * 2. check[Symbol.match] = false;
 *    정규 표현식으로 인식하지 않도록 설정합니다.
 * 3. "/book/".startsWith(check)
 *    파라미터 check 값을 문자열로 인식합니다.
 * 4. endsWith()도 같습니다.
 */
