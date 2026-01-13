import { createPostsLoader, type Post } from "vitepress-theme-maple/loader";

declare const data: Post[];
export { data };

export default createPostsLoader();
