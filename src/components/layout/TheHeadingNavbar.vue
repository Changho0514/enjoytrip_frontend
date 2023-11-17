<script setup>
import { useMenuStore } from "@/stores/menu";
import { useMemberStore } from "@/stores/member";
import { storeToRefs } from "pinia";

const menuStore = useMenuStore();

const { menuList } = storeToRefs(menuStore);
const { changeMenuState } = menuStore;

const memberStore = useMemberStore();
const { userInfo, isLogin } = storeToRefs(memberStore);
const { userLogout } = memberStore;

const logout = () => {
  console.log("로그아웃!!!!");
  // changeMenuState();
  userLogout();
};
</script>

<template>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
  />
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link
        :to="{ name: 'main' }"
        class="navbar-brand text-primary fw-bold"
        ><img src="@/assets/logo.png" alt="" width="80"
      /></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse container"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link :to="{ name: 'attraction' }" class="nav-link"
              ><i class="bi bi-map"></i> 여행정보공유</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'mytrip' }" class="nav-link"
              ><i class="bi bi-calendar-check"></i> 나의여행계획</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'hotplace' }" class="nav-link"
              ><i class="bi bi-camera-fill"></i> 핫플자랑하기</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'board' }" class="nav-link"
              ><i class="bi bi-share"></i> 여행정보공유</router-link
            >
          </li>
        </ul>
        <!-- 로그인 처리 -->
        <ul
          class="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll"
          style="--bs-scroll-height: 100px"
        >
          <template v-for="menu in menuList" :key="menu.routeName">
            <template v-if="menu.show === isLogin">
              <template v-if="menu.routeName === 'user-logout'">
                <li class="nav-item">
                  <router-link
                    to="/"
                    @click.prevent="logout"
                    class="nav-link"
                    >{{ menu.name }}</router-link
                  >
                </li>
              </template>
              <template v-else>
                <li class="nav-item">
                  <router-link
                    :to="{ name: menu.routeName }"
                    class="nav-link"
                    >{{ menu.name }}</router-link
                  >
                </li>
              </template>
            </template>
          </template>
          <li class="nav-item" v-if="isLogin && userInfo.roll === 1">
            <router-link :to="{ name: 'user-list' }" class="nav-link"
              >회원목록</router-link
            >
          </li>
          <li class="nav-link" v-if="isLogin">
            {{ userInfo.userName }}({{ userInfo.userId }})님 안녕하세요
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.welcome-text {
  text-align: center;
  font-size: 30px;
  margin: 100px 0px 10px;
}
.info-text {
  text-align: center;
  font-size: 15px;
  margin: 10px;
}
.search {
  margin: 20px;
}
#login_after {
  display: none;
}
</style>
