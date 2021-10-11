/**
 * substring()
 *
 * 구분 - 데이터(값)
 * data - 반환 대상
 * 파라미터 - 시작 인덱스
 *        - 끝 인덱스
 * 반환 - 결과
 *
 * - 파라미터의 시작 인덱스부터
 *   끝 인덱스 직전까지 반환 [코드1]
 * - 두번째 파라미터를 작성하지 않으면
 *   반환 대상의 끝까지 반환 [코드2]
 * - 다양한 추출 조건 작성 [코드3] [코드4]
 */
console.log("[코드1] 파라미터 모두 작성");
let value = "01234567";
console.log(value.substring(2, 5)); // 234
/**
 * 1. 2번 인덱스부터 5번 인덱스 직전까지 반환
 */

console.log("[코드2] 파라미터를 하나만 작성");
let value2 = "01234567"
console.log(value2.substring(5)); // 567
console.log(value2.substring());  // 01234567
/**
 * 1. 첫 번째 파라미터만 작성하면
 *    첫 번째 인덱스부터 끝까지 반환
 * 2. 파라미터를 모두 작성하지 않으면 전체 반환
 */

console.log("[코드3] 전체 length 사용");
let value3 = "01234567";
console.log(value3.substring(5, 20)); // 567
/**
 * 1. 두 번째 파라미터 값이 전체 length보다 크면
 *    전체 문자열 length 사용
 * 2. 따라서 시작 인덱스부터 끝까지 반환
 */

console.log("[코드4] 다양한 선택");
let value4 = "01234567";
console.log(value4.substring(-7, 2)); // 01
console.log(value4.substring(5, 1));  // 1234
console.log(value4.substring(5, "A"));  // 01234
/**
 * 1. 파라미터 값이 음수이면 0으로 간주
 *    0번 인덱스부터 2번~인덱스 직전까지 반환
 * 2. 첫 번째 파라미터 값이 두 번째보다 크면
 *    파라미터 값을 바꿔서 처리
 *    value.substring(1, 5) 형태가 됨
 * 3. NaN는 0으로 간주
 *    첫 번째 파라미터 값이 두 번째보다 크므로
 *    value.substring(0, 5) 형태가 됨
 */

/**
 * substr()
 *
 * 구분 - 데이터(값)
 * data - 반환 대상
 * 파라미터   - 시작 인덱스
 *          - 반환할 문자 수
 * 반환 - 결과
 *
 * - 파라미터의 시작 인덱스부터
 *   지정한 문자 수를 반환 [코드5]
 * - 첫번째 파라미터 [코드6]
 *    - 값이 음수이면 length에서
 *      파라미터 값을 더해 시작 인덱스로 사용
 * - 두번째 파라미터를 작성하지 않으면
 *   양수 무한대로 간주 [코드7]
 */
console.log("[코드5] 파라미터 모두 작성");
let value5 = "01234567";
console.log(value5.substr(0, 3)); // 012
/**
 * 1. 0번 인덱스부터 문자 3개를 반환
 */

console.log("[코드6] 첫 번째 파라미터");
let value6 = "01234567";
console.log(value6.substr(-3, 3));  // 567

console.log("[코드7] 두 번째 파라미터");
let value7 = "01234567";
console.log(value7.substr(4));  // 4567
console.log(value7.substr()); // 01234567
/**
 * 1. 두 번째 파라미터를 작성하지 않으면
 *    양수 무한대, 즉 최댓값이므로
 * 2. 첫 번째 파라미터부터 전체 반환
 * 3. 첫 번째 파라미터를 작성하지 않으면 0으로 간주
 *    따라서 전체가 반환됩니다.
 */

/**
 * slice()
 *
 * 구분 - 데이터(값)
 * data - 반환 대상
 * 파라미터 - 시작 인덱스
 *        - 끝 인덱스
 * 반환 - 결과
 *
 * - 파라미터의 시작 인덱스부터
 *   끝 인덱스 직전까지 반환 [코드8]
 * - 첫번째 파라미터 [코드9]
 *    - 값을 작성하지 않거나 NaN이면 0으로 간주
 * - 두번째 파라미터 [코드10]
 *    - 작성하지 않으면 length 사용
 *    - 값이 음수이면 length에 더해 사용 [코드11]
 */
console.log("[코드8] 파라미터 모두 작성");
let value8 = "01234567";
console.log(value8.slice(1, 4));  // 123
console.log(value8.slice(false, 4));  // 0123
/**
 * 1. 1번 인덱스부터 4번 인덱스 직전까지 반환
 * 2. false, undefined, null, 빈 문자열은 0으로 간주
 */

console.log("[코드9] 파라미터 모두 작성하지 않음");
let value9 = "01234567";
console.log(value9.slice("A")); // 01234567
console.log(value9.slice());  // 01234567
/**
 * 1. 첫 번째 파라미터가 NaN이면 0으로 간주
 * 2. 파라미터를 모두 작성하지 않으면 전체 반환
 */

console.log("[코드10] 두 번째 파라미터");
let value10 = "01234567";
console.log(value10.slice(5));  // 567
console.log(value10.slice(5, 3)); // ""
/**
 * 1. 두 번째를 작성하지 않으면 length 사용
 * 2. 첫 번째가 두 번째보다 크거나 같으면 빈 문자열
 */

console.log("[코드11] 음수 사용");
let value11 = "01234567";
console.log(value11.slice(4, -2));  // 45
console.log(value11.slice(-5, -2)); // 345
console.log(value11.slice(-2, -5)); // ""
/**
 * 1. 파라미터 값이 음수이면 length를 더해 사용
 *    더한 값이 0보다 작으면 0을 사용
 * 2. 3개의 결과에 대한 논리를 설명하세요
 */