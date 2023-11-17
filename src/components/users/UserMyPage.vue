<script setup>
import { userDelete, findPwd } from "@/api/user.js";
import { useRouter } from "vue-router";
import { useMemberStore } from "@/stores/member";
import { storeToRefs } from "pinia";

const memberStore = useMemberStore();
const { userInfo } = storeToRefs(memberStore);
const { userLogout } = memberStore;

const router = useRouter();

const modify = () => {
  router.push({ name: "user-modify" });
};
const findPassword = () => {
  findPwd(
    userInfo.value.userId,
    (response) => {
      let password;
      if (response.status == 200) {
        password = response.data;
        alert(password);
      }
    },
    (error) => {
      console.log(error);
    }
  );
};

const changePwd = () => {};
const deleteUser = () => {
  userDelete(
    userInfo.value.userId,
    async (response) => {
      let msg = "회원탈퇴에 실패했습니다";
      if (response.status == 200) {
        msg = "회원탈퇴에 성공했습니다";
        alert(msg);
        await userLogout(userInfo.value.userId);
        await goMainPage();
      } else {
        alert(msg);
      }
    },
    (error) => {
      console.log(error);
    }
  );
};
const goMainPage = () => {
  router.push({ name: "main" });
};
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <h2 class="my-3 py-3 shadow-sm bg-light text-center">
          <mark class="orange">내정보</mark>
        </h2>
      </div>
      <div class="col-lg-10">
        <div class="card mt-3 m-auto" style="max-width: 700px">
          <div class="row g-0">
            <div class="col-md-4">
              <!-- <img
                src="https://source.unsplash.com/random/250x250/?food"
                class="img-fluid rounded-start"
                alt="..."
              /> -->
            </div>
            <div class="col-md-8">
              <div class="card-body text-start">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">아이디 : {{ userInfo.userId }}</li>
                  <li class="list-group-item">이름 : {{ userInfo.userName }}</li>
                  <li class="list-group-item">
                    이메일 : {{ userInfo.emailId }}@{{ userInfo.emailDomain }}
                  </li>
                  <li class="list-group-item">가입일 : {{ userInfo.joinDate }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button type="button" class="btn btn-outline-secondary mt-2" @click="modify">
            나의 정보 수정하기
          </button>
          <button type="button" class="btn btn-outline-secondary mt-2" @click="findPassword">
            비밀번호 찾기
          </button>
          <button type="button" class="btn btn-outline-secondary mt-2" @click="changePwd">
            비밀번호 변경
          </button>
          <button type="button" class="btn btn-outline-secondary mt-2" @click="deleteUser">
            탈퇴하기
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
