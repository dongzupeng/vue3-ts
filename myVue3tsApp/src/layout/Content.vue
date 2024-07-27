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
    width: 80%;
    height: calc(100vh - 80px);
    // max-width: 100%;
    border-radius: 10px;
    margin: 20px auto; 
    padding: 20px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
</style>