<script setup>
import { ref, onMounted, watch } from "vue";
import { getMytripMax, getMytrip } from "@/api/mytrip";
import { getAttration } from "@/api/attraction";
import PageNavigation from "@/components/common/PageNavigation.vue";
import MKakaoMap from "@/components/mytrip/MKakaoMap.vue";
import { useMemberStore } from "@/stores/member";
import { storeToRefs } from "pinia";

const memberStore = useMemberStore();
const { userInfo } = storeToRefs(memberStore);

const currentPage = ref(1);
const totalPage = ref(1);

const onPageChange = (val) => {
  console.log(val + "번 페이지로 이동 준비 끝!!!");
  currentPage.value = val;
  attractions.value = [];
  // param.value.pgno = val;
  // getArticleList();
};

const getMyNum = () => {
  console.log("서버에서 유저가 등록한 여행계획 중 가장 큰 번호를 가져오자!!");
  getMytripMax(
    userInfo.value.userId,
    ({ data }) => {
      // console.log("then => ", data);
      totalPage.value = data;
    },
    (error) => {
      console.log(error);
    }
  );
};
const mytrips = ref([]);
// 번호에 해당하는 계획 가져오기
const getMytripList = () => {
  getMytrip(
    userInfo.value.userId,
    currentPage.value,
    ({ data }) => {
      // console.log(data);
      mytrips.value = data;
      getMytripAttraction();
    },
    (error) => {
      console.log(error);
    }
  );
};

const attractions = ref([]);
const attraction = ref({});
// mytrip에 있는 contentId에 맞는 관광지 가져오기
const getMytripAttraction = () => {
  // console.log("mytrip : ", mytrips.value);
  for (const key in mytrips.value) {
    console.log("mytrip에서 가져온 contentId : ", mytrips.value[key].contentId);
    // contentId에 맞는 관광지 정보 가져오기
    getAttration(
      mytrips.value[key].contentId,
      ({ data }) => {
        // console.log("then => ", data);
        attraction.value = data;
        attractions.value.push(attraction.value);
      },
      (error) => {
        console.log(error);
      }
    );
  }
};
onMounted(() => {
  getMyNum();
});

watch(
  () => currentPage.value,
  () => {
    getMytripList();
  },
  { immediate: true }
);
</script>

<template>
  <div>
    <div class="container" style="margin-top: 50px; margin-bottom: 100px">
      <div class="row">
        <h3 style="font-weight: bolder">나의 여행 계획</h3>
      </div>
      <div class="row" style="font-weight: normal">
        <h3>있~~~~니~~~~?</h3>
      </div>
      <PageNavigation
        :current-page="currentPage"
        :total-page="totalPage"
        @pageChange="onPageChange"
      ></PageNavigation>
      <MKakaoMap :attractions="attractions" />
      <div
        class="row col-12 mt-2 ms-1 card-table"
        v-for="attraction in attractions"
        :key="attraction.contentId"
      >
        <div
          class="card col-lg-2 mb-2 mx-2 shadow"
          style="cursor: pointer; width: 200px"
        >
          <img
            class="card-img-top mt-2 rounded"
            :src="attraction.firstImage"
            onerror="javascript:this.src='./src/assets/no_image.jpg'"
          />
          <div class="card-body">
            <h6 class="card-title">{{ attraction.title }}</h6>
            <p class="card-text">
              {{ attraction.addr1 }} {{ attraction.addr2 }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
