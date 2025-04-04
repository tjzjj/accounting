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
            <div class="text-h6 text-bold text-center text-green-8 q-mt-md">Admin</div>
            <q-form @submit.prevent="onSubmit" class="q-gutter-md">
                <!-- Email input with validation -->
                <q-input
                    class="input"
                    v-model="email"
                    type="email"
                    label="Email:"
                    filled
                    dense
                    :rules="[emailRules]"
                />
                <!-- Password input with validation -->
                <q-input
                    class="input"
                    v-model="password"
                    :type="isPwd ? 'password' : 'text'"
                    label="Password:"
                    filled
                    dense
                    :rules="[passwordRules]"
                />
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
                    <a href="#" class="text-primary text-bold" @click.prevent="switchToUser"
                        >User</a
                    >
                </div>
                <!-- Error Message -->
                <div v-if="error" class="text-red text-center q-mt-md">{{ error }}</div>
            </q-form>
        </q-card>
    </q-page>
</template>
<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { api } from '../../boot/axios.js' // Import axios

export default {
    setup() {
        const email = ref('')
        const password = ref('')
        const isPwd = ref(true)
        const loading = ref(false)
        const error = ref(null)
        const router = useRouter()

        // Email validation rule
        const emailRules = (val) => {
            if (!val) return 'Email is required'
            if (!val.includes('@')) return 'Please enter a valid email'
            return true
        }

        // Password validation rule
        const passwordRules = (val) => {
            if (!val) return 'Password is required'
            return true
        }

        // Login function
        const onSubmit = async () => {
            loading.value = true
            error.value = null

            try {
                const response = await api.post('/auth/admin/login', {
                    email: email.value,
                    password: password.value,
                })

                // Save token and user data
                localStorage.setItem('auth_token', response.data.token)
                localStorage.setItem('user', JSON.stringify(response.data.user))

                // Redirect to dashboard
                router.push('/app/dashboard')
            } catch (err) {
                error.value = err.response?.data?.message || 'Invalid Credentials'
            } finally {
                loading.value = false
            }
        }

        return {
            email,
            password,
            isPwd,
            loading,
            error,
            emailRules,
            passwordRules,
            onSubmit,
            switchToUser: () => router.push('/user-login'),
        }
    },
}
</script>

<style scoped>
.bg-image {
    background: url('assets/City-Hall-of-Tagum.jpg') no-repeat center center;
    background-size: cover;
}

.login-card {
    width: 100%;
    max-width: 400px;
    border-radius: 15px;
    background: rgb(255, 255, 255);
    padding: 20px;
    border: 3px solid rgba(0, 128, 0, 0.7);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
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
    }
}
</style>
