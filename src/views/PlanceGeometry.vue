<template>
    <div class="welcome">
        <div id="three"></div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import * as Three from 'thre'
// import * as Three from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
export default defineComponent({
    name: "welcome",
    setup() {
        // let scene = new THREE.Scene();
        // let scene = new THREE.Scene();
        //添加相机
        let camera = new Three.
    }
});
</script>

<style lang="scss">
.welcome {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: #fff;




}
</style>
