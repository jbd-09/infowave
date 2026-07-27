<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const openGeneral = () => {
  console.log("General clicked");
  router.push("/general");
};

const openDepartments = () => {
  router.push("/departments");
};

const openClubs = () => {
  router.push("/clubs");
};
</script>

<template>
  <section id="categories" class="categories">

    <h1>Categories</h1>

    <p class="subtitle">
      Choose a category to view the latest announcements.
    </p>

    <div class="cards">

      <!-- Replace your old cards with these -->
      <div class="card" @click="openGeneral">
        <h2>General</h2>
        <p>College-wide announcements and notices.</p>
      </div>

      <div class="card" @click="openDepartments">
        <h2>Departments</h2>
        <p>Department-specific updates and events.</p>
      </div>

      <div class="card" @click="openClubs">
        <h2>Clubs</h2>
        <p>Club activities, events and registrations.</p>
      </div>

    </div>

  </section>
</template>
<style scoped>

.categories {
  min-height: 100vh;
  background: #f7f5ff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 80px 20px;
}

h1 {
  font-size: 3rem;
  color: #5b21b6;
  margin-bottom: 10px;
  font-weight: 700;
}

.subtitle {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 60px;
  text-align: center;
}

.cards {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
}
.card {
  width: 300px;
  height: 220px;

  background: #fefeff;          /* Pastel Purple */

  border: 2px solid #d9d6dd;    /* Dark Purple Outline */

  border-radius: 20px;

  padding: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  cursor: pointer;

  box-shadow: 0 10px 20px rgba(109, 40, 217, 0.12);

  transition: all .35s ease;
}

.card::before {
  content: "";

  position: absolute;
  inset: 0;

  background: radial-gradient(
    circle at top,
    rgba(184, 108, 255, 0.12),
    transparent 70%
  );

  opacity: 0;
  transition: opacity 0.35s ease;
}

.card:hover::before {
  opacity: 1;
}

.card:hover {
  transform: translateY(-12px) scale(1.03);

  border-color: #d17dff;

  box-shadow:
    0 0 15px rgba(184, 108, 255, 0.5),
    0 0 30px rgba(184, 108, 255, 0.35),
    0 0 45px rgba(184, 108, 255, 0.2),
    0 20px 40px rgba(0, 0, 0, 0.15);
}

.card h2 {
  color: #5b21b6;
  margin-bottom: 15px;
  font-size: 1.8rem;
  transition: all 0.3s ease;
}

.card:hover h2 {
  color: #b86cff;

  text-shadow:
    0 0 10px rgba(184, 108, 255, 0.8),
    0 0 20px rgba(184, 108, 255, 0.5);
}

.card p {
  color: #666;
  line-height: 1.6;
  font-size: 1rem;
  transition: 0.3s ease;
}

.card:hover p {
  color: #555;
}

@media (max-width: 992px) {
  .cards {
    flex-direction: column;
  }

  .card {
    width: 90%;
    max-width: 350px;
  }
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.4rem;
  }

  .subtitle {
    font-size: 1rem;
  }
}

</style>