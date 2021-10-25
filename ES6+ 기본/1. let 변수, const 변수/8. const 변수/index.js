/*
const 변수

구문: name1 [= value1][, name2 [= value2]]

- 값을 바꿀 수 없는 변수 선언
- name1에 변수 이름 작성, 식별자로 사용 [코드1]
- value, value2에 초깃값 작성
    - 반드시 값을 작성, 변수 선언만 불가
    - 표현식 작성 가능, 평가 결과 사용
- JS에서 상수는 대문자 사용 관례 [코드2]
- 우선 let이 아닌 const 사용 가능을 검토
*/
console.log("[코드1] const 변수");
const sports = "축구";
try {
  sports = "농구";
} catch (e) {
  console.log("const 할당 불가"); // const 할당 불가
};
/*
1. const sports = "축구";
  sports를 const로 선언하고 값 할당
2. try {sports = "농구";}
  try 블록도 별도의 스코프이지만
  const, let을 작성하지 않았으므로
3. sports 변수에 값을 할당하게 됩니다.
  sports가 const 변수이므로 에러 발생
*/

console.log("[코드2] 상수는 대문자 사용");
const bonus = 100;
const POINT = 200;
/*
1. const가 상수이지만
  값 형태에 따라 바꿀 수 있습니다.
  다음 페이지에서 다룹니다.
2. const POINT = 200;
  대문자 사용이 코딩 관례이므로 괜찮습니다.
*/

/**
 * const 변수

- const 변수 전체를 바꿀 수는 없지만
- Object의 프로퍼티 값을 바꿀 수 있음 [코드3]
- 배열의 엘리먼트 값도 바꿀 수 있음 [코드4]
 */
console.log("[코드3] Object의 프로퍼티 값");
const book = { title: "책" };
try {
  book = { title: "음악 책" };
} catch (e) {
  console.log("const 전체 할당 불가");  // const 전체 할당 불가
};
book.title = "미술 책";
console.log(book.title);  // 미술 책
/*
1. book = {title: "음악 책"};
  book에 값을 할당하면 에러 발생
  book 전체를 바꿀 수 없습니다.
2. book.title = "미술 책";
  프로퍼티 값은 변경할 수 있습니다.
3. const 변수의 변경 불가는
  book에 값을 할당하는 것을 뜻합니다.
*/

console.log("[코드4] 배열의 엘리먼트 값");
const book2 = ["책"];
try {
  book2 = ["음악 책"];
} catch (e) {
  console.log("const 전체 할당 불가");  // const 전체 할당 불가
};
book2[0] = "미술 책";
console.log(book[0]); // 미술 책
/*
1. book = ["음악 책"];
  book에 값을 할당하면 에러 발생
2. book[0] = "미술 책";
  엘리먼트 값은 변경할 수 있습니다.
*/