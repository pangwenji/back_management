import axios, { AxiosRequestHeaders } from "axios";
import config from "../config";
import {ElMessage } from 'element-plus';
import { useRouter } from "vue-router";
interface headerProps { 
    Authorization:AxiosRequestHeaders | string
}

const service = axios.create({
    baseURL: config.baseApi,
    timeout:8000
})

//请求拦截
service.interceptors.request.use((req) => { 
    const headers:headerProps  = req.headers;
    if (headers.Authorization) { 
        headers.Authorization = 'bell';
        return req;
    }
})
//相应拦截
service.interceptors.response.use(res => { 
    const { code, data, msg } = res.data;
    const router = useRouter();
    if (code === 200) {
        return data;
    } else if (code === 40001) {
        ElMessage.error(TOKEN_INVALID);
        //跳到登录页面
        setTimeout(() => {
            router.push()
        }, 15000)
        return Promise.reject(TOKEN_INVALID)
    } else { 
        ElMessage.error(TOKEN_INVALID);
        return Promise.reject(TOKEN_INVALID)
    }
})