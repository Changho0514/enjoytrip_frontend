<script setup>
import "@/assets/dist/js/bootstrap.bundle.min.js";
</script>

<style scoped>
.card {
  height: 300px;
}
.title-h3 {
  font-size: 100px;
}
</style>
<template>
  <div class="container px-4 py-5" id="hotplaceview">
    <h1 class="border-bottom">핫 플레이스 TOP3</h1>

    <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div class="col">
        <div
          class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
          style="background-image: url('src/assets/main3.png')"
        >
          <div
            class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1"
          >
            <h3 class="title-h3">Short title, long jacket</h3>

            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <!-- 하트로 바꾸기 -->
                <img
                  src="https://github.com/.png"
                  alt="Bootstrap"
                  width="32"
                  height="32"
                  class="rounded-circle border border-white"
                />
              </li>
              <li class="d-flex align-items-center me-3">
                <i
                  class="bi-arrow-through-heart-fill"
                  style="margin-right: 5px"
                ></i>
                <small>Earth</small>
              </li>

              <li>
                <i class="bi-calendar2-week" style="margin-right: 5px"></i>
                <small>3시간 전</small>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col">
        <div
          class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
          style="background-image: url('src/assets/main2.png')"
        >
          <div
            class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1"
          >
            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
              Much longer title that wraps to multiple lines
            </h3>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <img
                  src="https://github.com/twbs.png"
                  alt="Bootstrap"
                  width="32"
                  height="32"
                  class="rounded-circle border border-white"
                />
              </li>
              <li class="d-flex align-items-center me-3">
                <svg class="bi me-2" width="1em" height="1em">
                  <use xlink:href="#geo-fill" />
                </svg>
                <small>Pakistan</small>
              </li>
              <li class="d-flex align-items-center">
                <svg class="bi me-2" width="1em" height="1em">
                  <use xlink:href="#calendar3" />
                </svg>
                <small>4d</small>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col">
        <div
          class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
          style="background-image: url('src/assets/main1.png')"
        >
          <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
              Another longer title belongs here
            </h3>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <img
                  src="https://github.com/twbs.png"
                  alt="Bootstrap"
                  width="32"
                  height="32"
                  class="rounded-circle border border-white"
                />
              </li>
              <li class="d-flex align-items-center me-3">
                <svg class="bi me-2" width="1em" height="1em">
                  <use xlink:href="#geo-fill" />
                </svg>
                <small>California</small>
              </li>
              <li class="d-flex align-items-center">
                <svg class="bi me-2" width="1em" height="1em">
                  <use xlink:href="#calendar3" />
                </svg>
                <small>5d</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
