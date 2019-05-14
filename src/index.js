/**
 * Off   或 0 - 关闭规则
 * warn  或 1 - 开启规则，使用警告级别的错误：warn  (不会导致程序退出)
 * error 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
 */

const noConsoleValue = (/^com\.microsoft\.vscode.+/ig).test(process.env.XPC_SERVICE_NAME.toLowerCase()) === true ? 0 : 2;

let gExtends;

gExtends = [
  './configs/standard/index.js',
  './configs/import/index.js',
  './configs/react/index.js',
];

/* --------------------------------------------------- */
module.exports = {
  settings : {},

  parser : 'babel-eslint',

  env : {
    browser      : true,
    commonjs     : true,
    es6          : true,
    node         : true,
    amd          : true,
    worker       : true,
    webextensions: true,
  },

  globals : {
    __dirname: true,
    env      : true,
    module   : true,
    require  : true,
    document : true,
    window   : true,
  },

  parserOptions : {
    allowImportExportEverywhere : false,

    codeFrame   : false,
    ecmaVersion : 2018,
    sourceType  : 'module',
    ecmaFeatures: {
      jsx    : true,
      modules: true,
    },
  },


  extends : gExtends,

  rules : {
    'no-console' : [ noConsoleValue ],
  },
}
