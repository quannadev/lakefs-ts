import { BaseService } from "./base_service";
import { Config, GroupItem, QueryParams, Response, UserInfo } from "./modules";
export declare class Auth extends BaseService {
    constructor(config: Config);
    getUser(userId: string): Promise<UserInfo>;
    deleteUser(userId: string): Promise<boolean>;
    getUsers(): Promise<UserInfo[]>;
    getGroups(params: QueryParams): Promise<Response<GroupItem[]>>;
    createGroup(group_name: string): Promise<GroupItem>;
    deleteGroup(group_name: string): Promise<boolean>;
    getGroupMembers(group_name: string): Promise<Response<UserInfo[]>>;
    addGroupMember(group_name: string, user_id: string): Promise<boolean>;
    deleteGroupMember(group_name: string, user_id: string): Promise<boolean>;
}
