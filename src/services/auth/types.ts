interface FetchDataResponseBody {
    continente: string[]
    region: string[]
    Rol: string[]
}

interface FetchSignUpRequestBody {
    user: {
        userName: string
        password: string
        email: string
        teamID: string
        role: string
        continent: string
        region: string
    }
}

interface FetchSignUpResponseBody {
    acknowledged: boolean
    insertedId: string
    user: {
        _id: string
        userName: string
        email: string
        teamID: string
        role: string
        continent: string
        region: string
    }
}

interface FetchSignInRequestBody {
    userName: string
    password: string
}

interface FetchSignInResponseBody {
    token: string
    user: {
        _id: string
        userName: string
        email: string
        teamID: string
        role: string
        continent: string
        region: string
    }
}

interface DataResult {
    continents: string[]
    regions: string[]
    roles: string[]
}

interface SignUpParams {
    username: string
    password: string
    email: string
    teamID: string
    role: string
    continent: string
    region: string
}

interface User {
    id: string
    username: string
    email: string
    teamID: string
    role: string
    continent: string
    region: string
}

interface SignUpResult {
    user: User
}

interface SignInParams {
    username: string
    password: string
}

interface SignInResult {
    token: string
    user: User
}

export type {
    FetchDataResponseBody,
    FetchSignUpRequestBody,
    FetchSignUpResponseBody,
    FetchSignInRequestBody,
    FetchSignInResponseBody,
    DataResult,
    SignUpParams,
    SignUpResult,
    SignInParams,
    SignInResult,
    User
}