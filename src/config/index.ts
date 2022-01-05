const env = import.meta.env.MODE || 'prod';
interface config { 
    baseApi?:string |any,
    mockApi?:string |any
}
interface EnvConfigProps { 
    dev: config,
    test: config,
    prod:config
}
const EnvConfig:EnvConfigProps = {
    dev: {
        baseApi: "",
        mockApi:""
    },
    test: {
        baseApi: "",
        mockApi:""
    },
    prod: {
        baseApi: "",
        mockApi:""
    }
} 
export default {
    env,
    mock: true,
    ...EnvConfig[env]
}