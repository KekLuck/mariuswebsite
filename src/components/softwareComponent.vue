<template>
  <div class="center-content">
    <div class="text">{{ text }}</div>
    <img :src="image" alt="" class="progress-bar-image" />
    <div class="progress-bar">
      <div class="progress-bar-container">
        <div class="progress-bar-fill" :style="{ width: `${number}%` }"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["image", "number", "text"],
};
</script>

<style scoped>
.progress-bar {
  width: 150px;
  height: 150px;
  /* other styles... */
}

.progress-bar-image {
  width: 125px;
  height: auto;
  margin: 20px;
}

.progress-bar-container {
  border: 2px solid white; /* adjust as needed */
  width: 150px;
  height: 20px; /* adjust as needed */
  background-color: #000; /* adjust as needed */
}

.progress-bar-fill {
  height: 100%;
  background-color: #fff; /* adjust as needed */
}

.center-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
