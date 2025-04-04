<template>
  <q-page class="fullscreen flex flex-center">
    <!-- Background Image -->
    <div class="absolute-full bg-image"></div>
    <!-- Login Card -->
    <q-card class="q-pa-lg login-card">
      <!-- Logo -->
      <q-img src="icons/Tagum.png" class="logo" contain />

      <div class="text-h5 text-center text-bold">City Accounting Office</div>
      <div class="text-center text-italic text-black-7 text-bold">
        Registry of Appropriation and Commitment (RAC)
      </div>
      <div class="text-h6 text-bold text-center text-green-8 q-mt-md">User</div>

      <q-form @submit.prevent="onSubmit" class="q-gutter-md">
        <q-input
          class="input"
          v-model="email"
          type="email"
          label="Email:"
          filled
          dense
          :rules="[val => !!val || 'Email is required', isValidEmail]"
        />
        <q-input
          class="input"
          v-model="password"
          :type="isPwd ? 'password' : 'text'"
          label="Password:"
          filled
          dense
          :rules="[val => !!val || 'Password is required']"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>

        <div class="flex justify-center">
          <q-btn 
            type="submit" 
            label="Sign In" 
            class="custom-btn" 
            :loading="loading"
            :disable="loading"
          />
        </div>

        <div class="text-center q-mb-md">
          <span class="text-grey-7">Switch to </span>
          <a href="#" class="text-primary text-bold" @click.prevent="switchToUser">Admin</a>
        </div>

        <q-banner v-if="error" dense class="bg-negative text-white">
          {{ error }}
        </q-banner>
      </q-form>
    </q-card>
  </q-page>
</template>

<script>
import { ref } from 'vue'
import { useAuthStore } from 'stores/authStore'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const authStore = useAuthStore()
    const router = useRouter()

    const email = ref('')
    const password = ref('')
    const isPwd = ref(true)
    const loading = ref(false)
    const error = ref(null)

    const isValidEmail = (val) => {
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/
      return emailPattern.test(val) || 'Invalid email'
    }

    const onSubmit = async () => {
      loading.value = true
      error.value = null
      
      try {
        // Use auth store to login
        await authStore.login({
          email: email.value,
          password: password.value,
          is_admin: true // Add this flag for admin login
        })
        
        // Redirect to admin dashboard
        router.push('/app/dashboard')
      } catch (err) {
        error.value = err.message || 'Login failed. Please check your credentials.'
      } finally {
        loading.value = false
      }
    }

    const switchToUser = () => {
      router.push('/admin-login')
    }

    return {
      email,
      password,
      isPwd,
      loading,
      error,
      isValidEmail,
      onSubmit,
      switchToUser
    }
  }
}
</script>

<style scoped>
.bg-image {
  background: url('assets/City-Hall-of-Tagum.jpg') no-repeat center center;
  background-size: cover;
  opacity: 0.9;
}

.login-card {
  width: 100%;
  max-width: 400px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.95);
  padding: 20px;
  border: 3px solid rgba(0, 128, 0, 0.7);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
}

.logo {
  width: 190px;
  height: auto;
  display: block;
  margin: 0 auto;
  margin-bottom: 10px;
}

.custom-btn {
  background-color: #008000;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  padding: 8px 20px;
  font-size: 14px;
  width: 180px;
  max-width: 200px;
  text-align: center;
  cursor: pointer;
  display: block;
  margin: 0 auto;
}


.input {
  font-size: 14px;
}

@media (max-width: 500px) {
  .login-card {
    max-width: 90%;
    padding: 15px;
  }
  
  .logo {
    width: 150px;
  }
}
</style>