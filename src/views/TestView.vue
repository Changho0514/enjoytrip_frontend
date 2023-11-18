<template>
    <div>

      <v-carousel
        v-model="firstCarouselIndex"
        height="800"
        :show-arrows="false"
        hide-delimiters
      >
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet :color="backgrounds[firstCarouselIndex]" height="100%" >
            <div class="explain-carousel">
                <v-carousel
                
                
                class="inner-carousel"
                v-model="firstCarouselIndex"
                :show-arrows="false"
                hide-delimiters
                >
                    <v-carousel-item v-for="(slide, i) in slides" :key="i">
                    <v-sheet color= "transparent" height="30%" >
                        {{ texts[i] }}
                    </v-sheet>
                    </v-carousel-item>
                </v-carousel>
            </div>
            <div class="carousel-child-div">
              <!-- 3/4 크기로 들어가게끔 div 설정-->
              <v-carousel
              class="inner-carousel"
                v-model="firstCarouselIndex"
                show-arrows
                hide-delimiters
              >
              
                <v-carousel-item
                  v-for="(slide, i) in slides"
                  :key="i"
                  ><img :src= "imgs[i]">
                </v-carousel-item>
                
              </v-carousel>
            </div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>

      <!-- <v-carousel
        v-model="firstCarouselIndex"
        height="400"
        :show-arrows="false"
        hide-delimiters
      >
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet :color="backgrounds[firstCarouselIndex]" height="100%">
          </v-sheet>
        </v-carousel-item>
      </v-carousel> -->
    </div>
  </template>
  
  <script>
    // import{ref} from 'vue';
    // const imgs = ref([
    //       "@/assets/main1.png",
    //       "@/assets/main2.png",
    //       "@/assets/main3.png",
    //       "@/assets/main4.png",
    //       "@/assets/main5.png",
    //       ])
    export default {
        name: 'carousel',

      data() {
        return {
          colors: [
            'indigo',
            'warning',
            'pink darken-2',
            'red lighten-1',
            'deep-purple accent-4',
          ],
          backgrounds: [
            'rgb(252, 241, 215)',
            'rgb(200, 215, 238)',
            'rgb(126, 102, 145)',
            'indigo',
            'rgb(36, 85, 170)',
          ],
          texts:[
            "아주 아름다운 1번이에요",
            "2222222222222222222",
            "아주 아름다운 1번이에요",
            "4444444444444444444",
            "555555555555555555",
          ],
          imgs:[
          "src/assets/main1.png",
          "src/assets/main2.png",
          "src/assets/main3.png",
          "src/assets/main4.png",
          "src/assets/main5.png",
          ],
        //   carouselHeight: ,
          slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth'],
          firstCarouselIndex: 0,
        }
    },
    }
    
  </script>
  
  <style scoped>
    .carousel-child-div {
      position: absolute;
      right: 0;
      bottom: 0;
      
      width: 60%; /* 부모의 너비의 1/4 크기로 조정합니다. */
      height: 80%; /* 부모의 높이의 1/4 크기로 조정합니다. */

    }

    .explain-carousel{
        position: absolute;
      left: 0;
      bottom: 0;
      margin-left: 50px;
      margin-right: 10px;
      
      
      width: 30%; /* 부모의 너비의 1/4 크기로 조정합니다. */
      height: 40%; /* 부모의 높이의 1/4 크기로 조정합니다. */
      
    }
  </style>
  