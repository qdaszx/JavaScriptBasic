/*
Symbol.species 오버라이드

- Symbol.species는
    - static 악세서 프로퍼티이며 getter만 있고 setter는 없음 [코드1]

- Symbol.species를 사용할 수 있는 빌트인 오브젝트
    - Array, Map, Set, RegExp
    - Promise, ArrayBuffer, TypeArray

- 빌트인 오브젝트를 상속받은 class에 Symbol.species를 작성하면 빌트인 오브젝트의 @@species가 오버라이드 됩니다.

- 인스턴스 바꾸기
*/

console.log("[코드1] Symbol.species");
class Sports extends Array {
  static get [Symbol.species]() {
    return Array;
  }
};
const obj = new Sports(10, 20);

// 인스턴스 바꾸기
console.log("인스턴스 바꾸기");
class Sports2 extends Array {
  static get [Symbol.species]() {
    return Array;
  }
};
const one = new Sports2(10, 20, 30);
console.log(one instanceof Sports2);  // true

const two = one.slice(1, 2);
console.log(two instanceof Array);  // true
console.log(two instanceof Sports2);  // false

/**
- class Sports extends Array{}
  빌트인 Array 오브젝트를 상속받습니다.
- static get [Symbol.species]() {
return Array;
}
  빌트인 Array 오브젝트의 @@species를 오버라이드합니다.
- const one = new Sports(10, 20, 30);
  인스턴스를 생성합니다.
  파라미터 값이 인스턴스에 설정됩니다.
- one instanceof Sports
  Sports로 one을 만들었으므로 true 출력
- const two = one.slice(1, 2);
  Array 오브젝트를 상속받았으므로 one 인스턴스로 slice()를 호출할 수 있습니다.
  slice() 대상은 인스턴스에 설정된 [10, 20, 30]
  인스턴스를 반환하며 반환되는 인스턴스에 slice() 결과를 설정합니다.
- Symbol.species()로 오버라이트 했으므로
  static get [Symbol.species](){}가 호출됩니다.
  호출에 사용한 one 인스턴스 형태를 반환하지 않고 Array 인스턴스를 반환합니다.
  이처럼 Symbol.species()로 반환할 인스턴스를 변경할 수 있습니다.
- two instanceof Array
  two 인스턴스에는 Array 인스턴스가 할당되어 있으며 Array 오브젝트로 만들었으므로 true 출력
- two instanceof Sports
  Sports가 아니라 Array 오브젝트로 two 인스턴스를 만들었으므로 false 출력
 */
