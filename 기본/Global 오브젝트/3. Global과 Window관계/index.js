/**
 * Global과 window 관계
 * - 글로벌과 window 오브젝트 주체
 *    - 글로벌 오브젝트는 JS가 주체
 *    - window 오브젝트는 window가 주체
 * - 주체는 다르지만,
 *   글로벌 오브젝트의 프로퍼티와 함수가
 *   window 오브젝트에 설정됨
 * - Global과 window 오브젝트 관계
 * - Host 오브젝트 개념 활용
 */

debugger;
/**
 * // "use strict"
 * 1. "use strict" 환경에서는
 *    - window.undefinded처럼 오브젝트를 사용해야 하며
 *    - undefined처럼 프로퍼티 이름만 사용할 수 없습니다.
 * 2. 그래서 주석으로 작성 하였습니다.
 * 3. 이에 대해서는 다시 뒤에서 다룹니다.
 *
 */

console.log(undefined);
console.log(window.undefined);

/**
 * 1. window 사용에 관계없이 모두 undefined를 출력합니다.
 * 2. undefined 앞에 오브젝트를 작성하지 않으면
 *    - 글로벌 오브젝트에서 undefined를 찾습니다.
 * 3. 오른쪽 창의 Global을 전개하면
 *    - undefined: undefined가 있으며
 *    - isNaN()도 있습니다
 */

debugger;

/**
 * 4. 오른쪽 창의 this: window를 전개하면, 끝 부분에
 *    - global과 같게 표시됩니다.
 * 5. 글로벌 오브젝트의 프로퍼티와 함수는
 *    window 오브젝트에 설정됩니다.
 * 6. 따라서 글로벌 오브젝트의 프로퍼티를
 *    - window 오브젝트에서 가져올 수 있습니다.
 */