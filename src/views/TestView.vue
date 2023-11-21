<!-- <template>
  <div class="layout-container">
    <div class="left-section">
     
    </div>
    <div class="right-section">
     
      <CarouselView />

      <div class="inner-section">             
        <WeatherView />
        <WeatherViewTemp />
        <MainTabView />
      </div>
      <div class="inner-padding"></div>
    </div>
  </div>
</template> -->

<template>
  <CarouselView />
  <div class="container">
    <WeatherView />
    <WeatherViewTemp />
    <MainTabView />
    <MainRecommendView />
    <MainAccompanyView />
    <MainPlanView />
  </div>
</template>

<script setup>
import WeatherView from "@/components/main/WeatherView.vue";
import CarouselView from "@/components/main/CarouselView.vue";
import MainTabView from "@/components/main/MainTabView.vue";
import WeatherViewTemp from "@/components/main/WeatherViewTemp.vue";
import TabTestView from "@/components/main/TabTestView.vue";
import MainRecommendView from "@/components/main/MainRecommendView.vue";
import MainAccompanyView from "@/components/main/MainAccompanyView.vue";
import MainPlanView from "@/components/main/MainPlanView.vue";

// import { ref, onMounted } from "vue";

// onMounted(() => {
//   window.addEventListener("scroll", handleScroll);
// });

// const handleScroll = () => {
//   let value = window.scrollY;
//   console.log("scrollY", value);
//   // Use the value variable as needed in your component
// };
</script>

<style>
.layout-container {
  display: flex;
}

.left-section {
  flex: 1; /* Takes up 1/3 of the width */
}

.right-section {
  flex: 9; /* Takes up 2/3 of the width */
  padding: 20px; /* Optional: Add padding for spacing */
}
.inner-section {
  flex: 4;
}
.inner-padding {
  flex: 10;
  margin-right: 20px;
  padding-right: 20px;
}
div {
  margin: 0;
}

@keyframes slide {
  from {
    left: -100px;
    opacity: 0;
  }
  to {
    left: 400px;
    opacity: 1;
  }
}

@keyframes disappear {
  /* Add your 'disappear' animation styles here */
}
</style>
