<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();

const search = ref("");
const showMenu = ref(false);
const announcements = ref([]);

// Load announcements from MongoDB
const loadAnnouncements = async () => {
    try {
        const response = await axios.get(
            "http://localhost:5000/api/announcements"
        );

        announcements.value = response.data.data;
    } catch (error) {
        console.error("Error loading announcements:", error);
    }
};

// Show only General announcements
const filteredAnnouncements = computed(() => {
    return announcements.value.filter((announcement) => {

        const matchesCategory =
            announcement.category === "General";

        const matchesSearch =
            announcement.title
                .toLowerCase()
                .includes(search.value.toLowerCase());

        return matchesCategory && matchesSearch;
    });
});

// Navigation
const goBack = () => {
    router.push("/");
};

const goHome = () => {
    router.push("/");
};

const goLogin = () => {
    router.push("/login");
};

// Load when page opens
onMounted(() => {
    loadAnnouncements();
});
</script>

<template>

<div class="general-page">

    <!-- Header -->

    <div class="header">

        <div class="left-section">

            <button
                class="back-btn"
                @click="goBack"
            >
                ← Back
            </button>

            <button
                class="menu-btn"
                @click="showMenu = true"
            >
                ☰
            </button>

            <h1>
                General Announcements
            </h1>

        </div>

        <!-- Search -->

        <input
            type="text"
            v-model="search"
            placeholder="Search announcements..."
        >

    </div>


    <!-- Sidebar -->

    <div
        class="sidebar"
        :class="{ active: showMenu }"
    >

        <button
            class="close-btn"
            @click="showMenu = false"
        >
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


    <!-- Sidebar Overlay -->

    <div
        v-if="showMenu"
        class="overlay"
        @click="showMenu = false"
    ></div>


    <!-- Announcement Cards -->

    <div class="announcement-list">

        <div
            class="card"
            v-for="announcement in filteredAnnouncements"
            :key="announcement._id"
        >

            <h2>
                📢 {{ announcement.title }}
            </h2>


            <!-- Event Date -->

            <p
                v-if="announcement.eventDate"
                class="date"
            >
                📅
                {{ new Date(announcement.eventDate).toLocaleDateString("en-IN", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric"
                }) }}
            </p>


            <!-- Registration Link -->

            <a
                v-if="announcement.registrationLink"
                :href="announcement.registrationLink"
                target="_blank"
                class="view-btn"
            >
                🔗 Registration Link
            </a>


            <!-- Circular -->

            <br v-if="announcement.circular">


            <a
                v-if="announcement.circular"
                :href="announcement.circular"
                target="_blank"
                class="view-btn"
                style="margin-top:15px;"
            >
                📄 View Circular
            </a>

        </div>


        <!-- No Announcements -->

        <div
            class="card"
            v-if="filteredAnnouncements.length === 0"
        >

            <h2>
                No announcements available.
            </h2>

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
.overlay{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.3);
    z-index:999;
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


</style>