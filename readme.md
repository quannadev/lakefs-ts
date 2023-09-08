# Lakefs client for Node.js

This is the Node.js client for [lakeFS](https://lakefs.io/).

## Installation

```bash
npm install lakefs-ts
```

## Usage

```typescript
import {Branch} from 'lakefs-ts';
import {getConfigFromEnv} from "lakefs-ts";

const config = getConfigFromEnv()
const branch = new Brach(config);
const branches = await branch.getBranches();

```
