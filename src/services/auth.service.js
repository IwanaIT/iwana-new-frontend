import ApiService from "@/services/api.service";
import JwtService from "@/services/jwt.service";

export const VERIFY_AUTH = "verifyAuth";
export const LOGIN = "login";
export const USER_INFO = "userInfo";
export const LOGOUT = "logout";
export const REGISTER = "register";
export const UPDATE_PASSWORD = "updateUser";

// mutation types
export const PURGE_AUTH = "logOut";
export const SET_AUTH = "setUser";
export const SET_PASSWORD = "setPassword";
export const SET_ERROR = "setError";

const state = {
    errors: null,
    user: {},
    isAuthenticated: !!JwtService.getToken()
};

const loginRoute = "api/security/iwana-login";
const userInfo = '/api/frontend/private/usuarios/usuario';

const getters = {
    currentUser(state) {
        return state.user;
    },
    isAuthenticated(state) {
        return state.isAuthenticated;
    }
};

const actions = {
    async [LOGIN](context, credentials) {
        let token = null;
        await ApiService.post(loginRoute, credentials).then(response => {
            token = response.data.data[0];
            JwtService.saveToken(token);
        });

        ApiService.setHeader();

        return ApiService.get(userInfo).then(response => {
            let user = response.data.data;
            user.token = token;
            context.commit(SET_AUTH, user);
        });
    },
    [LOGOUT](context) {
        context.commit(PURGE_AUTH);
    },
    // [REGISTER](context, credentials) {
    //     return new Promise(resolve => {
    //         ApiService.post("login", credentials)
    //             .then(({ data }) => {
    //                 context.commit(SET_AUTH, data);
    //                 resolve(data);
    //             })
    //             .catch(({ response }) => {
    //                 context.commit(SET_ERROR, response.data.errors);
    //             });
    //     });
    // },
    // [VERIFY_AUTH](context) {
    //     if (JwtService.getToken()) {
    //         ApiService.setHeader();
    //         ApiService.get("verify")
    //             .then(({ data }) => {
    //                 context.commit(SET_AUTH, data);
    //             })
    //             .catch(({ response }) => {
    //                 context.commit(SET_ERROR, response.data.errors);
    //             });
    //     } else {
    //         context.commit(PURGE_AUTH);
    //     }
    // },
    // [UPDATE_PASSWORD](context, payload) {
    //     const password = payload;
    //
    //     return ApiService.put("password", password).then(({ data }) => {
    //         context.commit(SET_PASSWORD, data);
    //         return data;
    //     });
    // }
};

const mutations = {
    [SET_ERROR](state, error) {
        state.errors = error;
    },
    [SET_AUTH](state, user) {
        state.isAuthenticated = true;
        state.user = user;
        state.errors = {};
        JwtService.saveToken(user.token);
    },
    [SET_PASSWORD](state, password) {
        state.user.password = password;
    },
    [PURGE_AUTH](state) {
        state.isAuthenticated = false;
        state.user = {};
        state.errors = {};
        JwtService.destroyToken();
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};
