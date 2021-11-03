/*
String.raw

구분 ::: 데이터(값)
형태 ::: String.raw `templateString`
반환 ::: 반환 형태opt

- String 오브젝트에 속하지만 Template을 사용하므로 여기서 다룸

- String.raw에 이어서 Template 작성 [코드1]
  줄 바꿈을 문자로 처리 [코드2]
  유니코드의 코드 포인트 처리 [코드3]
*/
console.log("[코드1] String.raw");
const one = 1, two = 2;
const result = String.raw`1+2=${one + two}`;
console.log(result);  // 1+2=3
/**
 * 1. one에 1을, two에 2를 설정합니다.
 * 2. 표현식을 평가하고 결과를 표현식 위치에 설정합니다.
 */

console.log('[코드2] 줄 바꿈');
console.log(`one\ntwo`);  // one
two
console.log(String.raw`one\ntwo`);  // one\ntwo
/**
 * 1. 역슬래시()를 특수 문자가 아니라 일반 문자로 처리합니다.
 * 2. \n을 일반 문자로 처리하므로 줄을 바꾸지 않습니다.
 */

console.log('[코드3] 코드 포인트');
console.log(`\u{31}\u{32}`);  // 12
console.log(String.raw`\u{31}\u{32}`);  // \u{31}\u{32}
/**
 * 1. 역슬래시()에 이어서 유니코드를 작성합니다.
 *    코드 포인트 값을 문자로 반환합니다.
 * 2. 역슬래시()를 일반 문자로 처리하므로 유니코드를 변환하지 않고 문자로 출력합니다.
 */

/*
String.raw()

구분 ::: 데이터(값)
형태 ::: String.raw()
파라미터 ::: 1. {raw: 값} 형태 2. 조합할 값
반환 ::: 반환 형태opt

- raw의 "문자열"을 문자 하나씩 전개하면서 두 번째 파라미터부터 조합하고 연결
    - 문자열 [코드1]
    - 배열 [코드2]

- 첫 번째 파라미터는 {raw: 값} 형태

- 두 번째 파라미터부터 조합할 값 작성
    - ({raw: "ABCD"}, 1, 2, 3)
*/
console.log("[코드4] 문자열");
const one4 = 1, two4 = 2;
console.log(String.raw({ raw: "ABCD" }, one4, two4, 3));  // A1B2C3D
/**
 * 1. A를 반환 버퍼에 넣고
 * 2. raw()의 2번째 파라미터 값을 버퍼에 첨부
 *    즉, one 변숫값인 1을 첨부하며 A1이 됩니다.
 * 3. B를 반환 버퍼 끝에 첨부합니다.
 * 4. raw()의 3번째 파라미터 값을 버퍼에 첨부 즉, two 변숫값인 2를 첨부합니다.
 * 5. 현재까지 모습은 A1B2
 * 6. C를 반환 버퍼 끝에 첨부합니다.
 * 7. 4번째 파라미터 값인 3을 버퍼에 첨부
 * 8. D를 반환 버퍼 끝에 첨부합니다.
 *    5번째 파라미터는 값이 없어서 첨부하지 않는 것이 아니라 값 자체를 첨부하지 않습니다.
 * 9. 조합한 결과를 반환합니다.
 */

console.log("[코드5] 배열");
const rawValue = { raw: ["A", "B", "C"] };
console.log(String.raw(rawValue, 1, 2, 3)); // A1B2C
/**
 * 1. `A${1}B${2}C`
 * 2. C 뒤에는 표현식이 없는 것으로 처리합니다.
 *    따라서 3이 첨부되지 않습니다.
 */