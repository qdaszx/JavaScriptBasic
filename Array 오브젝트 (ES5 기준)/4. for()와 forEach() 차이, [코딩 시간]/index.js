/**
 * forEach()
 * - forEach()를 시작할 때 반복 범위 결정
 * - 엘리먼트를 추가하더라도 처리하지 않음 [코드1]
 * - 현재 인덱스보다 큰 인덱스의 값을
 *   변경하면 변경된 값을 사용 [코드2]
 *    - 현재 인덱스보다 작은 인덱스의 값을
 *      변경하면 처리하지 않음(당연)
 * - 현재 인덱스보다 큰 인덱스의
 *   엘리먼트를 삭제하면
 *   배열에서 삭제되므로 반복에서 제외됨 [코드3]
 *    - 추가는 처리하지 않지만, 삭제는 반영
 */
console.log("[코드1] 반복 도중에 엘리먼트 추가");
let list = [1, 2, 3];
let fn = function (el, index, all) {
  if (index === 0) {
    list.push("AB");
  };
  console.log(el);  // 1 2 3
};
list.forEach(fn);
/**
 * 1. 배열을 처음 읽었을 때
 *    즉, index가 0일 때
 *    배열 끝에 "AB"를 첨부합니다.
 * 2. 이렇게 반복하는 도중에
 *    배열에 엘리먼트를 추가하면 처리하지 않습니다.
 */

console.log("[코드2] 큰 인덱스의 값 변경");
let list2 = [1, 2, 3];
let fn2 = function (el, index, all) {
  if (index === 0) {
    list2[2] = 345;
  };
  console.log(el);  // 1 2 345
};
list2.forEach(fn2);
/**
 * 1. index가 0일 때 2번 인덱스의 값을 345로 변경
 * 2. 변경된 값을 사용합니다.
 */

console.log("[코드3] 큰 인덱스의 엘리먼트 삭제");
let list3 = [1, 2, 3];
let fn3 = function (el, index, all) {
  if (index === 0) {
    delete list3[2];
  };
  console.log(el);  // 1 2
};
list3.forEach(fn3);

/**
 * for()와 forEach()
 * - forEach()는 시맨틱 접근
 *    - 처음부터 끝까지 반복한다는 시맨틱
 *    - 반복 중간에 끝나지 않는다는 시맨틱
 *    - 시맨틱으로 소스 코드의 가독성 향상
 * - for()는 함수 코드를 읽어야 알 수 있음
 *    - break, continue
 * - forEach()는 반복만 하며
 *    - 콜백 함수에서 기능 처리, this 사용 가능
 * - forEach()는 인덱스 0부터 시작
 *    - for()와 같이 인덱스 증가 값을 조정할 수 없음
 *    - 뒤에서 앞으로 읽을 수도 없음, 이것도 시맨틱 접근
 */

// 프로그램은 코드가 아닌 시나리오로 풉니다.

/**
 * [코딩 시간]
 * - 목적: 함수 호출 시간 측정
 * - [요구 사항]
 * - 함수 코드가 없는 빈 함수 작성
 *   함수 이름: check()
 * - 배열에 1부터 1,000,000까지 작성
 * - forEach()로 배열을 반복하면서
 *   check() 함수 호출
 *   즉, 1,000,000번 check() 함수 호출
 * - 반복이 끝나면 실행 시간을 출력하세요.
 *   종료 시각 - 시작 시각 [힌트]
 *
 * [힌트]
 * - 힌트
 *    - 현재 시각 구하기:
 *      var start = Date.now();
 *    - 현재 시각을 1/1000초로 반환
 * - 결론
 *    - 실행 시간이 매우 짧습니다.
 *    - 함수 호출에 부담을 갖지 않아도 됩니다.
 */
let list5 = Array.from({ length: 1000000 }, (v, i) => i + 1);
let check = function () {};
let start = Date.now();
list5.forEach(check);
let end = Date.now();

console.log(end - start);