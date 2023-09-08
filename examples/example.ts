import {Branch, getConfigFromEnv, QueryParams} from "../dist";

async function main() {
    const config = getConfigFromEnv();
    const branch = new Branch(config);
    const params: QueryParams = {
        amount: 100,
    }
    const branches = await branch.getBranches(params);
    console.log("branches", branches)
}

main().catch(err => {
    console.log("err", err)
    process.exit(1);
})