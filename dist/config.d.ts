import { BaseService } from "./base_service";
import { BlockstoreConfig, Config, CreateUserRequest, GarbageCollectionConfig, SetupStatus, UserCertificate, Version } from "./modules";
export declare class ConfigSetup extends BaseService {
    constructor(config: Config);
    getVersion(): Promise<Version>;
    getStorage(): Promise<BlockstoreConfig>;
    getGarbageCollection(): Promise<GarbageCollectionConfig>;
    getSetupStatus(): Promise<SetupStatus>;
    setupAdminUser(info: CreateUserRequest): Promise<UserCertificate>;
}
