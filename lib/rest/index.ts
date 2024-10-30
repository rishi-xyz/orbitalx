import axios, { AxiosInstance } from 'axios';

export class RestClient {
    private _axiosInstance: AxiosInstance;

    constructor(baseURL: string) {
        this._axiosInstance = axios.create({
            baseURL,
        });
    }

    async get<T>(url: string): Promise<T> {
        const response = await this._axiosInstance.get(url);
        return response.data;
    }

    async post<T, D>(url: string, data: D): Promise<T> {
        const response = await this._axiosInstance.post(url, data);
        return response.data;
    }
}

const restClient = new RestClient(process.env.NEXT_PUBLIC_REST_API_URL!);
export default restClient;
