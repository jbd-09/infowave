<script setup>
import { useRoute,useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const department = route.query.name;
</script>

<template>

<div class="page">

    <button @click="router.back()">← Back</button>

    <h1>{{ department }} Announcements</h1>

    <div class="announcement">

        <h2>📢 Seminar on AI</h2>

        <p>📅 30 July 2026</p>

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