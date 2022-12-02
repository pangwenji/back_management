<template>
    <div class="basic-layout">
        <div :class="['nav-side', isCollapse ? 'fold' : 'unfold']">
            <!-- 系统LOGO -->
            <div class="logo">
                <img src="./../assets/logo.png" />
                <span>Manager</span>
            </div>
            <!-- 导航菜单 -->
            <el-menu :default-active="activeMenu" background-color="#001529" text-color="#fff" router
                :collapse="isCollapse" class="nav-menu">
                <tree-menu :userMenu="userMenu" />
            </el-menu>
        </div>
        <div :class="['content-right', isCollapse ? 'fold' : 'unfold']">
            <div class="nav-top">
                <div class="nav-left">
                    <div class="menu-fold" @click="toggle">
                        <i class="el-icon-s-fold"></i>
                    </div>
                    <div class="bread">
                        <BreadCrumb />
                    </div>
                </div>
                <div class="user-info">
                    <el-badge :is-dot="noticeCount > 0 ? true : false" class="notice" type="danger"
                        @click="$router.push('/audit/approve')">
                        <i class="el-icon-bell"></i>
                    </el-badge>
                    <el-dropdown @command="handleLogout">
                        <span class="user-link">
                            {{ userInfo.userName }}
                            <i class="el-icon--right"></i>
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item command="email">邮箱：{{ userInfo.userEmail }}</el-dropdown-item>
                                <el-dropdown-item command="logout">退出</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
            </div>
            <div class="wrapper">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import TreeMenu from "./TreeMenu.vue";
import BreadCrumb from "./BreadCrumb.vue";
import { defineComponent, computed, reactive, toRefs, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
export default defineComponent({
    name: "Home",
    components: { TreeMenu, BreadCrumb },
    setup() {
        let store = useStore();
        let state = reactive({
            isCollapse: false,
            userInfo: { userName: 'three.js', userEmail: '799953277@qq.com' },
            noticeCount: 0,
            userMenu: [

                {
                    _id: 0,
                    menuName: "Three",
                    menuType: 1,
                    path: '/geometry',
                    children: [
                        {
                            menuName: "three-01",
                            menuType: 1,
                            path: '/geometry',

                        }
                    ]
                }
            ],
            activeMenu: location.hash.slice(1),
        });

        let noticeCount = computed(() => {
            return store.state.noticeCount;
        });

        onMounted(() => {
            getNoticeCount();
            getMenuList();
        });

        const toggle = () => {
            state.isCollapse = !state.isCollapse;
        };
        const handleLogout = (key: string) => {
            // if (key == "email") return;
            // store.commit("saveUserInfo", "");
            // state.userInfo = {};
            // state.$router.push("/login");
        };
        const getNoticeCount = async () => {
            // try {
            //     const count = await this.$api.noticeCount();
            //     store.commit("saveNoticeCount", count);
            // } catch (error) {
            //     console.error(error);
            // }
        };
        const getMenuList = async () => {
            // try {
            //     const { menuList, actionList } = await this.$api.getPermissionList();
            //     store.commit("saveMenuList", menuList);
            //     store.commit("saveActionList", actionList);
            //     state.userMenu = menuList;
            // } catch (error) {
            //     console.error(error);
            // }
        };

        return {
            ...toRefs(state),
            toggle,
            handleLogout,
            getNoticeCount,
            getMenuList
        };
    },
});
</script>

<style lang="scss">
.basic-layout {
    position: relative;

    .nav-side {
        position: fixed;
        width: 200px;
        height: 100vh;
        background-color: #001529;
        color: #fff;
        overflow-y: auto;
        transition: width 0.5s;

        .logo {
            display: flex;
            align-items: center;
            font-size: 18px;
            height: 50px;

            img {
                margin: 0 16px;
                width: 32px;
                height: 32px;
            }
        }

        .nav-menu {
            height: calc(100vh - 50px);
            border-right: none;
        }

        // 合并
        &.fold {
            width: 64px;
        }

        // 展开
        &.unfold {
            width: 200px;
        }
    }

    .content-right {
        margin-left: 200px;

        // 合并
        &.fold {
            margin-left: 64px;
        }

        // 展开
        &.unfold {
            margin-left: 200px;
        }

        .nav-top {
            height: 50px;
            line-height: 50px;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #ddd;
            padding: 0 20px;

            .nav-left {
                display: flex;
                align-items: center;

                .menu-fold {
                    margin-right: 15px;
                    font-size: 18px;
                }
            }

            .user-info {
                .notice {
                    line-height: 30px;
                    margin-right: 15px;
                    cursor: pointer;
                }

                .user-link {
                    cursor: pointer;
                    color: #409eff;
                }
            }
        }

        .wrapper {
            background: #eef0f3;
            padding: 20px;
            height: calc(100vh - 50px);

            .main-page {
                background: #fff;
                height: 100%;
            }
        }
    }
}
</style>
