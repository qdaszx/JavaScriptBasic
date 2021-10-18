/**
 * constructor 프로퍼티
 *
 * - 생성하는 function 오브젝트를 참조
 *    - function 오브젝트를 생성할 때 설정
 *    - prototype에 연결되어 있음
 * - 개인 경험
 *    - constructor가 없더라도 인스턴스가 생성됨
 *    - 하지만, 필요하지 않다는 의미는 아닙니다.
 * - ES5: constructor 변경 불가
 *    - 생성자를 활용할 수 없음
 * - ES6: constructor 변경 가능
 *    - 활용성 높음
 */

/**
 * constructor 비교
 *
 * 1. Book === Book.prototype.constructor;
 *    - [실행결과] 1번에 true가 출력된 것은
 *    - Book 오브젝트와
 *      Book.prototype.constructor가
 *      타입까지 같다는 뜻
 *    - Book 오브젝트를 생성할 때
 *      Book.prototype.constructor가
 *      Book 오브젝트를 참조하기 때문
 * 2. Book === obj.constructor;
 *    - obj의 constructor가
 *      Book 오브젝트를 참조하므로
 *    - [실행결과] 2번에 true가 출력됩니다.
 * 3. typeof Book;
 *    - Book 오브젝트의 타입은 function
 * 4. typeof obj;
 *    - obj 인스턴스의 타입은 object
 * 5. function 오브젝트를 인스턴스를 생성했더니
 *    - object로 타입이 변경되었습니다.
 *    - 이것은 [[Construct]]가 실행될 때
 *      생성한 오브젝트의 [[Class]]에
 *      'Object'를 설정하기 때문
 * 6. 오브젝트 타입이 바뀐다는 것은
 *    - 오브젝트 성격과 목적이 바뀐 것을 뜻합니다.
 *    - 다른 관점에서 접근해야 합니다.
 */

var Book = function(){};
var result = Book === Book.prototype.constructor;
console.log("1:", result);  // 1: true

var obj = new Book();
console.log("2:", Book === obj.constructor);  // 2: true

console.log("3:", typeof Book); // 3: function
console.log("4:", typeof obj);  // 4: object