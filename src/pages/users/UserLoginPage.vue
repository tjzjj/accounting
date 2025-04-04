<!-- <template>
    <q-page class="fullscreen flex flex-center">
      <q-card class="q-pa-lg login-card">
        <q-img src="icons/User.png" class="logo" contain/>
        <div class="text-h5 text-center text-bold">User Login</div>
  
        <q-form @submit="onSubmit" class="q-gutter-md">
          <q-input 
            v-model="email" 
            type="email" 
            label="Email:" 
            filled 
            dense 
            required 
          />
          <q-input 
            v-model="password" 
            type="password" 
            label="Password:" 
            filled 
            dense 
            required 
          />
          
          <div class="flex justify-center">
            <q-btn 
              type="submit" 
              label="Sign In" 
              class="custom-btn" 
            />
          </div>
          
          <div class="text-center q-mb-md">
            <span class="text-grey-7">Switch to </span>
            <a 
              href="#" 
              class="text-primary text-bold" 
              @click.prevent="switchToAdmin"
            >
              Admin
            </a>
          </div>
        </q-form>
      </q-card>
    </q-page>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      onSubmit() {
        if (this.email === 'user@example.com' && this.password === 'user123') {
          this.$router.push('/user-dashboard');
        } else {
          this.$q.notify({
            type: 'negative',
            message: 'Invalid email or password',
          });
        }
      },
      switchToAdmin() {
        this.$router.push('/admin-login'); // Using exact path
        // Alternatively using named routes if configured:
        // this.$router.push({ name: 'admin-login' });
      }
    }
  };
  </script>
  
  <style scoped>
  .login-card {
    width: 100%;
    max-width: 400px;
    border-radius: 15px;
    background: white;
    padding: 20px;
    border: 3px solid rgba(0, 128, 0, 0.7);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }
  
  .logo {
    width: 150px;
    height: auto;
    display: block;
    margin: 0 auto 10px;
  }
  
  .custom-btn {
    background-color: #008000;
    color: white;
    font-weight: bold;
    border-radius: 8px;
    padding: 8px 20px;
    width: 180px;
    margin: 0 auto;
  }
  
  @media (max-width: 500px) {
    .login-card {
      max-width: 90%;
    }
  }
  </style> -->
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
          Registry of Appropriation and Commitment System (RACS)
        </div>
        <div class="text-h6 text-bold text-center text-green-8 q-mt-md">User</div>
  
        <q-form @submit="onSubmit" class="q-gutter-md">
          <q-input
            class="input"
            v-model="email"
            type="email"
            label="Email:"
            filled
            dense
            required
          />
          <q-input
            class="input"
            v-model="password"
            :type="isPwd ? 'password' : 'text'"
            label="Password:"
            filled
            dense
            required
          />
  
          <div class="flex justify-center">
            <q-btn type="submit" label="Sign In" class="custom-btn" />
          </div>
  
          <div class="text-center q-mb-md">
            <span class="text-grey-7">Switch to </span>
            <a href="#" class="text-primary text-bold" @click.prevent="switchToAdmin">Admin</a>
          </div>
        </q-form>
      </q-card>
    </q-page>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        isPwd: true,
      };
    },
    methods: {
      onSubmit() {
        // Simulate authentication (Replace with real API call)
        if (this.email === 'user@example.com' && this.password === 'password123') {
          console.log('Admin Login successful!');
          this.$router.push('/dashboard'); // Navigate to Admin Dashboard
        } else {
          console.log('Invalid credentials');
          this.$q.notify({
            type: 'negative',
            message: 'Invalid email or password',
          });
        }
      },
      switchToAdmin() {
        this.$router.push('/admin-login'); //   navigates to User Login Page
      },
    },
  };
  </script>
  
  <style scoped>
  /* Background Image */
  .bg-image {
    background: url('assets/City-Hall-of-Tagum.jpg') no-repeat center center;
    background-size: cover;
  }
  
  /* Login Card */
  .login-card {
    width: 100%;
    max-width: 400px;
    border-radius: 15px;
    background: rgb(255, 255, 255); /* Semi-transparent white */
    padding: 20px;
    border: 3px solid rgba(0, 128, 0, 0.7); /* Green Border */
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }
  
  /* Logo */
  .logo {
    width: 150px;
    height: auto;
    display: block;
    margin: 0 auto;
    margin-bottom: 10px;
  }
  
  /* Sign In Button */
  .custom-btn {
    background-color: #008000; /* Green */
    color: white;
    font-weight: bold;
    border-radius: 8px;
    padding: 8px 20px; /* Adjust padding */
    font-size: 14px;
    width: 180px; /* Set a specific width */
    max-width: 200px; /* Ensure it doesn't stretch */
    text-align: center;
    cursor: pointer;
    display: block;
    margin: 0 auto; /* Center horizontally */
  }
  
  /* Input Fields */
  .input {
    font-size: 14px;
  }
  
  /* Responsive Design */
  @media (max-width: 500px) {
    .login-card {
      max-width: 90%;
    }
  }
  </style>
  