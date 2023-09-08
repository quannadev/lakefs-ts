import {
    ApiEndpoint,
    Config,
    CreateRepositoryRequest,
    Metadata,
    RepositoryInfo,
    RepositoryRule,
    Response
} from "./modules";
import {BaseService} from "./base_service";

export class Repositories extends BaseService {
    constructor(config: Config) {
        super(config);
    }

    async Repositories(): Promise<Response<RepositoryInfo[]>> {
        return this.get(this.getEndpoint(ApiEndpoint.Repositories), this.getDefaultParams());
    }

    async createRepository(requestData: CreateRepositoryRequest): Promise<RepositoryInfo> {
        return this.post<RepositoryInfo, CreateRepositoryRequest>(this.getEndpoint(ApiEndpoint.Repositories), this.getDefaultParams(), requestData);
    }

    async getRepository(name: string): Promise<RepositoryInfo> {
        return this.get(this.getEndpoint(ApiEndpoint.Repositories).concat(`/${name}`), this.getDefaultParams());
    }

    async deleteRepository(name: string): Promise<boolean> {
        return this.delete(this.getEndpoint(ApiEndpoint.Repositories).concat(`/${name}`));
    }

    async getRepositoryMetadata(name: string): Promise<Metadata> {
        return this.get(this.getEndpoint(ApiEndpoint.Repositories).concat(`/${name}/metadata`), this.getDefaultParams());
    }

    async setAllowedBranchProtection(name: string): Promise<boolean> {
        return this.postBoolean(this.getEndpoint(ApiEndpoint.Repositories).concat(`/${name}/branch_protection/set_allowed`), this.getDefaultParams(), null);
    }

    async getBranchProtection(name: string): Promise<RepositoryRule[]> {
        return this.get(this.getEndpoint(ApiEndpoint.Repositories).concat(`/${name}/branch_protection`), this.getDefaultParams());
    }

    async setBranchProtection(name: string, rule: RepositoryRule): Promise<boolean> {
        return this.postBoolean(this.getEndpoint(ApiEndpoint.Repositories).concat(`/${name}/branch_protection`), this.getDefaultParams(), rule);
    }

    async deleteBranchProtection(name: string, rule: RepositoryRule): Promise<boolean> {
        return this.delete(this.getEndpoint(ApiEndpoint.Repositories).concat(`/${name}/branch_protection`), rule);
    }

    getEndpoint(endpoint: ApiEndpoint): string {
        switch (endpoint) {
            case ApiEndpoint.Repositories:
                return `/repositories`;
            default:
                return '';
        }
    }
}