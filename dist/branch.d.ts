import { BaseService } from "./base_service";
import { CommitInfo, Config, CreateTagRequest, DiffItem, DumpRefsInfo, MergeRequest, MergeStatus, QueryParams, Response, GeneralInfo, CreateCommitRequest } from "./modules";
export declare class Branch extends BaseService {
    constructor(config: Config);
    dumpRefs(): Promise<DumpRefsInfo>;
    restoreRefs(dumpRefsInfo: DumpRefsInfo): Promise<boolean>;
    getCommits(branch_name: string, params: QueryParams): Promise<Response<CommitInfo[]>>;
    merge(source: string, destinationBranch: string, body: MergeRequest): Promise<{
        "reference": "string";
    }>;
    mergeStatus(source: string, destinationBranch: string): Promise<MergeStatus>;
    /*** Get Diff from source to destination

     - params: `source`, `destination`
     - source: a reference (could be either a branch or a commit ID)
     - destination: a reference (could be either a branch or a commit ID) to compare against
     - returns: DiffItem[]
     ***/
    getDiff(source: string, destinationBranch: string): Promise<Response<DiffItem[]>>;
    getTags(params: QueryParams): Promise<Response<GeneralInfo[]>>;
    createTag(tag: CreateTagRequest): Promise<GeneralInfo>;
    deleteTag(tag: string): Promise<boolean>;
    getTag(tag: string): Promise<GeneralInfo>;
    getBranches(params: QueryParams): Promise<Response<GeneralInfo[]>>;
    createBranch(branch: string, source: string): Promise<string>;
    getBranch(branch: string): Promise<GeneralInfo>;
    deleteBranch(branch: string): Promise<boolean>;
    revertBranch(branch: string, ref: string, parent_number: number): Promise<string>;
    cherryPickBranch(branch: string, ref: string, parent_number: number): Promise<CommitInfo>;
    getBranchDiff(branch: string, params: QueryParams): Promise<Response<DiffItem[]>>;
    getBranchCommits(branch: string, params: QueryParams): Promise<Response<CommitInfo[]>>;
    createCommit(branch: string, commit: CreateCommitRequest): Promise<CommitInfo>;
    getCommit(commitId: string): Promise<CommitInfo>;
}
