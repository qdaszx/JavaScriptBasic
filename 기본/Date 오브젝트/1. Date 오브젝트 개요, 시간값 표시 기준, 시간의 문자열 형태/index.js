/**
 * Date 오브젝트 개요
 * - 년월일, 시분초, 밀리초 제공
 *    - 시간값 이라고 부름
 * - UTC 기준
 *    - 1970년 1월 1일 기준으로 밀리초를 제공
 *      남는 초는 무시
 *    - 1970.01.01 0시 기준으로
 *      전후 100,000,000일 지원
 * - UTC와 GMT
 *    - JS는 UTC 기준
 */

/**
 * 시간값 표시 기준
 * - 월은 0부터 시작
 *    - 0: 1월, 1: 2월, 11: 12월
 * - 일은 1에서 31일까지 정수로 표시
 * - 요일은 9부터 시작
 *    - 0: 일요일, 1: 월요일, 6: 토요일 [코드1]
 */
console.log("[코드1] 시각 표시 기준");
let obj = new Date(1970, 1, 1, 1, 1, 1, 1);
console.log(obj.toLocaleString());  // 1970. 2. 1. 오전 1:01:01
/**
 * 1. 년월일, 시분초, 밀리초
 * 2. 두 번째가 월이며 1은 2월
 */

/**
 * 시간의 문자열 형태
 * 형태 - 개요
 * 2015-11-30T09:12:34.123
 * YYYY - 그레고리력(Gregorian Calendar)으로 0000 ~ 9999년의 10진수
 * - 하이픈
 * MM - 월, 00에서 11까지
 * - 하이픈
 * DD - 일, 01에서 31까지
 * T - 시간을 나타내는 문자
 * HH - 시, 오전 0시부터 경과 시간. 00에서 24까지 두 자리로 1시간 단위 값
 * : - 콜론
 * mm - 분, 00에서 59로 표시
 * . - 초와 밀리초 구분
 * sss - 밀리초, 3자리로 표시
 * Z - 타임존(Time zone). + 또는 -로 연결하고 HH:mm 형태로도 표시
 */