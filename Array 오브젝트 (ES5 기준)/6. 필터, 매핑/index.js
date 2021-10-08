/**
 * filter()
 * 구분 - 데이터(값)
 * data - 반복 대상
 * 파라미터 1. 콜백 함수
 *       2. this로 참조할 오브젝트opt
 * 반환 - [true일 때의 엘리먼트]
 *
 * - forEach()처럼 시맨틱 접근
 * - 배열의 엘리먼트를 하나씩 읽어가면서
 *    - 콜백 함수에서 true를 반환하면
 *      현재 읽은 엘리먼트를 반환 [코드1]
 * - 조건에 맞는 엘리먼트를 추려낼 때 유용
 */
console.log("[코드1] true일 때 엘리먼트 반환");
let value = [10, 20, 30, 40];
let fn = function (el, index, all) {
  return el > 15;
};
let result = value.filter(fn);
console.log(result);  // [20, 30, 40]]
/**
 * 1. [20, 30, 40]이 15보다 크므로
 *    return el > 15에서 비교 결과가 true입니다.
 * 2. true일 때 현재의 엘리먼트를 반환합니다.
 * 3. 다수를 반환할 수 있으므로
 *    반환되는 엘리먼트를 배열에 첨부합니다.
 * 4. 콜백 함수에서 false만 반환하면
 *    즉, true가 하나도 없으면
 *    빈 배열이 result 변스에 할당됩니다.
 */

/**
 * map()
 *
 * 구분 - 데이터(값)
 * data - 반복 대상
 * 파라미터 1. 콜백 함수
 *       2. this로 참조할 오브젝트opt
 * 반환 - [콜백 함수에서 반환한 엘리먼트]
 *
 * - forEach()처럼 시맨틱 접근
 * - 배열의 엘리먼트를 하나씩 읽어가면서
 *    - 콜백 함수에서 반환한 값을
 *      새로운 배열에 첨부하여 반환 [코드2]
 */
console.log("[코드2] 반환한 값을 배열에 첨부");
let value2 = [10, 20, 30];
let fn2 = function (el, idnex, all) {
  return el + this.add;
};

let point = { add: 100 };
let result2 = value2.map(fn2, point);
console.log(result2); // [110, 120, 130]