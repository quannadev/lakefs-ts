import {BaseService} from "./base_service";
import {
    ApiEndpoint,
    CommitInfo,
    Config, CreateTagRequest, DiffItem,
    DumpRefsInfo,
    MergeRequest,
    MergeStatus,
    QueryParams,
    Response, TagInfo
} from "./modules";

export class Branch extends BaseService{
    constructor(config: Config) {
        super(config);
    }
    async dumpRefs(): Promise<DumpRefsInfo> {
        return this.put<DumpRefsInfo, null>(this.getEndpoint(ApiEndpoint.GetRepositories).concat(`/${this.config.repository}/refs/dump`), this.getDefaultParams(), null);
    }
    async restoreRefs(dumpRefsInfo: DumpRefsInfo): Promise<boolean> {
        return this.postBoolean(this.getEndpoint(ApiEndpoint.GetRepositories).concat(`/${this.config.repository}/refs/restore`), this.getDefaultParams(), dumpRefsInfo);
    }
    async getCommits(branch_name: string, params: QueryParams, ): Promise<Response<CommitInfo[]>> {
        return this.get<Response<CommitInfo[]>>(this.getEndpoint(ApiEndpoint.GetRepositories).concat(`/${this.config.repository}/refs/${branch_name}/commits`), params);
    }
    async merge(source: string, destinationBranch: string, body: MergeRequest): Promise<{
        "reference": "string"
    }> {
        return this.postNoParams<{
            "reference": "string"
        }, MergeRequest>(this.getEndpoint(ApiEndpoint.GetRepositories).concat(`/${this.config.repository}/refs/${source}/merge/${destinationBranch}`), body);
    }
    async mergeStatus(source: string, destinationBranch: string): Promise<MergeStatus>{
        return this.get<MergeStatus>(this.getEndpoint(ApiEndpoint.GetRepositories).concat(`/${this.config.repository}/refs/${source}/merge/${destinationBranch}`));
    }

    /*** Get Diff from source to destination

    - params: `source`, `destination`
        - source: a reference (could be either a branch or a commit ID)
        - destination: a reference (could be either a branch or a commit ID) to compare against
    - returns: DiffItem[]
    ***/
    async getDiff(source: string, destinationBranch: string): Promise<Response<DiffItem[]>>{
        return this.get<Response<DiffItem[]>>(this.getEndpoint(ApiEndpoint.GetRepositories).concat(`/${this.config.repository}/refs/${source}/diff/${destinationBranch}`));
    }

    ///repositories/{repository}/tags
    async getTags(params: QueryParams): Promise<Response<TagInfo[]>> {
        return this.get<Response<TagInfo[]>>(this.getEndpoint(ApiEndpoint.GetRepositories).concat(`/${this.config.repository}/tags`), params);
    }

    async createTag(tag: CreateTagRequest): Promise<TagInfo> {
        return this.post<TagInfo, CreateTagRequest>(this.getEndpoint(ApiEndpoint.GetRepositories).concat(`/${this.config.repository}/tags`), this.getDefaultParams(), tag);
    }

    async deleteTag(tag: string): Promise<boolean> {
        return this.delete(this.getEndpoint(ApiEndpoint.GetRepositories).concat(`/${this.config.repository}/tags/${tag}`));
    }
    async getTag(tag: string): Promise<TagInfo> {
        return this.get<TagInfo>(this.getEndpoint(ApiEndpoint.GetRepositories).concat(`/${this.config.repository}/tags/${tag}`));
    }
}