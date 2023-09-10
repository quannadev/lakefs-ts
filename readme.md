Lakefs client for Node.js
====
This is a Node.js client for [lakeFS]("https://lakefs.io/"). 
It is generated from the api spec using [openapi-generator]("https://docs.lakefs.io/reference/api.html#/")

## Installation

```bash
npm install lakefs-ts
```

## Usage

```typescript
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
```

- Use a client directly

```typescript
import {newClient, getConfigFromEnv} from "../dist";
const config = getConfigFromEnv();
const client = newClient(config);
// get branches
const branches = await client.getBranches();
// get commits
const commits = await client.getCommits();
```
