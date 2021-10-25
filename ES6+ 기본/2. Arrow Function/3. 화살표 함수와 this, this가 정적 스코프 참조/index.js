/*
화살표 함수와 this

- strict 모드에서 함수를 호출할 때
  - 함수 앞에 오브젝트 작성은 필수 [코드1]
  - 화살표 함수로 해결 [코드2]

- 화살표 함수에서
  this가 글로벌 오브젝트 참조
  - this 값이 undefined
*/
console.log("[코드1] 오브젝트 작성은 필수");
// "use strict"
function book() {
  function getPoint() {
    console.log(this);
  };
  getPoint();
  // window.getPoint();
};
window.book();  // undefined
/**
 * 1. strict 모드에서는 window.book()처럼
 *    호출하는 함수 앞에 오브젝트를 작성해야 합니다.
 *    이렇게 하지 않으면 book() 함수 안에서
 *    this 값이 undefined입니다.
 * 2. 또한, getPoint()처럼
 *    window를 앞에 작성하지 않으면
 *    getPoint() 안에서 this 값이 undefined입니다.
 * 3. 이를 피하기 위해 window.getPoint()로 호출하면
 *    window 오브젝트에
 *    getPoint()가 없으므로 에러가 납니다.
 * 4. strict 모드의 함수에서
 *    this를 참조하기 위해서는
 *    this를 별도로 저장한 후
 *    사용해야 하는데 번거롭습니다.
 */

console.log("[코드2] 화살표 함수 사용");
// "use strict"
var point = 100;
function sports() {
  const getPoint2 = () => {
    console.log(this.point);
  };
  getPoint2();
};
window.sports();  // 100
/**
 * 1. 화살표 함수로 작성하면
 *    getPoint()로 호출할 수 있습니다.
 * 2. 또한, getPoint() 화살표 함수 안에서
 *    this가 undefined가 아니라
 *    글로벌(window) 오브젝트를 참조합니다.
 * 3. var point = 100을 작성했으므로
 *    100이 출력됩니다.
 */

/// this 값이 undefined

// "use strict";
// debugger;

const book2 = {
  point: 500,
  getPoint: function () {
    console.log(this.point);
  }
};
book2.getPoint();
/*
1. 일반 함수인 book.getPoint()를 호출하면
  함수 안에서 this가 book 오브젝트를 참조합니다.
  따라서 console에 500이 출력됩니다.
*/
// debugger;

var point2 = 100;
const sports2 = {
  getPoint: () => {
    console.log("this.point", this.point2);
  }
};
sports2.getPoint();
/*
1. 화살표 함수인 sports.getPoint()를 호출하면
  오른쪽 Local에 this:undefined가 표시됩니다.
2. 이것은, 화살표 함수는 함수에
  this를 갖고 있지 않기 때문입니다.
3. 이때, this가 window 오브젝트를 참조합니다.
*/
// debugger;

/*
1. console.log("this.point", this.point);
  var point = 100; 에서 var 키워드를 사용했으므로
  point 변수가 Window 오브젝트에 설정됩니다.
  따라서 console에 100이 출력됩니다.
2. 지금부터 this가 window 오브젝트를 참조하는
  논리를 살펴보겠습니다.
*/
// debugger;

/*
this가 정적 스코프 참조

- 화살표 함수에서 정적 스코프의 this 사용

- 정적(렉시컬Lexical) 스코프란
    - 엔진이 해석할 때, 화살표 함수를 만나면
    - function 오브젝트를 생성하고
    - 화살표 함수가 속한 스코프를
      생성한 오브젝트에 바인딩

- 오브젝트에 바인딩된 스코프의 this를
    - 화살표 함수에서 this로 사용 [코드3]
*/
console.log("[코드3] 스코프를 this로 사용");
var title = "책";
const book3 = {
  show: () => console.log(this.title)
};
book3.show();  // 책
/**
 * 1. show() 화살표 함수에서
 *    this가 window 오브젝트를 참조하는 것은
 * 2. 함수 밖 스코프의 변수를 사용하듯이
 *    show()의 스코프인 book 오브젝트에
 *    설정된 스코프의 this를
 *    화살표 함수에서 this로 사용하기 때문입니다.
 * 3. book 오브젝트가
 *    글로벌 오브젝트에 설정되므로
 *    this가 window 오브젝트를 참조하게 됩니다.
 */