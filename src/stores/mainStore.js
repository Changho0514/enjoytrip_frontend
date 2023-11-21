import { defineStore } from "pinia";
import http from "@/api/http";

export const useMainStore = defineStore({
  id: "mainStore",
  state: () => ({
    monthInfo: null,
    themaInfo: null,
    popularInfo: [],
    popularDetailInfo: [],
  }),
  getters: {},
  actions: {
    async getMonthInfo() {
      try {
        const { data } = await http.get("http://localhost/spot/detail/25372");
        this.SET_MAINMONTH_INFO(data);
      } catch (error) {
        console.error(error);
      }
    },
    async getThemaInfo(theme) {
      try {
        const { data } = await http.get(`http://localhost/spot/top/${theme}`);
        this.SET_MAINTHEME_INFO(data);
      } catch (error) {
        console.error(error);
      }
    },
    async getPopularInfo() {
      try {
        const { data } = await http.get("http://localhost/board/top");
        this.SET_POPULAR_INFO(data);
      } catch (error) {
        console.error(error);
      }
    },
    async getPopularDetailInfo(id) {
      try {
        const { data } = await http.get(`http://localhost/board/top/${id}`);
        this.SET_POPULAR_DETAIL_INFO(data);
      } catch (error) {
        console.error(error);
      }
    },
  },
  mutations: {
    CLEAR_MAINTHEME_INFO(state) {
      state.themaInfo = null;
    },
    CLEAR_POPULAR_DETAIL_INFO(state) {
      state.popularDetailInfo = [];
    },
    SET_MAINMONTH_INFO(state, monthInfo) {
      state.monthInfo = monthInfo;
    },
    SET_MAINTHEME_INFO(state, themaInfo) {
      state.themaInfo = themaInfo;
    },
    SET_POPULAR_INFO(state, popularInfo) {
      state.popularInfo = popularInfo;
    },
    SET_POPULAR_DETAIL_INFO(state, popularDetailInfo) {
      state.popularDetailInfo = popularDetailInfo;
    },
  },
});
