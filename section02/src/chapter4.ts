// 타입 별칭(코드 중복 해소)
// 각 프로퍼티 별로 타입을 정의하고 이를 User라는 이름으로 저장

// 타입 별칭 선언 시 중복 금지
// 함수 내 선언 가능, 함수 내에서만 가용 가능
// 컴파일 후, 타입 별칭이 모두 삭제됨
type User = {
    id: number,
    name: string,
    nickname: string,
    birth: string,
    bio: string,
    location: string
};


// User 타입 객체를 불러옴
let user: User = {
    id: 1,
    name: "woojun",
    nickname: "",
    birth: "",
    bio: "",
    location: "",
};


// 인덱스 시그니처
type countryNumberCodes = {
    [key: string]: number;
    korea: 410; // 필수 프로퍼티 값 지정 가능
    // japan: string; 일치하거나 호환되어야 함
};

let countryNumberCodes: countryNumberCodes = {
    korea: 410,
};
// 주의 사항
// 저 규칙을 위반하지 않으면 됨(빈 객체여도 가능함)