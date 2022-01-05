import request from '../utils/request';

class Service { 
    //get方法请求
     getMethod(params) { 
        return request(params)
    }
}