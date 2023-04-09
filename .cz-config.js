module.exports = {
  types: [
    {
      value: "feat",
      name: "✨     feat:  添加新功能",
    },
    {
      value: "fix",
      name: "🐞      fix:  修复Bug",
    },
    {
      value: "refactor",
      name: "🛠  refactor:  重构代码",
    },
    {
      value: "perf",
      name: "🐎     perf:  改善性能",
    },
    {
      value: "docs",
      name: "📚     docs:  撰写文档",
    },
    {
      value: "test",
      name: "🏁     test:  添加测试文件",
    },
    {
      value: "chore",
      name: "🗯     chore:  没有对src或test模块改动. 一般是更新依赖或者构建产生的改变",
    },
    {
      value: "style",
      name: "💅    style:  代码格式修改，比如缩进、空格、缺失的结束符等",
    },
    {
      value: "revert",
      name: "⏪   revert:  返回到某个commit",
    },
    {
      value: "WIP",
      name: "⏳     WIP:   Work in progress",
    },
  ],
  scopes: [
    
    "src",
    "package",
    "config",
    "rootDir",
    "components",
    "assets",
    "utils",
    "service",
    "layouts",
    "public",
    "static",
  ],
  allowCustomScopes: true,
  skipQuestions: ["footer"],
  messages: {
    type: '选择一种你的提交类型:',
    scope: '选择修改范围(可选)',
    customScope: '请输入修改范围(可选):',
    subject: '短说明:',
    body: '长说明，使用"|"换行(可选)：',
    footer: '关联关闭的issue，例如：#31, #34(可选):',
    confirmCommit: '确定提交说明?'
  },
  allowBreakingChanges: ['特性', '修复'],
  subjectLimit: 100
};
