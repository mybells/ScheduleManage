module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "prettier/prettier": "none",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "space-infix-ops": 1,//要求操作符周围有空格
    'key-spacing': ["error", { "beforeColon": false }],//强制在对象字面量的属性中键和值之间使用一致的间距
    'keyword-spacing': ["error", { "before": true }],//强制关键字周围空格的一致性
    "linebreak-style": 0,//换行风格
    "space-before-function-paren": ["error", "never"], // 函数定义时括号前面要不要有空格
    "no-trailing-spaces": "error",// 一行结束后面不要有空格
    "no-undef": "error",// 不能有未定义的变量,定义之前必须有var或者let
    "curly": ["error", "all"],// 必须使用 if(){} 中的{}
    "indent": 0,//缩进风格
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
