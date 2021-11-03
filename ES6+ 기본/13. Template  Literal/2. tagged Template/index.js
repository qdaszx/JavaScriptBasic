/*
tagged Template

- tagged Template
    - 템플릿에 함수 이름을 작성한 형태 [코드1]

- 호출되는 함수를 태그 함수(tag function)라고 부름

- show() 함수를 호출하면서
    - 문자열을 배열로 파라미터로 넘기고
    - 표현식 결과를 하나씩 파라미터로 넘김
*/
console.log("[코드1] tagged Template");
const one = 1, two = 2;
const show = (text, value) => {
  console.log(`${text[0]}${value}`);  // 1 + 2 = 3
  console.log(text[1]); // ""
};
show`1 + 2 = ${one + two}`;
/**
 * 1. Template에서 문자열과 표현식을 분리합니다.
 * 2. "1 + 2 = "가 문자열이고 ${one + two}가 표현식이며 평가하면 3이 됩니다.
 * 3. show() 함수를 호출합니다.
 * 4. 문자열을 배열을 넘겨 줍니다.
 *    왼쪽에서 오른쪽으로 배열 엘리먼트로 추가
 *    마지막에 빈 문자열을 엘리먼트로 추가
 * 5. 표현식은 평가 결과를 넘겨 줍니다.
 * 6. consol.log(text[1])
 *    호출하는 함수에서 넘겨 준 빈 문자열
 *    text[1]이 없으면 undefined가 출력됩니다.
 */


/*
- 호출하는 곳에서 표현식을 평가한 값을 다수 넘겨줄 때
  태그 함수에 대응하는 파라미터 이름을 작성한 형태 [코드2]

- 문자열을 분리하면
  ["1+2=", "이고 1-2=", "이다"]
  3개의 배열 엘리먼트가 됩니다.

- 표현식을 분리하면
  ${one + two}와 ${one - two}

- show 태그 함수를 호출
*/
console.log("[코드2] tagged Template");
const one2 = 1, two2 = 2;
const show2 = (text, plus, minus) => {
  console.log(`${text[0]}${plus}`); // index.js:50 1+2=3
  console.log(`${text[1]}${minus}`);  // 이고 1-2=-1
  console.log(`${text[2]}${text[3]}`);  // 이다undefined
};
show2`1+2=${one2 + two2}이고 1-2=${one2 - two2}이다`;
/**
 * 1. text 파라미터는
 *    ["1+2=", "이고 1-2=", "이다"]
 *    끝에 문자열이 있으면 4번째에 빈 문자열이 설정되지 않습니다.
 * 2. plus 파라미터는 3
 * 3. minus 파라미터는 -1
 */

/*
- 태그 함수에 Rest 파라미터 작성 [코드3]

- 문자열을 분리하면
  ["1+2=", "이고 1-2=", "이다"]
  3개의 배열 엘리멘트가 됩니다.

- 표현식을 분리하면
  ${one+two}와 ${one-two}
  [3, -1]

- show 태그 함수를 호출
*/
console.log("[코드3] Rest 파라미터 사용");
const one3 = 1, two3 = 2;
const show3 = (text, ...rest) => {
  console.log(`${text[0]}${rest[0]}`);  // 1+2=3
  console.log(`${text[1]}${rest[1]}${text[2]}`);  // 이고 1-2=-1이다
};
show3`1+2=${one3 + two3}이고 1-2=${one3 - two3}이다`;
/**
 * 1. text 파라미터는 ["1+2=", "이고 1-2=", "이다"]
 * 2. rest 파라미터는 [3, -1]
 */