<template>
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item v-for="(item, index) in breadList" :key="item.path">
            <router-link to="/welcome" v-if="index == 0">{{ item.meta.title }}</router-link>
            <span v-else>{{ item.meta.title }}</span>
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRoute } from "vue-router";
export default defineComponent({
    name: "BreadCrumb",
    setup() {
        const route = useRoute();
        let breadList = computed(() => {
            return route.matched;
        });
        return {
          breadList
        }
    },
});
</script>
