// number: 숫자
let num1:number = 123; // number: 타입 주석, annotation
let num2:number = -123;
let num3:number = 0.123;
let num4:number = -0.123;
let num5:number = Infinity;
let num6:number = -Infinity;
let num7:number = NaN;

// 당연히 숫자값과 관련된 함수에 적용 가능

// string
let str1:string = "hello";
let str2:string = `Hello, ${num1}`;

// str1.toFixed(); 안됨, number 관련 함수이기에

// boolean
let boot1: boolean = true;

// null
let nul1: null = null;
// 중간에 null을 넣는 것이 안되지만 컴파일러 옵션에 "strictNullChecks": false 추가 시 컴파일 가능
// let numA: number = null;

// undefiend
let und1: undefined = undefined;

// 리터럴(값) 타입, 변수의 타입을 값으로 정의함
// 타입으로 정의된 값 이외의 값은 허용하지 않음
let numA:10 = 10;
let strA: "hello" = "hello";
// let boolA: true = false; // 이렇게 하면 에러 발생함
