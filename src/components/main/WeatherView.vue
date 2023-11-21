<!-- WeatherView.vue -->

<template>
  <div>
    <h2 class="weather-title">오늘의 날씨</h2>
    <h1 class="weather-title">현재 날씨</h1>
      <table id="current-weather-table">
        <tr>
          <td v-for="(area, index) in selAreas" :key="index">
            <td v-if="area.weathers.length > 0">
              <div>{{area.name}}</div>
              <div>
                <img
                  class="w-img"
                  :src="`./src/assets/${area.weathers[0].icon}.png`"
                  alt=""
                />
              </div>
              <div>{{ area.weathers[0].temp }}°C</div>
              <div>{{ area.weathers[0].wfKor }}</div>
              <div>{{ area.weathers[0].reh }}%</div>
            </td>
          </td>
        </tr>
      </table>
    </div>

    

</template>

<script setup>

import { ref, watch, onMounted } from "vue";

const selAreas = ref([
  { name: "서울", code: "1168064000", weathers: [] },
  { name: "광주", code: "2915573000", weathers: [] },
  { name: "대전", code: "3020052600", weathers: [] },
  { name: "부산", code: "2611057000", weathers: [] },
  { name: "강원", code: "4277025300", weathers: [] },
  { name: "울산", code: "3111064000", weathers: [] },
  { name: "인천", code: "2811054000", weathers: [] },
  { name: "여수", code: "4613079000", weathers: [] },
]);



onMounted(async () => {
    for (const area of selAreas.value) {
    await getWeather(area);
  }
});

const getWeather = (area) => {
  fetch(`http://www.kma.go.kr/wid/queryDFSRSS.jsp?zone=${area.code}`)
    .then((response) => response.text())
    .then((data) => makeList(data, area));
};

const makeList = (data, area) => {
  let parser = new DOMParser();
  const xml = parser.parseFromString(data, "application/xml");
  let datas = xml.querySelectorAll("data");
  datas.forEach((weather) => {
    let obj = new Object();
    obj.hour = weather.querySelector("hour").textContent;
    obj.icon = weather.querySelector("wfEn").textContent;
    obj.temp = weather.querySelector("temp").textContent;
    obj.wfKor = weather.querySelector("wfKor").textContent;
    obj.reh = weather.querySelector("reh").textContent;
    area.weathers.push(obj);
  });
};
</script>

<style>

.weather-title{
  margin-left:30px;
  margin-top:30px;
}


#current-weather-table{
  margin-left: auto;
  margin-right: auto;
    width: 90%;
    border-collapse: collapse;
    margin-top: 20px;
  }
tr,
td {
  text-align: center;
}
th {
  border-bottom: 2px solid darkgray;
}
.w-img {
  width: 80px;
}


</style>
