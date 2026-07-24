<script setup>
import { useRoute,useRouter } from "vue-router";

const route=useRoute();
const router=useRouter();

const club=route.query.name;
</script>

<template>

<div class="page">

<button @click="router.back()">
← Back
</button>

<h1>{{club}} Announcements</h1>

<div class="announcement">

<h2>📢 New Club Recruitment</h2>

<p>📅 5 August 2026</p>

<a href="https://google.com" target="_blank">

View Circular

</a>

</div>

</div>

</template>

<style scoped>

.page{
padding:40px;
background:#f7f5ff;
min-height:100vh;
}

.announcement{
background:white;
padding:25px;
margin-top:30px;
border-radius:15px;
}

</style>