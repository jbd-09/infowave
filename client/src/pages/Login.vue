<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import banner from "@/asserts/images/banner.jpg";

const router = useRouter();

const username = ref("");
const password = ref("");
const errorMessage = ref("");

const login = () => {
  errorMessage.value = "";

  if (
    username.value === "admin" &&
    password.value === "1234"
  ) {
    router.push("/dashboard");
  } else {
    errorMessage.value = "Invalid username or password";
  }
};

const goHome = () => {
  router.push("/");
};

const forgotPassword = () => {
  router.push("/forgot-password");
};
</script>

<template>

<div
    class="login-container"
    :style="{ backgroundImage: `url(${banner})` }"
>

    <div class="overlay">

        <div class="login-card">

            <h1>InfoWave</h1>

            <p class="subtitle">
                Sign in to manage official announcements.
            </p>

            <div class="input-group">

                <label>Username</label>

                <input
    type="text"
    placeholder="Enter Username"
    v-model="username"
/>

            </div>

            <div class="input-group">

                <label>Password</label>
<input
    type="password"
    placeholder="Enter Password"
    v-model="password"
/>

            </div>

            <p
                class="forgot-password"
                @click="forgotPassword"
            >
                Forgot Password?
            </p>
<p class="error" v-if="errorMessage">
    {{ errorMessage }}
</p>
            <button
                class="login-btn"
                @click="login"
            >
                Login
            </button>

            <button
                class="back-btn"
                @click="goHome"
            >
                ← Back
            </button>

        </div>

    </div>

</div>

</template>

<style scoped>

.login-container{

    min-height:100vh;

    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;

}

.overlay{

    min-height:100vh;

    display:flex;
    justify-content:center;
    align-items:center;

    background:rgba(38,20,66,.45);

    backdrop-filter:blur(2px);

    padding:20px;

}

.login-card{

    width:100%;
    max-width:430px;

    background:rgba(255,255,255,.95);

    border:2px solid #d8b4fe;

    border-radius:22px;

    padding:40px;

    box-shadow:0 12px 35px rgba(0,0,0,.18);

}

h1{

    text-align:center;

    color:#5b21b6;

    font-size:38px;

    margin-bottom:10px;

}

.subtitle{

    text-align:center;

    color:#666;

    margin-bottom:30px;

}

.input-group{

    margin-bottom:20px;

}

label{

    display:block;

    margin-bottom:8px;

    font-weight:600;

    color:#444;

}

input{

    width:100%;

    padding:14px;

    border:2px solid #ddd;

    border-radius:10px;

    outline:none;

    font-size:15px;

    box-sizing:border-box;

    transition:.3s;

}

input:focus{

    border-color:#7c3aed;

    box-shadow:0 0 10px rgba(124,58,237,.25);

}

.forgot-password{

    text-align:right;

    color:#5b21b6;

    cursor:pointer;

    margin-bottom:25px;

    font-size:14px;

    font-weight:500;

}

.forgot-password:hover{

    text-decoration:underline;

}

.login-btn{

    width:100%;

    padding:15px;

    background:#5b21b6;

    color:white;

    border:none;

    border-radius:10px;

    font-size:16px;

    font-weight:600;

    cursor:pointer;

    transition:.3s;

}

.login-btn:hover{

    background:#4c1d95;

    box-shadow:0 0 18px rgba(109,40,217,.35);

}

.back-btn{

    width:100%;

    margin-top:15px;

    padding:14px;

    background:#ede9fe;

    color:#5b21b6;

    border:none;

    border-radius:10px;

    font-size:15px;

    font-weight:600;

    cursor:pointer;

    transition:.3s;

}

.back-btn:hover{

    background:#ddd6fe;

}

@media(max-width:768px){

.login-card{

    padding:30px;

}

h1{

    font-size:32px;

}

.subtitle{

    font-size:14px;

}

}
.error{
    color:red;
    text-align:center;
    margin-bottom:15px;
    font-size:14px;
    font-weight:600;
}

</style>