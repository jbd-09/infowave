<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import banner from "@/asserts/images/banner.jpg";

const showPostForm = ref(false);
const announcementName = ref("");
const eventDate = ref("");
const eventLink = ref("");
const circular = ref(null);
const announcements = ref([]);
const errorMessage = ref("");

const uploadPDF = (event) => {
  circular.value = event.target.files[0];
};

const postAnnouncement = async () => {
  errorMessage.value = "";

  if (announcementName.value.trim() === "") {
    errorMessage.value = "Announcement name is required.";
    return;
  }

  if (eventLink.value.trim() === "" && circular.value === null) {
    errorMessage.value =
      "Please provide either an Event Registration Link or upload a Circular PDF.";
    return;
  }

  try {
    const user = JSON.parse(localStorage.getItem("user"));
    await axios.post("http://localhost:5000/api/announcements", {
      title: announcementName.value,

      category: "Department",

department: user.department,

club: "",

      eventDate: eventDate.value,

      registrationLink: eventLink.value,

      circular: circular.value ? circular.value.name : "",
    });

    announcementName.value = "";
    eventDate.value = "";
    eventLink.value = "";
    circular.value = null;

    showPostForm.value = false;

    await loadAnnouncements();
  } catch (error) {
    console.log(error);
    errorMessage.value = "Failed to post announcement.";
  }
};

const deleteAnnouncement = async (id) => {
  try {
    await axios.delete(
      `http://localhost:5000/api/announcements/${id}`
    );

    await loadAnnouncements();
  } catch (error) {
    console.error(error);
    alert("Failed to delete announcement.");
  }
};
const loadAnnouncements = async () => {
  try {
    const response = await axios.get(
      "http://localhost:5000/api/announcements"
    );

    announcements.value = response.data.data;
  } catch (error) {
    console.error(error);
  }
};
onMounted(() => {
  loadAnnouncements();
});
</script>
<template>
<div class="dashboard">

    <!-- Banner -->
    <div
        class="banner"
        :style="{ backgroundImage: `url(${banner})` }"
    >
        <div class="banner-overlay">
            <h1>Info Wave Dashboard</h1>
            <p>Create, Manage and Publish College Announcements</p>
        </div>
    </div>

    <!-- New Post Button -->
    <div class="new-post">
        <button @click="showPostForm = !showPostForm">
            {{ showPostForm ? "Close" : "+ New Post" }}
        </button>
    </div>

    <!-- Post Form -->
    <div
        class="post-box"
        v-if="showPostForm"
    >
        <h2>Create Announcement</h2>

        <input
            type="text"
            placeholder="Announcement Name"
            v-model="announcementName"
        >

        <input
            type="date"
            v-model="eventDate"
        >

        <input
            type="text"
            placeholder="Event Registration Link (Optional)"
            v-model="eventLink"
        >

        <div class="or">
            OR
        </div>

        <input
            type="file"
            accept=".pdf"
            @change="uploadPDF"
        >

        <p
            class="error"
            v-if="errorMessage"
        >
            {{ errorMessage }}
        </p>

        <button
            class="post-btn"
            @click="postAnnouncement"
        >
            POST
        </button>

    </div>

    <!-- Posted Announcements -->

    <div class="announcement-section">

        <h2>Latest Announcements</h2>

        <div
            class="announcement-card"
            v-for="(announcement,index) in announcements"
            :key="index"
        >

            <div class="announcement-content">

                <h3>{{ announcement.title }}</h3>

                <p v-if="announcement.eventDate">
    <strong>Date :</strong>
    {{ new Date(announcement.eventDate).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric"
}) }}
</p>

        <p v-if="announcement.registrationLink">
    <strong>Registration :</strong>

    <a
        :href="announcement.registrationLink"
        target="_blank"
    >
        Open Link
    </a>
</p>

                <p v-if="announcement.circular">
    <strong>Circular :</strong>
    {{ announcement.circular }}
</p>
            </div>

            <button
                class="delete-btn"
                @click="deleteAnnouncement(announcement._id)"
            >
                Delete
            </button>

        </div>

        <p
            class="empty"
            v-if="announcements.length===0"
        >
            No announcements posted yet.
        </p>

    </div>

