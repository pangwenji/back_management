const env = import.meta.env.MODE || 'prod';
interface config { 
    baseApi?:string |any,
    mockApi?:string |any
}
interface EnvConfigProps { 
    development: config,
    test: config,
    product:config
}
const EnvConfig:EnvConfigProps = {
    development: {
        baseApi: "",
        mockApi:"https://www.fastmock.site/mock/8528cba4c03b541c9f3f889404238370/api"
    },
    test: {
        baseApi: "",
        mockApi:"https://www.fastmock.site/mock/8528cba4c03b541c9f3f889404238370/api"
    },
    product: {
        baseApi: "",
        mockApi:"https://www.fastmock.site/mock/8528cba4c03b541c9f3f889404238370/api"
    }
} 
export default {
    env,
    mock: true,
    ...EnvConfig[env]
}