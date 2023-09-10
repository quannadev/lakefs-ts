import { ApiEndpoint, Config, CreateRepositoryRequest, Metadata, RepositoryInfo, RepositoryRule, Response } from "./modules";
import { BaseService } from "./base_service";
export declare class Repositories extends BaseService {
    constructor(config: Config);
    repositories(): Promise<Response<RepositoryInfo[]>>;
    createRepository(requestData: CreateRepositoryRequest): Promise<RepositoryInfo>;
    getRepository(name: string): Promise<RepositoryInfo>;
    deleteRepository(name: string): Promise<boolean>;
    getRepositoryMetadata(name: string): Promise<Metadata>;
    setAllowedBranchProtection(name: string): Promise<boolean>;
    getBranchProtection(name: string): Promise<RepositoryRule[]>;
    setBranchProtection(name: string, rule: RepositoryRule): Promise<boolean>;
    deleteBranchProtection(name: string, rule: RepositoryRule): Promise<boolean>;
    getEndpoint(endpoint: ApiEndpoint): string;
}
