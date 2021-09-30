/**
 * charAt()
 *
 * 구분 - 데이터(값)
 * data - 반환 대상
 * 파라미터 - 반환 기준 인덱스(index)
 * 반환 - 인덱스번째 문자
 *
 * - 인덱스의 문자를 반환 [코드1]
 * - 문자열 길이보다 인덱스가 크면
 *    - 빈 문자열 반환 [코드2]
 * - 일반적으로 존재하지 않으면
 *    undefined를 반환 [코드3]
 */
console.log("[코드1] 인덱스의 문자 반환");
let value = "sports";
console.log(value.charAt(1)); // p
console.log(value[1]);  // p
/**
 * 1. JS에서 인덱스는 0부터 시작
 * 2. 0번 인덱스는 s, 1번 인덱스는 p
 *
 * 강좌에서 인덱스 표기 기준
 * - 0번 인덱스는 첫 번째 인덱스이고
 * - 1번 인덱스는 두 번째 인덱스입니다.
 *
 * 3. value.charAt(1)을
 *    ES5에서 [1] 형태로 사용할 수 있습니다.
 */

console.log("[코드2] 빈 문자열 반환");
let value2 = "sports";
console.log(value2.charAt(12));
/**
 * 1. 전체 문자열 수는 6
 * 2. 파라미터의 인덱스가
 *    전체 문자열 길이보다 크면 빈 문자열 반환
 */

console.log("[코드3] [1] 형태 사용");
let value3 = "sports";
console.log(value3[12]);  // undefined
/**
 * 1. value[12]에서 12번째 인덱스가 없으며
 *    undefined 반환
 * 2. charAt(12)에서
 *    빈 문자열을 반환하는 것과는 차이 있음
 * 3. 개념적으로 undefined 반환이 적절합니다.
 * - undefined는 시맨틱적으로 인덱스 번째가
 *   없다는 뉘앙스가 강합니다.
 */

/**
 * indexOf()
 *
 * 구분 - 데이터(값)
 * data - 검색 대상
 * 파라미터 - 검색할 문자열
 *        - 검색 시작 위치, 디폴트: 0
 * 반환 - 인덱스
 *
 * - data 위치의 문자열에서
 *   파라미터의 문자와 같은
 *   첫 번째 인덱스를 반환
 * - 검색 기준
 *    - 왼쪽에서 오른쪽으로 검색 [코드4]
 *    - 두번째 파라미터를 작성하면
 *      작성한 인덱스부터 검색 [코드5]
 *    - 같은 문자가 없으면 -1 반환 [코드6] [코드7]
 */
console.log("[코드4] 왼쪽에서 오른쪽으로 검색");
let value4 = "123123";
console.log(value4.indexOf(2)); // 1
console.log(value4.indexOf(23));  // 1
/**
 * 1. "123123" 에서 2가 두 개이지만
 *    처음 인덱스를 반환하므로 1을 반환
 * 2. 값을 구하게 되면
 *    더 이상 값을 구하지 않습니다.
 * 3. indexOf(23)에서 23이 존재하며
 *    2가 검색된 인덱스를 반환합니다.
 */

console.log("[코드5] 두 번째 파라미터부터 검색");
let value5 = "123123";
console.log(value4.indexOf(2, 3));  // 4
/**
 * 1. indexOf(2, 3)에서 3은
 *    3번 인덱스부터 검색하므로
 *    1이 아닌 4를 반환
 */

console.log("[코드6] 같은 문자가 없으면 -1 반환");
let value6 = "123123";
console.log(value6.indexOf(15));  // -1

console.log("[코드7] 두 번째 파라미터의 검색 기준");
let value7 = "123123";
console.log(value7.indexOf(2, -1)); // 1
console.log(value7.indexOf(2, 9));  // -1
console.log(value7.indexOf(2, "A"));  // 1
/**
 * 1. 두 번째 파라미터 값이
 *    0보다 작으면 처음부터 검색
 * 2. 두 번째 파라미터 값이
 *    length보다 크면 -1 반환
 * 3. 두 번째 파라미터가 NaN이면
 *    처음부터 검색
 */

/**
 * lastIndexOf()
 *
 * 구분 - 데이터(값)
 * data - 검색 대상
 * 파라미터 - 검색할 문자열
 *        - 검색 시작 위치, 디폴트: 0
 * 반환 - 인덱스
 *
 * - data 위치의 문자열에서
 *   파라미터의 문자와 같은 인덱스를 반환
 *   단, 뒤에서 앞으로 검색 [코드8]
 * - 검색 기준
 *    - 두번째 파라미터를 작성하면
 *      작성한 인덱스부터 검색 [코드9]
 *    - 같은 문자가 없으면 -1 반환
 */
console.log("[코드8] 오른쪽에서 왼쪽으로 검색");
let value8 = "123123";
console.log(value8.lastIndexOf(2)); // 4
/**
 * 1. "123123"에서 2가 두 개이지만
 *    마지막 인덱스를 반환하므로 4를 반환
 */

console.log("[코드9] 두 번째 파라미터에 음수 작성");
let value9 = "1231231";
console.log(value9.lastIndexOf(1, 4));  // 3
console.log(value9.lastIndexOf(2, -1)); // -1
/**
 * 1. 두 번째 파라미터가 0보다 작으면 -1 반환
 */

/**
 * [코딩 시간]
 * - 요구 사항
 *    - indexOf()와 lastIndexOf()를 통합하여
 *      발생 가능한 케이스를 기술하고
 *      이에 맞는 코드를 작성하세요.
 * - 목적
 *    - 코드 작성의 사고
 * - 작성 예
 *    - 두 번째 파라미터에 음수를 작성하면 -1을 반환한다.
 *    - var value = "1234512345"
 *      console.log(value.lastIndexOf(3, -2));
 */

console.log("indexOf를 이용한 해당 문자열 갯수 찾기")
let test = "hello i'm ilkyo! coding is so easy!!";
let searchAlp = "e";
let index = test.indexOf(searchAlp);
let cnt = 0;
while (index !== -1) {
  cnt++;
  index = test.indexOf(searchAlp, index + 1);
};
console.log(cnt);