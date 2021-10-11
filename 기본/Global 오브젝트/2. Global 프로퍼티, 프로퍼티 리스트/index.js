/**
 * 프로퍼티 리스트
 * 이름 - 개요
 * 값
 * NaN - Not-a-Number
 * Infinity - 무한대 값
 * undefined - undefined
 * 함수
 * isNaN() - NaN 여부 NaN이면 true, 아니면 false 반환
 * isFinite() - 유한대 여부 유한이면 true, 아니면 false
 * parseInt() - 정수로 변환하여 반환
 * parseFloat() - 실수로 변환하여 반환
 * eval() - 문자열을 JS 코드로 간주하여 실행
 * encodeURI() - URI 인코딩
 * encodeURIComponent() - URI 확장 인코딩
 * decodeURI() - encodeURI 함수의 인코딩 값을 디코딩
 * decodeURIComponent() - encodeURIComponent 함수의 인코딩 값을 디코딩
 */

/**
 * Global 프로퍼티
 * - Global 프로퍼티 종류
 *    - NaN: Not-a-Number
 *    - Infinity: 무한대
 *    - undefined: undefined
 * - 상수 개념으로 사용
 *    - 외부에서 프로퍼티 값 변경 불가 [코드1]
 * - delete 연산자로 삭제 불가
 */
console.log("[코드1] 글로벌 프로퍼티");
console.log(NaN); // NaN
console.log(Infinity);  // Infinity
console.log(undefined); // undefined
/**
 * 1. Number.MAX_VALUE처럼
 *    프로퍼티 앞에 오브젝트 이름을 작성해야 하지만
 * 2. 글로벌 오브젝트는 실체가 없으므로
 * 3. [코드1] 처럼 오브젝트 이름을 작성하지 않고
 *    프로퍼티 이름만 작성
 * 4. 오브젝트 이름을 작성하지 않으면
 *    글로벌 프로퍼티로 인식
 */