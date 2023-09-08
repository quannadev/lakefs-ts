export interface Config {
    host: string;
    accessKeyId: string;
    secretAccessKey: string;
    repository: string;
    branch: string;
}
export declare function getConfigFromEnv(): Config;
export interface Version {
    version: string;
    latest_version: string;
    upgrade_recommended: boolean;
    upgrade_url: string;
}
export interface Pagination {
    has_more: boolean;
    next_offset: string;
    results: number;
    max_per_page: number;
}
export interface Response<T> {
    pagination: Pagination;
    results: T;
}
export interface ObjectItem {
    path: string;
    path_type: string;
    physical_address: string;
    physical_address_expiry: number;
    checksum: string;
    size_bytes: number;
    mtime: number;
    metadata: Metadata;
    content_type: string;
}
export interface QueryParams {
    prefix?: string;
    after?: string;
    delimiter?: string;
    marker?: string;
    page?: number;
    amount?: number;
    limit?: number;
    path?: string;
    user_metadata?: boolean;
}
export type Metadata = Record<string, string>;
export interface RepositoryInfo {
    id: string;
    creation_date: number;
    default_branch: string;
    storage_namespace: string;
}
export interface RepositoryRule {
    "pattern": string;
}
export interface CreateRepositoryRequest {
    name: string;
    storage_namespace: string;
    default_branch: string;
    sample_data?: boolean;
}
export interface BlockstoreConfig {
    blockstore_type: string;
    blockstore_namespace_example: string;
    blockstore_namespace_ValidityRegex: string;
    default_namespace_prefix: string;
    pre_sign_support: boolean;
    pre_sign_support_ui: boolean;
    import_support: boolean;
    import_validity_regex: string;
}
export interface GarbageCollectionConfig {
    grace_period: number;
}
export interface SetupStatus {
    state: string;
    comm_prefs_missing: boolean;
    login_config: LoginConfig;
}
export interface LoginConfig {
    RBAC: string;
    login_url: string;
    login_failed_message: string;
    fallback_login_url: string;
    fallback_login_label: string;
    login_cookie_names: string[];
    logout_url: string;
}
export interface PreSetupRequest {
    email: string;
    featureUpdates: boolean;
    securityUpdates: boolean;
}
export interface CreateUserRequest {
    username: string;
    key: {
        access_key_id: string;
        secret_access_key: string;
    };
}
export interface UserCertificate {
    access_key_id: string;
    secret_access_key: string;
    creation_date: number;
}
export interface UserInfo {
    id: string;
    creation_date: number;
    friendly_name: string;
    email: string;
}
export interface GroupItem {
    id: string;
    creation_date: number;
}
export interface DumpRefsInfo {
    commits_meta_range_id: string;
    tags_meta_range_id: string;
    branches_meta_range_id: string;
}
export interface CommitInfo {
    id: string;
    parents: string[];
    committer: string;
    message: string;
    creation_date: number;
    meta_range_id: string;
    metadata: Metadata;
}
export interface CreateCommitRequest {
    message: string;
    metadata?: Metadata;
    date?: number;
}
export interface MergeRequest {
    message: string;
    metadata?: Metadata;
    strategy: string;
}
export interface MergeStatus {
    source_commit_id: string;
    destination_commit_id: string;
    base_commit_id: string;
}
export declare class RequestError {
    message: string;
    status: number;
    data: any;
    constructor(message: string, status?: number, data?: any);
}
export interface DiffItem {
    type: string;
    path: string;
    path_type: string;
    size_bytes: number;
}
export interface GeneralInfo {
    id: string;
    commit_id: string;
}
export interface CreateTagRequest {
    id: string;
    ref: string;
}
export interface ShortObjectInfo {
    size: number;
    last_modified: Date;
    range?: string;
    tags: string;
}
export declare enum ApiEndpoint {
    Config = 0,
    Setup = 1,
    Auth = 2,
    Repositories = 3,
    Objects = 4
}
