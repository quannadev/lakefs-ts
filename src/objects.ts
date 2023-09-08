import {BaseService} from "./base_service";
import {ApiEndpoint, Config, ObjectItem, QueryParams, Response, ShortObjectInfo} from "./modules";

export class ObjectsService extends BaseService {
    constructor(config: Config) {
        super(config);
    }

    async getObjects(params: QueryParams): Promise<Response<ObjectItem[]>> {
        return this.get(this.getEndpoint(ApiEndpoint.Objects).concat("/ls"), params);
    }
    async checkObjectExits(objectId: string): Promise<ShortObjectInfo> {
        return this.head(this.getEndpoint(ApiEndpoint.Objects).concat(`/${objectId}/exists`));
    }
    async deleteObject(objectId: string): Promise<boolean> {
        return this.deleteWithParams(this.getEndpoint(ApiEndpoint.Objects).concat(`/${objectId}`), {
            ...this.getDefaultParams(),
            path: objectId
        });
    }
    async copyObject(objectId: string, dest_source: string, dest_path: string, src_path: string, src_ref: string): Promise<ObjectItem> {
        return this.post(this.getEndpoint(ApiEndpoint.Repositories).concat(`/branches/${dest_source}/copy?dest_path=${dest_path}`), this.getDefaultParams(), {
            src_path,
            src_ref
        });
    }
    async getObjectStat(objectId: string, ref: string = this.config.branch): Promise<ObjectItem> {
        return this.get(this.getEndpoint(ApiEndpoint.Repositories).concat(`/refs/${ref}/objects/stat`), {
            ...this.getDefaultParams(),
            path: objectId
        });
    }
    async uploadObject(fileName: string, content: any): Promise<ObjectItem> {
        return this.upload(this.getEndpoint(ApiEndpoint.Repositories).concat(`/branches/${this.config.branch}/objects`), content, {
            ...this.getDefaultParams(),
            path: fileName
        });
    }
}