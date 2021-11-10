/*
Symbol Property

Well-Known Symbols

- 스펙에서 @@iterator 형태를 볼 수 있음
  - ES2019 스펙: Well-known Symbols

- @@는
  - Well-Known Symbol을 나타내는 기호
  - @@match와 Symbol.match가 같음
  - 스펙에서는 @@match 형태를 사용하고
  - 개발자는 Symbol.match 형태를 사용

- ES2019 기준: 12개 Well-Known Symbol

- Well-Known Symbol 이란
  - 스펙에서 알고리즘에 이름을 부여하고 이름으로 참조하기 위한 빌트인 Symbol 값

- 개발자 코드 우선 실행
  - match()를 실행하면 디폴트로 @@match를 실행
  - 소스 코드에 Symbol.match를 작성하면 @@match가 실행되지 않고 Symbol.match가 실행됩니다.

- 개발자 코드로 디폴트 기능을 오버라이딩할 수 있음

Symbol ::: 대응
Symbol.asyncIterator ::: for-await-of
Symbol.isConcatSpreadable ::: Array.prototype.concat()
Symbol.match ::: String.prototype.match()
Symbol.search ::: String.prototype.search()
Symbol,split ::: String.prototype.split()
Symbol.toStringTag ::: Object.prototype.toString()
Symbol.hasInstance ::: instanceof
Symbol.iterator ::: for-of
Symbol.replace ::: String.prototype.replace()
Symbol.species ::: constructor
Symbol.toPrimitive ::: ToPrimitive()
Symbol.unscopables ::: with

- 강좌에서 다루는 것
  - isConcatSpreadable, iterator, match, species, toPrimitive, toStringTag

- 강좌에서 다루지 않는 것
  - asyncIterator, hasInstance(instanceof 처리)
  - replace, search, split는 match와 비슷
  - unscopables는 "use strict"에서 with 문을 사용할 수 없음
*/