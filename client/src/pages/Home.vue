<script setup>
import backgroundImage from "../asserts/images/background.png";
</script>

<template>
  <div
    class="home"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <div class="overlay">
      <h1>Welcome to Info Wave</h1>
      <p>Your College Announcement Platform</p>
    </div>
  </div>
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
  text-align: center;
  color: white;
  background: rgba(0, 0, 0, 0.4);
  padding: 30px 50px;
  border-radius: 12px;
}

h1 {
  font-size: 3rem;
  margin-bottom: 10px;
}

p {
  font-size: 1.3rem;
}
</style>