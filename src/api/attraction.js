import { localAxios } from "@/util/http-commons";

const local = localAxios();

function sidoList(success, fail) {
  console.log("sidolist ");
  local.get(`/attraction/sido`).then(success).catch(fail);
}

function gugunList(selectedSido, success, fail) {
  console.log("gugunlist in ", selectedSido);
  local.get(`/attraction/gugun/${selectedSido}`).then(success).catch(fail);
}

function attractionList(attraction, success, fail) {
  console.log("attraction list param :", attraction);
  local.post(`/attraction/list`, JSON.stringify(attraction)).then(success).catch(fail);
}

// function listArticle(param, success, fail) {
//   console.log("board list param :", param);
//   local.post(`/board/list`, JSON.stringify(param)).then(success).catch(fail);
// }

// function detailArticle(articleno, success, fail) {
//   local.get(`/board/detail/${articleno}`).then(success).catch(fail);
// }

// function registArticle(article, success, fail) {
//   console.log("boardjs article", article);
//   local.post(`/board/write`, JSON.stringify(article)).then(success).catch(fail);
// }

// function getModifyArticle(articleno, success, fail) {
//   local.get(`/board/detail/${articleno}`).then(success).catch(fail);
// }

// function modifyArticle(article, success, fail) {
//   local.put(`/board/modify`, JSON.stringify(article)).then(success).catch(fail);
// }

// function deleteArticle(articleno, success, fail) {
//   local.delete(`/board/${articleno}`).then(success).catch(fail);
// }

export {
  sidoList,
  gugunList,
  attractionList
};
