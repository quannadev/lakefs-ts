import {Config} from "./modules";
import {Repositories} from "./repositories";
import {ObjectsService} from "./objects";
import {Branch} from "./branch";
import {ConfigSetup} from "./config";

export * from "./modules";
export * from "./auth";
export * from "./branch";
export * from "./repositories";
export * from "./objects";


class Client {
    config: Config;
    repositories: Repositories;
    branches: Branch;
    objects: ObjectsService;
    setupConfig: ConfigSetup;
    constructor(config: Config) {
        this.config = config;
        this.repositories = new Repositories(config);
        this.branches = new Branch(config);
        this.objects = new ObjectsService(config);
        this.setupConfig = new ConfigSetup(config);
    }

    getConfig(): Config {
        return this.config;
    }
    /***
     Get setup config
     - [x] GET /config/version
     - [x] GET /config/storage
     - [x] GET /config/garbage-collection
     - [x] POST /setup_lakefs
     * @returns {ConfigSetup}
    */
    configSetup(): ConfigSetup {
        return this.setupConfig;
    }
    /***
        Get repositories
        - [x] repositories - list repositories
        - [x] createRepository - create repository
        - [x] getRepository - get repository
        - [x] deleteRepository - delete repository
        - [x] getRepositoryMetadata - get repository metadata
        - [x] setAllowedBranchProtection - set allowed branch protection
        - [x] getBranchProtection - get branch protection
        - [x] setBranchProtection - set branch protection
        - [x] deleteBranchProtection - delete branch protection
        * @returns {Repositories}
    ***/
    getRepositories(): Repositories {
        return this.repositories;
    }
    /***
     API for branches
        - [x] getBranches - list branches
        - [x] createBranch - create branch
        - [x] getBranch - get branch
        - [x] deleteBranch - delete branch
        - [x] revertBranch - revert branch
        - [x] cherryPickBranch - cherry-pick branch
        - [x] getBranchDiff - get branch diff
        - [x] dumpRefs - dump refs
        - [x] getTags - list tags
        - [x] createTag - create tag
        - [x] getTag - get tag
        - [x] deleteTag - delete tag
        - [x] getDiff - get diff
        - [x] restoreRefs - restore refs
        - [x] getCommits - get commit
        - [x] merge - merge
        - [x] mergeStatus - merge status
        * @returns {Branch}
     ***/
    getBranches(): Branch {
        return this.branches;
    }
    /***
        API for objects
        - [x] getObjects - list objects
        - [x] checkObjectExits - check object exists
        - [x] deleteObject - delete object
        - [x] copyObject - copy object
        - [x] getObjectStat - get object stat
        - [x] uploadObject - upload object
        * @returns {ObjectsService}
     ***/
    getObjects(): ObjectsService {
        return this.objects;
    }
}

export function newClient(config: Config): Client {
    return new Client(config);
}