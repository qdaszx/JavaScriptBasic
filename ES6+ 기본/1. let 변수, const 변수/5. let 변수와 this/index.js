/**
 * let 변수와 this
 *
 * - 글로벌 오브젝트에서
 *    - let 변수를 this로 참조 불가 [코드1]
 * - 글로벌 오브젝트에서
 *    - var과 let 변수가 설정되는 위치 구조
 */
console.log("[코드1] let과 this");
var music = "음악";
let sports = "축구";
console.log(this.music, this.sports); // 음악, undefined
/**
 * 1. 현재 위치는 글로벌 오브젝트
 * 2. var music = "음악";
 *    window 오브젝트에 설정됩니다.
 * 3. let sports = "축구";
 *    window 오브젝트에 설정되지 않습니다.
 * 4. this.music에서
 *    this가 window 오브젝트를 참조하며
 *    music이 window 오브젝트에 설정되어 있으므로
 *    음악이 출력됩니다.
 * 5. this.sports에서
 *    sports가 window에 설정되지 않으므로
 *    undefined가 출력됩니다.
 */