/**
 * 함수
 * - function
 *    - 특정 기능을 처리하는 자바스크립트 코드 묶음
 * - 함수 형태: [코드1]
 */

console.log("[코드1] 함수 형태")
function book() {
  let title = "JS 책";
};

let point = function (one, two) {
  let total = one + two;
  let bonus = total + 100;
};

/**
 * 함수 구성 요소
 * - function 키워드
 * - 함수 이름
 * - 파라미터 Parameter
 *    - 매개 변수, 인자, 아규먼트로도 부름
 *    - 강좌에서는 파라미터로 표기
 *    - 파라미터 작성은 선택
 * - 함수 Body
 *    - 중괄호{} 안에 작성한 코드
 *    - 함수 코드, 소스 텍스트로도 부름
 *    - 강좌에서는 함수 코드로 표기
 *    - 함수 코드 작성은 선택
 */

/**
 * 함수 이름 규칙
 * - 첫 문자
 *    - 영문자, $, 언더바(_): 사용 가능
 *    - 숫자, &, *, @, +: 사용 불가 [코드2]
 * - 함수 이름 작명 권장
 *    - 함수 코드를 읽지 않더라도
 *    - 함수 이름과 파라미터로 기능을 알 수 있도록
 *    - 시맨틱(의미, 뜻)을 부여하여 작명
 */

console.log("[코드2] 함수 형태")
function setBookTitle() {
  let title = "JS 책";
};

let calculatePoint = function (one, two) {
  let total = one + two;
  let bonus = total + 100;
};

/**
 * 함수 이름 관례
 * - calculatePoint() 처럼 동사로 시작
 *    - 포인트를 계산한다.
 * - 두 개 이상의 단어를 사용할 때
 *    - 두번째 단어부터 명사 사용
 *    - 명사의 첫 문자를 대문자로 사용
 *    - CamelCase 형태라고 부름
 * - 동사 + 명사 형태로 동적인 모습
 *    - 강좌에서는 설명 편리를 위해 간단하게 작성합니다.
 */