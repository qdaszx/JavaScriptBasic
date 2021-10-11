/**
 * 프로퍼티 리스트
 * 이름 - 개요
 * new Date() - 인스턴스 생성
 *
 * Date 함수
 * Date() - 현재 시각 반환
 * Date.parse() - 문자열 값을 밀리초로 변환
 * Date.UTC() - UTC 기준 밀리초로 변환
 * Date.now() - 현재 시각을 밀리초로 반환
 *
 * Date.prototype
 * constructor - 생성자
 * toString() - 일자와 시간을 변환해서 문자열로 반환
 * toUTCString() - UTC 일자와 시간 반환
 * toISOString() - "ISO 8601 확장 형식의 간소화 버전" 형태로 일자와 시간 반환
 * toDateString() - 연월일과 요일을 사람이 읽기 쉬운 형태로 반환
 * toTimeString() - 시분초와 타임존을 사람이 읽기 쉬운 형태로 반환
 * toLocaleString() - 일자와 시간을 지역 언어로 반환
 * toLocaleDateString() - 연월일을 지역 언어로 반환
 * toLocaleTimeString() - 시분초와 오전/오후를 지역 언어로 반환
 * toJSON() - JSON.stringify()와 연동하여 JSON 형태의 일자, 시간 설정
 */

/**
 * 프로퍼티 리스트
 * 이름 - 개요
 * Date.prototype
 * getTime() - 시간값 반환
 * valueOf() - 프리미티브 시간값 반환
 * getFullYear() - 연도 반환
 * getYear() - 세기 구분과 연도 2자리 반환, getFullYear() 사용 권장
 * get Month() - 월 반환
 * getDate() - 일 반환
 * getDay() - 요일 반환
 * getHours - 시 반환
 * getMinutes() - 분 반환
 * getTimezoneoffset() - UTC와 지역 시간 차이를 분으로 반환
 * getSeconds() - 초 반환
 * getMilliseconds() - 밀리초 반환
 * getUTCFullYear() - UTC 연도 반환
 * getUTCMonth() - UTC 월 반환
 * getUTCDate() - UTC 일 반환
 * getUTCDay() - UTC 요일 반환
 * getUTCHours() - UTC 시 반환
 * getUTCMinutes() - UTC 분 반환
 * getUTCSeconds() - UTC 초 반환
 * getUTCMilliseconds - UTC 밀리초 반환
 */

/**
 * 프로퍼티 리스트
 * 이름 - 개요
 * Date.prototype
 * setFullYear() - 연도 변경. 월, 일 변경 가능
 * setYear() - 두 자리로 연도 변경, setFullYear() 사용 권장
 * setMonth() - 월 변경. 일 변경 가능
 * setDate() - 일 변경
 * setHours() - 시 변경
 * setMinutes() - 분 변경. 초, 밀리초 변경 가능
 * setSeconds() - 초 변경. 밀리초 변경 가능
 * setMilliseconds() - 밀리초 변경
 * setTime() - 1970년 1월 1일부터 경과한 밀리초 변경
 * setUTCFullYear() - UTC 연도 변경. 월, 일 변경 가능
 * setUTCMonth() - UTC 월 변경. 일 변경 가능
 * setUTCDate() - UTC 일 변경
 * setUTCHours() - UTC 시 변경
 * setUTCMinutes() - UTC 기준 분 변경. 초, 밀리초 변경 가능
 * setUTCSeconds() - UTC 초 변경. 밀리초 변경 가능
 * setUTCMilliseconds() - UTC 밀리초 변경
 */

/**
 * new Date()
 * 구분 - 데이터(값)
 * 파라미터 - 년, 월[, 일[, 시[, 분[, 초[, 밀리초]]]]]
 * 반환 - 생성한 Date 인스턴스
 *
 * - Date 인스턴스 생성
 *    - 파라미터 값을 인스턴스의
 *      프리미티 값으로 설정 [코드1]
 * - 파라미터를 작성하지 않으면
 *    - UTC 기준 현재 시간 [코드2]
 * - 파라미터를 문자열로 작성하면
 *    - "2019-12-15T09:11:23.123"
 *    - 밀리초로 변환 [코드3]
 * - 시간 자동 넘김 [코드4]
 */