</div>
</template>
<style scoped>

.dashboard{
    min-height:100vh;
    background:#ffffff;
    padding:50px;
}

/* Banner */

.banner{
    height:320px;

    border:2px solid #7c3aed;
    border-radius:20px;

    overflow:hidden;

    margin-bottom:40px;

    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;

    box-shadow:0 10px 30px rgba(109,40,217,.15);
}

.banner-overlay{
    width:100%;
    height:100%;

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    text-align:center;

    background:rgba(38,20,66,.45);

    backdrop-filter:blur(2px);
}

.banner-overlay h1{
    color:white;
    font-size:3.2rem;
    margin-bottom:12px;
    text-shadow:0 3px 10px rgba(0,0,0,.3);
}

.banner-overlay p{
    color:white;
    font-size:1.15rem;
}

/* New Post */

.new-post{
    display:flex;
    justify-content:center;
    margin-bottom:35px;
}

.new-post button{
    background:#5b21b6;
    color:white;
    border:none;
    padding:14px 28px;
    border-radius:12px;
    cursor:pointer;
    font-size:18px;
    font-weight:600;
    transition:.3s;
}

.new-post button:hover{
    background:#4c1d95;
    box-shadow:0 0 18px rgba(109,40,217,.35);
}

/* Post Form */

.post-box{
    background:#f8f5ff;
    border:2px solid #d8b4fe;
    border-radius:18px;
    padding:35px;
    margin-bottom:45px;
    box-shadow:0 10px 30px rgba(0,0,0,.08);
}

.post-box h2{
    color:#5b21b6;
    margin-bottom:25px;
}

.post-box input{
    width:100%;
    padding:14px;
    margin-bottom:18px;
    border:2px solid #ddd;
    border-radius:10px;
    font-size:16px;
    outline:none;
    transition:.3s;
    box-sizing:border-box;
}

.post-box input:focus{
    border-color:#7c3aed;
    box-shadow:0 0 10px rgba(124,58,237,.25);
}

.or{
    text-align:center;
    margin:10px 0 20px;
    font-weight:bold;
    color:#777;
}

.post-btn{
    width:100%;
    padding:15px;
    background:#5b21b6;
    color:white;
    border:none;
    border-radius:10px;
    cursor:pointer;
    font-size:17px;
    font-weight:600;
    transition:.3s;
}

.post-btn:hover{
    background:#4c1d95;
}

.error{
    color:red;
    margin-bottom:15px;
}

/* Announcements */

.announcement-section h2{
    color:#5b21b6;
    margin-bottom:25px;
}

.announcement-card{
    background:#f3e8ff;
    border:2px solid #7c3aed;
    border-radius:18px;
    padding:22px 25px;
    margin-bottom:22px;

    display:flex;
    justify-content:space-between;
    align-items:flex-start;

    transition:.3s;

    box-shadow:0 8px 20px rgba(0,0,0,.08);
}

.announcement-card:hover{
    transform:translateY(-6px);

    box-shadow:
    0 0 18px rgba(124,58,237,.30),
    0 15px 35px rgba(0,0,0,.12);
}

.announcement-content{
    width:85%;
}

.announcement-content h3{
    color:#5b21b6;
    margin-bottom:12px;
}

.announcement-content p{
    margin:8px 0;
    color:#555;
}

.announcement-content a{
    color:#5b21b6;
    text-decoration:none;
    font-weight:600;
}

.announcement-content a:hover{
    text-decoration:underline;
}

/* Delete Button */

.delete-btn{
    background:#ef4444;
    color:white;
    border:none;
    padding:10px 18px;
    border-radius:10px;
    cursor:pointer;
    font-weight:600;
    transition:.3s;
}

.delete-btn:hover{
    background:#dc2626;
}

.empty{
    text-align:center;
    color:#777;
    margin-top:40px;
}

/* Responsive */

@media(max-width:768px){

.dashboard{
    padding:25px;
}

.banner{
    height:230px;
}

.banner-overlay h1{
    font-size:2.2rem;
}

.banner-overlay p{
    font-size:1rem;
}

.announcement-card{
    flex-direction:column;
    gap:20px;
}

.announcement-content{
    width:100%;
}

.delete-btn{
    width:100%;
}

}
</style>