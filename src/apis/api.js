import { instance, instanceWithToken } from "./axios";

export const signIn = async (data) => {
  const response = await instanceWithToken.post("/account/signin/", data);
  if (response.status === 200) {
    window.location.href = "/";
  } else {
    console.log("Error");
  }
};

export const signUp = async (data) => {
  const response = await instanceWithToken.post("/account/signup/", data);
  if (response.status === 200 || response.status === 201) {
    window.location.href = "/";
  } else {
    console.log("Error");
  }
  return response;
};

export const signOut = async () => {
  const response = await instanceWithToken.post("/account/signout/");
  if (response.status === 204) {
    window.location.href = "/";
  } else {
    console.log("Error");
  }
};

export const getPosts = async () => {
  const response = await instance.get("/post/");
  return response.data;
};

export const getPost = async (id) => {
  const response = await instance.get(`/post/${id}/`);
  return response.data;
};

export const createPost = async (data, navigate) => {
  const response = await instanceWithToken.post("/post/", data);
  if (response.status === 201) {
    console.log("POST SUCCESS");
    navigate("/");
  } else {
    console.log("[ERROR] error while creating post");
  }
};

export const updatePost = async (id, data, navigate) => {
  const response = await instanceWithToken.put(`/post/${id}/`, data);
  if (response.status === 200) {
    console.log("POST UPDATE SUCCESS");
    navigate(-1);
  } else {
    console.log("[ERROR] error while updating post");
  }
};

// 과제!!
export const deletePost = async (id, navigate) => {
  const response = await instanceWithToken.delete(`/post/${id}/`);
  if (response.status === 204) {
    console.log("DELETE SUCCESS");
    navigate(-1);
  } else {
    console.log("[ERROR] error while deleting post");
  }
};

// 과제!!
export const likePost = async (postId) => {
  try {
    const response = await instanceWithToken.post(`/post/${postId}/like/`);
    if (response.status === 200) {
      console.log("LIKE SUCCESS");
      window.location.reload();
    } else {
      console.log("[ERROR] error while liking post");
    }
  } catch (error) {
    console.log(error);
  }
};

export const getTags = async () => {
  const response = await instance.get("/tag/");
  return response.data;
};

export const createTag = async (data) => {
  const response = await instanceWithToken.post("/tag/", data);
  if (response.status === 201) {
    console.log("TAG SUCCESS");
  } else {
    console.log("[ERROR] error while creating tag");
  }
  return response; // response 받아서 그 다음 처리
};
export const getComments = async (postId) => {
  const response = await instance.get(`/comment/?post=${postId}`);
  return response.data;
};

export const createComment = async (data) => {
  const response = await instanceWithToken.post("/comment/", data);
  if (response.status === 201) {
    console.log("COMMENT SUCCESS");
    window.location.reload(); // 새로운 코멘트 생성시 새로고침으로 반영
  } else {
    console.log("[ERROR] error while creating comment");
  }
};

export const updateComment = async (id, data) => {
  const response = await instanceWithToken.put(`/comment/${id}/`, data); // 혹시 patch로 구현했다면 .patch
  if (response.status === 200) {
    console.log("COMMENT UPDATE SUCCESS");
    window.location.reload();
  } else {
    console.log("[ERROR] error while updating comment");
  }
};
export const deleteComment = async (id) => {
  const response = await instanceWithToken.delete(`/comment/${id}/`);
  if (response.status === 204) {
    console.log("DELETE SUCCESS");
    window.location.reload(); // 코멘트 삭제시 새로고침으로 반영
  } else {
    console.log("[ERROR] error while deleting comment");
  }
};
export const getUser = async () => {
  try {
    const response = await instanceWithToken.get("/account/info/");
    if (response.status === 200) {
      console.log("GET USER SUCCESS");
    } else {
      console.log("[ERROR] error while updating comment");
    }
    return response.data;
  } catch {
    return null;
  }
};

export const checkLogin = async () => {
  try {
    const response = await instanceWithToken.get("/account/info/");
    return response.status === 200;
  } catch (error) {
    return false;
  }
};
