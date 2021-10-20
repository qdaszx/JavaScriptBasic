/**
 * this와 콜백 함수
 *
 * 1. ES5의 map(), forEach() 처럼
 *    - 콜백 함수가 있는 메소드는
 *    - 두 번째 파라미터에
 *    - this에 참조할 오브젝트를 작성(option)
 * 2. function callback(element, index, data) {
 *       return element + this.value;
 *    };
 *    - map()에서 호출하는 콜백 함수
 * 3. return data.map(callback, obj);
 *    - map()의 두 번째 파라미터에 obj를 작성
 *    - callback()에서 obj를 this로 참조합니다.
 * 4. map()의 코드는 바꾸지 않고
 *    - obj 값과 data 파라미터 값만 바꾸면 됩니다.
 */
console.log("[코드1] 콜백 함수에서 this 사용");
var obj = { value: 100 };
var data = [5, 6, 7];

function callback(element, index, data) {
  return element + this.value;
};
function get(data) {
  return data.map(callback, obj);
};
var result = get(data);
console.log(result);  // [105, 106, 107]