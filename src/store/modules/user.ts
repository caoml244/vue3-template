import { ref } from 'vue'
import { defineStore } from 'pinia'
import store from '@/store'
import { getToken, removeToken, setToken } from '@/utils/cache/cookies'
import { LoginRequestData } from '@/types/user'
const loginApi = function ({ username, password, code }: LoginRequestData) {
  return new Promise((resolve) => {
    resolve({
      data: {
        token: 'token',
        username,
        password,
        code
      }
    })
  })
}
const useUserStore = defineStore('user', () => {
  const token = ref<string>(getToken() || '')
  const roles = ref<string[]>([])
  const username = ref<string>('')

  /** 设置角色数组 */
  const setRoles = (value: string[]) => {
    roles.value = value
  }
  /** 登录 */
  const login = async ({ username, password, code }: LoginRequestData) => {
    const { data } = (await loginApi({ username, password, code })) as any
    setToken(data.token)
    token.value = data.token
  }
  /** 获取用户详情 */
  const getInfo = async () => {
    roles.value = []
  }

  /** 登出 */
  const logout = () => {
    resetToken()
  }
  /** 重置 Token */
  const resetToken = () => {
    removeToken()
    token.value = ''
    roles.value = []
  }

  return { token, roles, username, setRoles, login, getInfo, logout, resetToken }
})
export function useUserStoreHook() {
  return useUserStore(store)
}
