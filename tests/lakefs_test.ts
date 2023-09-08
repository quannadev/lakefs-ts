import {getConfigFromEnv, QueryParams} from "../src/modules";

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

test('Get Version', async () => {
    let config = getConfigFromEnv();
    const {LakefsService} = await import("../src/core");
    const lakefs = new LakefsService(config);
    const version = await lakefs.getVersion();
    expect(version).toEqual({
        version: "0.108.0",
        latest_version: "0.108.0",
        upgrade_recommended: false,
    });
});

test('Get Objects', async () => {
    let config = getConfigFromEnv();
    config.host = "https://lakefs.quanna.dev";
    const {LakefsService} = await import("../src/core");
    const lakefs = new LakefsService(config);
    const params: QueryParams = {
        amount: 100,
    }
    const objects = await lakefs.getObjects(params);
    console.log(objects.pagination)
    expect(objects.results.length).toEqual(100);
});