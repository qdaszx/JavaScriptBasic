/**
 * switch
 * - 형태:
 *    switch (표현식) {
 *      case 표현식: 문장 리스트 opt
 *      defalut: 문장 리스트 opt
 * };
 * - switch 표현식의 평가 값과 일치하는 case 문 수행 [코드1]
 * - break 사용 [코드2]
 * - 일치하는 case가 없으면 default 수행 [코드3]
 * - OR(||) 형태 [코드4]
 */

console.log("[코드1] 일치하는 case문 실행")
let exp = 1;
switch (exp) {
  case 1:
    console.log(100); // 100
  case 2:
    console.log(200); // 200
};
/**
 * 1. switch(exp)에서 exp를 평가하여 값을 구하고
 *    구한 값에 일치하는 case 문을 수행
 * 2. exp 값이 1이므로 case 1: 을 수행
 * 주의
 * 3. case 1 아래의 모든 문장을 수행하므로 200이 출력됩니다.
 * 4. 이를 방지하려면 break를 작성해야 합니다.
 */

console.log("[코드2] break 사용")
let exp2 = 1;
switch (exp2) {
  case 1:
    console.log(100); // 100
    break;
  case 2:
    console.log(200);
}
/**
 * 1. switch(exp2)의 값이 1이므로 case 1:을 수행
 * 2. break 문을 만나 switch 문을 빠져 나갑니다.
 * 3. 따라서 case 2:를 수행하지 않게 됩니다.
 */

console.log("[코드3] default 실행")
let exp3 = 7, value;
switch (exp3) {
  case 1:
    value = 100;
  default:
    value = 700;
  case 2:
    value = 200;
};
console.log(value);
/**
 * 1. switch(exp3)의 값이 7이므로
 *    일치하는 case가 없으며
 * 2. 이때 default: 코드를 실행합니다.
 * 3. case 2:도 실행합니다
 */

console.log("[코드4] OR(||) 형태")
let exp4 = 3;
switch (exp4) {
  case 2:
  case 3:
    console.log(100);
};
/**
 * 1. exp4 값이 2 또는 3이면 case 수행
 */