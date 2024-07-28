<template>
    <div class="footer">
        头文字D ©{{time}}Created by 头文字D
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue" 
const time = ref(new Date().getFullYear())

</script>

<style lang="scss" scoped>
.footer {
    position: fixed;
    bottom: -50px;
    width: 100%;
    height: 100px;
    text-align: center;
    font-size: 14px;
    z-index: -1;
}
</style>