import { defineStore } from 'pinia'
import { api } from 'boot/axios'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('token') || null,
    returnUrl: null
  }),

  actions: {
    async adminLogin(credentials) {
      try {
        const response = await api.post('/api/admin/login', {
          ...credentials,
          is_admin: true
        })
        
        this.token = response.data.token
        this.user = response.data.user
        localStorage.setItem('token', this.token)
        
        // Set axios auth header
        api.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
        
        const router = useRouter()
        router.push(this.returnUrl || '/app/dashboard')
        
        return response.data
      } catch (error) {
        this.logout()
        throw error // Throw error to handle in component
      }
    },
    
    logout() {
      this.token = null
      this.user = null
      localStorage.removeItem('token')
      delete api.defaults.headers.common['Authorization']
    }
  },

  getters: {
    isAuthenticated: (state) => !!state.token,
    isAdmin: (state) => state.user?.is_admin || false
  }
})