<script setup>
import { ref, onMounted, watch } from "vue";
import { getMytripMax, addMytripAll } from "@/api/mytrip";
import { getAttration } from "@/api/attraction";
import { useMemberStore } from "@/stores/member";
import { storeToRefs } from "pinia";

const memberStore = useMemberStore();
const { userInfo } = storeToRefs(memberStore);

const num = ref(0);
const getMyNum = () => {
  console.log(userInfo.value.userId, "의 가장 큰 번호");
  getMytripMax(
    userInfo.value.userId,
    ({ data }) => {
      console.log("then => ", data);
      num.value = data;
    },
    (error) => {
      console.log(error);
    }
  );
};
onMounted(() => {
  getMyNum();
});

const mytrips = ref([]);
const attractions = ref([]);
const attraction = ref({});
const props = defineProps({
  contentId: Number,
});

watch(
  () => props.contentId,
  (newValue, oldValue) => {
    // 여행 계획에 추가
    let mytrip = {};
    mytrip.userMytripNo = num.value + 1;
    mytrip.contentId = props.contentId;
    mytrip.userId = userInfo.value.userId;
    mytrips.value.push(mytrip);
    // contentId에 맞는 관광지 정보 가져오기
    getAttration(
      newValue,
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
);

const addPlanList = () => {
  addMytripAll(
    mytrips.value,
    (response) => {
      // console.log("then => ", response);
      let msg = "여행 계획 등록에 문제 발생했습니다.";
      if (response.status == 200) msg = "여행 계획 등록에 성공했습니다";
      alert(msg);
      getMyNum();
    },
    (error) => {
      console.log(error);
    }
  );
  attractions.value = [];
  mytrips.value = [];
};
</script>

<template>
  <div class="place">
    <h5 class="title">
      <b>{{ num + 1 }}번 여행 계획</b>
    </h5>
    <button type="button" @click="addPlanList">여행 계획 추가</button>
    <p>{{ props.contentId }}</p>
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
          <p class="card-text">{{ attraction.addr1 }} {{ attraction.addr2 }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.place {
  border: 1px solid black;
  border-radius: 0.5em;
}
.title {
  text-align: center;
  justify-content: center;
}
</style>
