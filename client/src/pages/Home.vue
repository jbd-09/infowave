<script setup>
import backgroundImage from "../asserts/images/background.png";
import Categories from "./Categories.vue";
</script>

<template>
  <!-- Home Section -->
  <section
    class="home"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <div class="overlay">
      <div class="content">
        <h1>Info Wave</h1>

        <p>
          Stay connected with every important college announcement in one place.
          Get updates from departments, clubs and general notices instantly.
        </p>
      </div>
    </div>
  </section>

  <!-- Categories Section -->
  <Categories />
</template>

<style scoped>
.home {
  width: 100%;
  height: 100vh;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay {
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.18);

  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  text-align: center;
  color: white;
  max-width: 700px;
  padding: 20px;
}

h1 {
  font-size: 5rem;
  margin-bottom: 25px;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);
}

p {
  font-size: 1.3rem;
  line-height: 1.8;
  text-shadow: 1px 1px 8px rgba(0, 0, 0, 0.4);
}

@media (max-width: 768px) {
  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1rem;
    padding: 0 20px;
  }
}
</style>