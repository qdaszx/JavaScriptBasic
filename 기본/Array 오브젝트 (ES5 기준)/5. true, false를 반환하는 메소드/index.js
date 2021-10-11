/**
 * every()
 *
 * 구분 - 데이터(값)
 * data - 반복 대상
 * 파라미터 1. 콜백 함수
 *       2. this를 참조할 오브젝트opt
 * 반환 - true, false
 *
 * - forEach()처럼 시맨틱 접근
 * - 배열의 엘리먼트를 하나씩 읽어가면서
 *    - false를 반환할 때까지 콜백 함수 호출
 *    - 즉, false가 반환되면 반복 종료
 *    - false를 반환하지 않으면 true 반환 [코드1]
 * - false가 되는 조건이
 *   배열의 앞에 있을 때 효율성 높음
 */
console.log("[코드1] true, false 반환");
let value = [20, 10, 30, 40];
let fn = function (el, index, all) {
  console.log(el);  // 20 10
  return el > 15;
};
let result = value.every(fn);
console.log("결과:", result); // 결과: false
/**
 * 1. 처음에 20을 읽으면 15보다 크므로 true 반환
 *    true이므로 다음 엘리먼트를 읽습니다.
 * 2. 다음의 10은 15보다 작으므로 false 반환
 *    false이므로 반복을 종료합니다.
 * 3. 따라서 [30, 40]은 처리하지 않습니다.
 * 4. result 변수에 false가 할당됩니다.
 * 5. 배열의 마지막까지 처리했는데
 *    false가 반환되지 않으면
 *    true가 반환되며 result 변수에 설정됩니다.
 */

/**
 * some()
 *
 * 구분 - 데이터(값)
 * data - 반복 대상
 * 파라미터 1. 콜백 함수
 *       2. this로 참조할 오브젝트opt
 * 반환 - true, false
 *
 * - every()처럼 시맨틱 접근
 * - 단, true를 반환할 때까지 콜백 함수 호출
 *    - 즉, true가 반환되면 반복 자동 종료
 *    - true를 반환하지 않으면 false 반환 [코드2]
 * - true가 되는 조건이
 *   배열의 앞에 있을 때 효율성 높음
 */
console.log("[코드2] true, false 반환");
let value2 = [10, 20, 30, 40];
let fn2 = function (el, index, all) {
  console.log(el);  // 10 20
  return el > 15;
};
let result2 = value2.some(fn2);
console.log("결과:", result2);  // 결과: true
/**
 * 1. 처음에 10을 읽으면 15보다 작으므로 false 반환
 *    false이므로 다음 엘리멘트를 읽습니다.
 * 2. 다음의 20은 15보다 크므로 true 반환
 *    true이므로 반복을 종료합니다.
 * 3. 따라서 [30, 40]은 처리하지 않습니다.
 * 4. result 변수에 true가 할당됩니다.
 */