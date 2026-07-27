<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const search = ref("");
const showMenu = ref(false);
const darkMode = ref(false)

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value
}

const announcements = ref([
  {
    title: "Hackathon Registration",
    dateLabel: "Deadline",
    date: "28 July 2026",
    type: "link",
    url: "https://www.google.com"
  },
  {
    title: "Mid Semester Examination",
    dateLabel: "Exam Date",
    date: "5 August 2026",
    type: "pdf",
    url: "/sample.pdf"
  },
  {
    title: "Independence Day Celebrations",
    dateLabel: "Event Date",
    date: "15 August 2026",
    type: "pdf",
    url: "/sample.pdf"
  },
  {
    title: "Placement Orientation",
    dateLabel: "",
    date: "",
    type: "link",
    url: "https://www.google.com"
  }
]);

const filteredAnnouncements = computed(() =>
  announcements.value.filter(item =>
    item.title.toLowerCase().includes(search.value.toLowerCase())
  )
);

const goBack = () => {
  router.push("/");
};
const goHome = () => {
  router.push("/");
};

const goLogin = () => {
  router.push("/login");
};
</script>

<template>

<div class="general-page" :class="{ dark: darkMode }">

    <!-- Header -->

    <div class="header">

    <!-- Left Side -->
    <div class="left-section">

        <button class="back-btn" @click="goBack">
            ← Back
        </button>

        <button class="menu-btn" @click="showMenu = true">
            ☰
        </button>

        <h1>General Announcements</h1>

    </div>

    <!-- Search -->
    <input
        type="text"
        v-model="search"
        placeholder="Search announcements..."
    >

</div>
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
    🌙 {{ darkMode ? "Light Mode" : "Dark Mode" }}
</li>


    </ul>

</div>

    <!-- Announcement Cards -->

    <div class="announcement-list">

        <div
            class="card"
            v-for="(announcement,index) in filteredAnnouncements"
            :key="index"
        >

            <h2>
                📢 {{ announcement.title }}
            </h2>

            <p
                v-if="announcement.date"
                class="date"
            >
                📅 {{ announcement.dateLabel }} :
                {{ announcement.date }}
            </p>

            <a
                :href="announcement.url"
                target="_blank"
                class="view-btn"
            >

                {{
                    announcement.type === "pdf"
                    ? "📄 View Circular"
                    : "🔗 Open Event"
                }}

            </a>

        </div>

    </div>

</div>

</template>

<style scoped>

.general-page{

    min-height:100vh;
    background:#f7f5ff;
    padding:40px;
}

/* Header */

.header{

    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-wrap:wrap;
    gap:20px;
    margin-bottom:40px;
}

.header h1{

    color:#5b21b6;
    font-size:38px;
}

.header input{

    width:300px;
    padding:12px 18px;

    border:none;
    outline:none;

    border-radius:12px;

    box-shadow:0 5px 15px rgba(0,0,0,.08);
}

/* Back Button */

.back-btn{

    background:#5b21b6;
    color:white;

    border:none;

    padding:12px 20px;

    border-radius:10px;

    cursor:pointer;

    transition:.3s;
}

.back-btn:hover{

    background:#4c1d95;
}

/* Cards */

.announcement-list{

    display:flex;
    flex-direction:column;
    gap:25px;
}

.card{

    background:white;

    border-radius:18px;

    padding:25px 30px;

    box-shadow:0 8px 25px rgba(0,0,0,.08);

    transition:.3s;
}

.card:hover{

    transform:translateY(-5px);

    box-shadow:0 12px 30px rgba(91,33,182,.15);
}

.card h2{

    color:#5b21b6;

    margin-bottom:15px;
}

.date{

    color:#666;

    margin-bottom:20px;

    font-weight:500;
}

.view-btn{

    display:inline-block;

    background:#5b21b6;

    color:white;

    text-decoration:none;

    padding:10px 18px;

    border-radius:10px;

    transition:.3s;
}

.view-btn:hover{

    background:#4c1d95;
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
    padding:12px 16px;
    border-radius:10px;
    cursor:pointer;
    font-size:20px;

}

.menu-btn:hover{

    background:#4c1d95;

}

.sidebar{

    position:fixed;
    top:0;
    left:-260px;

    width:250px;
    height:100vh;

    background:white;

    box-shadow:4px 0 20px rgba(0,0,0,.15);

    transition:.3s;

    padding:25px;

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
    margin-bottom:30px;

}

.sidebar ul{

    list-style:none;
    padding:0;

}

.sidebar li{

    padding:16px 0;
    cursor:pointer;
    border-bottom:1px solid #eee;
    font-size:18px;

}

.sidebar li:hover{

    color:#5b21b6;

}

/* Responsive */

@media(max-width:768px){

.header{

    flex-direction:column;
    align-items:flex-start;
}

.header input{

    width:100%;
}

.header h1{
    font-size:30px;
}

}

/* ========================= */
/*       DARK MODE           */
/* ========================= */

.dark{
    background:#121212;
    color:white;
}

.dark .header h1{
    color:white;
}

.dark input{
    background: #2b2b2b;
    color:white;
    border:1px solid #555;
}

.dark .card{
    background: #1e1e1e;
    color:white;
}

.dark .card h2{
    color:#c4b5fd;
}

.dark .date{
    color:#d1d5db;
}

.dark .sidebar{
    background:#1f1f1f;
}

.dark .sidebar li{
    color:white;
    border-bottom:1px solid #444;
}

.dark .menu-btn,
.dark .back-btn,
.dark .view-btn{
    background:#7c3aed;
}

.dark .menu-btn:hover,
.dark .back-btn:hover,
.dark .view-btn:hover{
    background:#6d28d9;
}

</style>