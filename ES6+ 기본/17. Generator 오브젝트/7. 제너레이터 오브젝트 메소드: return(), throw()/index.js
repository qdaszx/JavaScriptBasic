/*
제너레이터 오브젝트 메소드

구분 ::: 데이터(값)
형태 ::: generatorObject.return()
파라미터 ::: 제너레이터로 넘겨 줄 값opt
반환 ::: return()의 파라미터 값

- 이터레이터를 종료시킵니다. [코드1]

- return()의 파라미터 값을
    - {value: 값, done: true}에서
    - value 프로퍼티 값으로 설정
*/

console.log("[코드1] return()");
function* sports(count) {
  while (true) {
    yield ++count;
  };
};
const obj = sports(10);
console.log(obj.next());  // {value: 11, done: false}
console.log(obj.return(70));  // {value: 70, done: true}
console.log(obj.next(50));  // {value: undefined, done: true}
/**
1. obj.return(20)
  이터레이터를 종료시키며 파라미터 값 70을 반환
2. obj.next(50)
  이터레이터가 종료되었으므로 {value: undefined, done: true} 반환
3. 파라미터 값 50을 반환하지 않습니다.
 */

/*
throw()

구분 ::: 데이터(값)
형태 ::: generatorObject.throw()
파라미터 ::: 에러 메시지, Error 오브젝트
반환 ::: {value: 에러 메시지, done: true}

Erro를 의도적으로 발생시킵니다.

제너레이터 함수의 catch() 문에서 에러를 받음 [코드2]

제너레이터 함수에 throw 문을 작성 [코드3]
*/

console.log("[코드2] throw()");
function* sports2() {
  try {
    yield 10;
  } catch (message) {
    yield message;
  };
  yield 20;
};
const obj2 = sports2();
console.log(obj2.next()); // {value: 10, done: false}
console.log(obj2.throw('에러 발생')); // {value: '에러 발생', done: false}
console.log(obj2.next()); // {value: 20, done: false}
/**
 * 1. obj.throw("에러 발생")를 실행하면 sports()의 catch(message)가 실행되고 "에러 발생"이 message에 설정됩니다.
 * 2. catch()의 yield message;를 수행하게 되며 {value: "에러 발생", done: false}를 반환합니다.
 *    제너레이터가 종료되지 않습니다.
 * 3. 다음의 obj.next() 호출
 *    throw() 호출로 인해 에러가 발생하지만 {done: false}이므로 next()를 호출할 수 있습니다.
 * 4. yield 20;을 실행하게 되며 {value: 20, done: false}를 반환합니다.
 */

console.log("[코드3] throw 문 작성");
function* sports3() {
  throw "에러 발생";
  yield 10;
};
const obj3 = sports3();
try {
  const result = obj3.next();
} catch (message) {
  console.log(message); // 에러 발생
};
console.log(obj3.next()); // {value: undefined, done: true}
/**
 * 1. const result = obj.next()를 실행하면 제너레이터 함수에서 throw로 인해 에러가 발생
 * 2. 그래서 next()를 try 문에 작성했습니다.
 * 3. try 문의 catch(message)에서 에러를 받습니다.
 * 4. throw "에러 발생"에서 "에러 발생"이 message에 설정됩니다.
 * 5. 제너레이터 함수에서 에러가 발생하면 이터레이터가 종료됩니다.
 * 6. 마지막 줄에서 obj.next()를 호출하면 제너레이터가 실행되지 않습니다.
 * 7. 제너레이터 함수에 yield 10이 있지만 {value: undefined, done: true} 반환
 */

console.log("[코드4]");
console.log("[코드5]");
