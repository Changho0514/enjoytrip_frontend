import { localAxios } from "@/util/http-commons";

const local = localAxios();

function listHotplace(param, success, fail) {
  console.log("Hotplace list param :", param);
  local.post(`/hotplace/list`, JSON.stringify(param)).then(success).catch(fail);
}

function detailHotplace(articleno, success, fail) {
  local.get(`/hotplace/detail/${articleno}`).then(success).catch(fail);
}

function registHotplace(article, success, fail) {
  console.log("hotplace regist article", article);
  local
    .post(`/hotplace/write`, JSON.stringify(article))
    .then(success)
    .catch(fail);
}

function modifyHotplace(article, success, fail) {
  local
    .put(`/hotplace/modify`, JSON.stringify(article))
    .then(success)
    .catch(fail);
}

function deleteHotplace(articleno, success, fail) {
  local.delete(`/hotplace/${articleno}`).then(success).catch(fail);
}

export {
  listHotplace,
  detailHotplace,
  registHotplace,
  modifyHotplace,
  deleteHotplace,
};
