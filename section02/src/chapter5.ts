// 열거형 타입(Enum type)
// 여러가지 값들에 각각 이름을 부여해서 열거해두고 사용하는 타입
enum Role {
    // ADMIN = 0,
    // USER = 1,
    // GUEST = 2
    ADMIN, // 이렇게 하면 자동으로 0부터 선언됨, = 10하면 10부터 정의됨
    USER = 33, // 33부터 선언됨
    GUEST
}

enum Language {
    korean = "ko",
    english = "en"
}

const user1 = {
    name: "woojun",
    role: Role.ADMIN, // 숫자값 0 대신에 위에서 정의된 enum을 씀
    language: Language.korean
}
const user2 = {
    name: "gail",
    role: Role.USER
}
const user3 = {
    name: "daeil",
    role: Role.GUEST
}

console.log(user1, user2, user3);
