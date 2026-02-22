// 대수타입
// 여러 개의 타입을 합성해서 새롭게 만들어 낸 타입

// 합집합 타입(Union 타입)
// a 변수가 union 타입으로 초기화됨
// 숫자와 문자열 값을 모두 넣을 수 있음
// 다양한 타입을 추가할 수 있음
let a: string | number; // string-number union type
a = 1;
a = "hello";

// 유니온 타입 배열
let arr: (number | string | boolean)[] = [1, true, "hello"];

// 유니온 타입 객체
type Dog = {
    name: string,
    color: string,
}

type Person = {
    name: string,
    lang: string
}

type Union1 = Dog | Person;
// "이 변수는 Dog 타입의 조건을 완벽히 갖추거나, 
// 아니면 Person 타입의 조건을 완벽히 갖춰야 해."

let unionVar1: Union1 = {
    name: "",
    color: "",
}
let unionVar2: Union1 = {
    name: "",
    lang: "",
}
let unionVar3: Union1 = {
    name: "",
    color: "",
    lang: "",
}
// 아래는 에러가 발생함
// Dog 또는 Person 타입의 프로퍼티를 모두 가지고 있지 않아서
// color가 없어서, Dog가 될 수 없고, lang이 없어서 Person이 될 수 없음
// let unionVar4: Union1 = {
//     name: "",
// }

// 교집합 타입(Intersection 타입)
// 기본 타입으로 이렇게 만들면 보통 never 타입
// 보통 객체 타입에서 많이 사용함
// 양쪽 타입에 정의된 모든 필수 속성을 빠짐없이 다 가지고 있어야
let var1: number & string; // never 타입(공집합)

type Intersection = Dog & Person;
// 모든 객체의 프로퍼티를 반드시 가지고 있어야

let inter1: Intersection = {
    name: "",
    color: "",
    lang: "",
}