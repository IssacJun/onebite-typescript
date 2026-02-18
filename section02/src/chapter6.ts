// Any
// 특정 변수의 타입을 확실히 모를 때 사용됨
// 어떤 타입이든 특정 변수에 넣을 수 있음
let anyVar: any = 10;
anyVar = "abc";
anyVar = true;
anyVar = {};
anyVar = () => {};

anyVar.toUpperCase(); 
// any 타입이기에 코딩중엔 에러 발생하지 않음
// 컴파일 중엔 에러가 발생함 -> 타입스크립트 이점 포기와 같음
// 가능한 최대한 사용하지 않는 것이 중요

let num: number = 10;
num = anyVar; // 코딩 중엔 상관없음

// Unknown
// any와 유사, any 타입보다 조금 더 안전함, 런타임 에러는 발생하지 않음
let UnknownVar: unknown;

UnknownVar = "";
UnknownVar = 1;
UnknownVar = () => {};
// UnknownVar.toUpperCase() ; // 에러 발생

// if문을 써서 특정 타입으로 좁혀서 사용해야 함
if (typeof UnknownVar === "number") {
    num = UnknownVar;
}