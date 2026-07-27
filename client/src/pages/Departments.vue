<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const showMenu = ref(false);
const darkMode = ref(false);

const departments = [
  "CSE",
  "ECE",
  "EEE",
  "IT",
  "Mechanical",
  "Civil"
];

const openDepartment = (department) => {
  router.push({
    path: "/department-announcements",
    query: {
      name: department
    }
  });
};

const goHome = () => {
  router.push("/");
};

const goLogin = () => {
  router.push("/login");
};

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
};
</script>
<template>

<div class="page" :class="{ dark: darkMode }">

    <!-- Header -->

    <div class="header">

        <div class="left-section">

            <button class="back" @click="router.push('/')">
                ← Back
            </button>

            <button class="menu-btn" @click="showMenu = true">
                ☰
            </button>

            <h1>Departments</h1>

        </div>

    </div>

    <!-- Sidebar -->

    <div class="sidebar" :class="{ active: showMenu }">

        <button class="close-btn" @click="showMenu = false">
            ✕
        </button>

        <ul>

            <li @click="goHome">
                🏠 Home
            </li>

            <li @click="goLogin">
                🔑 Login
            </li>

            <li @click="toggleDarkMode">
                {{ darkMode ? "☀️ Light Mode" : "🌙 Dark Mode" }}
            </li>

        </ul>

    </div>

    <!-- Department Cards -->

    <div class="cards">

        <div
            class="card"
            v-for="department in departments"
            :key="department"
            @click="openDepartment(department)"
        >

            {{ department }}

        </div>

    </div>

</div>

</template>

<style scoped>

.page{
    min-height:100vh;
    background:#f7f5ff;
    padding:40px;
}

.back{
    padding:10px 18px;
    background:#5b21b6;
    color:white;
    border:none;
    border-radius:10px;
    cursor:pointer;
}

h1{
    text-align:center;
    color:#5b21b6;
    margin:30px 0;
}

.cards{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:30px;
}

.card{
    background:white;
    padding:50px;
    text-align:center;
    border-radius:18px;
    cursor:pointer;
    font-size:24px;
    font-weight:bold;
    box-shadow:0 8px 20px rgba(0,0,0,.08);
    transition:.3s;
}

.card:hover{
    transform:translateY(-8px);
}
/* Header */

.header{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:30px;
}

.left-section{
    display:flex;
    align-items:center;
    gap:15px;
}

.menu-btn{
    background:#5b21b6;
    color:white;
    border:none;
    padding:10px 15px;
    border-radius:10px;
    cursor:pointer;
    font-size:20px;
}

.menu-btn:hover{
    background:#4c1d95;
}

/* Sidebar */

.sidebar{
    position:fixed;
    top:0;
    left:-260px;
    width:250px;
    height:100vh;
    background:white;
    padding:25px;
    transition:.3s;
    box-shadow:4px 0 20px rgba(0,0,0,.15);
    z-index:1000;
}

.sidebar.active{
    left:0;
}

.close-btn{
    border:none;
    background:none;
    font-size:26px;
    cursor:pointer;
    margin-bottom:25px;
}

.sidebar ul{
    list-style:none;
    padding:0;
}

.sidebar li{
    padding:15px 0;
    cursor:pointer;
    border-bottom:1px solid #ddd;
    font-size:18px;
}

.sidebar li:hover{
    color:#5b21b6;
}

/* Dark Mode */

.dark{
    background:#2F3136;
    color:white;
}

.dark .card{
    background:#3A3D42;
    color:white;
}

.dark h1{
    color:white;
}

.dark .sidebar{
    background:#3A3D42;
}

.dark .sidebar li{
    color:white;
    border-bottom:1px solid #555;
}

</style>