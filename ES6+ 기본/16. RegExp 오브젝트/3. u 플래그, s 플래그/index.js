/*
u 플래그, s 플래그

- 정규 표현식의 패턴을 유니코드의 코드 포인트로 변환하여 매치 [코드1]
  - unicode 프로퍼티에 true 설정

- u 플래그를 사용하지 않으면 코드 포인트를 문자로 매치 [코드2]
*/
console.log("[코드1] U 플래그 사용");
const obj = new RegExp("\u{31}\u{32}", "u");
console.log(obj.test("12"));  // true
console.log(obj.unicode); // ture
console.log(/\u{1f418}/u.test("🐘")); // ture
/**
 * 1. new RegExp("\u{31}\u{32}", u)
 *    패턴을 코드 포인트로 변환하고
 *    u flag로 인스턴스를 생성합니다.
 * 2. obj.test("12")
 *    매치가 되므로 true가 출력됩니다.
 * 3. obj.unicode
 *    unicode 프로퍼티 값이 true로 설정됩니다.
 * 4. /\u{1f418}/u.test("🐘")
 *    이모지도 매치할 수 있습니다.
 */

console.log("[코드2] U 플래그를 사용하지 않음");
const result = /\u{31}\u{32}/.test("12");
console.log(result);  // false
/**
 * 1. / 다음에 플래그를 작성하지 않았습니다.
 * 2. 패턴의 코드 포인트를 일반 문자로 간주하여 12와 매치하므로 false가 출력됩니다.
 */

/*
s 플래그

- 정규 표현식에서 dot(점.)은 모든 문자를 매치하지만 줄 바꿈 문자는 매치하지 않습니다.

- s 플래그를 사용하면 (ES2018)
  - 줄 바꿈 문자를 매치 [코드1]
  - dotAll 플래그에 true 설정

- 줄 바꿈 문자
  - U+000A Line Feed(LF)("\n")
  - U+000D Carriage Return(CR)("\r")
  - U+2028 Line Separator
  - U+2029 Paragraph Separator
*/

console.log("[코드3] s 플래그");
const text = `line
줄을 바꿈`;
// 이전 방법
console.log(/[\s\S]+/.test(text));  // true
console.log(/[^]+/.test(text)); // true
// s 플래그
const obj3 = new RegExp(".+", "s");
console.log(obj3.test(text)); // true
console.log(obj3.dotAll); // true
/**
 * 1. line 바로 뒤에 줄 바꿈 문자가 있으나 표시되지 않은 것입니다.
 * 2. ES2018 이전에는 이전 방법으로 매치
 * 3. s 플래그로 줄 바꿈 문자를 매치할 수 있습니다.
 */