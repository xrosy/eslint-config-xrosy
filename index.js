/**
 * Off   或 0 - 关闭规则
 * warn  或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
 * error 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
 */

module.exports = {
    env : {
        browser  : true,
        commonjs : true,
        es6      : true,
        node     : true,
    },

    extends : [
        './rules/custom.js',
        './rules/react.js',
        './rules/import.js',
    ],

    globals : {
        __dirname : true,
        document  : true,
        env       : true,
        module    : true,
        require   : true,
        window    : true,
    },

    parser : 'babel-eslint',

    parserOptions : {
        allowImportExportEverywhere : false,

        codeFrame : false,

        ecmaFeatures : {
            jsx     : true,
            modules : true,
        },

        ecmaVersion : 2017,
        sourceType  : 'module',
    },

    plugins : [ 'jsx-a11y', 'import', 'react' ],

    root : true,
};
