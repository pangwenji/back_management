import { createApp } from 'vue';
import App from './App.vue';
import { Service } from './api/service';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
console.log(import.meta.env)
const app = createApp(App);
app.use(() => { 
    let servie = new Service();
    servie.getMethod({url:'login'}).then(res => { 
        console.log(res)
    }).catch(err => { 
        console.log(err,'err')
    })
})
app.use(ElementPlus);
app.mount('#app');
