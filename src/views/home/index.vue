<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useUserStoreHook } from '@/store/modules/user'
const router = useRouter()
const userStore = useUserStoreHook()
if (!userStore.token) {
  router.replace({
    path: '/login'
  })
}
</script>

<template>
  <h1>首页</h1>
  <h1 v-if="userStore.token">{{ userStore.token }}</h1>
</template>

<style lang="less" scoped></style>
