<template>
  <section id="features" class="features">
    <div class="section-header">
      <h2>테마별 인기 여행지</h2>
      <p>
        관광지 뿐만 아니라 먹거리, 놀거리도 확인하시고 여행 계획에 추가해보세요!
      </p>
    </div>

    <div class="container" data-aos="fade-up">
      <ul class="nav nav-tabs row gy-2 d-flex mb-5">
        <li
          class="nav-item col-6 col-md-4 col-lg-3 mb-3"
          v-for="(item, index) in tabItems"
          :key="index"
        >
          <div
            class="nav-link"
            :class="{ active: tab === item.value }"
            @click="toggle(item.value)"
          >
            <font-awesome-icon class="fontawesom" :icon="item.icon" />
            <h4>{{ item.label }}</h4>
          </div>
        </li>
      </ul>

      <div class="tab-content">
        <div v-if="tab">
      <MainThemaItem />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import MainThemaItem from "./MainThemaItem.vue";
import { useMainStore } from "@/stores/mainStore";
import { storeToRefs } from "pinia";

const mainStore = useMainStore();

const { themaInfo } = storeToRefs(mainStore);
const tab = ref("1");

const tabItems = [
  // ... (unchanged code) ...
];

const toggle = (num) => {
  const theme = ["", "12", "14", "15", "28", "32", "38", "39"];
  tab.value = num;

  const activeNav = document.querySelector(".active");
  activeNav && activeNav.classList.remove("active");

  const selectedNav = document.querySelector(`#nav-link-${num}`);
  selectedNav && selectedNav.classList.add("active");

  mainStore.clearMainThemeInfo();
  themaInfo.theme[num];
};

onMounted(() => {
  mainStore.getThemaInfo("12");
});
</script>

<style scoped>
.features .nav-tabs {
  border: 0;
}
.features .nav-link {
  border: 0;
  padding: 25px 20px;
  color: var(--color-secondary);
  box-shadow: 5px 5px 25px rgba(var(--color-secondary-rgb), 0.15);
  border-radius: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: 0s;
  cursor: pointer;
  height: 100%;
}

.features .nav-link .fontawesom {
  font-size: 32px;
  line-height: 0;
}
.features .nav-link h4 {
  font-size: 20px;
  font-weight: 600;
  margin: 10px 0 0 0;
  color: var(--color-secondary);
}
.features .nav-link:hover {
  color: var(--color-primary);
}
.features .nav-link.active {
  transition: 0.3s;
  background: var(--color-secondary)
    linear-gradient(
      rgba(var(--color-primary-rgb), 0.95),
      rgba(var(--color-primary-rgb), 0.6)
    );
  border-color: var(--color-primary);
}
.features .nav-link.active h4 {
  color: var(--color-white);
}
.features .nav-link.active .fontawesom {
  color: var(--color-white) !important;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
