<template>
  <div class="home">

    <!-- Section 1 -->
    <section class="hero">
      <h1>InfoWave</h1>

      <p>
        Your trusted hub for official college announcements. Stay updated with
        departmental notices, club activities, and general campus information
        all in one place.
      </p>

      <button @click="scrollToCategories">
        Get Started
      </button>
    </section>

    <!-- Section 2 -->
    <section class="categories" ref="categoriesSection">

      <h2>Choose a Category</h2>

      <div class="cards">

        <div class="card">
          General
        </div>

        <div class="card">
          Departments
        </div>

        <div class="card">
          Clubs
        </div>

      </div>

    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const categoriesSection = ref(null)

const scrollToCategories = () => {
  categoriesSection.value.scrollIntoView({
    behavior: 'smooth'
  })
}
</script>

<style scoped>

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

.hero{
  height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:center;
  padding:30px;
}

.hero h1{
  font-size:60px;
  margin-bottom:20px;
}

.hero p{
  max-width:650px;
  font-size:20px;
  line-height:1.7;
  margin-bottom:40px;
}

button{
  padding:14px 30px;
  font-size:18px;
  border:none;
  border-radius:30px;
  cursor:pointer;
}

.categories{
  min-height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}

.cards{
  margin-top:50px;
  display:flex;
  gap:40px;
  flex-wrap:wrap;
  justify-content:center;
}

.card{
  width:220px;
  height:150px;
  border:2px solid #ccc;
  border-radius:20px;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:24px;
  cursor:pointer;
  transition:0.3s;
}

.card:hover{
  transform:translateY(-8px);
}

@media(max-width:768px){

.hero h1{
  font-size:40px;
}

.hero p{
  font-size:17px;
}

.cards{
  flex-direction:column;
}

.card{
  width:280px;
}

}

</style>