/**
 * 메소드 호출 형태
 * - 데이터 형태
 *    - 배열: ["book", "책", 123]
 * - OOP의 일반적인 형태 [코드1]
 * - 자바스크립트 형태
 *    - 데이터로 메소드 호출 [코드2]
 *    - 오브젝트의 함수 호출 [코드3]
 *    - 인스턴스의 메소드 호출 [코드4]
 * - Object 확장
 *    - 네임스페이스(NameSpace)로 사용
 *    - Book = {};
 *    - Book.Javascript = {}; Book.Html = {};
 */
console.log("[코드1] OOP의 일반적인 방법");
let data = ["book", "책", 123];
let obj = new Array();
let result = obj.concat(data);
console.log(result);  // ['book', '책', 123]
/**
 * 1. new Array()로 인스턴스 생성
 * 2. obj.concat(data)l
 *    obj 인스턴스의 concat() 호출
 *    데이터를 파라미터로 넘겨 줌
 * 3. JS는 일반적으로 이 방법을 사용하지 않고
 *    아래의 [코드2] 방법을 사용
 */

console.log("[코드2] 데이터로 메소드 호출");
let data2 = ["book", "책", 123];
let result2 = data.concat();
console.log(result2); // ['book', '책', 123]
/**
 * 1. data.concat();
 * 2. 엔진이 data 타입에 따라 오브젝트 결정
 * 3. data가 배열이므로 Array의 concat() 호출
 *    data를 파라미터로 넘겨 줌
 */

console.log("[코드3] 오브젝트의 함수 호출");
let data3 = ["book", "책", 123];
let bookObj = {
  concat: function (data) {
    return data.concat();
  }
};
console.log(bookObj.concat(data3)); // ['book', '책', 123]

console.log("[코드4] 인스턴스의 메소드 호출");
let data4 = ["book", "책", 123];
let Book = function (data) {
  this.data = data;
};
Book.prototype.concat = function () {
  return this.data.concat();
};
let oneInstance = new Book(data4);
console.log(oneInstance.concat());  // ['book', '책', 123]

/**
 * 메소드 사용 팁
 * - 메소드를 알 수 없을 때
 *    - MDN 활용
 *    - MDN에서 "오브젝트 이름"으로 검색
 *    - 왼쪽의 리스트에서 메소드 이름을 찾습니다.
 *    - 메소드 이름이 시맨틱을 갖고 있으므로
 *      메소드 이름으로 기능 예측 가능
 * - 메소드를 알고 있을 때
 *    - 기능을 정확하게 사용하기 위해 사용
 */