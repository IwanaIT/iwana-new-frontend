import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import JwtService from "@/services/jwt.service";

/**
 * Service to call HTTP request via Axios
 */
const ApiService = {
    init() {
        Vue.use(VueAxios, axios);
        Vue.axios.defaults.baseURL = "https://localhost:8000";
    },

    /**
     * Configuración por defecto de envío de todas las cabeceras a través de la API.
     */
    setHeader() {
        Vue.axios.defaults.headers.common[
            "Authorization"
            ] = `Bearer ${JwtService.getToken()}`;
    },

    /**
     * Send the GET HTTP request
     * @param resource
     * @returns {*}
     */
    get(resource) {
        return Vue.axios
            .get(`${resource}`)
            .catch(error => {
                throw new Error(`Error en la petición GET de la API ${error}`);
            });
    },

    /**
     * Set the POST HTTP request
     * @param resource
     * @param params
     * @returns {*}
     */
    post(resource, params) {
        return Vue.axios.post(`${resource}`, params);
    },
};

export default ApiService;