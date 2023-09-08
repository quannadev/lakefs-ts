import {BaseService} from "./base_service";
import {
    ApiEndpoint,
    CommitInfo,
    Config, CreateTagRequest, DiffItem,
    DumpRefsInfo,
    MergeRequest,
    MergeStatus,
    QueryParams,
    Response, GeneralInfo, CreateCommitRequest
} from "./modules";

export class Branch extends BaseService {
    constructor(config: Config) {
        super(config);
    }

    async dumpRefs(): Promise<DumpRefsInfo> {
        return this.put<DumpRefsInfo, null>(this.getEndpoint(ApiEndpoint.Repositories).concat(`/${this.config.repository}/refs/dump`), this.getDefaultParams(), null);
    }

    async restoreRefs(dumpRefsInfo: DumpRefsInfo): Promise<boolean> {
        return this.postBoolean(this.getEndpoint(ApiEndpoint.Repositories).concat(`/${this.config.repository}/refs/restore`), this.getDefaultParams(), dumpRefsInfo);
    }

    async getCommits(branch_name: string, params: QueryParams,): Promise<Response<CommitInfo[]>> {
        return this.get(this.getEndpoint(ApiEndpoint.Repositories).concat(`/${this.config.repository}/refs/${branch_name}/commits`), params);
    }

    async merge(source: string, destinationBranch: string, body: MergeRequest): Promise<{
        "reference": "string"
    }> {
        return this.postNoParams<{
            "reference": "string"
        }, MergeRequest>(this.getEndpoint(ApiEndpoint.Repositories).concat(`/${this.config.repository}/refs/${source}/merge/${destinationBranch}`), body);
    }

    async mergeStatus(source: string, destinationBranch: string): Promise<MergeStatus> {
        return this.get(this.getEndpoint(ApiEndpoint.Repositories).concat(`/${this.config.repository}/refs/${source}/merge/${destinationBranch}`));
    }

    /*** Get Diff from source to destination

     - params: `source`, `destination`
     - source: a reference (could be either a branch or a commit ID)
     - destination: a reference (could be either a branch or a commit ID) to compare against
     - returns: DiffItem[]
     ***/
    async getDiff(source: string, destinationBranch: string): Promise<Response<DiffItem[]>> {
        return this.get(this.getEndpoint(ApiEndpoint.Repositories).concat(`/${this.config.repository}/refs/${source}/diff/${destinationBranch}`));
    }

    ///repositories/{repository}/tags
    async getTags(params: QueryParams): Promise<Response<GeneralInfo[]>> {
        return this.get(this.getEndpoint(ApiEndpoint.Repositories).concat(`/${this.config.repository}/tags`), params);
    }

    async createTag(tag: CreateTagRequest): Promise<GeneralInfo> {
        return this.post<GeneralInfo, CreateTagRequest>(this.getEndpoint(ApiEndpoint.Repositories).concat(`/${this.config.repository}/tags`), this.getDefaultParams(), tag);
    }

    async deleteTag(tag: string): Promise<boolean> {
        return this.delete(this.getEndpoint(ApiEndpoint.Repositories).concat(`/${this.config.repository}/tags/${tag}`));
    }

    async getTag(tag: string): Promise<GeneralInfo> {
        return this.get(this.getEndpoint(ApiEndpoint.Repositories).concat(`/${this.config.repository}/tags/${tag}`));
    }

    /// Branches

    async getBranches(params: QueryParams): Promise<Response<GeneralInfo[]>> {
        return this.get(this.getEndpoint(ApiEndpoint.Repositories).concat(`/${this.config.repository}/branches`), params);
    }

    async createBranch(branch: string, source: string): Promise<string> {
        return this.post<string, object>(this.getEndpoint(ApiEndpoint.Repositories).concat(`/${this.config.repository}/branches/${branch}`), this.getDefaultParams(), {
            source: source,
            name: branch
        });
    }

    async getBranch(branch: string): Promise<GeneralInfo> {
        return this.get(this.getEndpoint(ApiEndpoint.Repositories).concat(`/${this.config.repository}/branches/${branch}`));
    }

    async deleteBranch(branch: string): Promise<boolean> {
        return this.delete(this.getEndpoint(ApiEndpoint.Repositories).concat(`/${this.config.repository}/branches/${branch}`));
    }

    async revertBranch(branch: string, ref: string, parent_number: number): Promise<string> {
        return this.post<string, object>(this.getEndpoint(ApiEndpoint.Repositories).concat(`/${this.config.repository}/branches/${branch}/revert`), this.getDefaultParams(), {
            ref,
            parent_number
        });
    }

    async cherryPickBranch(branch: string, ref: string, parent_number: number): Promise<CommitInfo> {
        return this.post<CommitInfo, object>(this.getEndpoint(ApiEndpoint.Repositories).concat(`/${this.config.repository}/branches/${branch}/cherry-pick`), this.getDefaultParams(), {
            ref,
            parent_number
        });
    }

    async getBranchDiff(branch: string, params: QueryParams): Promise<Response<DiffItem[]>> {
        return this.get(this.getEndpoint(ApiEndpoint.Repositories).concat(`/${this.config.repository}/branches/${branch}/diff`), params);
    }

    async getBranchCommits(branch: string, params: QueryParams): Promise<Response<CommitInfo[]>> {
        return this.get(this.getEndpoint(ApiEndpoint.Repositories).concat(`/${this.config.repository}/branches/${branch}/commits`), params);
    }

    async createCommit(branch: string, commit: CreateCommitRequest): Promise<CommitInfo> {
        return this.post<CommitInfo, CreateCommitRequest>(this.getEndpoint(ApiEndpoint.Repositories).concat(`/${this.config.repository}/branches/${branch}/commits`), this.getDefaultParams(), commit);
    }

    async getCommit(branch: string, commitId: string): Promise<CommitInfo> {
        return this.get(this.getEndpoint(ApiEndpoint.Repositories).concat(`/${this.config.repository}/branches/${branch}/commits/${commitId}`));
    }
}