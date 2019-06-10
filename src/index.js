/**
 * Off   或 0 - 关闭规则
 * warn  或 1 - 开启规则，使用警告级别的错误：warn  (不会导致程序退出)
 * error 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
 */

// const noConsoleValue = process.env.TERM_PROGRAM.toLowerCase() === 'vscode' ? 0 : 2;
const noConsoleValue = 1;

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

  plugins : [ 'babel' ],

  rules : {
    'babel/new-cap'              : [ 1 ],
    'babel/camelcase'            : [ 1 ],
    'babel/no-invalid-this'      : [ 1 ],
    'babel/object-curly-spacing' : [ 0 ],
    'babel/quotes'               : [ 0 ],
    'babel/semi'                 : [ 1 ],
    'babel/no-unused-expressions': [ 1 ],
    'babel/valid-typeof'         : [ 1 ],

    'no-console' : [ noConsoleValue, { allow: [ 'warn', 'error' ]}],
  },
};
