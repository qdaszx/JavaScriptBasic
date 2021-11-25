# Atomics

## Atomics 오브젝트

SharedArrayBuffer 공유에 따른 문제를 해결하기 위한 오브젝트

Atomics 오퍼레이션으로 해결합니다.

현재의 오퍼레이션이 실행하는 동안 다른 스레드의 오퍼레이션이 실행되지 않도록 합니다.

lock를 걸어놓고 현재의 오퍼레이션을 수행한 후 lock를 푸는..

이러한 오퍼레이션을 동기로 실행합니다.

Atomics 오브젝트는 생성자가 없습니다.

Atomics.store() 와 같이 함수 형태로 작성합니다.

Global 오브젝트가 스코프입니다.

```js
const sab = new SharedArrayBuffer(10);
const obj = new Int16Array(sab);
console.log(Atomics.store(obj, 0, 100)); // 100
```

    1. Atomics.store(obj, 0, 100)
    obj의 0번 인덱스에 100을 설정하며
    설정한 값을 반환합니다.

## Atomics 오브젝트 함수

| 함수 이름         | 개요                                                       |
| :---------------- | :--------------------------------------------------------- |
| load()            | 지정한 인덱스의 값을 반환                                  |
| store()           | 지정한 인덱스에 값을 설정하고 설정한 값을 반환             |
| exchage()         | 지정한 인덱스에 값을 설정하고 변경전 값을 반환             |
| compareExchange() | 지정한 값과 인덱스의 값을 비교하며 같을 때만 설정          |
| add()             | 지정한 인덱스에 값을 더하고, 더하기 전의 값을 반환         |
| sub()             | 지정한 인덱스에서 값을 빼고, 빼기 전의 값을 반환           |
| and()             | 비트 AND 연산                                              |
| or()              | 비트 OR 연산                                               |
| xor()             | 비트 XOR 연산                                              |
| notify()          | 대기 중인 Agent(main, Worker)에 알림을 보냅니다.           |
| isLockFree()      | Lock 또는 Atomics 오퍼레이션 사용을 결정                   |
| wait()            | 인덱스의 값이 지정한 값과 같을 때까지 지정한 시간만큼 대기 |

## store(), exchange(), load()

| 이름       | 구분     | 개요                   |
| :--------- | :------- | :--------------------- |
| store()    | 파라미터 | index 위치에 값을 설정 |
|            |          | index                  |
|            |          | value                  |
|            | 반환     | 변경한 값              |
| exchange() | 파라미터 | index 위치에 값을 설정 |
|            |          | index                  |
|            |          | value                  |
|            | 반환     | 변경전 index의 값      |
| load()     | 파라미터 | index 위치의 값을 반환 |
|            |          | index                  |
|            | 반환     | index 위치의 값        |

```js
const sab = new SharedArrayBuffer(10);
const obj = new Int16Array(sab);
console.log(Atomics.store(obj, 0, 100)); // 100
console.log(Atomics.exchange(obj, 0, 200)); // 100
console.log(Atomics.load(obj, 0)); // 200
```

    1. Atomics.store(obj, 0, 100)
    obj의 0번 인덱스에 100을 설정하며
    설정한 값을 반환합니다.

    2. Atomics.exchange(obj, 0, 200)
    obj의 0번 인덱스에 200을 설정하며
    설정하기 전의 값을 반환합니다.

    3. Atomics.load(obj, 0)
    obj의 0번 인덱스 값을 반환합니다.
