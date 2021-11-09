/*
yield 분할 할당, for-of 반복
*/

// yield 분할 할당
console.log("한 줄에 다수의 yield 작성");
function* sports() {
  return [yield yield];
};
const obj = sports();
console.log(obj.next());  // {value: undefined, done: false}
console.log(obj.next(10));  // {value: 10, done: false}
const last = obj.next(20);
console.log(last);  //  {value: [20], done: true}
console.log(last.value);  // [20]
/**
 * 대괄호[] 안에 다수의 yield 작성
 *    - return [yield yield];
 *
 * next(), next(10) 호출
 *    - [실행 결과]에서 보듯이 yield를 연속해서 작성한 것과 같습니다.
 *    - yield를 2개 모두 수행했으므로 더 이상 처리할 yield가 없습니다.
 *
 * 세 번째 next(20) 호출
 *    - 파라미터 값: 20
 *    - return [yield, yield]에서
 *    - {value: [20], done: true} 형태로 반환
 *    - [20]처럼 [] 안에 파라미터 값 20을 넣어서 반환합니다.
 *
 * console.log()에 {value: Array(1)} 형태로 표시되지만 가독을 위해 편집했습니다.
 */

// for-of 문으로 반복
console.log("for-of 문에서 제너레이터 사용");
function* sports2(count) {
  while (true) {
    yield ++count;
  };
};
for (let point of sports2(10)) {
  console.log(point); // 11 12 13
  if (point > 12) {
    break;
  };
}
/**
 * for-of 문으로 제너레이터를 반복 호출
 *
 * 처음 for-of 문을 시작하면 sports(10)으로 제너레이터 오브젝트를 생성합니다.
 *    - 제너레이터 오브젝트에 10이 설정됩니다.
 *    - 생성한 제너레이터 오브젝트를 저장할 변수가 없으며 엔진 내부에 저장합니다.
 *    - const engine = sports(10);과 같으며 engine이 엔진 내부의 이름을 가정합니다.
 *
 * 다시 sports*()를 호출합니다.
 *    - engine.next()와 같지만 반환 값이 다릅니다.
 *    - while(true){yiled ++count}을 실행합니다.
 *    - {value: 11, done: false}를 반환하지 않고 value만 point 변수에 설정합니다.
 *
 * {done: true}로 종료 처리할 수 없으므로 break;를 사용하여 종료시켜야 합니다.
 *
 * for-of 블록을 실행합니다.
 *    - 11을 출력합니다.
 *    - value 값이 11이므로 다시 for-of 문을 수행하며 wihle(true){yield ++count}를 수행
 *
 * 이렇게 break;를 만날 때까지 반복하여 yield ++count;를 실행합니다.
 */