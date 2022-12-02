import { AxiosPromise } from 'axios';
import request from '../utils/request';

class Service {
    static getPermissionList(): { menuList: any; } | PromiseLike<{ menuList: any; }> {
        throw new Error("Method not implemented.");
    }
    //get方法请求
    getMethod(params: string): AxiosPromise<any> {
        return request(params)
    }
    //post方法请求
    postMethod(params: string): AxiosPromise<any> {
        return request(params)
    }
}
export default Service
