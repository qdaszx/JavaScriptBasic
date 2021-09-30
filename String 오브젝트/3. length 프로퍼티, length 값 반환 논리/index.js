/**
 * length 프로퍼티
 * - 문자 수 반환 [코드1]
 * - length 프로퍼티 활용 [코드2]
 * - length 값이 반환되는 논리
 */
console.log("[코드1] 문자 수 반환");
let value = "ABC";
console.log(value.length);  // 3
/**
 * 1. "ABC"에 문자가 3개이므로 3을 반환
 */

console.log("[코드2] length 프로퍼티 활용");
let value2 = "ABC";
for (let k = 0; k < value2.length; k++) {
  console.log(value2[k]); // A B C
};
/**
 * 1. "ABC"를 문자 하나씩 분리하여 반복
 * 2. 따라서 3번 반복합니다.
 */

/**
 * "ABC"가 문자열입니다.
 * value.length를 만나면 처음에 value에 대한 타입을 구합니다 -> String입니다
 * 그러면 내부(자바스크립트 엔진)에서 new String("ABC")를 만듭니다.
 * 자연스럽게 "ABC"값은 [[PrimitiveValue]]값에 설정됩니다.
 * 이때, "ABC"를 보고 length 프로퍼티를 만듭니다 -> 값이 3
 * value가 내부에서 만든 인스턴스가 되면서 value.length를 실행한다
 */