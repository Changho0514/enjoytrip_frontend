<template>
  <div class="container col-xxl-8 px-4 py-5" id="accompanyview">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img
          src="src/assets/accompany.png"
          class="d-block mx-lg-auto img-fluid"
          alt="Bootstrap Themes"
          width="700"
          height="500"
          loading="lazy"
        />
      </div>
      <div class="col-lg-6 text-end">
        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
          동행 구하기
        </h1>
        <p class="lead">특별한 순간들을 함께 나눌 동행자가 있다면?</p>
        <p class="lead">새로운 인연을 만나고 함께하는 즐거움!</p>
        <p class="lead">새로운 친구와 함께 여행을 떠나보세요</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <v-btn @click="goBoard"> 동행 구하기</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import "@/assets/dist/js/bootstrap.bundle.min.js";
import { useRouter } from "vue-router";

const router = useRouter();

const goBoard = () => {
  router.push({ name: "board" });
};
</script>

<style scoped>
img {
  margin-top: 10px;
  max-width: 100%;
  height: auto;
}
</style>
