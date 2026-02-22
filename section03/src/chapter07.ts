// 타입 단언
type Person = {
    name: string,
    age: number
}
let person = {
    name: "",
    age: 17,
    aaa: "dfdf"
} as Person; // Person 타입으로 단언함
// 객체를 단언할 때 프로퍼티 검사를 스킵할 수 있음

// 타입 단언 규칙
// 값 as 단언일 떄, 값이 A의 슈퍼 또는 서브 타입이어야 함

// const 단언
let num = 10 as const;
let cat = {
    name: "야옹",
    color: "yellow"
} as const; // const로 단언하면 프로퍼티가 readonly가 되어버림

// non null 단언(!)
// null이거나 undefined가 아니라고 강하게 알려주는 것
type Post = {
    title: string,
    author?: string
}
let post: Post = {
    title: "",
    author: ""
}
// const len: number = post.author?.length; // 에러 발생
const len: number = post.author!.length;