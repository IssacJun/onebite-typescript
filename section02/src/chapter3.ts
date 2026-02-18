// 객체: object, 객체다 라는 것만 정의해서 알려줌
// 객체 내 속성은 알지 못함, 그래서 {}를 대신 씀
let user: object = {
    id: 1,
    name: "woojun"
}
// 객체 리터럴 타입, 프로퍼티의 타입까지 정의함
// 이렇게 하면 점 표기법으로 접근 가능

// 객체 내 프로퍼티 즉, 구조에 대한 타입 시스템
// 구조적 타입 시스템(Property based system)

// id?: 객체를 선언할 때 이 프로퍼티는 없어도 되는 것(선택적, optional)
let user1: {
    id?: number,
    name: string
} = {
    id: 1,
    name: "woojun"
}

let dog: {
    name: string,
    color: string
} = {
    name: "돌돌이",
    color: "갈색"
};

user1 = {
    name: "우준"
}

let config: {
    readonly apiKey: string,
} = {
    apiKey: "API Key"
}
// readonly 프로퍼티를 수정 요청 시 에러 발생함
// config.apiKey = "new key";