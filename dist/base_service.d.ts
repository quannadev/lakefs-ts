/// <reference types="node" />
import { ApiEndpoint, Config, QueryParams, ShortObjectInfo } from "./modules";
import * as fs from "fs";
export declare class BaseService {
    private readonly client;
    protected config: Config;
    constructor(config: Config);
    getDefaultParams(): QueryParams;
    get<T>(endpoint: string, params?: QueryParams | null): Promise<T>;
    delete<B>(endpoint: string, body?: B | undefined): Promise<boolean>;
    deleteWithParams(endpoint: string, params: QueryParams): Promise<boolean>;
    upload<T>(endpoint: string, data: fs.ReadStream, params: QueryParams): Promise<T>;
    post<T, B>(endpoint: string, params: QueryParams, data: B): Promise<T>;
    postNoParams<T, B>(endpoint: string, data: B): Promise<T>;
    postBoolean(endpoint: string, params: QueryParams, data: any): Promise<boolean>;
    put<T, B>(endpoint: string, params: QueryParams, data: B): Promise<T>;
    putBoolean(endpoint: string, params: QueryParams, data: any): Promise<boolean>;
    patch<T, B>(endpoint: string, params: QueryParams, data: B): Promise<T>;
    head(endpoint: string, params: QueryParams): Promise<ShortObjectInfo>;
    getEndpoint(endpoint: ApiEndpoint): string;
}
