import {CreateCommitRequest, getConfigFromEnv} from "../src";
import {ObjectsService} from "../src";
import * as fs from "fs";
import {Branch} from "../src";

test('Get Config', async () => {
    const config = getConfigFromEnv();
    expect(config).toEqual({
        host: "http://localhost:8000",
        accessKeyId: "lakefs_root",
        secretAccessKey: "lakefs_root",
        repository: "test",
        branch: "main",
    });
});

test('upload_delete_object', async () => {
    const config = getConfigFromEnv();
    const objectsService = new ObjectsService(config);
    //open file test.parquet and upload to lakefs
    const file = fs.createReadStream("tests/test.parquet");
    const res = await objectsService.uploadObject("test.parquet", file);
    expect(res.path).toEqual("test.parquet");
    expect(res.size_bytes).toEqual(76);
    const delete_res = await objectsService.deleteObject("test.parquet");
    expect(delete_res).toEqual(true);
});

test('commit_revert_branch', async () => {
    const config = getConfigFromEnv();
    const branch = new Branch(config);
    const commit: CreateCommitRequest = {
        message: "test commit",
    }
    const res = await branch.createCommit(config.branch, commit);
    expect(res.message).toEqual(commit.message);
    const commitInfo = await branch.getCommit(res.id);
    expect(res.message).toEqual("test commit");
    const revert = await branch.revertBranch(config.branch, commitInfo.id, 1);
    console.log(revert);
})
test('create_delete_branch', async () => {
    const config = getConfigFromEnv();
    const branch = new Branch(config);
    const res = await branch.createBranch("new_branch", config.branch);
    console.log(res)
    const branch_info = await branch.getBranch("new_branch");
    expect(branch_info.id).toEqual("new_branch");
    const delete_res = await branch.deleteBranch("new_branch");
    expect(delete_res).toEqual(true);
})
test('create_delete_tag', async () => {
    const config = getConfigFromEnv();
    const branch = new Branch(config);
    const res = await branch.createTag({
        id: "new_tag",
        ref: config.branch,
    });
    const tag_info = await branch.getTag("new_tag");
    expect(tag_info.id).toEqual("new_tag");
    const delete_res = await branch.deleteTag("new_tag");
    expect(delete_res).toEqual(true);
})


