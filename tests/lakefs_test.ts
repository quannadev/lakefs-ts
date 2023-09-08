import {getConfigFromEnv} from "../src";

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
