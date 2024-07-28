<template>
    <div class="content">
        <router-view />
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue" 

</script>

<style lang="scss" scoped>
.content {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    width: 80%;
    height: calc(100vh - 220px);
    min-height: 500px;
    // max-width: 100%;
    border-radius: 10px;
    margin: 100px auto; 
    padding: 20px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
</style>