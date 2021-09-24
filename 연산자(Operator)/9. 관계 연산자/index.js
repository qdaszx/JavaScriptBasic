/**
 * 관계 연산자
 * - 관계 연산자
 *    - <, >, <=, >= 연산자
 *    - instanceof 연산자
 *    - in 연산자
 * - instanceof, in 연산자
 *    - 사전 설명이 필요하므로 관련된 곳에서 다룹니다.
 */

/**
 * >연산자
 * - 부등호 : Greater-than
 * - 양쪽이 Number 타입일 때
 *    - 왼쪽이 오른쪽보다 크면 true 반환 아니면 false 반환 [코드1]
 * - String 타입 비교
 *    - 한 쪽이 String 타입이면 false [코드2]
 *    - 양쪽 모드 String 타입이면 유니코드 사전 순서로 비교 [코드3]
 *    - 문자 하나씩 비교 [코드4]
 * - <, <=, >=는 비교 기준만 다름
 */

console.log("[코드1] 양쪽이 모두 숫자일 때")
console.log((1 + 2) > 1); // true
/**
 * 1. 먼저 표현식을 평가하여 값을 구합니다.
 * 2. 3이 1보다 크므로 true를 반환합니다.
 * 3. 수학 값으로 비교한다고 말합니다.
 */

console.log("[코드2] 한 쪽이 문자열일 때")
console.log(1 > "A"); // false
/**
 * 1. 숫자와 문자열을 비교하면 false
 */

console.log("[코드3] 양쪽이 모두 문자열일 때")
console.log(("\u0033" > "\u0032")); // true
console.log("A" > "1"); // true
console.log("가" > "다"); // false
/**
 * 1. 코드 포인트
 * \u0033: 3, \u0032: 2
 * 2. \u0041, \u0031: 1
 * 3. 코드 포인트는 유니코드를 등록할 때 부여
 * 4. 유니코드 등록 순서로 비교
 *    유니코드 사전 순서로 비교한다고도 말함
 * 5. "가"와 "다"도 유니코드 사전 순서로 비교
 */

console.log("[코드4] 문자 하나씩 비교")
console.log("A07" > "A21"); // false
/**
 * 1. 왼쪽에서 오른쪽으로 문자 하나씩 비교
 *    A와 A가 같으므로 다음을 비교
 *    0과 2를 비교하게 되며, false 반환
 * 2. 결정이 되면 다음 것은 비교하지 않습니다.
 */