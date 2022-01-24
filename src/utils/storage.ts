import { StoreTypes } from "../config/type";

class Storeage { 
    public meassage: string | undefined;
   //设置存储
    public setValue(key:string,value : string) {
        this.meassage = value;
        let storage = this.getStroage();
        window.localStorage.setItem(StoreTypes.namespace,JSON.stringify(storage))
    }
    
    public getStroage() { 
        return JSON.parse(window.localStorage.getItem(StoreTypes.namespace) || "{}");
    }

    //删除单个信息保存
    public clearItem(key: string) {
        let storage = this.getStroage();
        delete storage[key];
        window.localStorage.setItem(StoreTypes.namespace,JSON.stringify(StoreTypes.namespace))
    }
    
    //删除全部信息
    public clearAll() { 
        window.localStorage.clear();
    }

}

export { 
    Storeage
}