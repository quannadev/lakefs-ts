import axios, {AxiosError, AxiosInstance} from "axios";
import {ApiEndpoint, Config, QueryParams, RequestError} from "./modules";

export class BaseService {
    private readonly client: AxiosInstance;
    protected config: Config;

    constructor(config: Config) {
        this.config = config;
        this.client = axios.create({
            baseURL: this.config.host + '/api/v1',
            auth: {
                username: this.config.accessKeyId,
                password: this.config.secretAccessKey
            }
        })
    }

    getDefaultParams(): QueryParams {
        return {
            amount: 100,
        }
    }

    async get<T>(endpoint: string, params: QueryParams | null = null): Promise<T> {
        return this.client.get<T>(endpoint, {
            params
        })
            .then(res => res.data)
            .catch(err => {
                if (axios.isAxiosError(err)) {
                    const error = err as AxiosError;
                    throw new RequestError(error.message, error.status, error.response?.data)
                }
                throw new RequestError("request error", 400)
            })
    }

    async delete<B>(endpoint: string, body: B | undefined = undefined): Promise<boolean> {
        if (body) {
            return this.client.request({
                method: 'delete',
                url: endpoint,
                data: body
            }).then(res => res.status < 300)
                .catch(err => {
                    if (axios.isAxiosError(err)) {
                        const error = err as AxiosError;
                        throw new RequestError(error.message, error.status, error.response?.data)
                    }
                    throw new RequestError("request error", 400)
                })
        }
        return this.client.delete(endpoint)
            .then(res => res.status < 300)
            .catch(err => {
                if (axios.isAxiosError(err)) {
                    const error = err as AxiosError;
                    throw new RequestError(error.message, error.status, error.response?.data)
                }
                throw new RequestError("request error", 400)
            })
    }

    async post<T, B>(endpoint: string, params: QueryParams, data: B): Promise<T> {
        return this.client.post<T>(endpoint, data, {
            params
        })
            .then(res => res.data);
    }

    async postNoParams<T, B>(endpoint: string, data: B): Promise<T> {
        return this.client.post<T>(endpoint, data)
            .then(res => res.data);
    }

    async postBoolean(endpoint: string, params: QueryParams, data: any): Promise<boolean> {
        return this.client.post(endpoint, data, {
            params
        })
            .then(res => res.status < 300)
            .catch(err => {
                if (axios.isAxiosError(err)) {
                    const error = err as AxiosError;
                    throw new RequestError(error.message, error.status, error.response?.data)
                }
                throw new RequestError("request error", 400)
            })
    }

    async put<T, B>(endpoint: string, params: QueryParams, data: B): Promise<T> {
        return this.client.put<T>(endpoint, data, {
            params
        })
            .then(res => res.data)
            .catch(err => {
                if (axios.isAxiosError(err)) {
                    const error = err as AxiosError;
                    throw new RequestError(error.message, error.status, error.response?.data)
                }
                throw new RequestError("request error", 400)
            })
    }

    async putBoolean(endpoint: string, params: QueryParams, data: any): Promise<boolean> {
        return this.client.put(endpoint, data, {
            params
        })
            .then(res => res.status < 300)
            .catch(err => {
                if (axios.isAxiosError(err)) {
                    const error = err as AxiosError;
                    throw new RequestError(error.message, error.status, error.response?.data)
                }
                throw new RequestError("request error", 400)
            })
    }

    async patch<T, B>(endpoint: string, params: QueryParams, data: B): Promise<T> {
        return this.client.patch<T>(endpoint, data, {
            params
        })
            .then(res => res.data)
            .catch(err => {
                if (axios.isAxiosError(err)) {
                    const error = err as AxiosError;
                    throw new RequestError(error.message, error.status, error.response?.data)
                }
                throw new RequestError("request error", 400)
            })
    }


    getEndpoint(endpoint: ApiEndpoint): string {
        switch (endpoint) {
            case ApiEndpoint.Config:
                return '/config';
            case ApiEndpoint.Setup:
                return '/setup_lakefs';
            case ApiEndpoint.Auth:
                return '/auth';
            case ApiEndpoint.GetObjects:
                return `/repositories/${this.config.repository}/refs/${this.config.branch}/objects/ls`;
            case ApiEndpoint.DeleteObject:
                return `/repositories/${this.config.repository}/refs/${this.config.branch}/objects`;
            case ApiEndpoint.GetRepositories:
                return `/repositories`;
            default:
                return '';
        }
    }
}