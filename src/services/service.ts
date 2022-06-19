interface Props<P> {
    uri: string
    method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
    body?: P
    query?: { [key:string]: string | number | boolean }
}

interface JSONResponse<R> {
    status_code: number
    message: string
    result?: R
}

abstract class APIService {

    protected static readonly host: string = 'https://goscrum-api.alkemy.org';
    protected static token: string | undefined = undefined;

    public static setToken(t: string | undefined) { this.token = t }

    protected static async FetchJSON<P, R>(props: Props<P>): Promise<JSONResponse<R>> {
        const url = new URL(`${this.host}${props.uri}`);

        if (props.query) {
            for (const [key, value] of Object.entries(props.query)) {
                url.searchParams.set(key, value.toString());
            }
        }

        const headers: any = { 'Content-Type': 'application/json' };
        if (this.token) headers.Authorization = 'Bearer ' + this.token;

        const method = props.method || 'GET';

        const body = props.body ? JSON.stringify(props.body) : undefined;

        const response = await fetch(url.href, { headers, method, body });

        return await response.json();
    }

}

export default APIService;
export type {
    Props,
    JSONResponse
}