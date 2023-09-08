import {BaseService} from "./base_service";
import {ApiEndpoint, Config, GroupItem, QueryParams, Response, UserInfo} from "./modules";

export class Auth extends BaseService {
    constructor(config: Config) {
        super(config);
    }

    async getUser(userId: string): Promise<UserInfo> {
        return this.get(this.getEndpoint(ApiEndpoint.Auth).concat(`/users/${userId}`));
    }

    async deleteUser(userId: string): Promise<boolean> {
        return this.delete(this.getEndpoint(ApiEndpoint.Auth).concat(`/users/${userId}`));
    }

    async getUsers(): Promise<UserInfo[]> {
        return this.get(this.getEndpoint(ApiEndpoint.Auth).concat(`/users`));
    }

    async getGroups(params: QueryParams): Promise<Response<GroupItem[]>> {
        return this.get(this.getEndpoint(ApiEndpoint.Auth).concat(`/groups`), params);
    }

    async createGroup(group_name: string): Promise<GroupItem> {
        return this.post<GroupItem, object>(this.getEndpoint(ApiEndpoint.Auth).concat(`/groups`), this.getDefaultParams(), {
            id: group_name,
        });
    }

    async deleteGroup(group_name: string): Promise<boolean> {
        return this.delete(this.getEndpoint(ApiEndpoint.Auth).concat(`/groups/${group_name}`));
    }

    async getGroupMembers(group_name: string): Promise<Response<UserInfo[]>> {
        return this.get(this.getEndpoint(ApiEndpoint.Auth).concat(`/groups/${group_name}/members`));
    }

    async addGroupMember(group_name: string, user_id: string): Promise<boolean> {
        return this.putBoolean(this.getEndpoint(ApiEndpoint.Auth).concat(`/groups/${group_name}/members/${user_id}`), this.getDefaultParams(), null);
    }

    async deleteGroupMember(group_name: string, user_id: string): Promise<boolean> {
        return this.delete(this.getEndpoint(ApiEndpoint.Auth).concat(`/groups/${group_name}/members/${user_id}`));
    }


}