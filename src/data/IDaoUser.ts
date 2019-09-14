interface IDaoUser {
    login(email: string, pass: string): Promise<any>
};

export default IDaoUser;