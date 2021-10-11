/**
 * charCodeAt()
 *
 * 구분 - 데이터(값)
 * data - 반환 대상
 * 파라미터 - 반환 기준 인덱스(index)
 * 반환 - 인덱스 번째 문자
 *
 * - 인덱스 번째의 문자를
 *   유니코드의 코드 포인트 값을 반환
 * - 인덱스가 문자열 길이보다 크면
 *   NaN 반환 [코드1]
 */
console.log("[코드1] 유니코드로 반환");
let value = "1Aa가";
for (let k = 0; k < value.length; k++) {
  console.log(value.charCodeAt(k)); // 49 65 97 44032
};
console.log(value.charCodeAt(12));  // NaN
/**
 *  1. charCodeAt(12)에서
 *    12번째가 없으며 NaN 반환
 */

/**
 * fromCharCode()
 *
 * 구분 - 데이터(값)
 * data - String 오브젝트
 * 파라미터 - 유니코드, 다수 작성 가능
 * 반환 - 변환한 문자
 *
 * - 파라미터의 유니코드를
 *   문자열로 변환하고 연결하여 반환
 *    - 작성하지 않으면 빈 문자열 반환
 * - 작성 방법
 *    - data 위치에 String 오브젝트 작성
 *      변환 대상 값을 작성하지 않음
 *    - String.fromCharCode() 형태 [코드2]
 */
console.log("[코드2] 유니코드를 문자열로");
console.log(String.fromCharCode(49, 65, 97, 44032)) // 1Aa가

/**
 * localeCompare()
 *
 * 구분 - 데이터(값)
 * data - 비교 대상
 * 파라미터 - 비교할 값
 * 반환 - 1(앞), 0(같음), -1(뒤)
 *
 * - 값을 비교하여
 *   위치를 나타내는 값으로 반환
 * - 위치 값: 1(앞), 0(같음), -1(뒤)
 * - Unicode 사전 순으로 비교 [코드3]
 */
console.log("[코드3] 비교 결과를 1, 0, -1로 반환");
let value2 = "나";
console.log(value2.localeCompare("가"));  // 1
console.log(value2.localeCompare("나"));  // 0
console.log(value2.localeCompare("다"));  // -1
/**
 * 1. "가"가 "나"보다 앞에 있으므로 1 반환
 * 2. 비교 기준과 비교 대상이 모두 "나"이므로 0
 * 3. "다"가 "나"보다 뒤에 있으므로 -1 반환
 */