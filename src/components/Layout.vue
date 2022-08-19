<template>
    <a-layout>
        <a-layout-sider breakpoint="lg" collapsed-width="0" @collapse="onCollapse" @breakpoint="onBreakpoint"
            class="sideBar">
            <div class="logo">
                <div class="avatar"><img
                        src="https://tiemanhsky.com/wp-content/uploads/2020/06/PHUS9013-Edita-768x768.jpg"
                        class="avatar-img" /></div>
                <h1 class="text-avatar">HẾ LÔ...</h1>
            </div>
            <a-menu v-model:selectedKeys="selectedKeys" v-model:openKeys="openKeys" theme="dark" mode="inline">
                <router-link :to="{ name: 'status' }">
                    <a-menu-item key="status">
                        <user-outlined />
                        <span>Trạng Thái</span>
                    </a-menu-item>
                </router-link>
                <router-link :to="{ name: 'user' }">
                    <a-menu-item key="user">
                        <video-camera-outlined />
                        <span>Người Dùng</span>
                    </a-menu-item>
                </router-link>
                <router-link :to="{ name: 'hr' }">
                    <a-menu-item key="hr">
                        <user-outlined />
                        <span>HR_HOLD</span>
                    </a-menu-item>
                </router-link>
                <router-link :to="{ name: 'role' }">
                    <a-menu-item key="role">
                        <user-outlined />
                        <span>ROLE</span>
                    </a-menu-item>
                </router-link>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header />
            <a-layout-content>
                <div>
                    <router-view></router-view>
                </div>
            </a-layout-content>
            <a-layout-footer style="text-align: center">
                Ant Design ©2018 Created by Ant UED
            </a-layout-footer>
        </a-layout>
    </a-layout>
</template>
<script>
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
import { useMenu } from '../stores/useMenu'
import { storeToRefs } from "pinia";
export default defineComponent({
    components: {
        UserOutlined,
        VideoCameraOutlined,
        UploadOutlined,
    },

    setup() {
        const menuStore = useMenu()
        const onCollapse = (collapsed, type) => {
            console.log(collapsed, type);
        };

        const onBreakpoint = broken => {
            console.log(broken);
        };

        return {
            // selectedKeys: ref(['4']),
            ...storeToRefs(menuStore),
            onCollapse,
            onBreakpoint,
        };
    },

});
</script>
<style>
#components-layout-demo-responsive .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
}

.site-layout-sub-header-background {
    background: #fff;
}

.site-layout-background {
    background: #fff;
}

[data-theme='dark'] .site-layout-sub-header-background {
    background: #141414;
}

.sideBar {
    height: 100vh;
}

.ant-layout-sider {
    width: 300px !important;
    max-width: 300px !important;
    min-width: 300px !important;
}

.helo {
    color: white;
    height: 10%;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    border-bottom: #fff solid 1px;
}

.ant-layout.ant-layout-has-sider {
    height: 100vh;
}

.avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: #eee;
    margin-top: 20px;
}

.avatar-img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
}

.text-avatar {
    color: #fff;
    margin-top: 15px;
}

.logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: gray solid 1px;
}

.nav-text {
    color: #fff;
}

.ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal) .ant-menu-item-selected {
    border-radius: 20px 0px 0px 20px;
}
</style>