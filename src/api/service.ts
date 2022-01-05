import request from '../utils/request';

class Service { 
    //get方法请求
    getMethod(params) { 
        return request(params)
    }
    //post方法请求
    postMethod(params) { 
       return request(params)
    }
}
export { 
    Service
}