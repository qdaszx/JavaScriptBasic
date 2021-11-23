# TypedArray 타입

## TypedArray 오브젝트

9개 오브젝트의 총칭

슈퍼 클래스이며 9개 오브젝트에 자동으로 상속됩니다.

직접 사용할 수 없으며 9개 오브젝트에서 사용할 수 있습니다.

Int8Array, Int32Array 등

스펙에 %TypedArray%로 표기되어 있지만 강좌에서는 Typed Array로 표기합니다.

## ArrayBufferView

9개의 TypedArray와 DataView를 지칭합니다.

ES2019 스펙에서는 사용하지 않지만 표준화를 위한 W3C IDL에서 사용하고 있습니다.

## TypedArray 생성자

| 생성자 이름       | 타입    | 바이트 | 개요                              | C 언어 타입    |
| :---------------- | :------ | :----- | :-------------------------------- | :------------- |
| Int8Array         | Int8    | 1      | 8비트 2's 보수법, signed integer  | signed char    |
| Uint8Array        | Uint8   | 1      | 8비트 unsigned integer            | unsigned char  |
| Uint8ClampedArray | Uint8C  | 1      | 8비트 unsigned integer(clamped)   | unsigned char  |
| Int16Array        | Int16   | 2      | 16비트 2's 보수법, signed integer | short          |
| Uint16Array       | Uint16  | 2      | 16비트 unsigned integer           | unsigned short |
| Int32Array        | Int32   | 4      | 32비트 2's 보수법, signed integer | int            |
| Uint32Array       | Uint32  | 4      | 32비트 unsigned integer           | unsigned int   |
| Float32Array      | Float32 | 4      | 32비트 IEEE 부동 소숫점           | float          |
| Float64Array      | Float64 | 8      | 64비트 IEEE 부동 소숫점           | double         |

- 데이터 타입과 바이트 수에 따라 생성자 이름이 다릅니다.

## 타입과 바이트

<table>
    <thead>
        <tr>
            <th>생성자</th>
            <th colspan=16>ArrayBuffer 16바이트</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Int8Array</td>
            <td>0</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>10</td>
            <td>11</td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
            <td>15</td>
        </tr>
        <tr>
            <td>Int16Array</td>
            <td>0</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
        </tr>
        <tr>
            <td>Int32Array</td>
            <td>0</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
        </tr>
        <tr>
            <td>Float64Array</td>
            <td>0</td>
            <td>1</td>
        </tr>
    </tbody>
</table>

ArrayBuffer 16바이트를 TypedArray를 사용하여 구조체 형태로 사용할 수 있습니다.

자바스크립트에서 지금까지 없었던 형태

Int8Array로 앞에서 8바이트를 사용합니다.

Int32Array로 나머지 8바이트를 사용합니다.

조심해야 할 부분은 가장 큰 타입의 바이트 수 단위에 맞아야 합니다.

예를들어서, 22바이트의 ArrayBuffer는 Uint32Array와 Float64Array 단위에 맞지 않으므로

구조체 형태로 나누어 사용할 수 없습니다.

## TypedArray 메소드

TypedArray를 Array-like 형태로 view하므로

Array-like를 지원하는 Array 메소드를 사용할 수 있습니다.

Array-like는 index를 프로퍼티 키로 사용하여 index번째의 값을 구하는 모습을 뜻합니다.

TypedArray 형태가 Array-like 형태는 아닙니다.

### Array 오브젝트에만 있는 메소드입니다.

concat(), pop(), push(), shift(), unshift()

ArrayBuffer의 바이트 수에 영향을 미치는 메소드입니다.

## TypedArray 오브젝트 형태

```js
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

console.log(obj8.__proto__ == obj.prototype); // true
/*
1. obj8.__proto__와 obj.prototype이 같으므로 true가 출력됩니다.
*/
debugger;
```
