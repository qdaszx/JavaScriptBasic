{
  "use strict";
  debugger;

  const buffer = ArrayBuffer;
  /*
  1. buffer에 isView(), Symbol(Symbol.species) 함수가 있으며
  prototype이 있습니다.

  2. isView()는 ArrayBuffer.isView() 형태로 호출합니다.

  3. prototype에 slice(), Symbol(Symbol.toStringTag) 메소드가 있습니다.

  4. 데이터를 저장하는 오브젝트이므로 구성이 심플합니다.
  */
  debugger;

  const obj = new ArrayBuffer(6);
  /*
  1. 6바이트의 ArrayBuffer 인스턴스를 생성합니다.

  2. obj에 [[Int8Array]], [[Int16Array]], [[Uint8Array]]가 있으며 표시된 TypedArray 오브젝트를 생성할 수 있습니다.
  */
  debugger;

  /*
  3. [[Int8Array]]를 펼치면 6개의 엘리먼트가 표시됩니다.
  Int8Array는 1바이트 단위로 View를 하므로
  6개의 엘리먼트를 View할 수 있습니다.

  4. [[Int16Array]]를 펼치면 3개의 엘리먼트가 표시됩니다.
  Int16Array는 2바이트 단위로 View를 하므로
  3개의 엘리먼트를 View할 수 있습니다.

  5. [[Int32Array]]가 표시되지 않은 것은
  바이트 수 단위가 맞지 않기 때문입니다.
  자세한 것은 다음 절에서 다룹니다.
  */
  debugger;
}

const buffer = new ArrayBuffer(10);
console.log(buffer.byteLength); // 10

const buffer2 = new ArrayBuffer(10);
const handler = {
  get(target, key) {
    return [target[key]] + "바이트";
  },
};
const proxy = new Proxy(buffer2, handler);
console.log(proxy.byteLength); // 10바이트

const buffer3 = new ArrayBuffer(10);
const objAll = buffer3.slice(0);
console.log(objAll.byteLength); // 10

const obj37 = buffer3.slice(3, 7);
console.log(obj37.byteLength);  // 4

const buffer4 = new ArrayBuffer(10);
console.log(ArrayBuffer.isView(buffer4)); // false

const int16 = new Int16Array(buffer4);
console.log(ArrayBuffer.isView(int16)); // true

const view = new DataView(buffer4);
console.log(ArrayBuffer.isView(view)); // false