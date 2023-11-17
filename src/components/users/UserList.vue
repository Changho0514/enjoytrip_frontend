<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { userList } from "@/api/user.js";

const router = useRouter();

const users = ref([]);
const getUserList = () => {
  userList(
    ({ data }) => {
      // console.log("then => ", data);
      users.value = data;
    },
    (error) => {
      console.log(error);
    }
  );
};
onMounted(() => {
  getUserList();
});
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <h2 class="my-3 py-3 shadow-sm bg-light text-center">
          <mark class="sky">회원목록</mark>
        </h2>
      </div>
      <div class="col-lg-10">
        <div class="row align-self-center mb-2">
          <div class="col-md-2 text-start"></div>
        </div>
        <table class="table table-hover">
          <thead>
            <tr class="text-center">
              <th scope="col">회원 아이디</th>
              <th scope="col">회원 이름</th>
              <th scope="col">이메일</th>
              <th scope="col">탈퇴여부</th>
              <th scope="col">가입일</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody v-for="user in users" :key="user.userId">
            <td>{{ user.userId }}</td>
            <td>{{ user.userName }}</td>
            <td>{{ user.emailId }}@{{ user.emailDomain }}</td>
            <td>{{ user.flag }}</td>
            <td>{{ user.joinDate }}</td>
            <button>정보 보기</button>
            <button>강제 탈퇴</button>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
