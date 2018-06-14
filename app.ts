interface IAdmin{
    role:string;
    name:string;
}

interface IUser{
    role:string;
    name:string;
}

function getUser(user:IAdmin|IUser){
const newUser:IUser=user as IUser;
}

