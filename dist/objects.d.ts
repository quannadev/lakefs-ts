/// <reference types="node" />
import { BaseService } from "./base_service";
import { Config, ObjectItem, QueryParams, Response, ShortObjectInfo } from "./modules";
import * as fs from "fs";
export declare class ObjectsService extends BaseService {
    constructor(config: Config);
    getObjects(params: QueryParams): Promise<Response<ObjectItem[]>>;
    checkObjectExits(objectId: string): Promise<ShortObjectInfo>;
    deleteObject(objectId: string): Promise<boolean>;
    copyObject(objectId: string, dest_source: string, dest_path: string, src_path: string, src_ref: string): Promise<ObjectItem>;
    getObjectStat(objectId: string, ref?: string): Promise<ObjectItem>;
    uploadObject(fileName: string, content: fs.ReadStream): Promise<ObjectItem>;
}
