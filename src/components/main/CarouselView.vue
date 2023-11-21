<template>
  <div>
    <v-carousel
      v-model="firstCarouselIndex"
      height="800"
      :show-arrows="false"
      hide-delimiters
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="backgrounds[firstCarouselIndex]" height="100%">
          <div class="explain-carousel">
            <v-carousel
              class="inner-carousel"
              v-model="firstCarouselIndex"
              :show-arrows="false"
              hide-delimiters
            >
              <v-carousel-item v-for="(slide, i) in slides" :key="i">
                <v-sheet color="transparent" height="30%">
                  <div class="tit_wrap">
                    <h1>{{ texts[i] }}</h1>
                  </div>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
          </div>

          <div class="carousel-child-div">
            <v-carousel
              cycle
              height="719"
              class="inner-carousel"
              v-model="firstCarouselIndex"
              show-arrows
              hide-delimiters
            >
              <v-carousel-item v-for="(slide, i) in slides" :key="i">
                <img :src="imgs[i]" class="right-aligned-img" />
              </v-carousel-item>
            </v-carousel>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script setup>
import { ref } from "vue";

const name = "carousel";

const colors = [
  "indigo",
  "warning",
  "pink darken-2",
  "red lighten-1",
  "deep-purple accent-4",
];
const backgrounds = [
  "rgb(252, 241, 215)",
  "rgb(200, 215, 238)",
  "#CE93D8",
  "#FFECB3",
  "#C5CAE9",
];
const texts = [
  "가을 바람 산들거리는 갈대밭을 지나 봉서사 여행 코스",
  "겨울 바다 낚시 체험 -> 선상에서만 느낄 수 있는 쾌감!",
  "한강에서 남산 전망대까지! 야경투어 - 화려한 도시의 조명과 도로가 어우러져 창 위로 그려지는 별",
  "동궁과 월지 - 신라 조경예술의 극치",
  "경복궁 야간 관람 - 달 밝은 밤 도심 속 궁궐 야경 이색체험을 통해 우리 궁궐의 역사 문화적 가치와 아름다움을 감상",
];
const imgs = [
  "src/assets/main1.png",
  "src/assets/main2.png",
  "src/assets/main3.png",
  "src/assets/main4.png",
  "src/assets/main5.png",
];
const slides = ["First", "Second", "Third", "Fourth", "Fifth"];
const firstCarouselIndex = ref(0);
</script>

<style scoped>
.carousel-child-div {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 50%;
  height: 90%;
}

.right-aligned-img {
  position: absolute;
  right: 10;
  bottom: 10;
  width: 100%;
  height: 110%;
}
.explain-carousel {
  position: absolute;
  left: 0;
  bottom: 0;
  margin-left: 50px;
  margin-right: 10px;
  width: 30%;
  height: 40%;
}

/* .main_mo .main_showcase .tit_wrap em {
  padding: 0 8px;
  height: 20px;
  line-height: 22px;
  border-radius: 10px 10px 10px 0;
  font-size: 11px;
} */
</style>
