"use strict";
debugger;

const obj = Int8Array;
/*
1. obj를 펼치면 프로퍼티와 prototype이 있습니다.

2. prototype을 펼치면 프로퍼티와 __proto__가 있습니다.

3. prototype.__proto__를 펼치면
forEach(), join(), map()이 있으며
이것은 Array 오브젝트의 메소드입니다.
concat(), push()는 없으며 이것은 사용할 수 없습니다.
*/
debugger;

/*
4. obj.__proto__: f TypedArray()처럼 작성되어 있습니다.
이것은 TypedArray를 상속받은 것을 뜻합니다.
9개 오브젝트에 상속됩니다.

5. obj.__proto__를 펼치면 프로퍼티와 함수가 있으며
이것은 TypedArray의 프로퍼티와 함수입니다.

6. obj.__proto__.prototype을 펼치면
join(), map() 등이 있으며, Array 오브젝트의 메소드입니다.
*/
debugger;

const obj8 = new Int8Array(3);
/*
1. new Int8Array(3)을 호출하면
obj.prototype.constructor가 호출되며
obj.prototype에 연결된 프로퍼티로 인스턴스를 생성하여
obj8.__proto__에서 참조할 수 있도록 만듭니다.
*/
debugger;

console.log(obj8.__proto__ == obj.prototype);
/*
1. obj8.__proto__와 obj.prototype이 같으므로 true가 출력됩니다.
*/
debugger;