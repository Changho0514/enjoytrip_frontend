<template>
  <div class="container col-xxl-8 px-4 py-5">
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
        <p class="lead">새로운 인연을 만나고</p>
        <p class="lead">
          함께하는 즐거움! 새로운 친구와 함께 여행을 떠나보세요
        </p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <button type="button" class="btn btn-secondary btn-lg px-4 me-md-2">
            동행 구하기
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import "@/assets/dist/js/bootstrap.bundle.min.js";
</script>

<style scoped>
.flex-container {
  display: flex;
}

.flex-item {
  flex: 1;
  margin-right: 10px; /* 각 div 사이의 간격을 조절할 수 있습니다. */
}

.content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

img {
  margin-top: 10px;
  max-width: 100%;
  height: auto;
}
</style>
