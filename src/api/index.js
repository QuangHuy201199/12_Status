import { createApi } from "../utils/helpers/index"
import ApiScheme from "./scheme"

export const StatusApi = {
   
    GetStatus: createApi(ApiScheme.STATUS.GET),
    CreateStatus: createApi(ApiScheme.STATUS.CREATE),
    UpdateStatus: createApi(ApiScheme.STATUS.UPDATE),
    DeleteStatus: createApi(ApiScheme.STATUS.DELETE),
    SearchStatus: createApi(ApiScheme.STATUS.SEARCH),
}
export const userApi = {
    GetUser: createApi(ApiScheme.USER.GET),
    CreateUser: createApi(ApiScheme.USER.CREATE),
    UpdateUser: createApi(ApiScheme.USER.UPDATE),
    DeleteUser: createApi(ApiScheme.USER.DELETE),
}
export const userOneApi = {
    GetUserOne: createApi(ApiScheme.USER_ONE.GET),
    CreateUserOne: createApi(ApiScheme.USER_ONE.CREATE),
    UpdateUserOne: createApi(ApiScheme.USER_ONE.UPDATE),
    DeleteUserOne: createApi(ApiScheme.USER_ONE.DELETE),
}
export const role = {
    GetRole: createApi(ApiScheme.ROLE.GET),
    CreateRole: createApi(ApiScheme.ROLE.CREATE),
    UpdateRole: createApi(ApiScheme.ROLE.UPDATE),
    DeleteRole: createApi(ApiScheme.ROLE.DELETE),
}