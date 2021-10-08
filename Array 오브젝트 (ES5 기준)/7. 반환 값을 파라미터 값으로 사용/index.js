/**
 * reduce()
 *
 * 구분 - 데이터(값)
 * data - 반복 대상
 * 파라미터 1. 콜백 함수
 *       2. 초깃값opt
 * 반환 - 콜백 함수에서 반환한 값
 *
 * - forEach()처럼 시맨틱 접근
 * - 배열 끝까지 콜백 함수 호출
 *    - 파라미터 작성 여부에 따라 처리가 다름
 */

/**
 * reduce()
 * - 콜백 함수만 작성한 경우
 *    - 즉, 파라미터를 하나만 작성 [코드1]
 * - 처음 콜백 함수를 호출할 때
 *    - 인덱스 [0]의 값을 직전 값에 설정
 *    - 인덱스 [1]의 값을 현재 값에 설정
 *    - 인덱스에 1을 설정
 * - 두 번째로 콜백 함수를 호출할 때
 *    - 콜백 함수에서 반환된 값을 직전 값에 설정
 *    - 인덱스 [2]의 값을 현재 값에 설정
 */
console.log("[코드1] 첫 번째 파라미터만 작성");
let value = [1, 3, 5, 7];
let fn = function (prev, curr, index, all) {
  console.log(prev + "." + curr); // 1.3 4.5 9.7
  return prev + curr;
};
let result = value.reduce(fn);
console.log("결과:", result);  // 결과: 16
/**
 * 1. 4번이 아니라 3번 반복한 것은
 *    처음 시작할 때 인덱스가 1이기 때문입니다.
 */

/**
 * reduce()
 * - 두 번째 파라미터를 작성한 경우 [코드2]
 * - 처음 콜백 함수를 호출할 때
 *    - 두 번째 파라미터 값을 직전 값에 설정
 *    - 인덱스 [0]의 값을 현재 값에 설정
 *    - 인덱스에 0을 설정
 * - 두 번째로 콜백 함수를 호출할 때
 *    - 콜백 함수에서 반환된 값을 직전 값에 설정
 *    - 인덱스 [1]의 값을 현재 값에 설정
 */
console.log("[코드2] 두 번째 파라미터 작성");
let value2 = [1, 3, 5];
let fn2 = function (prev, curr, index, all) {
  console.log(prev + '.' + curr); // 7.1 8.3 11.5
  return prev + curr;
};
let result2 = value2.reduce(fn2, 7);
console.log("반환:", result2);  // 반환: 16
/**
 * 1.두 번째 파라미터에 초깃값으로 7을 작성
 * 2. 처음 콜백 함수를 호출할 때
 *    두 번째 파라미터 값 7을 prev에 설정
 *    prev:7, curr:1, index:0, 반환값:8
 * 3. 두 번째 콜백 함수를 호출할 때
 *    prev:8, curr:3, index:1, 반환값: 11
 */

/**
 * reduceRight()
 *
 * 구분 - 데이터(값)
 * data - 반복 대상
 * 파라미터 1. 콜백 함수
 *       2. 초깃값opt
 * 반환 - 콜백 함수에서 반환한 값
 *
 * - reduce()와 처리 방법 같음
 * - 배열 끝에서 앞으로 하나씩 읽어가면서
 *    - 콜백 함수에서 반환한 값을 반환 [코드3]
 */
console.log("[코드3] 배열 끝에서 앞으로 처리");
let value3 = [1, 3, 5, 7];
let fn3 = function (prev, curr, index, all) {
  console.log(prev + "," + curr); // 7,5  12,3  15,1
  return prev + curr;
};
let result3 = value3.reduceRight(fn3);
console.log("반환:", result3);  // 반환: 16