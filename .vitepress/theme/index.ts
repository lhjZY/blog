import Theme, { providePosts } from "vitepress-theme-maple";
import "vitepress-theme-maple/styles";
import { data as posts } from "../posts.data";

export default {
  ...Theme,
  setup() {
    // 注入文章数据
    providePosts(posts);
    // 调用原主题的 setup
    Theme.setup?.();
  },
};
