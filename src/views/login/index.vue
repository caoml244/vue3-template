<script setup lang="ts">
import { useUserStoreHook } from '@/store/modules/user'
import { reactive, ref } from 'vue'
import { LoginRequestData } from '@/types/user'
import { useRouter } from 'vue-router'
const router = useRouter()
const form: LoginRequestData = reactive({
  username: '',
  password: '',
  code: ''
})
const loading = ref(false)
const submitForm = () => {
  loading.value = true
  useUserStoreHook()
    .login(form)
    .then(() => {
      router.push({ path: '/' })
    })
    .catch(() => {
      form.password = ''
      form.code = ''
    })
    .finally(() => {
      loading.value = false
    })
}

const resetForm = () => {
  form.username = ''
  form.password = ''
  form.code = ''
}
</script>

<template>
  <h1>用户登录</h1>
  <el-form ref="ruleFormRef" :model="form" status-icon label-width="120px">
    <el-form-item label="用户名：" prop="username">
      <el-input v-model="form.username" autocomplete="off" />
    </el-form-item>
    <el-form-item label="密码：" prop="password">
      <el-input v-model="form.password" type="password" autocomplete="off" />
    </el-form-item>
    <el-form-item label="验证码" prop="code">
      <el-input v-model="form.code" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm" :loading="loading">登录</el-button>
      <el-button @click="resetForm">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<style lang="less" scoped></style>
