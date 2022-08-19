import { REST_API_METHOD as METHOD, BASE_URL } from "../constants/index"
var API_SCHEME = {
    AUTHEN: {
        VALIDATE_TOKEN: {
            url: `${BASE_URL}/auth`,
            method: METHOD.GET,
        },
        LOGIN: {
            url: `${BASE_URL}/auth`,
            method: METHOD.GET,
        },
        LOGOUT: {
            url: `${BASE_URL}/auth`,
            method: METHOD.POST,
        }
    },
    USER: {
        GET: {
            url: `${BASE_URL}/user`,
            method: METHOD.GET,
        },
        CREATE: {
            url: `${BASE_URL}/user`,
            method: METHOD.POST,
        },
        UPDATE: {
            url: `${BASE_URL}/user/:id_User`,
            method: METHOD.PUT,
        },
        DELETE: {
            url: `${BASE_URL}/user/:id_User`,
            method: METHOD.DELETE
        }
    },
    STATUS: {
        GET: {
            url: `${BASE_URL}/status`,
            method: METHOD.GET,
        },
        CREATE: {
            url: `${BASE_URL}/status`,
            method: METHOD.POST,
        },
        UPDATE: {
            url: `${BASE_URL}/status/:id_Status`,
            method: METHOD.PUT,
        },
        DELETE: {
            url: `${BASE_URL}/status/:id`,
            method: METHOD.DELETE
        },
        SEARCH: {
            url: `${BASE_URL}/status/search`,
            method: METHOD.SEARCH,
        }
    },
    USER_ONE: {
        GET: {
            url: `${BASE_URL}/user/one`,
            method: METHOD.GET,
        },
        CREATE: {
            url: `${BASE_URL}/user/one`,
            method: METHOD.POST,
        },
        UPDATE: {
            url: `${BASE_URL}/user/one/:id_User`,
            method: METHOD.PUT,
        },
        DELETE: {
            url: `${BASE_URL}/user/one/:id_User`,
            method: METHOD.DELETE
        }
    },
    ROLE: {
        GET: {
            url: `${BASE_URL}/role`,
            method: METHOD.GET,
        },
        CREATE: {
            url: `${BASE_URL}/role`,
            method: METHOD.POST,
        },
        UPDATE: {
            url: `${BASE_URL}/role/:id_Role`,
            method: METHOD.PUT,
        },
        DELETE: {
            url: `${BASE_URL}/role/:id_Role`,
            method: METHOD.DELETE
        }
    }

}
export default API_SCHEME