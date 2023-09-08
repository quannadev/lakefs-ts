"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.Branch = void 0;
var base_service_1 = require("./base_service");
var modules_1 = require("./modules");
var Branch = /** @class */ (function (_super) {
    __extends(Branch, _super);
    function Branch(config) {
        return _super.call(this, config) || this;
    }
    Branch.prototype.dumpRefs = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.put(this.getEndpoint(modules_1.ApiEndpoint.Repositories).concat("/".concat(this.config.repository, "/refs/dump")), this.getDefaultParams(), null)];
            });
        });
    };
    Branch.prototype.restoreRefs = function (dumpRefsInfo) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.postBoolean(this.getEndpoint(modules_1.ApiEndpoint.Repositories).concat("/".concat(this.config.repository, "/refs/restore")), this.getDefaultParams(), dumpRefsInfo)];
            });
        });
    };
    Branch.prototype.getCommits = function (branch_name, params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.get(this.getEndpoint(modules_1.ApiEndpoint.Repositories).concat("/".concat(this.config.repository, "/refs/").concat(branch_name, "/commits")), params)];
            });
        });
    };
    Branch.prototype.merge = function (source, destinationBranch, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.postNoParams(this.getEndpoint(modules_1.ApiEndpoint.Repositories).concat("/".concat(this.config.repository, "/refs/").concat(source, "/merge/").concat(destinationBranch)), body)];
            });
        });
    };
    Branch.prototype.mergeStatus = function (source, destinationBranch) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.get(this.getEndpoint(modules_1.ApiEndpoint.Repositories).concat("/".concat(this.config.repository, "/refs/").concat(source, "/merge/").concat(destinationBranch)))];
            });
        });
    };
    /*** Get Diff from source to destination

     - params: `source`, `destination`
     - source: a reference (could be either a branch or a commit ID)
     - destination: a reference (could be either a branch or a commit ID) to compare against
     - returns: DiffItem[]
     ***/
    Branch.prototype.getDiff = function (source, destinationBranch) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.get(this.getEndpoint(modules_1.ApiEndpoint.Repositories).concat("/".concat(this.config.repository, "/refs/").concat(source, "/diff/").concat(destinationBranch)))];
            });
        });
    };
    ///repositories/{repository}/tags
    Branch.prototype.getTags = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.get(this.getEndpoint(modules_1.ApiEndpoint.Repositories).concat("/".concat(this.config.repository, "/tags")), params)];
            });
        });
    };
    Branch.prototype.createTag = function (tag) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.post(this.getEndpoint(modules_1.ApiEndpoint.Repositories).concat("/".concat(this.config.repository, "/tags")), this.getDefaultParams(), tag)];
            });
        });
    };
    Branch.prototype.deleteTag = function (tag) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this["delete"](this.getEndpoint(modules_1.ApiEndpoint.Repositories).concat("/".concat(this.config.repository, "/tags/").concat(tag)))];
            });
        });
    };
    Branch.prototype.getTag = function (tag) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.get(this.getEndpoint(modules_1.ApiEndpoint.Repositories).concat("/".concat(this.config.repository, "/tags/").concat(tag)))];
            });
        });
    };
    /// Branches
    Branch.prototype.getBranches = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.get(this.getEndpoint(modules_1.ApiEndpoint.Repositories).concat("/".concat(this.config.repository, "/branches")), params)];
            });
        });
    };
    Branch.prototype.createBranch = function (branch, source) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.post(this.getEndpoint(modules_1.ApiEndpoint.Repositories).concat("/".concat(this.config.repository, "/branches")), this.getDefaultParams(), {
                        source: source,
                        name: branch
                    })];
            });
        });
    };
    Branch.prototype.getBranch = function (branch) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.get(this.getEndpoint(modules_1.ApiEndpoint.Repositories).concat("/".concat(this.config.repository, "/branches/").concat(branch)))];
            });
        });
    };
    Branch.prototype.deleteBranch = function (branch) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this["delete"](this.getEndpoint(modules_1.ApiEndpoint.Repositories).concat("/".concat(this.config.repository, "/branches/").concat(branch)))];
            });
        });
    };
    Branch.prototype.revertBranch = function (branch, ref, parent_number) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.post(this.getEndpoint(modules_1.ApiEndpoint.Repositories).concat("/".concat(this.config.repository, "/branches/").concat(branch, "/revert")), this.getDefaultParams(), {
                        ref: ref,
                        parent_number: parent_number
                    })];
            });
        });
    };
    Branch.prototype.cherryPickBranch = function (branch, ref, parent_number) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.post(this.getEndpoint(modules_1.ApiEndpoint.Repositories).concat("/".concat(this.config.repository, "/branches/").concat(branch, "/cherry-pick")), this.getDefaultParams(), {
                        ref: ref,
                        parent_number: parent_number
                    })];
            });
        });
    };
    Branch.prototype.getBranchDiff = function (branch, params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.get(this.getEndpoint(modules_1.ApiEndpoint.Repositories).concat("/".concat(this.config.repository, "/branches/").concat(branch, "/diff")), params)];
            });
        });
    };
    Branch.prototype.getBranchCommits = function (branch, params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.get(this.getEndpoint(modules_1.ApiEndpoint.Repositories).concat("/".concat(this.config.repository, "/branches/").concat(branch, "/commits")), params)];
            });
        });
    };
    Branch.prototype.createCommit = function (branch, commit) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.post(this.getEndpoint(modules_1.ApiEndpoint.Repositories).concat("/".concat(this.config.repository, "/branches/").concat(branch, "/commits")), this.getDefaultParams(), commit)];
            });
        });
    };
    Branch.prototype.getCommit = function (commitId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.get(this.getEndpoint(modules_1.ApiEndpoint.Repositories).concat("/".concat(this.config.repository, "/commits/").concat(commitId)))];
            });
        });
    };
    return Branch;
}(base_service_1.BaseService));
exports.Branch = Branch;
