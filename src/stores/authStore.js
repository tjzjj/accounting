import { defineStore } from 'pinia'
import { api } from 'boot/axios'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('token') || null,
    returnUrl: null
  }),

  getters: {
    isAuthenticated: (state) => !!state.token
  },

  actions: {
    // Admin login action
    async adminLogin(credentials) {
      try {
        // Make POST request to the admin login endpoint
        const response = await api.post('/api/auth/admin/login', credentials)
        
        // Store token and user details
        this.token = response.data.token
        this.user = response.data.user
        
        // Store token in localStorage
        localStorage.setItem('token', this.token)
        
        // Set axios auth header
        api.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
        
        // Redirect to the returnUrl or the home page
        const router = useRouter()
        router.push(this.returnUrl || '/')
        
        return response.data
      } catch (error) {
        // Handle login failure and logout
        this.logout()
        throw error.response?.data?.message || 'Login failed'
      }
    },

    // Logout action
    async logout() {
      try {
        // Ensure the correct API endpoint for logout
        await api.post('/api/auth/logout')
      } finally {
        // Reset auth state
        this.resetAuthState()
      }
    },

    // Fetch user data from the server
    async fetchUser() {
      try {
        const response = await api.get('/api/auth/user')
        this.user = response.data
        return response.data
      } catch (error) {
        // Reset auth state if fetching user fails
        this.resetAuthState()
        throw error
      }
    },

    // Reset auth state (clear user and token)
    resetAuthState() {
      this.user = null
      this.token = null
      localStorage.removeItem('token')
      delete api.defaults.headers.common['Authorization']
    }
  }
})
