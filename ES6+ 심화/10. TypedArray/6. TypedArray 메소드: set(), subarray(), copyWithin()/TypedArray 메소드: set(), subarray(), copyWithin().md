# TypedArray 메소드

## set()

| 구분     | 개요                            |
| :------- | :------------------------------ |
| 파라미터 | Array 또는 TypedArray           |
|          | offset, 떨어진 위치             |
| 반환     | 값을 설정한 9개 타입의 인스턴스 |

TypedArray 인스턴스에 첫 번째 파라미터 값을 설정합니다.

TypedArray.prototype.set()

### 파라미터

- 첫 번째에 Array 작성한 형태

```js
const buffer = new ArrayBuffer(3);
const obj = new Int8Array(buffer);
obj.set([10, 20], 1);
console.log(obj); // {0: 0, 1: 10, 2: 20}
```

    1. const buffer = new ArrayBuffer(3);
    3바이트의 인스턴스를 생성합니다.

    2. const obj = new Int8Array(buffer);
    Int8 타입이므로 3개의 엘리먼트를 만듭니다.

    3. obj.set([10, 20], 1);
    첫 번째 파라미터에 배열을 작성했으며
    두 번째 파라미터는 오프셋입니다.

    4. obj 인스턴스의 1번 인덱스부터
    배열의 엘리먼트 값을 순서대로 설정합니다.

- 첫 번째에 TypedArray 작성한 형태

```js
const buffer = new ArrayBuffer(3);
const one = new Int8Array(buffer);
one.set([10, 20, 30]);

const buffer4 = new ArrayBuffer(4);
const two = new Int8Array(buffer4);
two.set(one, 1);
console.log(two); // {0: 0, 1: 10, 2: 20, 3: 30}
```

    1. one.set([10, 20, 30]);
    여기까지는 앞의 처리와 같으며
    {0: 10, 1: 20, 2: 30} 형태가 됩니다.

    2. const buffer4 = new ArrayBuffer(4);
    4바이트의 인스턴스를 생성합니다.

    3. const two = new Int8Array(buffer4);
    인스턴스에 4개의 엘리먼트를 만듭니다.

    4. two.set(one, 1);
    1은 two의 오프셋이며 two의 1번 인덱스부터

## subarray()

| 구분     | 개요                       |
| :------- | :------------------------- |
| 파라미터 | begin, 복사 시작 인덱스    |
|          | end, 복사 끝 인덱스        |
| 반환     | 생성한 9개 타입의 인스턴스 |

ArrayBuufer 데이터를 복사하여 반환합니다.

메소드 앞에 작성한 TypedArray와 같은 타입의 인스턴스를 생성하고

여기에 값을 복사하여 반환합니다.

TypedArray.prototype.subarray()

### 파라미터

- 첫 번째 파라미터의 인덱스부터 두 번째 파라미터의 인덱스 직전까지 복사

- 파라미터를 작성하지 않으면 전체를 복사

```js
const buffer = new ArrayBuffer(4);
const obj = new Int8Array(buffer);
obj.set([10, 20, 30]);
console.log(obj); // {0: 10, 1: 10, 2: 30, 3: 0}

const subarrayObj = obj.subarray(1, 3);
console.log(subarrayObj); // {0: 20, 1: 30}
```

    1. const subarrayObj = obj.subarray(1, 3);
    obj 인스턴스의 1번 인덱스부터
    3번 인덱스 직전까지 값을 복사합니다.
    즉, 2번 인덱스까지 값을 복사합니다.

    2. 같은 타입의 인스턴스를 생성하고 여기에 복사한 값을 설정하여 반환합니다.

    3. console.log(subarrayObj);
    20, 30을 복사합니다.

## copyWithin()

| 구분     | 개요                              |
| :------- | :-------------------------------- |
| 파라미터 | target, 복사한 값을 할당할 인덱스 |
|          | start, 복사 시작 인덱스           |
|          | end, 복사 끝 인덱스               |
| 반환     | 생성한 9개 타입의 인스턴스        |

첫 번째 파라미터의 오브젝트 데이터를 복사하여

첫 번째 파라미터의 오브젝트에 설정합니다.

복사 방법은 Array 오브젝트의 copyWithin() 메소드와 같습니다.

### 파라미터

- 두 번째의 인덱스부터 세 번째의 인덱스 직전까지 복사하여 첫 번째의 인덱스부터 설정합니다.

```js
const buffer = new ArrayBuffer(4);
const obj = new Int8Array(buffer);
obj.set([10, 20, 30, 40]);
console.log(obj); // {0: 10, 1: 20, 2: 30, 3: 40}

obj.copyWithin(0, 2, 4);
console.log(obj); // {0: 30, 1: 40, 2: 30, 3: 40}
```

    1. obj.copyWithin(0, 2, 4);
    obj 인스턴스의 2번 인덱스부터
    4번 인덱스 직전까지 값을 복사합니다.
    즉, 2번과 3번 인덱스 값을 복사합니다.

    2. 복사한 값을 obj의 0번 인덱스부터 설정합니다.
    3. 복사한 엘리먼트 수가 받을 엘리먼트 수보다 클 때
    넘치는 엘리먼트는 설정하지 않습니다.
    에러가 발생하지 않습니다.
