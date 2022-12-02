import { StoreTypes } from "../config/type";

class Storeage {

    public meassage!: string;

    public get() {
        return this.meassage;
    }

    public set(value: string) {
        this.meassage = value;
    }

    //设置存储
    public setValue(key: string, value: string) {
        let storage = Storeage.getStroage();
        window.localStorage.setItem(StoreTypes.namespace, JSON.stringify(storage))
    }

    static getStroage() {
        return JSON.parse(window.localStorage.getItem(StoreTypes.namespace) || "{}");
    }

    //删除单个信息保存
    public static clearItem(key: string) {
        let storage = Storeage.getStroage();
        delete storage[key];
        window.localStorage.setItem(StoreTypes.namespace, JSON.stringify(StoreTypes.namespace))
    }

    //删除全部信息
    public clearAll() {
        window.localStorage.clear();
    }

}

export default new Storeage()
