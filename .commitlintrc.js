/* 
官网：https://github.com/conventional-changelog/commitlint#getting-started-->
https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional
    yarn add  @commitlint/config-conventional @commitlint/cli -D
*/

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['upd', 'feat', 'fix', 'refactor', 'docs', 'chore', 'style', 'revert']],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72]
  }
};

/* 

    - build                 构建项目
    - chore                 构建过程、辅助工具、依赖管理的变动
    - ci                    修改项目持续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
    - docs                  文档修改 
    - feat                  新功能 (feature)
    - fix                   修复、修改问题
    - perf                  性能, 体验优化
    - refactor              代码重构
    - revert                回滚某个更早之前的提交
    - style                 代码格式修改 (不只是 css 修改)
    - test                  测试用例修改
*/
