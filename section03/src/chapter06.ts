// any의 진화(비추천)
// 중간에 잘못될 수 있고, 다른 사람의 코드라면 맞춰야 해서 좋지 않음
let d; // any로 추론, 명시적으로 기입하는 것과 다름
d = 10; // any -> number으로 진화함
d.toFixed(); 

d = "hello"; // any -> Sting로 진화함
d.toUpperCase();

const num = 10; // const로 하면 number literal type으로 선언됨
// 이제 10말고는 다른 값으로 선언안됨

// 여러가지 타입의 배열
let arr = [1, "hello"]; // string과 number의 유니온 타입으로 추론됨

