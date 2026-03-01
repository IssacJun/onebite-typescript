type Admin = {
    tag: "ADMIN",
    name: string
}

type Member = {
    tag: "MEMBER",
    name: string
}

type Guest = {
    tag: "GUEST",
    name: string
}

type User = Admin | Member | Guest;

function login(user:User) {
    switch (user.tag) {
        case "ADMIN":
            
            break;
    
        case "MEMBER":
            
            break;
    
        case "GUEST":
            
            break;

        default:
            break;
    }    
}