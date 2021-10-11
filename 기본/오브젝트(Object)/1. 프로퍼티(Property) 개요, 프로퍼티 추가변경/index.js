/**
 * 프로퍼티
 * - Property
 *    - {name: value} 형태
 * - name에 프로퍼티 이름/키를 작성 [코드1]
 *    - 따옴표 작성 생략 [코드2]
 * - value에 JS에서 지원하는 타입 작성
 *    - {a: 123, b: "ABC", c: true, d: {}}
 *    - {book: function(){코드}} [코드3]
 * - 오브젝트(Object)를 객체라고 부르지만
 *    - 뉘앙스가 다르며, 강좌에서는 오브젝트로 표기
 *    - 오브젝트와 객체 구분이 필요할 때, 별도 표기
 */

console.log("[코드1] name과 key");
let book = {
  title: "책",
  point: 123
};
/**
 * 1. 프로퍼티 name(key)에서 key는 유일하지만
 *    name은 중복될 수 있다는 뉘앙스가 풍깁니다.
 * 2. ES3에서는 같은 이름이 등록되기도 합니다.
 * 3. ES5에서는 key와 name을 구분하지 않아도 되지만
 *    ES6에서는 구분해야 합니다.
 */

console.log("[코드2] 따옴표 생략");
let book2 = {
  title: "책"
};
/**
 * 1. {title: "책"}에서 "title"처럼
 *    따옴표를 사용해야 합니다.
 *    즉, title은 String 타입입니다.
 * 2. 그런데, 따옴표를 작성하지 않는 것은
 *    따옴표를 작성하지 않아도
 *    문자열로 간주하기 때문
 */

console.log("[코드3] JS 타입 사용");
let book3 = {
  title: "책",
  point: {
    ten: 10,
    bonus: 200,
    promotion: function () { }
  }
};

/**
 * 프로퍼티 추가, 변경
 * - 오브젝트에 프로퍼티 추가, 변경
 *    - var obj = {};
 *    - obj.abc = 123;
 *    - obj 오브젝트에 프로퍼티 이름으로
 *      abc가 없으면 abc: 123이 추가되고
 *      abc가 있으면 프로퍼티 값이 123으로 변경됨
 * - 작성 방법
 *    - 점(.)과 프로퍼티 이름 사용 [코드4]
 *    - 대괄호 사용 obj["abc"] [코드5]
 *    - abc 변수 이름 작성: obj[abc] [코드6]
 */

console.log("[코드4] 점과 프로퍼티 이름 사용");
let book4 = {};
book4.title = "JS책";
console.log(book4); // {title: "JS책"}
/**
 * 1. book.title처럼 점(.)에 이어서
 *    프로퍼티 어름을 작성합니다.
 * 2. title을 "title"처럼
 *    따옴표를 사용하지 않습니다.
 * 3. = 오른쪽에 프로퍼티 값을 작성합니다.
 */

console.log("[코드5] 대괄호 사용");
let book5 = {};
book5["title"] = "JS책";
console.log(book5); // {title: "JS책"}
/**
 * 1. book["title"]처럼 대괄호[] 안에
 *    문자열로 프로퍼티 이름을 작성합니다.
 * 2. = 오른쪽에 프로퍼티 값을 작성합니다.
 */

console.log("[코드6] 변수 이름 사용");
let book6 = { title: "JS책" };
let varName = "title";
book6[varName] = "HTML책";
console.log(book6); // {title: "HMLT책"}
/**
 * 1. 프로퍼티 이름을 변수에 작성하고 이를 사용
 * 2. title 프로퍼티 이름이 있으므로
 *    프로퍼티 값이 변경됩니다.
 */