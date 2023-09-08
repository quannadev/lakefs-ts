import {BaseService} from "./base_service";
import {
    ApiEndpoint,
    BlockstoreConfig,
    Config,
    CreateUserRequest,
    GarbageCollectionConfig,
    SetupStatus, UserCertificate,
    Version
} from "./modules";

export class ConfigSetup extends BaseService {

    constructor(config: Config) {
        super(config);
    }

    async getVersion(): Promise<Version> {
        return this.get<Version>(this.getEndpoint(ApiEndpoint.Config).concat('/version'));
    }
    async getStorage(): Promise<BlockstoreConfig> {
        return this.get<BlockstoreConfig>(this.getEndpoint(ApiEndpoint.Config).concat('/storage'));
    }
    ///config/garbage-collection
    async getGarbageCollection(): Promise<GarbageCollectionConfig> {
        return this.get<GarbageCollectionConfig>(this.getEndpoint(ApiEndpoint.Config).concat('/garbage-collection'));
    }

    /// Setup
    async getSetupStatus(): Promise<SetupStatus> {
        return this.get<SetupStatus>(this.getEndpoint(ApiEndpoint.Setup));
    }
    async setupAdminUser(info: CreateUserRequest): Promise<UserCertificate> {
        return this.post<UserCertificate, CreateUserRequest>(this.getEndpoint(ApiEndpoint.Setup), this.getDefaultParams(), info);
    }
}