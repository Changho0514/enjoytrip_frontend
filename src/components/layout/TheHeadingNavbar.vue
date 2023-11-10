<script setup></script>

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
            <!-- <a class="nav-link" aria-current="page" href="#"
              ><i class="bi bi-calendar-check"></i> 나의여행계획</a
            > -->
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
      </div>
    </div>
  </nav>
  <!-- <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
    <div class="container-fluid">
      <router-link :to="{ name: 'main' }" class="navbar-brand">
        <img
          src="@/assets/ssafy_logo.png"
          class="rounded mx-auto d-block"
          alt="..."
        />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul
          class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
          style="--bs-scroll-height: 100px"
        >
          <li class="nav-item">
            <a class="nav-link" href="#">마이캠퍼스</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">강의실</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">커뮤니티</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              HELP DESK
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">공지사항</a></li>
              <li><a class="dropdown-item" href="#">FAQ</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">학사규정</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'board' }" class="nav-link"
              >게시판</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'estations' }" class="nav-link"
              >전기차충전소</router-link
            >
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="검색..."
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="button">search</button>
        </form>
      </div>
    </div>
  </nav> -->
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
