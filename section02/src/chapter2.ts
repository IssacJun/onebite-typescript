// 배열
let numArr:number[] = [1, 2, 3];
let strArr:string[] = ["hello", "jun"];
let boolArr: Array<boolean> = [true, false]; // 제네릭 문법

// 배열 내 요소의 타입이 다양할 경우
let multiArr1 = [1, "hi"]; // 마우스를 오버하면 Typescript의 추론을 알 수 있음
let multiArr2:(number | string)[] = [1, "hi"];

// 다차원 배열 타입 정의하는 방법(배열 안의 배열)
let doubleArr:number[][] = [
    [1, 2, 3],
    [4, 5]
]

// 튜플
// 길이와 타입이 고정된 배열(별도의 자료형은 아님)
let tup1:[number, number] = [1, 2];
// 아래처럼 길이를 넘어서거나 다른 타입의 배열로 선언 안 됨
// tup1 = [1, 2, 3];
// tup1 = ["1", "2"];

let tup2:[number, string, boolean] = [1, "2", true];
