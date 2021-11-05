/*
배열 차원 변환 (ES2019)

구분 ::: 데이터(값)
형태 ::: Array.prototype.flat(), ES2019
파라미터 ::: 대상 깊이 opt, 디폴트: 1
반환 ::: 새로운 배열

- 배열 차원을 변환하고 새로운 배열로 설정하여 반환 [코드1]
    - 파라미터의 대상 깊이에 따라 변환이 다름

- 파라미터에 0을 작성한 경우 [코드2]

- 파라미터에 1보다 큰 값을 작성 [코드3]

- 빈 엘리먼트를 삭제 [코드4]
*/

console.log("[코드1] 디폴트 값 + 1");
const list = [1, 2, [3, 4]];
const result = list.flat();
console.log(result);  // [1, 2, 3, 4]
console.log(list);  // [1, 2, [3, 4]]
/**
 * 1. flat() 파라미터에 값을 작성하지 않았으며 디폴트 값을 1입니다.
 * 2. 파라미터에 1을 더하면 2차원이 되며 2차원까지를 엘리먼트로 반환합니다.
 * 3. [1, 2]는 1, 2가 되며 [[3, 4]]도 3, 4가 됩니다.
 * 4. 변환한 엘리먼트를 새로운 배열에 설정하여 반환합니다. 따라서 1차원 배열의 엘리먼트로 설정됩니다.
 * 5. flat() 대상인 list 배열은 바뀌지 않습니다.
 */

console.log("[코드2] 파라미터에 0을 작성");
const list2 = [1, 2, [3, 4]];
console.log(list2.flat(0));  // [1, 2, [3, 4]]
/**
 * 1. 파라미터 값 0에 1을 더하면 1입니다.
 * 2. [1, 2]는 1, 2가 되며 배열에 설정하여 반환하므로 [1, 2]가 됩니다.
 * 3. [[3, 4]]는 [3, 4]가 되며 배열에 설정하여 반환하므로 [[3, 4]]가 됩니다.
 */

console.log("[코드3] 파라미터에 1보다 큰 값 작성");
const list3 = [1, 2, [3, 4, [5, [6]]]];
console.log(list3.flat(2)); //  [1, 2, 3, 4, 5, [6]]
/**
 * 1. 파라미터에 1을 더하면 3차원까지 엘리먼트로 변환하므로 [[[5]]]까지 변환합니다.
 * 2. 4차원인 6은 4차원에서 3차원을 빼면 1차원이 됩니다. 즉, [6]으로 변환됩니다. 배열에 설정하여 반환하므로 [[6]]이 됩니다.
 */

console.log("[코드4] 빈 엘리먼트 삭제");
const list4 = [1, 2, , , , [3, 4]];
console.log(list4.length);  // 6
const change = list4.flat();
console.log(change);  // [1, 2, 3, 4]
console.log(change.length); // 4

/*
flatMap()

구분 ::: 데이터(값)
형태 ::: Array.prototype.flatMap(), ES2019
파라미터 ::: 1. 콜백 함수, 2. 콜백 함수에서 this로 참조할 오브젝트opt
반환 ::: 새로운 배열

- flat()와 기본 기능은 같음

- 배열을 반복하면서 콜백 함수 호출 [코드5]
    - 파라미터: 엘리먼트, 인덱스, 배열 전체
    - 콜백 함수에서 반환한 값을 배열로 반환

- map()과 차이 [코드6]
*/

console.log("[코드5] flatMap()");
const list5 = [10, 20];
const cb = (element, index, all) => {
  return element + 5;
};
console.log(list5.flatMap(cb)); // [15, 25]
console.log(list5.map(cb)); // [15, 25]
/**
 * 1. 콜백 함수에서 파라미터로 넘겨준 값을 단지 값만 변경하여 반환하면
 * 2. map()과 flatMap()의 차이가 없습니다.
 */

console.log("[코드6] map()과 차이");
const list6 = [10, 20];
const cb6 = (element, index, all) => {
  return [element + 5];
};
console.log(list6.map(cb6));  // [[15], [25]]
console.log(list6.flatMap(cb6));  // [15, 25]
/**
 * 1. 콜백 함수에서 배열로 반환합니다.
 * 2. map()은 반환된 배열을 새로운 배열로 설정하여 반환하므로 2차원이 배열이 되지만
 * 3. flatMap()은 반환된 값을 1차원 줄여서 반환합니다.
 * 4. 이것이 map()과 flatMap()의 차이입니다.
 */