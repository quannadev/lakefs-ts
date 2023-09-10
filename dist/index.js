"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
exports.newClient = void 0;
var repositories_1 = require("./repositories");
var objects_1 = require("./objects");
var branch_1 = require("./branch");
var config_1 = require("./config");
__exportStar(require("./modules"), exports);
__exportStar(require("./auth"), exports);
__exportStar(require("./branch"), exports);
__exportStar(require("./repositories"), exports);
__exportStar(require("./objects"), exports);
var Client = /** @class */ (function () {
    function Client(config) {
        this.config = config;
        this.repositories = new repositories_1.Repositories(config);
        this.branches = new branch_1.Branch(config);
        this.objects = new objects_1.ObjectsService(config);
        this.setupConfig = new config_1.ConfigSetup(config);
    }
    Client.prototype.getConfig = function () {
        return this.config;
    };
    /***
     Get setup config
     - [x] GET /config/version
     - [x] GET /config/storage
     - [x] GET /config/garbage-collection
     - [x] POST /setup_lakefs
     * @returns {ConfigSetup}
    */
    Client.prototype.configSetup = function () {
        return this.setupConfig;
    };
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
    Client.prototype.getRepositories = function () {
        return this.repositories;
    };
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
    Client.prototype.getBranches = function () {
        return this.branches;
    };
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
    Client.prototype.getObjects = function () {
        return this.objects;
    };
    return Client;
}());
function newClient(config) {
    return new Client(config);
}
exports.newClient = newClient;
