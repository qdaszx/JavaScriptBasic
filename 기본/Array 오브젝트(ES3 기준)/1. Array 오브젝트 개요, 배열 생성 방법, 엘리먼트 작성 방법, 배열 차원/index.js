/**
 * Array 오브젝트 개요
 * - 빌트인 오브젝트
 * - Array(배열) 형태
 *    - [123, "ABC", "가나다"]
 *    - 대괄호 안에 콤마로 구분하여 값 작성
 * - 배열 엘리먼트
 *    - [123, "ABC"]에서 123, "ABC"
 *      각각을 엘리먼트 또는 요소라고 부름
 *    - 강좌에서는 엘리먼트로 표기
 *    - 2의 32승(4,294,967,296) - 1개 [++]
 *
 * [++]
 * - 인덱스 Index
 *    - 엘리먼트 위치를 인덱스라고 부름
 *    - 왼쪽부터 0번 인덱스, 1번 인덱스
 * - 배열 특징
 *    - 엘리먼트 작성이 순서를 갖고 있음
 *    - 배열 전체를 작성하 순서로 읽거나
 *    - 인덱스로 값을 추출할 수 있음
 */

/**
 * 배열 생성 방법
 * - new Array()로 생성
 *    - let book = new Array();
 * - Array()로 생성
 *    - let book = Array();
 * - 대괄호로 생성
 *    - let book = [];
 *    - 일반적으로 이 형태를 사용
 */

/**
 * 엘리먼트 작성 방법
 * - let book = ["책1", "책2"];
 * - 대괄호 안에 콤마로 구분하여 다수 작성 가능
 * - String 타입은 큰따옴표, 작은따옴표 모두 가능
 * - JS의 모든 타입의 값, 오브젝트 사용 가능
 * - 값을 작성하지 않고 콤마만 작성하면
 *   undefined가 설정됨
 */

/**
 * 배열 차원
 * - 1차원 배열
 *    - 대괄호 하나에 엘리먼트 작성
 *    - [12, 34, 56] 형태 [코드1]
 * - 2차원 배열
 *    - 배열 안에 1차원 배열을 작성
 *    - [[12, 34, 56]] [코드2]
 * - 3차원 배열
 *    - 배열 안에 2차원 배열을 작성
 *    - [[[12, 34, 56]]] [코드3]
 */
console.log("[코드1] 1차원 배열");
let list = [12, 34, 56];
for (let k = 0; k < list.length; k++) {
  console.log(list[k]); // 12 34 56
}

console.log("[코드2] 2차원 배열");
let list2 = [[12, 34, 56]];
for (let k = 0; k < list2.length; k++) {
  let one = list2[k];
  for (let m = 0; m < one.length; m++) {
    console.log(one[m]);  // 12 34 56
  }
}
console.log("[코드3] 3차원 배열");
let list3 = [[[12, 34, 56]]];
for (let k = 0; k < list3.length; k++) {
  let one = list3[k];
  for (let m = 0; m < one.length; m++) {
    let two = one[m];
    for (let p = 0; p < two.length; p++) {
      console.log(two[p]);  // 12 34 56
    }
  }
}