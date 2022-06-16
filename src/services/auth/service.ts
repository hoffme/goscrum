import APIService from "../service";
import {
    FetchDataResponseBody,
    FetchSignUpRequestBody,
    FetchSignUpResponseBody,
    FetchSignInRequestBody,
    FetchSignInResponseBody,
    DataResult,
    SignUpParams,
    SignUpResult,
    SignInParams,
    SignInResult
} from './types';

class AuthService extends APIService {

    public static async Data(): Promise<DataResult> {
        const response = await this.FetchJSON<void, FetchDataResponseBody>({
            uri: '/auth/data',
            method: 'GET'
        });

        if (response.message !== 'OK') throw new Error(response.message);

        return {
            continents: response.result?.continente || [],
            regions: response.result?.region || [],
            roles: response.result?.Rol || []
        }
    }

    public static async SignUp(params: SignUpParams): Promise<SignUpResult> {
        const response = await this.FetchJSON<FetchSignUpRequestBody, FetchSignUpResponseBody>({
            uri: '/auth/register',
            method: 'POST',
            body: {
                user: {
                    userName: params.username,
                    password: params.password,
                    email: params.email,
                    teamID: params.teamID,
                    region: params.region,
                    role: params.role,
                    continent: params.continent
                }
            }
        });

        if (response.message !== 'CREATED') throw new Error(response.message);
        if (!response.result) throw new Error('empty result');

        return {
            user: {
                id: response.result.user._id,
                username: response.result.user.userName,
                email: response.result.user.email,
                teamID: response.result.user.teamID,
                role: response.result.user.role,
                continent: response.result.user.continent,
                region: response.result.user.region
            }
        }
    }

    public static async SignIn(params: SignInParams): Promise<SignInResult> {
        const response = await this.FetchJSON<FetchSignInRequestBody, FetchSignInResponseBody>({
            uri: '/auth/login',
            method: 'POST',
            body: {
                userName: params.username,
                password: params.password
            }
        });

        if (response.message !== 'OK') throw new Error(response.message);
        if (!response.result) throw new Error('empty result');

        return {
            token: response.result.token,
            user: {
                id: response.result.user._id,
                username: response.result.user.userName,
                email: response.result.user.email,
                teamID: response.result.user.teamID,
                role: response.result.user.role,
                continent: response.result.user.continent,
                region: response.result.user.region
            }
        }
    }

}

export default AuthService;