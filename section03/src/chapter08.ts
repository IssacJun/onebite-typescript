// 타입 좁히기
// 조건문 등을 이용해 넓은 타입에서 좁은 타입으로 상황에 따라 좁히는 방법
function func(value:number | string | Date | null) {
    console.log(value); // number | string으로 추론(넓은 타입)

    if (typeof value === "number") {
        console.log(value); // number로 추론(좁은 타입)
    } else if (typeof value === "string") {
        console.log(value); // string로 추론(좁은 타입)
    } else if (value instanceof Date) {
        // instanceof 뒤에는 클래스를 입력해야 함
        console.log(value);
    } else {
        // null로 추론
        console.log(value);
    }

}