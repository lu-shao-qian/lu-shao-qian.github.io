# 个人静态主页模板

这是一个简洁的静态个人主页模板，包含响应式布局、导航、作品列表、技能、联系表单（Formspree 示例）以及部署说明。

快速开始
1. 将文件放到一个文件夹：`index.html`、`styles.css`、`script.js`。
2. 打开 `index.html` 在浏览器中预览（直接双击或使用本地静态服务器）。
3. 替换模板中的占位内容：
   - 页面标题、你的姓名、简介、项目描述与链接。
   - 将头像替换为你的图片（替换 index.html 中的 src）。
   - 将 `contactForm` 的 `action` 替换为 Formspree 提供的 endpoint（或替换为你自己的后端 API）。
   - 替换页脚的社交链接。

部署选项
- GitHub Pages（免费）
  1. 将仓库命名为 `username.github.io`（已为你计划仓库名： `lu-shao-qian.github.io`）。
  2. Push 到 `main` 分支，Pages 会自动生效（生效可能需要几分钟）。
- Netlify（免费层可用）
  1. 拖放项目文件夹到 Netlify 界面，或连接 Git 仓库并设置构建（此项目不需要构建命令）。
- Vercel
  1. 连接仓库并部署（同样不需要构建命令）。

表单（Formspree）
- 注册 Formspree（https://formspree.io/），创建表单，复制给你的 endpoint，替换 `index.html` 中 form 的 `action`。
- 如果不使用第三方服务，也可以把表单提交到自己的后端 API。

后续我可以为你做的事情（选一项或多项）：
- 将模板里的占位内容替换为你的真实信息（姓名、头像、项目、邮箱）、并再次推送更新。
- 帮你配置自定义域名并绑定到 GitHub Pages。
- 增加多语言支持、博客页面（基于 Markdown）、或把站点迁移到 Next.js/Astro 以获得更好的性能和 SEO。

如果你愿意，请把：你的姓名、头像（URL 或图片文件）、3 个项目的标题/描述/链接、以及联系邮箱发给我，我可以帮你把模板替换完整并推送到仓库/配置自动部署.
