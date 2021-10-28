# 분할 할당 (destructuring)

## Destructuring

### Destructuring Assignment

### 작성 형태

```js
console.log("[코드1] Destructuring");
let one, two, three;
const list = [1, 2, 3];
[one, two, three] = list;
console.log(one); // 1
console.log(two); // 2
console.log(three); // 3
console.log(list); //  [1, 2, 3]
```

### 사전적 의미

- 구조를 파괴하다
- 파괴, 해체는 있는 것이 없어지는 뉘앙스
- 원 데이터는 변경되지 않습니다.

**분할/분리가 더 가까움**

## Array 분할 할당

### 배열의 엘리먼트를 분할하여 할당

- ### 인덱스에 해당하는 변수에 할당

```js
console.log("[코드2] 인덱스 기준으로 할당");
let one2, two2, three2;
[one2, two2, three2] = [1, 2, 3];
console.log(one2); // 1
console.log(two2); // 2
console.log(three2); // 3
```

    1. 왼쪽의 인덱스에 해당하는 오른쪽 배열의 값을 변수에 할당합니다.
    2. one에 1, two에 2, three에 3이 할당됩니다.

- ### 할당받을 변수 수가 적은 경우

```js
console.log("[코드3] 할당받을 변수 수가 적은 경우");
let one3, two3;
[one3, two3] = [1, 2, 3];
console.log(one3); // 1
console.log(two3); // 2
```

    1. 왼쪽에 할당받을 변수가 2개이고 오른쪽에 분할 할당할 값이 3개입니다.
    2. 왼쪽의 변수 인덱스에 맞추어 값을 할당하므로 3은 할당되지 않습니다.

- ### 할당받을 변수 수가 많을 경우

```js
console.log("[코드4] 할당받을 변수 수가 많은 경우");
let one4, two4, three4, four4;
[one4, two4, three4, four4] = [1, 2, 3];
console.log(three4); // 3
console.log(four4); // undefined
```

    1. 왼쪽의 할당받을 변수가 4개이고 오른쪽에 분할 할당할 값이 3개입니다.
    2. 왼쪽에 값을 할당할 수 없는 변수에 undefined가 설정됩니다.

- ### 배열 차원에 맞추어 분할 할당

```js
console.log("[코드5] 배열 차원에 맞추어 분할 할당");
let one5, two5, three5, four5;
[one5, two5, [three5, four5]] = [1, 2, [3, 4]];
console.log([one5, two5, three5, four5]); // [1, 2, 3, 4]
```

    1. [three, four]와 [3, 4]가 배열입니다.
    2. 배열 차원이 변환됩니다.

- ### 매치되는 인덱스에 변수가 없으면 값을 할당하지 않음

```js
console.log("[코드6] 인덱스에 변수가 없을 때");
let one6, two6, three6, four6;
[one6, , , four6] = [1, 2, 3, 4];
console.log([one6, two6, three6, four6]); // [1, undefined, undefined, 4]
```

    1. [one, , , four] 형태에서 콤마로 구분하고 변수를 작성하지 않았습니다.
    2. 인덱스를 건너 띄어 할당합니다.
    3. one에 1을 할당하고 2와 3은 건너 띄고 four에 4를 할당합니다.

### spread와 같이 사용

- ### 나머지를 전부 할당

```js
console.log("[코드7] 나머지를 전부 할당");
let one7, rest7;
[one7, ...rest7] = [1, 2, 3, 4];
console.log(one7); // 1
console.log(rest7); // [2, 3, 4]
```

    1. one에 1을 할당하고
    2. 나머지 2, 3, 4를 rest에 할당합니다. [2, 3, 4]처럼 배열로 할당합니다.
    3. rest 파라미터를 호출받는 함수의 파라미터에 작성하지만, 나머지라는 시맨틱이 강해서 코드처럼 사용하기도 합니다.
    4. 분리하지 않고 결합된 상태를 설정하므로 어긋나지 않습니다.

- ### 인덱스를 반영한 나머지 할당

```js
console.log("[코드8] 인덱스를 반영한 나머지 할당");
let one8, three8, rest8;
[one8, , three8, ...rest8] = [1, 2, 3, 4, 5];
console.log(three8); // 3
console.log(rest8); // [4, 5]
```

    1. one에 1을 할당합니다.
    2. 2는 건너띄고 three에 3을 할당합니다.
    3. 나머지 [4, 5]를 rest에 할당합니다.
