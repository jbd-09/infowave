<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

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
</script>

<template>
<div class="page">

    <button class="back" @click="router.push('/')">
        ← Back
    </button>

    <h1>Departments</h1>

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

</style>