/**
 * Number()
 *
 * 구분 - 데이터(값)
 * 파라미터 - 변환할 값opt
 * 반환 - 변환한 값
 *
 * - 파라미터 값을 Number 타입으로 변환
 * - 파라미터 값이 String 타입이라도
 *    값이 숫자이면 변환 가능 [코드1]
 * - 숫자로 변환할 수 있으면 변환 [코드2]
 * - 파라미터 값을 작성하지 않으면 0을 반환
 */
console.log("[코드1] 문자열을 숫자로 변환");
console.log(Number("123") + 500); // 623
console.log(Number("ABC"));  // NaN
/**
 * 1. "123"이 String 타입이지만
 *    값이 숫자이므로 숫자로 변환합니다.
 * 2. Number 타입이 되므로 500을 더하ㅕㅁㄴ
 *    값이 연결되지 않고 더해집니다.
 * 3. Number 타입으로 변환할 수 없으면 NaN 반환
 */

console.log("[코드2] 숫자 타입으로 변환");
console.log(Number(0x14));  // 20
console.log(Number(true));  // 1
console.log(Number(null));  // 0
console.log(Number(undefined)); // NaN
/**
 * 1. 16진수를 10진수로 변환
 * 2. true는 1로, false는 0으로 변환됩니다.
 * 3. null은 0으로 변환
 * 4. undefined는 NaN로 변환
 */

/**
 * Number 상수
 *
 * 상수 이름 - 값
 * Number.MAX_VALUE - 1.7976931348623157 * 10(308승)
 * Number.MIN_VALUE - 5 * 10(-324승)
 * Number.NaN - Not-a-Number
 * Number.POSITIVE_INFINITY - Infinity
 * Number.NEGATIVE_INFINITY - -Infinity
 *
 * - 상수는 값을 변경, 삭제 할 수 없음
 * - 영문 대문자 사용이 관례
 * - Number.MAX_VALUE 형태로 값 사용
 */
