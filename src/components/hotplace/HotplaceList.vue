<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { listHotplace } from "@/api/hotplace.js";
import VSelect from "@/components/common/VSelect.vue";
import HotplaceListItem from "@/components/hotplace/HotplaceListItem.vue";
import PageNavigation from "@/components/common/PageNavigation.vue";
const router = useRouter();
const articles = ref([]);
const currentPage = ref(1);
const totalPage = ref(1);
const { VITE_ARTICLE_LIST_SIZE } = import.meta.env;
const param = ref({
  pgno: currentPage.value,
  spp: VITE_ARTICLE_LIST_SIZE,
  key: "",
  word: "",
});
onMounted(() => {
  getHotplaceList();
});
const changeKey = (val) => {
  console.log("getHotplaceList에서 선택한 조건 : " + val);
  param.value.key = val;
};
const getHotplaceList = () => {
  console.log("서버에서 글목록 얻어오자!!!", param.value);
  listHotplace(
    param.value,
    ({ data }) => {
      console.log("then => ", data);
      articles.value = data.articles;
      currentPage.value = data.currentPage;
      totalPage.value = data.totalPageCount;
    },
    (error) => {
      console.log(error);
    }
  );
};
const onPageChange = (val) => {
  console.log(val + "번 페이지로 이동 준비 끝!!!");
  currentPage.value = val;
  param.value.pgno = val;
  getArticleList();
};
const moveWrite = () => {
  router.push({ name: "article-write" });
};
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <h2 class="my-3 py-3 shadow-sm bg-light text-center">
          <mark class="sky">핫플레이스 목록</mark>
        </h2>
      </div>
      <div class="col-lg-10">
        <div class="row align-self-center mb-2">
          <div class="col-md-2 text-start">
            <button
              type="button"
              class="btn btn-outline-primary btn-sm"
              @click="moveWrite"
            >
              글쓰기
            </button>
          </div>
        </div>
        <div class="row">
          <HotplaceListItem
            v-for="article in articles"
            :key="article.articleNo"
            :article="article"
          ></HotplaceListItem>
        </div>
      </div>
      <PageNavigation
        :current-page="currentPage"
        :total-page="totalPage"
        @pageChange="onPageChange"
      ></PageNavigation>
    </div>
  </div>
</template>

<style scoped></style>
