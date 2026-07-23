<template>
  <div class="login-container">
    <div class="login-card">

      <h1>InfoWave</h1>

      <p class="subtitle">
        Sign in to manage official announcements.
      </p>

      <!-- Username -->
      <div class="input-group">
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter Username"
        />
      </div>

      <!-- Password -->
      <div class="input-group">
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter Password"
        />
      </div>

      <!-- Forgot Password -->
      <p class="forgot-password" @click="forgotPassword">
        Forgot Password?
      </p>

      <!-- Login -->
      <button class="login-btn" @click="login">
        Login
      </button>

      <!-- Back -->
      <button class="back-btn" @click="goHome">
        ← Back
      </button>

    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

// Login Button
const login = () => {
  router.push('/dashboard')
}

// Back Button
const goHome = () => {
  router.push('/')
}

// Forgot Password
const forgotPassword = () => {
  router.push('/forgot-password')
}
</script>

<style scoped>

.login-container{
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#F7F8FC;
    padding:20px;
}

.login-card{
    width:100%;
    max-width:420px;
    background:white;
    padding:40px;
    border-radius:20px;
    box-shadow:0 10px 30px rgba(0,0,0,.08);
}

h1{
    text-align:center;
    margin-bottom:10px;
    color:#222;
}

.subtitle{
    text-align:center;
    color:#777;
    margin-bottom:30px;
}

.input-group{
    margin-bottom:20px;
}

label{
    display:block;
    margin-bottom:8px;
    font-weight:600;
}

input{
    width:100%;
    padding:14px;
    border:1px solid #ddd;
    border-radius:10px;
    font-size:15px;
    box-sizing:border-box;
    transition:.3s;
}

input:focus{
    outline:none;
    border-color:#7CB9E8;
    box-shadow:0 0 8px rgba(124,185,232,.3);
}

.forgot-password{
    text-align:right;
    color:#5A7CF7;
    cursor:pointer;
    margin-bottom:25px;
    font-size:14px;
}

.forgot-password:hover{
    text-decoration:underline;
}

.login-btn{
    width:100%;
    padding:14px;
    border:none;
    border-radius:10px;
    background:#7CB9E8;
    color:white;
    font-size:16px;
    cursor:pointer;
    transition:.3s;
}

.login-btn:hover{
    background:#5AA9E6;
}

.back-btn{
    width:100%;
    margin-top:15px;
    padding:12px;
    background:none;
    border:none;
    font-size:15px;
    cursor:pointer;
    color:#555;
}

.back-btn:hover{
    color:#5AA9E6;
}

@media(max-width:600px){

.login-card{
    padding:25px;
}

h1{
    font-size:28px;
}

.subtitle{
    font-size:14px;
}

}

</style>