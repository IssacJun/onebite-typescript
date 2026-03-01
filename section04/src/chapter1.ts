// 함수 타입 표현식(Function Type Expression)
// 타입 별칭으로 함수의 타입 정의

// 매개변수의 타입 정의, 리턴값에 대한 타입 정의 
// 유사한 타입의 함수를 아래처럼 정의할 수 있음
type Operation = (a: number, b: number) => number;

const funcAdd: Operation = (a, b) => a + b;
const funcSub: Operation = (a, b) => a - b;

// 호출 시그니처(콜 시그니처)
type Operation2 = {
    // 매개변수와 그 타입: 반환값 타입
    (a: number, b: number): number;
}

const funcAdd2: Operation2 = (a, b) => a + b;
const funcSub2: Operation2 = (a, b) => a - b;