import axios, { AxiosRequestHeaders } from "axios";
import config from "../config";
import {ElMessage } from 'element-plus';
import { useRouter } from "vue-router";

const TOKEN_INVALID = 'Token认证失败，请重新登录'
const NETWORK_ERROR = '网络请求异常，请稍后重试'
interface headerProps { 
    Authorization:AxiosRequestHeaders | string
}
export interface requestProps extends headerProps{ 
    method?: 'get' | 'post' | 'put' | 'delete' | 'patch' |string,
    data?: Object,
    params?: Object,
    mock?: boolean,
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
//响应拦截
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
//封装请求核心函数
function request(options:requestProps |any) { 
    options.method = options.method || 'get'
    if (options.method.toLowerCase() === 'get') {
        options.params = options.data;
    }
    let isMock = config.mock;
    if (typeof options.mock != 'undefined') {
        isMock = options.mock;
    }
    if (config.env === 'prod') {
        service.defaults.baseURL = config.baseApi
    } else {
        service.defaults.baseURL = isMock ? config.mockApi : config.baseApi
    }

    return service(options)
}

['get', 'post', 'put', 'delete', 'patch'].forEach((item) => {
    request[item] = (url?:string, data?:Object, options?:Object) => {
        return request({
            url,
            data,
            method: item,
            ...options
        })
    }
})
export default request;
