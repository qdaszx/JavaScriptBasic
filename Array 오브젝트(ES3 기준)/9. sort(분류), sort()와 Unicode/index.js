/**
 * sort()
 *
 * 구분 - 데이터(값)
 * data - 대상
 * 파라미터 - 함수opt
 * 반환 - sort 결과
 *
 * - 엘리먼트 값을 승순으로 정렬
 * - 정렬 기준은 엘리먼트 값의 Unicode
 *    - 코드 포인트가 작으면 앞에 오고
 *      크면 뒤에 옵니다. [코드1] [코드2]
 * - 주의: sort 대상 배열도 정렬됨 [코드3]
 * - 값이 undefined이면 끝으로 이동 [코드4]
 */
console.log("[코드1] 가나다 순서");
let value = [4, 3, 2, 1];
console.log(value.sort());  // [1, 2, 3, 4]

console.log("[코드2] Unicode 순서");
let value2 = ["A1", "A01", "B2", "B02"];
console.log(value2.sort()); // ["A01", "A1", "B02", "B2"]
/**
 * 1. 왼쪽에서 오른쪽으로 문자 하나씩 비교하여 정렬
 * 2. A01과 A1에서 A가 같으므로 다음 문자 비교
 * 3. 0과 1을 비교하게 되며
 *    0이 1보다 코드 포인트가 앞에 있으므로 앞에 정렬
 */

console.log("[코드3] sort 대상도 sort됨");
let value3 = [4, 3, 2, 1];
console.log(value3.sort()); // [1, 2, 3, 4]
console.log(value3); // [1, 2, 3, 4]

console.log("[코드4] undefind는 뒤로 이동");
let value4 = [, , 1, 2];
console.log(value4.sort()); // [1, 2, undefined, undefined]

/**
 * sort()와 Unicode
 * - 숫자에 해당하는 Unicode의
 *   code point로 정렬 [코드5]
 */
console.log("[코드5] 숫자를 Unicode로 변환");
let value5 = [101, 26, 7, 1234];
console.log(value5.sort()); // [101, 1234, 26, 7]
/**
 * 1. 사람이 생각하는 일반적인 정렬은
 *    [7, 26, 101, 1234]입니다.
 * 2. [실행 결과]처럼 정렬된 것은
 *    코드 포인트로 비교하여 sort하기 때문
 * 3. 101과 26에서 1이 2보다 작으므로
 *    101이 26보다 작은 것으로 정렬
 * 4. 또한 101과 7에서 1이 7보다 작으므로
 *    101이 7보다 작은 것으로 정렬
 * 5. 이를 해결하려면 sort()의 파라미터에
 *    함수를 작성하고 함수에서 정렬해야 합니다.
 * 6. 다음 절에서 알고리즘을 다룹니다.
 */