console.log("[코드1] Date 인스턴스 생성");
let obj = new Date(2019, 02);
console.log(obj); // Fri Mar 01 2019 00:00:00 GMT+0900 (한국 표준시)
/**
 * 1. 값을 작성하지 않으면 0으로 간주
 */

console.log("[코드2] 현재 시간");
console.log(new Date());  // Mon Oct 11 2021 22:54:39 GMT+0900 (한국 표준시)

console.log("[코드3] 문자열로 작성");
console.log(new Date("2019-02")); // Fri Feb 01 2019 09:00:00 GMT+0900 (한국 표준시)
/**
 * 1. 문자열 작성의 차이
 * 2. new Date(2019, 02)에서 02가 3월로 변환되지만
 *    new Date("2019-02")는 2월로 변환됩니다.
 */

console.log("[코드4] 시간 자동 넘김");
console.log(new Date(2019, 11, 34));  // Fri Jan 03 2020 00:00:00 GMT+0900 (한국 표준시)
/**
 * 1. 월일시분초 범위를 넘치면 상위 시간값에 반영됩니다.
 *    단, 문자열로 작성하면 에러가 납니다.
 * 2. new Date(2019, 11, 34)에서
 * 3. 34가 31을 넘치므로
 *    3을 남겨두고 11에 1을 더합니다.
 * 4. 12는 13월이므로
 *    1을 남겨두고 2019에 1을 더합니다
 * 5. 그래서 2020.01.03이 출력되었습니다.
 */


/**
 * Date.now()
 * 구분 - 데이터(값)
 * object - Date 오브젝트
 * 파라미터 - 사용하지 않음
 * 반환 - 밀리초
 *
 * - 현재 시간을 밀리초로 반환 [코드5]
 */
console.log("[코드5] 현재 시간 반환");
console.log(Date.now());  // 1633960816749
console.log(new Date());  // Mon Oct 11 2021 23:00:16 GMT+0900 (한국 표준시)
/**
 * 1. 값을 작성하지 않으면 0으로 간주
 * 2. Date.now()와 new Date()가 같은 시간값이지만
 *    값 표시가 다릅니다.
 */


/**
 * Date.parse()
 * 구분 - 데이터(값)
 * object - Date 오브젝트
 * 파라미터 - 년월일, 시분초, 밀리초
 * 반환 - 밀리초
 *
 * - 문자열 값을 밀리초로 변환
 *    - 1970.01.01부터 경과한 시간 [코드6]
 */
console.log("[코드6] 문자열 값을 밀리초로 변환");
console.log(Date.parse("2019-01-23T09:11:23.123")); // 1548202283123

/**
 * Date 오브젝트 함수 분류
 * - 시간을 반환하는 메소드
 *    - getMonth(), getDate() 등 [코드7]
 * - 시간을 설정하는 메소드
 *    - setMonth(), setDate() 등 [코드8]
 * - 메소드 이름으로 기능을 알 수 있으므로 설명 생략
 * - 주의 사항
 *    - 클라이언트의 시간은 사용자가 변경 가능
 *    - 마감 시간처럼 시간이 중요할 때에는
 *      서버 시간 사용
 */
console.log("[코드7] 시간 추출");
let obj7 = new Date(2019, 02, 15);
console.log(obj7.getMonth()); // 2
console.log(obj7.getDate());  // 15

console.log("[코드8] 시간 설정");
let obj8 = new Date();
console.log(obj8.valueOf());  // 1633961083289
console.log(obj8.setMonth(01)); // 1613052283289
console.log(obj8.setDate(15));  // 1613397883289
