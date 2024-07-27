<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="0">
      <img
        src="https://dongzupeng.github.io/blog/logo.jpg"
        alt="logo"
      />
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1">首页</el-menu-item>
    <el-sub-menu index="2">
      <template #title>用户中心</template>
      <el-menu-item index="2-1">个人信息</el-menu-item>
      <el-menu-item index="2-2">个人设置</el-menu-item>
      <el-menu-item index="2-3">退出登录</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
img {
  width: 50px;
  height: 50px;
  border-radius: 5px;
}
.flex-grow {
  flex-grow: 1;
}
</style>