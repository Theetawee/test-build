import{u as o}from"./useAxios-6OaYkf_k.js";import{Q as a}from"./index-NYLOCjoL.js";const p=()=>{const e=o();return{getPosts:async()=>{const s=await e.get("/posts/");if(s.status===200)return s.data},getPostDetail:async s=>{const t=await e.get(`/posts/${s}/`);if(t.status===200)return t.data},createPost:async s=>{const t=await e.post("/compose/",s);if(t.status===201)return a.success("Post created successfully"),t.data}}};export{p as u};
