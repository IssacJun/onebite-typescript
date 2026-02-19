// Unknown
// 모든 타입의 슈퍼타입, 전체 집합
function unknownExam() {
    // 배열, 객체, 문자열, number 등 모든 값을 넣을 수 있음(모든 값에서 업케스팅)
    let a: unknown = 1;
    let b: unknown = [];
    let c: unknown = {};
    let d: unknown = null;
    let e: unknown = undefined;

    let unknownVar: unknown;
    // let num:number = unknownVar; 다운케스팅, 할당 불가
    // let string: string = unknownVar; 다운케스팅, 할당 불가
}

// Never
// 불가능 또는 모순, 타입 계층도 최하단 위치
// 모든 집합의 부분집합
function neverExam() {
    function neverFunc(): never {
        while (true) {
            
        }
    }

    // never에서 업케스팅이기에 가능함
    let num: number = neverFunc();
    let string: string = neverFunc();
    let bool: boolean = neverFunc();

    // 다운케스팅이라서 안됨
    // let never1: never = 10;
}

// Void
// 리턴값이 없을 때 반환값이 없음을 명시하기 위함
function voidExam() {
    return undefined;    
}

let voidVar: void = undefined;

// Any
// 치트키, 타입 계층도 무시
// 모든 타입의 슈퍼이자 모든 타입의 서브(never 제외)
function anyExam() {
    let unknownVar: unknown;
    let anyVar: any;
    let neverVar: never;
    let objectVar: object;

    anyVar = unknownVar;
    unknownVar = anyVar;
    // 다운케스팅인데 허용됨, any는 다 됨 => 웬만하면 사용하지 말자

    // anyVar = neverVar
    // neverVar = anyVar;
}