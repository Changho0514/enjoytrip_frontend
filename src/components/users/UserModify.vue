<script setup>
import { userModify } from "@/api/user.js";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useMemberStore } from "@/stores/member";
import { storeToRefs } from "pinia";

const memberStore = useMemberStore();
const { userInfo } = storeToRefs(memberStore);

const router = useRouter();
const user = ref({
  userId: userInfo.value.userId,
  userName: userInfo.value.userName,
  emailId: userInfo.value.emailId,
  emailDomain: userInfo.value.emailDomain,
});
const modify = () => {
  userModify(
    user.value,
    (response) => {
      let msg = "회원정보 수정에 실패했습니다";
      if (response.status == 200) {
        msg = "회원정보 수정에 성공했습니다";
      }
      alert(msg);
      goMyPage();
    },
    (error) => {
      console.log(error);
    }
  );
};
const goMyPage = () => {
  router.push({ name: "user-mypage" });
};
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <h2 class="my-3 py-3 shadow-sm bg-light text-center">
          <mark class="orange">정보 수정</mark>
        </h2>
      </div>
      <div class="col-lg-10 text-start">
        <form>
          <div class="mb-3">
            <label for="username" class="form-label">이름 : </label>
            <input type="text" class="form-control" placeholder="이름..." v-model="user.userName" />
          </div>
          <div class="mb-3">
            <label for="userid" class="form-label">아이디 : </label>
            <input
              type="text"
              class="form-control"
              placeholder="아이디..."
              v-model="user.userId"
              readonly
            />
          </div>
          <div class="mb-3">
            <label for="emailid" class="form-label">이메일 : </label>
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="이메일아이디"
                v-model="user.emailId"
              />
              <span class="input-group-text">@</span>
              <select
                class="form-select"
                aria-label="이메일 도메인 선택"
                v-model="user.emailDomain"
              >
                <option selected>선택</option>
                <option value="ssafy.com">싸피</option>
                <option value="google.com">구글</option>
                <option value="naver.com">네이버</option>
                <option value="kakao.com">카카오</option>
              </select>
            </div>
          </div>
          <div class="col-auto text-center">
            <button type="button" class="btn btn-outline-primary mb-3" @click="modify">
              수정하기
            </button>
            <button type="button" class="btn btn-outline-success ms-1 mb-3">초기화</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
