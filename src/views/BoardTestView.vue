<template>
  <section id="featured-services" class="featured-services">
    <div class="container">
      <div class="row gy-4">
        <!-- 이 달의 추천 여행지 -->
        <div class="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
          <div class="service-item position-relative">
            <div class="icon"><i class="bi-geo-fill"></i></div>
            <h4>
              <a href="#cta" class="stretched-link">이 달의 추천 여행지</a>
            </h4>
            <p>여행은 가고 싶은데 어디로 가야할지 모르겠나요?</p>
            <p><b>EnjoyTrip</b>이 추천하는 이 달의 여행지로 떠나보세요</p>
          </div>
        </div>
        <!-- End Service Item -->

        <!-- 테마 별 추천 여행지 -->
        <div
          class="col-xl-3 col-md-6 d-flex"
          data-aos="zoom-out"
          data-aos-delay="200"
        >
          <div class="service-item position-relative">
            <div class="icon"><i class="bi-phone-vibrate-fill"></i></div>
            <h4>
              <a href="#features" class="stretched-link">동행 구하기</a>
            </h4>

            <p>혼자 떠나는 여행은 심심하신가요?</p>
            <p>맛집이 2인이상부터라구요?</p>
            <p>동행을 구해보세요!</p>
          </div>
        </div>
        <!-- End Service Item -->

        <!-- 여행 계획 짜기 -->
        <div
          class="col-xl-3 col-md-6 d-flex"
          data-aos="zoom-out"
          data-aos-delay="400"
        >
          <div class="service-item position-relative">
            <div class="icon"><i class="bi-calendar2-week"></i></div>
            <h4>
              <a href="#services" class="stretched-link"> 여행 계획</a>
            </h4>
            <p>여행 계획을 기획 중이신가요?</p>
            <p>본인만의 여행 계획을 짜고, 공유해보세요</p>
          </div>
        </div>
        <!-- End Service Item -->

        <!-- 핫 플레이스 공유 -->
        <div
          class="col-xl-3 col-md-6 d-flex"
          data-aos="zoom-out"
          data-aos-delay="600"
        >
          <div class="service-item position-relative">
            <div class="icon"><i class="bi-star-fill"></i>></div>
            <h4>
              <a href="#portfolio" class="stretched-link">핫 플레이스 공유</a>
            </h4>
            <p>지금 떠오르는 핫 플레이스는?</p>
            <p><b>EnjoyTrip</b>에서 확인해보세요</p>
          </div>
        </div>
        <!-- End Service Item -->
      </div>
    </div>
  </section>
</template>

<script></script>

<style>
.featured-services .service-item {
  padding: 30px;
  transition: all ease-in-out 0.4s;
  background: var(--color-white);
  height: 100%;
}
.featured-services .service-item .icon {
  margin-bottom: 10px;
  color: var(--color-primary);
  font-size: 36px;
  transition: 0.3s;
}
.featured-services .service-item h4 {
  font-weight: 600;
  margin-bottom: 15px;
  font-size: 24px;
}
.featured-services .service-item h4 a {
  color: var(--color-secondary);
  transition: ease-in-out 0.3s;
}
.featured-services .service-item p {
  line-height: 24px;
  font-size: 14px;
  margin-bottom: 0;
}
.featured-services .service-item:hover {
  transform: translateY(-10px);
  box-shadow: 0px 0 60px 0 rgba(var(--color-secondary-rgb), 0.1);
}
.featured-services .service-item:hover h4 a {
  color: var(--color-primary);
}
</style>
