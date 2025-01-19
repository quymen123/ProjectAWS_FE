import User from "./User"

export default interface Response<T> {
    status: boolean,
    message: string,
    data?: T
}

export interface ResponseLogin {
    user?: User,
    token?: string
}