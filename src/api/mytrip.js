import { localAxios } from "@/util/http-commons";

const local = localAxios();

function getMytripMax(userId, success, fail) {
  console.log("getMytripMax's userId : ", userId);
  local.get(`/mytrip/getMytripMax/${userId}`).then(success).catch(fail);
}

function addMytripAll(param, success, fail) {
  console.log("나의 여행계획 모두 추가 : ", param);
  local
    .post(`/mytrip/addMytripAll`, JSON.stringify(param))
    .then(success)
    .catch(fail);
}

function getMytrip(userId, userMytripNo, success, fail) {
  console.log("유저가 등록한 해당 계획 가져오기");
  local
    .get(`/mytrip/getMytrip/${userId}/${userMytripNo}`)
    .then(success)
    .catch(fail);
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

export { getMytripMax, addMytripAll, getMytrip };
