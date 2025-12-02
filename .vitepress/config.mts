import { defineConfig } from "vitepress";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import type { DefaultTheme } from "vitepress";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * 读取 `docs` 目录下的 Markdown 文件，生成 VitePress sidebar 配置。
 * - 仅读取 docs 根目录下的 .md 文件（不递归子目录）。
 * - 文件名去掉 `.md` 后作为显示文本与链接的一部分。
 */
function generateDocsSidebar(docsDir = path.resolve(__dirname, "..", "docs")) {
  let entries: DefaultTheme.SidebarItem[] = [];
  try {
    const files = fs.readdirSync(docsDir, { withFileTypes: true });
    entries = files
      .filter((f) => f.isFile() && /\.md$/i.test(f.name))
      .map((f) => {
        const name = f.name.replace(/\.md$/i, "");
        return {
          text: name,
          link: `/docs/${name}`,
        };
      })
      // 按中文/自然顺序排序，保证展示稳定
      .sort((a, b) =>
        a.text.localeCompare(b.text, "zh-Hans-CN", { numeric: true })
      );
  } catch (e) {
    // 如果目录不存在或读取失败，返回空数组，避免构建时报错
    console.error("generateDocsSidebar error:", e);
    entries = [];
  }

  return [
    {
      text: "文档",
      items: entries,
      collapsed: true,
    },
  ];
}

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

    // 使用动态生成的 sidebar
    sidebar: generateDocsSidebar(),

    socialLinks: [
      { icon: "github", link: "https://github.com/dandelion-promise520" },
    ],

    search: { provider: "local" },
  },
  markdown: {
    image: {
      lazyLoading: true,
    },
    lineNumbers: true,
  },
});
