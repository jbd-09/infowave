<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const clubs=[
"NSS",
"IEEE",
"CSI",
"GDSC",
"Cultural Club",
"Sports Club"
];

const openClub=(club)=>{
router.push({
path:"/club-announcements",
query:{
name:club
}
});
};
</script>

<template>

<div class="page">

<button class="back" @click="router.push('/')">
← Back
</button>

<h1>Clubs</h1>

<div class="cards">

<div
class="card"
v-for="club in clubs"
:key="club"
@click="openClub(club)"
>

{{club}}

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
margin:30px 0;
color:#5b21b6;
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
font-size:24px;
font-weight:bold;
border-radius:18px;
cursor:pointer;
box-shadow:0 8px 20px rgba(0,0,0,.08);
transition:.3s;
}

.card:hover{
transform:translateY(-8px);
}

</style>