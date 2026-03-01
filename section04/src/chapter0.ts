// 함수 타입 정의

function func(a: number, b: number) {
    return a + b;
}
const add = (a: number, b: number) => a + b;
function introduce(name = "우준", age?: number) {
    console.log(name, age);
    // ?를 붙이면 선택적 매개변수
    // 해당 매개변수는 undefined가 될 수 있음

    // 필수 매개변수와 선택적 매개변수
}

// rest 파라미터
function getSum(...rest:number[]) {
    let sum = 0;
    rest.forEach((it) => {
        sum += it
    });    
}

getSum(1,2,3)
