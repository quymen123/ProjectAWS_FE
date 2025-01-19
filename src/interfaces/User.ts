export default interface User {
    email?: string,
    password?: string,
    firstName?: string,
    lastName?: string,
    phoneNumber?: string,
    birthday?: string
}

export interface LoginUser {
    email: string,
    password: string,
}

export interface RegisterUser {
    email?: string,
    password?: string,
    firstName?: string,
    lastName?: string
}
