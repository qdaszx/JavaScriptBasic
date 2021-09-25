/**
 * - 형태:
 *    break;
 *    break 식별자;
 * - 반복문 종료 [코드1] [코드2]
 * - for, for~in, while, do~while, switch에서 사용
 */

console.log("[코드1] break 위치에서 종료")
let k = 0, m = 0;
while (k < 3) {
  m++;
  if (m === 2) {
    break;
  };
  console.log(m); // 1
};
/**
 * 1. m이 2이면 while()문을 종료 console.log(m)을 실행하지 않습니다.
 */

console.log("[코드2] 세미콜론 자동 첨부")
for (let k2 = 0; k2 < 3; k2++) {
  if (k2 === 1) {
    break
    console.log("k2 === 1");
  };
  console.log(k2);  // 0
};
/**
 * 1. break  끝에 세미콜론을 자동으로 첨부
 * 2. console.log("k2 === 1")을 실행하지 않습니다.
 */

/**
 * continue
 * - 형태:
 *    continue;
 *    continue 식별자;
 * - 반복문의 처음으로 분기 [코드3]
 * - for, for~in, while, do~while에서 사용
 */

console.log("[코드3] continue 위치에서 분기")
for (let k3 = 0; k3 < 5; k3++) {
  if (k3 === 2 || k3 === 3) {
    continue;
  };
  console.log(k3);  // 0 1 4
};
/**
 * 1. k3가 2 또는 3이면 continue문을 수행
 * 2. 아래의 console.log(k3)를 실행하지 않습니다.
 */