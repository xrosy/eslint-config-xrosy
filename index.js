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
    parser  : 'babel-eslint',
    extends : [ 'eslint:all', './rules/custom.js', './rules/import.js', './rules/react.js' ],
    plugins : [ 'jsx-a11y', 'import', 'react' ],
    globals : {
        __dirname : true,
        document  : true,
        env       : true,
        module    : true,
        require   : true,
        window    : true,
    },
    parserOptions : {
        allowImportExportEverywhere : false,

        codeFrame    : false,
        ecmaVersion  : 2017,
        sourceType   : 'module',
        ecmaFeatures : {
            jsx     : true,
            modules : true,
        },
    },
};
