<!-- WeatherViewTemp.vue -->

<template>
  <div>
    <div id="current-weather-div">
      <h2 id="current-weather">지역별 날씨</h2>
      <label for="area"> </label>
      <select id="area" v-model="targetArea">
        <option value="" disabled > 지역 선택 </option>
        <option
          v-for="(ssafy, index) in speArea"
          :key="ssafy.code"
          :value="ssafy.code"
        >
        <h2>{{ ssafy.name }}</h2>
        </option>
      </select>
    </div>
    <div v-if="weathers.length !== 0">
      <table>
        <td>
            <td v-for="(weather, wIndex) in weathers" :key="wIndex">
              <div v-if="weather.hour === '24'">
                {{ "밤 12시" }}
              </div>
              <div v-else>
                {{
                  weather.hour < 12
                    ? "오전 " + weather.hour + "시"
                    : "오후 " + (weather.hour % 12) + "시"
                }}
              </div>

              <div>
                <img
                  class="w-img"
                  :src="`./src/assets/${weather.icon}.png`"
                  alt=""
                />
              </div>
              <div>{{ weather.temp }}°C</div>
              <div>
                {{ weather.wfKor }}
              </div>
              <div>{{ weather.reh }}%</div>
            </td>
        </td>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const targetArea = ref("");

const speArea = ref([
  { name: "서울", code: "1168064000"},
  { name: "광주", code: "2915573000"},
  { name: "대전", code: "3020052600"},
  { name: "부산", code: "2611057000"},
  { name: "강원", code: "4277025300"},
  { name: "울산", code: "3111064000"},
  { name: "인천", code: "2811054000"},
  { name: "여수", code: "4613079000"},
]);

const weathers = ref([]);

watch(targetArea, (newValue, oldValue) => {
  weathers.value = [];
  getWeather(newValue);
});

const getWeather = (area) => {
  fetch(`http://www.kma.go.kr/wid/queryDFSRSS.jsp?zone=${area}`)
    .then((response) => response.text())
    .then((data) => makeList(data));
};

const makeList = (data) => {
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
    weathers.value.push(obj);
  });
};
</script>

<style scoped>
  
  div {
    margin: 20px;
    overflow-x: auto;
  }

  
  h2 {
    display: inline;
    margin-right: 10px;
    font-size: 30px; 
  }

  #area {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }


  #area option {
    text-align: center;
    background-color: #fff; 
    color: #333; 
    padding: 8px;
    font-size: 14px; 
  }


  #area option:checked {
    background-color: #007bff;
    color: #fff; 
  }


  table {
    width: 80%;
    border-collapse: collapse;
    margin-top: 20px;
  }


  th {
    border-bottom: 2px solid darkgray;
    padding: 10px;
    text-align: center;
    font-size: 18px; 
  }


  td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: center;
    font-size: 16px; 
  }


  .w-img {
    width: 70px; 
  }

  #current-weather{
    width: 83%; 
    margin-right: 20px; 
  }
  #current-weather-div{
    width: 83%; 
    margin: 10px; 
  }
</style>

