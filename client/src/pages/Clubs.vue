<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const showMenu = ref(false);
const clubs = [
  "NSS",
  "IEEE",
  "CSI",
  "GDSC",
  "Cultural Club",
  "Sports Club"
];

const openClub = (club) => {
  router.push({
    path: "/club-announcements",
    query: {
      name: club
    }
  });
};

const goHome = () => {
  router.push("/");
};

const goLogin = () => {
  router.push("/login");
};

</script>

<template>

<div class="page">

    <!-- Header -->

    <div class="header">

        <div class="left-section">

            <button class="back" @click="router.push('/')">
                ← Back
            </button>

            <button class="menu-btn" @click="showMenu = true">
                ☰
            </button>

            <h1>Clubs</h1>

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
        </ul>

    </div>

    <!-- Club Cards -->

    <div class="cards">

        <div
            class="card"
            v-for="club in clubs"
            :key="club"
            @click="openClub(club)"
        >
            {{ club }}
        </div>

    </div>

</div>

</template>

<style scoped>

.page{
    min-height:100vh;
    background:#f7f5ff;
    padding:60px 40px;
    transition:0.3s ease;
}

/* Header */

.header{
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-wrap:wrap;
    gap:20px;
    margin-bottom:50px;
}

.left-section{
    display:flex;
    align-items:center;
    gap:15px;
}

/* Buttons */

.back,
.menu-btn{
    background:#5b21b6;
    color:#fff;
    border:none;
    border-radius:12px;
    cursor:pointer;
    transition:.3s ease;
}

.back{
    padding:10px 18px;
}

.menu-btn{
    padding:10px 15px;
    font-size:20px;
}

.back:hover,
.menu-btn:hover{
    background:#4c1d95;
    transform:translateY(-2px);
}

/* Heading */

h1{
    color:#5b21b6;
    font-size:3rem;
    font-weight:700;
}

/* Cards */

.cards{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
    gap:35px;
}

.card{
    position:relative;
    overflow:hidden;

    background:#fefeff;
    border:2px solid #d9d6dd;
    border-radius:20px;

    padding:30px;

    box-shadow:0 10px 20px rgba(109,40,217,.12);

    transition:all .35s ease;
}

.card::before{
    content:"";
    position:absolute;
    inset:0;

    background:radial-gradient(
        circle at top,
        rgba(184,108,255,.12),
        transparent 70%
    );

    opacity:0;
    transition:.35s ease;
}

.card:hover::before{
    opacity:1;
}

.card:hover{
    transform:translateY(-10px) scale(1.02);

    border-color:#d17dff;

    box-shadow:
        0 0 15px rgba(184,108,255,.5),
        0 0 30px rgba(184,108,255,.35),
        0 0 45px rgba(184,108,255,.2),
        0 20px 40px rgba(0,0,0,.15);
}

.card h2{
    color:#5b21b6;
    margin-bottom:15px;
    font-size:1.7rem;
    transition:.3s;
}

.card:hover h2{
    color:#b86cff;

    text-shadow:
        0 0 10px rgba(184,108,255,.8),
        0 0 20px rgba(184,108,255,.5);
}

.card p{
    color:#666;
    line-height:1.6;
    font-size:1rem;
    transition:.3s;
}

.card:hover p{
    color:#555;
}

/* Sidebar */

.sidebar{
    position:fixed;
    top:0;
    left:-260px;

    width:250px;
    height:100vh;

    background:#fff;

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
    color:#5b21b6;
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
    transition:.3s;
}

.sidebar li:hover{
    color:#5b21b6;
    padding-left:8px;
}


/* Responsive */

@media (max-width:768px){

    .page{
        padding:30px 20px;
    }

    h1{
        font-size:2.3rem;
    }

    .cards{
        grid-template-columns:1fr;
    }
}

</style>