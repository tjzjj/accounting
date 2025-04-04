import { defineBoot } from '#q-app/wrappers'
import axios from 'axios'
import { useAuthStore } from 'stores/authStore' // <-- Import the auth store

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api', // Your Laravel API endpoint
  withCredentials: true, // Required for Sanctum cookies
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }
})

export default defineBoot(({ app, router }) => {
  // Request interceptor for auth token
  api.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  })

  // Response interceptor
  api.interceptors.response.use(
    response => response,
    error => {
      if (error.response?.status === 401) {
        // Handle 401 Unauthorized error (clear auth and redirect to login)
        localStorage.removeItem('token')

        const authStore = useAuthStore() // Now correctly imported
        authStore.resetAuthState() // Reset store state (user and token)

        if (router.currentRoute.value.path !== '/admin-login') {
          router.push('/admin-login')
        }
      }
      return Promise.reject(error)
    }
  )

  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$api = api
})

export { api }
