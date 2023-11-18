<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { writeHotplace, writeFileHotplace } from "@/api/hotplace.js";
import { useMemberStore } from "@/stores/member";
import { storeToRefs } from "pinia";

const router = useRouter();

const memberStore = useMemberStore();
const { userInfo } = storeToRefs(memberStore);

const hotplace = ref({
  userId: userInfo.value.userId,
  title: "",
  content: "",
  address: "",
});
const hotplaceNo = ref(0);

const image = ref({
  file: null,
});

const onInputImg = (e) => {
  console.log("이미지 upload ", e.target.files[0]);
  image.file = e.target.files[0];
};

const write = async () => {
  console.log("작성할 핫플 글 -> ", hotplace);
  // write
  await writeHotplace(
    hotplace.value,
    ({ data }) => {
      console.log("write한 핫플 번호 ->", data);
      hotplaceNo.value = data;
    },
    (error) => {
      console.log(error);
    }
  );
  const formData = new FormData();
  formData.append("upfile", image.file);
  formData.append("hotplaceNo", hotplaceNo.value);
  //writeFile
  await writeFileHotplace(
    formData,
    (response) => {
      console.log(response);
    },
    (error) => {
      console.log(error);
    }
  );
  moveList();
};

const moveList = () => {
  router.push("/hotplace");
};
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <h2 class="my-3 py-3 shadow-sm bg-light text-center">
          <mark class="sky">핫플 올리기</mark>
        </h2>
      </div>
      <div class="col-lg-10 text-start">
        <form @submit.prevent="onSubmit">
          <div class="mb-3">
            <label for="subject" class="form-label">제목 : </label>
            <input
              type="text"
              class="form-control"
              v-model="hotplace.title"
              placeholder="제목..."
            />
          </div>
          <div class="mb-3">
            <label for="content" class="form-label">내용 : </label>
            <textarea class="form-control" v-model="hotplace.content" rows="10"></textarea>
          </div>
          <div class="mb-3">
            <label for="subject" class="form-label">주소 : </label>
            <input
              type="text"
              class="form-control"
              v-model="hotplace.address"
              placeholder="주소..."
            />
          </div>
          <div class="file-section input-line">
            <div class="file-top">
              <!-- <label class="file-label" for="write-file">파일 첨부</label>
              <div class="file-button-area">
                <button @click.prevent="">파일 업로드</button>
                <button @click.prevent="">전체 삭제</button>
              </div> -->
            </div>
            <input
              id="write-file"
              class="file-input"
              ref="file"
              type="file"
              @change="onInputImg"
              placeholder="첨부된 파일이 없습니다."
            />
          </div>
          <div class="col-auto text-center">
            <button type="submit" class="btn btn-outline-primary mb-3" @click="write">
              등록하기
            </button>
            <button type="button" class="btn btn-outline-danger mb-3 ms-1" @click="moveList">
              목록으로이동...
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
