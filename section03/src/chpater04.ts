// 객체 타입 간의 호환성
// 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은가

// typescript는 프로퍼티 기준으로 타입을 정의하는 구조적 타입 시스템

// 슈퍼타입
type Animal = {
    name: string,
    color: string
}

// Animal 객체의 프로퍼티를 이미 가지고 있음
// 추가 프로퍼티가 있음
type Dog = {
    name: string,
    color: string,
    breed: string, // 견종
}

// 초과 프로퍼티 검사
// 객체 프로퍼티 검사 (Excess Property Checking)
// 핵심: 직접 할당할 때는 "딱 맞아야" 한다!
// TypeScript는 객체를 직접 할당할 때와 변수를 통해 할당할 때 다르게 동작합니다. 