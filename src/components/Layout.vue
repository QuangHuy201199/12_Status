<template>
    <a-layout>
        <a-layout-sider breakpoint="lg" collapsed-width="0" @collapse="onCollapse" @breakpoint="onBreakpoint"
            class="sideBar">
            <div class="helo" style="color: white, height: 200px">
                HELLO
            </div>
            <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
                <router-link :to="{ name: 'status' }">
                    <a-menu-item key="1">
                        <user-outlined />
                        <span class="nav-text">Trạng Thái</span>
                    </a-menu-item>
                </router-link>
                <router-link :to="{ name: 'user' }">
                    <a-menu-item key="2">
                        <video-camera-outlined />
                        <span class="nav-text">Người Dùng</span>
                    </a-menu-item>
                </router-link>
                <router-link :to="{ name: 'hr' }">
                    <a-menu-item key="3">
                        <user-outlined />
                        <span class="nav-text">HR_HOLD</span>
                    </a-menu-item>
                </router-link>
                <router-link :to="{ name: 'role' }">
                    <a-menu-item key="4">
                        <user-outlined />
                        <span class="nav-text">ROLE</span>
                    </a-menu-item>
                </router-link>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header :style="{ background: '#fff', padding: 0 }" />
            <a-layout-content :style="{ margin: '24px 16px 0' }">
                <div :style="{ padding: '24px', background: '#fff', minHeight: '680px' }">
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
import Status from "./Status.vue"
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
    components: {
        UserOutlined,
        VideoCameraOutlined,
        UploadOutlined,
    },

    setup() {
        const onCollapse = (collapsed, type) => {
            console.log(collapsed, type);
        };

        const onBreakpoint = broken => {
            console.log(broken);
        };

        return {
            selectedKeys: ref(['4']),
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
</style>