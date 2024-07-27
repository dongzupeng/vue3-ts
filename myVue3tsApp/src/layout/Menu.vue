<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
    @select="handleSelect">
    <el-menu-item>
      <img src="https://dongzupeng.github.io/blog/logo.jpg" alt="logo" />
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="home">首页</el-menu-item>
    <el-menu-item index="about">关于</el-menu-item>
    <el-sub-menu index="user">
      <template #title>用户中心</template>
      <el-menu-item index="userInfo">个人信息</el-menu-item>
      <el-menu-item index="userSetting">个人设置</el-menu-item>
      <el-menu-item index="userLogout">退出登录</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import router from '@/router';
import { ref } from 'vue'

const activeIndex = ref('home')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
  // 路由跳转
  router.push({ path: key })
}
</script>

<style lang="scss" scoped>
.el-menu-demo {
  height: 80px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .0);
  img {
    width: 50px;
    height: 50px;
    border-radius: 5px;
  }

  .flex-grow {
    flex-grow: 1;
  }
}
</style>