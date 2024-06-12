// Login
export interface ILoginRequest {
    email: string
    password: string
}

export interface ILoginResponse {
    accessToken: string
}

// Register
export interface IRegisterRequest {
    channelName: string
    email: string
    password: string
}

export interface IRegisterResponse {
    userID: string
    email: string
    accessToken: string
    message: string   
}
