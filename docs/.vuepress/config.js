import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  base: "/typescript-tutorial/",
  lang: "zh-CN",
  title: "Typescript 教程",
  description: "阮一峰《Typescript 教程》",
  theme: defaultTheme({
    logo: "https://vuejs.press/images/hero.png",
    navbar: [
      { link: "/", text: "首页" },
      { link: "/guide/intro", text: "全文阅读" },
      { link: "https://mmmying.github.io/how-browsers-work/", text: "浏览器工作原理" },
      { link: "https://mmmying.github.io/", text: "我的博客" }
    ],
    sidebar: [
      { text: "1. 简介", link: "/guide/intro" },
      { text: "2. 基本用法", link: "/guide/basic" },
      { text: "3. any 类型", link: "/guide/any" },
      { text: "4. 类型系统", link: "/guide/types" },
      { text: "5. 数组", link: "/guide/array" },
      { text: "6. 元组", link: "/guide/tuple" },
      { text: "7. symbol 类型", link: "/guide/symbol" },
      { text: "8. 函数", link: "/guide/function" },
      { text: "9. 对象", link: "/guide/object" },
      { text: "10. interface", link: "/guide/interface" },
      { text: "11. 类", link: "/guide/class" },
      { text: "12. 泛型", link: "/guide/generics" },
      { text: "13. Enum 类型", link: "/guide/enum" },
      { text: "14. 类型断言", link: "/guide/assert" },
      { text: "15. 模块", link: "/guide/module" },
      { text: "16. namespace", link: "/guide/namespace" },
      { text: "17. 装饰器", link: "/guide/decorator" },
      { text: "18. 装饰器（旧语法）", link: "/guide/decorator-legacy" },
      { text: "19. declare 关键字", link: "/guide/declare" },
      { text: "20. d.ts 类型声明文件", link: "/guide/d.ts" },
      { text: "21. 类型运算符", link: "/guide/operator" },
      { text: "22. 类型映射", link: "/guide/mapping" },
      { text: "23. 类型工具", link: "/guide/utility" },
      { text: "24. 注释指令", link: "/guide/comment" },
      { text: "25. tsconfig.json 文件", link: "/guide/tsconfig.json" },
      { text: "26. tsc 命令", link: "/guide/tsc" }
    ]
  }),

  bundler: viteBundler()
});
