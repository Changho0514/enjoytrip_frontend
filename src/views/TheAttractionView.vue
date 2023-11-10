<script setup>
import KakaoMap from "@/components/map/KakaoMap.vue";
import { sidoList, gugunList } from "@/api/attraction.js";
import { ref, onMounted, watch } from "vue";

// 시도선택을 클릭하면 시도를 가져오기
const sido = ref([]);
const getSido = () => { 
  console.log("서버에서 시도목록 얻어오자!!!");
  sidoList(
    ({ data }) => {
      // console.log("then => ", data);
      sido.value = data;
    },
    (error) => {
      console.log(error);
    }
  );
};
// 시도를 클릭하면 그에 해당하는 구군 가져오기
const selectedSido = ref(null)
const selectedGugun = ref(null)
const gugun = ref([]);
watch(selectedSido, (newValue, oldValue) => {
  console.log(`newValue: ${newValue}, oldValue: ${oldValue}`)
  gugunList(
    newValue,
    ({ data }) => {
      // console.log("then => ", data);
      gugun.value = data;
    },
    (error) => {
      console.log(error);
    }
  )
  selectedGugun.value = null;
})
</script>

<template>
  <!-- <div>지역별 여행지 화면 입니다.</div> -->
  <div class="container" style="margin-top: 50px; margin-bottom: 100px">
    <div class="row">
      <h3 style="font-weight: bolder">대한민국 구석구석 지역 정보</h3>
    </div>
    <div class="row" style="font-weight: normal">
      <h3>어디까지 알고있니?</h3>
    </div>
    <div class="row col-12">
      <!-- 관광지 검색 start -->
      <form
        id="form-search"
        action=""
        class="d-flex my-3"
        method="POST"
        role="search"
      >
        <select id="search-area" v-model="selectedSido" name="search_area" class="form-select me-2" @click="getSido">
          <option value="null">시도선택</option>
          <option v-for="si in sido" :key="si.sidoCode" :value="si.sidoCode">{{ si.sidoName }}</option>
        </select>
        <select
          id="search-sub-area"
          name="search_sub_area"
          class="form-select me-2"
          v-model="selectedGugun"
        >
          <option value="null">구군선택</option>
          <option v-for="gu in gugun" :key="gu.gugunCode" :value="gu.gugunName">{{ gu.gugunName }}</option>
        </select>
        <select
          id="search-content-id"
          name="search_content_id"
          class="form-select me-2"
        >
          <option value="0" selected>관광지 유형</option>
          <option value="12">관광지</option>
          <option value="14">문화시설</option>
          <option value="15">축제공연행사</option>
          <option value="25">여행코스</option>
          <option value="28">레포츠</option>
          <option value="32">숙박</option>
          <option value="38">쇼핑</option>
          <option value="39">음식점</option>
        </select>
        <input
          id="search-keyword"
          name="search_keyword"
          class="form-control me-2"
          type="search"
          placeholder="검색어"
          aria-label="검색어"
        />
        <input
          type="button"
          id="btn-search"
          name="btn_search"
          class="btn btn-outline-success"
          value="검색"
        />
      </form>
      <!-- kakao map start -->
      <KakaoMap />
      {{ selectedSido }}
      <!-- <div
        id="map"
        class="row col-12 my-3 rounded ms-1"
        style="height: 500px"
      ></div> -->
      <!-- kakao map end -->
      <div class="row col-12 mt-2 ms-1 card-table">
        <!-- <c:if test="${not empty attractions}">
				<c:forEach var="attraction" items="${attractions}">
					<div class="card col-lg-2 mb-2 mx-2 shadow" style="cursor: pointer; width: 300px">
		               <img class="card-img-top mt-2 rounded" src="${attraction.firstImage}"  onerror="this.src='./assets/img/no_image.jpg'">
		                  <div class="card-body">
		                      <h4 class="card-title">${attraction.title}</h4>
		                      <p class="card-text">${attraction.addr1} ${attraction.addr2}</p>
		                    </div>
		                  </div>
				</c:forEach>
			</c:if> -->
      </div>
    </div>
  </div>
</template>

<style scoped></style>
