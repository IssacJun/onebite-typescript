// void
// 아무것도 없음을 의미
// 아래 함수처럼 반환값이 없을 때 그 함수의 반환값 타입
// 오직 undefiend
function fun2(): void {
    console.log("hello");
}
// 왜 undefiend/null이라고 쓰지 않을까?
// 함수의 반환값으로 return undefiend/null;으로 또는 return; 선언해야 되기 때문

// never
// 불가능한 타입
// 무한루프, throw new Error()처럼 반환할 수 없는, 모순인 상황에서의 리턴 타입
// 그 어떤 값도 저장할 수 없음
function func3(): never {
    while (true) {
        
    }
}
function func4(): never {
    throw new Error();
}
