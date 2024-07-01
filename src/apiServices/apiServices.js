import axios from "axios";
import HWMessage from "utils/HWMessage";
import LocalStorageService from "utils/LocalStorage";

class ApiService {
    constructor() {
        if (!ApiService.instance) { ApiService.instance = this }
        return ApiService.instance
    }

    getBaseUrl = () => { return process.env.REACT_APP_IS_IN_PROD === "true" ? process.env.REACT_APP_BASE_URL_PROD : process.env.REACT_APP_BASE_URL_DEV; }

    defaultAuthConfig = () => {
        const accessToken = LocalStorageService.getToken();
        // console.log("accessToken", accessToken)
        return { headers: { 'auth-token': accessToken } }
    }

}

const apiService = new ApiService();
export default apiService;
