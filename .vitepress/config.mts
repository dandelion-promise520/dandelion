import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "dandelion",
  description: "个人博客站点",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "文档", link: "/docs/linux配置swap" },
    ],

    sidebar: [
      {
        text: "文档",
        items: [
          {
            text: "内网穿透frp客户端配置",
            link: "/docs/内网穿透frp客户端配置",
          },
          { text: "通过1panel安装3x-ui", link: "/docs/通过1panel安装3x-ui" },
          { text: "通过1panel配置https", link: "/docs/通过1panel配置https" },
          { text: "Debian_apt换源", link: "/docs/Debian_apt换源" },
          { text: "linux配置swap", link: "/docs/linux配置swap" },
          {
            text: "nginx简单配置解决刷新404",
            link: "/docs/nginx简单配置解决刷新404",
          },
          {
            text: "wsl如何配置固定ip地址",
            link: "/docs/wsl如何配置固定ip地址",
          },
          { text: "wsl实现局域网访问", link: "/docs/wsl实现局域网访问" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/dandelion-promise520" },
    ],
  },
  markdown: {
    image: {
      lazyLoading: true,
    },
    lineNumbers: true,
  },
});
