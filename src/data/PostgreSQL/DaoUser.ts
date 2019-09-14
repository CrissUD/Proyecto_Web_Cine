import IDaoUser from "../IDaoUser";

class DaoUser implements IDaoUser{
    constructor() {

    }

    public login(email: string, pass: string): Promise<any> {
        return new Promise(() => {
            
        });
    }
}

export default DaoUser;