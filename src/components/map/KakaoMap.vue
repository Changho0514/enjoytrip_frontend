<template>
  <div id="map"></div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: "KakaoMap", // 컴포넌트 이름 지정
  setup() {
    const map = ref(null);

    const loadScript = () => {
      console.log("kakao loadScript !!!");
      const script = document.createElement("script");
      // &autoload=false api를 로드한 후 맵을 그리는 함수가 실행되도록 구현
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?appkey=ad14b9c7542e49a610b76c4fb330c0f7&autoload=false";
      // html>head 안에 스크립트 소스를 추가
      script.onload = () => window.kakao.maps.load(loadMap);
      document.head.appendChild(script);
    };

    const loadMap = () => {
      console.log("kakao loadMap !!!");
      // 지도를 담을 DOM 영역
      const container = document.getElementById("map");
      const options = {
        // 지도를 생성할 때 필요한 기본 옵션
        center: new window.kakao.maps.LatLng(37.500613, 127.036431), // 지도의 중심좌표
        level: 3, // 지도의 레벨(확대, 축소 정도)
      };

      // 지도 생성 및 객체 리턴
      map.value = new window.kakao.maps.Map(container, options);
    };

    onMounted(() => {
      console.log("kakao mounted !!!");
      if (window.kakao && window.kakao.maps) {
        loadMap();
      } else {
        loadScript();
      }
    });

    return {
      map,
    };
  },
};
</script>

<style scoped>
#map {
  width: 100%;
  height: 400px;
}
</style>
