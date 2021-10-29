/*
default value

- 값을 할당하지 않으면 사전에 정의된 값을 할당
    - default value: 사전에 정의된 값
- 할당할 값이 없으면 디폴트 값을 할당 [코드1]
- 할당할 값이 있으면 디폴트 값을 무시 [코드2]
- Object는 프로퍼티 이름으로 체크 [코드3]
- 디폴트 값 적용 순서
    - 왼쪽에서 오른쪽으로 적용 [코드4]
*/
console.log("[코드1] default value");
const [one, two, five = 50] = [10, 20];
console.log(five);  // 50
/**
 * 1. one에 10을, two에 20을 분할 할당합니다.
 * 2. five에는 할당할 값이 없으며 이때, five = 50에서 50을 five에 할당합니다.
 * 3. 이것을 default value라고 합니다.
 * 4. =의 왼쪽에 이름을 작성하고 오른쪽에 값을 작성
 */

console.log("[코드2] 디폴트 값 무시");
const [one2, two2, five2 = 50] = [10, 20, 70];
console.log(five2); // 70
/**
 * 1. 왼쪽과 오른쪽 모두 값이 3개입니다.
 * 2. 값(70)이 있으므로 five에 70을 할당합니다.
 *    five = 50에서 50을 할당하지 않습니다.
 */

console.log("[코드3] Object 디폴트 값");
const { one3, two3 = 20 } = { one3: 10 };
console.log(two3);  // 20
/**
 * 1. 오른쪽 one의 값인 10을 왼쪽의 one 프로퍼티 값으로 분할 할당합니다.
 * 2. two에 할당할 값이 없으며 two = 20에서 20을 two에 할당합니다.
 */

console.log("[코드4] 디폴트 값 적용 순서");
const [one4, two4 = one4 + 20, five4 = two4 + 50] = [10];
console.log(two4, five4); // 30 80
/**
 * 1. 오른쪽 one의 값인 10을 왼쪽의 one 프로퍼티 값으로 분할 할당합니다.
 * 2. 오른쪽에 값이 없으므로 디폴트 값을 할당합니다. 왼쪽에서 오른쪽으로 할당합니다.
 * 3. two = one + 20
 *    one의 값이 10이므로 30이 two에 설정됩니다.
 * 4. five = two + 50
 *    two의 값이 30이므로 80이 five에 설정됩니다.
 */


/*
default value

- 함수의 파라미터에 디폴트 값 적용

- 넘겨받은 파라미터 값이 없으면 디폴트 값을 할당 [코드5]

- 넘겨받은 파라미터 값이 있으면 디폴트 값을 무시 [코드6]

- 호출한 함수의 파라미터 값이 undefined일 때 [코드7]
*/
console.log("[코드5]");
const add = (ten, two = 20) => ten + two;
const result = add(10);
console.log(result);  // 30
/**
 * 1. add(10);
 *    호출하는 함수의 파라미터 수는 하나입니다.
 * 2. (ten, two = 20)
 *    ten에 넘겨받은 10이 설정되고
 *    two에 디폴트 값인 20이 할당됩니다.
 * 3. 디폴트 값을 작성하지 않으면 two에 undefined가 설정됩니다.
 */

console.log("[코드6] 디폴트 값 무시");
const add2 = (ten, two = 20) => ten + two;
const result2 = add(10, 50);
console.log(result2); // 60
/**
 * 1. add(10, 50);
 *    두 번째 파라미터에 50을 작성했습니다.
 * 2. 호출하는 함수의 파라미터 수와 호출받는 함수의 파라미터 수가 같으면 디폴트 값을 적용하지 않습니다.
 */

console.log("[코드7] 파라미터 값이 undefined일 때");
const point = () => 20;
const add3 = (one, two = point()) => one + two;
const result3 = add3(10, undefined);
console.log(result3); // 30
/**
 * 1. add(10, undefined);
 *    undefined도 값이지만
 *    파라미터 값을 넘겨주지 않은 것과 같습니다.
 * 2. point() 함수를 호출하고 반환된 값을 디폴트 값으로 사용합니다.
 */