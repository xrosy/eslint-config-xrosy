/* eslint sort-keys: [ 1 ] */


module.exports = {
  // extends: [],

  rules : {
    /** 在数组开括号后和闭括号前强制换行 */
    'array-bracket-newline': [ 2, 'consistent' ],
    /* 禁止或强制在括号内使用空格 */
    'array-bracket-spacing': [ 2, 'always', {
      objectsInArrays : false,
    }],
    /* 强制数组方法的回调函数中有 return 语句 */
    'array-callback-return'     : [ 2 ],
    /**
     * 强制数组元素间出现换行
     *
     * 字符串选项：
     *  • always: 要求在数组元素间换行
     *  • never : 禁止在数组元素间换行
     * 对象选项：
     *    multiline: <boolean>,       # 如果数组元素间有换行，则要求换行。如果为 false，该条件不生效。
     *    minItems : <number>,        # 如果数组元素的个数大于等于给定的整数，则要求换行。如果为 0，则该条件将和选项 "always" 一样。如果为 null (默认)，该条件不生效。
     */
    'array-element-newline'     : [ 2, 'consistent' ],
    /* 需要括号箭头函数体 */
    'arrow-body-style'          : [ 2, 'as-needed', { requireReturnForObjectLiteral: true }],
    'arrow-spacing'             : [ 2, { after: true, before: true }],
    /**
     * 禁止或强制在代码块中开括号前和闭括号后有空格
     *  • always: 要求使用一个或多个空格
     *  • never : 禁用空格
     */
    'block-spacing'             : [ 2, 'always' ],
    /* 大括号风格要求 */
    'brace-style'               : [ 2, 'stroustrup' ],
    'callback-return'           : [ 0 ],
    'capitalized-comments'      : [ 0 ],
    'class-methods-use-this'    : [ 0 ],
    'comma-dangle'              : [ 2, { arrays: 'only-multiline', exports: 'never', functions: 'ignore', imports: 'never', objects: 'always-multiline' }],
    'comma-spacing'             : [ 2, { after: true, before: false }],
    'comma-style'               : [ 2, 'last', { exceptions: { ArrayExpression: true, ObjectExpression: true } }],
    'complexity'                : [ 0 ],
    'consistent-return'         : [ 0 ],
    'curly'                     : [ 2, 'multi-line', 'consistent' ],
    'default-case'              : [ 0 ],
    'dot-location'              : [ 2, 'property' ],
    'eol-last'                  : [ 2, 'always' ],
    'func-style'                : [ 0 ],
    'function-paren-newline'    : [ 1, 'consistent' ],
    'id-length'                 : [ 2, { exceptions: [ 'e', 'i', 'k', 'x', 'X', 'z', 'Z' ], min: 1 }],
    'indent'                    : [ 2, 2, { SwitchCase: 1 }],
    'init-declarations'         : [ 0, 'always', { ignoreForLoopInit: true }],
    'jsx-quotes'                : [ 2, 'prefer-double' ],
    'key-spacing'               : [ 2, { align: { afterColon: true, beforeColon: false, on: 'colon' }, multiLine: { afterColon: true, beforeColon: true }, singleLine: { afterColon: true, beforeColon: false } }],
    'keyword-spacing'           : [ 2, { after: true, before: true }],
    'lines-around-comment'      : [ 0, { allowBlockStart: true, allowClassStart: true, allowObjectStart: true, beforeBlockComment: false }],
    'max-len'                   : [ 2, { code: 800, ignoreComments: true, ignoreRegExpLiterals: true, ignoreStrings: true, ignoreTemplateLiterals: true, ignoreTrailingComments: true, ignoreUrls: true }],
    'max-lines'                 : [ 0 ],
    'max-lines-per-function'    : [ 0 ],
    'max-nested-callbacks'      : [ 2, { max: 2 }],
    'max-params'                : [ 2, 10 ],
    'max-statements'            : [ 0 ],
    'max-statements-per-line'   : [ 2, { max: 1 }],
    'multiline-comment-style'   : [ 0 ],
    'multiline-ternary'         : [ 0 ],
    'new-parens'                : [ 2 ],
    'newline-before-return'     : [ 2 ],
    'newline-per-chained-call'  : [ 2, { ignoreChainWithDepth: 10 }],
    'no-bitwise'                : [ 1, { allow: [ '~' ], int32Hint: true }],
    'no-confusing-arrow'        : [ 2, { allowParens: true }],
    'no-console'                : [ 1 ],
    'no-constant-condition'     : [ 2 ],
    'no-delete-var'             : [ 2 ],
    'no-dupe-args'              : [ 2 ],
    'no-empty'                  : [ 2 ],
    'no-empty-function'         : [ 2, { allow: [ 'arrowFunctions', 'constructors', 'functions', 'getters', 'methods', 'setters' ] }],
    'no-ex-assign'              : [ 2 ],
    'no-extra-parens'           : [ 2, 'all', { enforceForArrowConditionals: false, ignoreJSX: 'all', nestedBinaryExpressions: false, returnAssign: false }],
    'no-extra-semi'             : [ 2 ],
    'no-implicit-coercion'      : [ 2, { allow: [ '+', '!!', '~' ] }],
    'no-invalid-this'           : [ 0 ],
    'no-magic-numbers'          : [ 0 ],
    'no-multi-spaces'           : [ 2, { exceptions: { ImportDeclaration: false, VariableDeclarator: false } }],
    'no-multiple-empty-lines'   : [ 1, { max: 2, maxBOF: 2, maxEOF: 0 }],
    'no-negated-condition'      : [ 1 ],
    'no-new'                    : [ 0 ],
    'no-plusplus'               : [ 2, { allowForLoopAfterthoughts: true }],
    'no-process-env'            : [ 0 ],
    'no-process-exit'           : [ 0 ],
    'no-prototype-builtins'     : [ 0 ],
    'no-regex-spaces'           : [ 2 ],
    'no-shadow'                 : [ 2 ],
    'no-shadow-restricted-names': [ 2 ],
    'no-sparse-arrays'          : [ 2 ],
    'no-sync'                   : [ 0 ],
    'no-ternary'                : [ 0 ],
    'no-undef'                  : [ 2 ],
    'no-undef-init'             : [ 2 ],
    'no-underscore-dangle'      : [ 0, { allowAfterSuper: true, allowAfterThis: true, enforceInMethodNames: false }],
    'no-unreachable'            : [ 0 ],
    'no-unsafe-negation'        : [ 2 ],
    'no-unused-expressions'     : [ 0 ],
    'no-unused-vars'            : [ 1, { args: 'after-used', vars: 'local', varsIgnorePattern: '(React|window)' }],
    'no-use-before-define'      : [ 2 ],
    'no-useless-catch'          : [ 0 ],
    'no-void'                   : [ 1 ],
    'no-warning-comments'       : [ 1 ],
    /* , ExportDeclaration: { multiline: true, minProperties: 3 }, ImportDeclaration: { multiline: true }, ObjectPattern: { multiline: true } */
    'object-curly-newline'      : [ 2, { consistent: true, multiline: true }],
    /**
     * 强制在花括号中使用一致的空格
     *
     * 字符串选项：
     *  • never   不允许花括号中有空格
     *  • always  要求花括号内有空格 (除了 {})
     * 对象选项：
     *  • arraysInObjects : true      要求以数组元素开始或结尾的对象的花括号中有空格 (当第一个选项为 never 时生效)
     *  • arraysInObjects : false     禁止以数组元素开始或结尾的对象的花括号中有空格 (当第一个选项为 always 时生效)
     *  • objectsInObjects: true      要求以对象元素开始或结尾的对象的花括号中有空格 (当第一个选项为 never 时生效)
     *  • objectsInObjects: false     禁止以对象元素开始或结尾的对象的花括号中有空格 (当第一个选项为 always 时生效)
     */
    'object-curly-spacing'      : [ 2, 'always', { arraysInObjects: true, objectsInObjects: true }],
    /**
     * 强制将对象的属性放在不同的行上
     *
     * 对象选项：
     *  • allowAllPropertiesOnSameLine: true 所有属性都在同一行上，将被允许
     */
    'object-property-newline'   : [ 2, { allowAllPropertiesOnSameLine: true }],
    'object-shorthand'          : [ 2, 'always', { avoidExplicitReturnArrows: true }],
    /**
     * 强制函数中的变量在一起声明或分开声明
     *
     * 对象选项：
     *  • always              (默认) 要求每个作用域有一个变量声明
     *  • never               要求每个作用域有多个变量声明
     *  • consecutive         每个作用域允许出现多个变量声明，但对连续的变量声明要求合并为单个声明
     * 对象选项：
     *  • var: "always"                     要求每个函数有一个 var 声明
     *  • var: "never"                      要求每个函数有多个 var 声明
     *  • var: "consecutive"                要求连续的 var 声明合并为一个
     *  • let: "always"                     要求每个块有一个 let 声明
     *  • let: "never"                      要求每个块有多个 let 声明
     *  • let: "consecutive"                要求连续的 let 声明合并为一个
     *  • const: "always"                   要求每个块有一个 const 声明
     *  • const: "never"                    要求每个块有多个 const 声明
     *  • const: "consecutive"              要求连续的 const 声明合并为一个
     *  • separateRequires: true            强制 requires 分开声明
     * 对象选项：
     *  •  initialized: "always"            要求每个作用域的初始化的变量有一个变量声明
     *  •  initialized: "never"             要求每个作用域的初始化的变量有多个变量声明
     *  •  initialized: "consecutive"       对已经初始化的变量，要求其连续的变量声明合并为一个声明
     *  •  uninitialized: "always"          要求每个作用域的未初始化的变量有一个变量声明
     *  •  uninitialized: "never"           要求每个作用域的未初始化的变量有多个变量声明
     *  •  uninitialized: "consecutive"     对未初始化的变量，要求其连续的变量声明合并为一个声明
     */
    'one-var'                   : [ 2, 'never' ],
    'padded-blocks'             : [ 2, { blocks: 'never', classes: 'always', switches: 'never' }],
    'prefer-named-capture-group': [ 0 ],
    'prefer-object-spread'      : [ 1 ],
    'quote-props'               : [ 2, 'consistent-as-needed' ],
    'quotes'                    : [ 2, 'single' ],
    'require-unicode-regexp'    : [ 0 ],
    'semi'                      : [ 2, 'always' ],
    'semi-spacing'              : [ 2, { after: false, before: false }],
    'semi-style'                : [ 2, 'last' ],
    'sort-imports'              : [ 0 ],
    // 'sort-imports'            : [ 2, { ignoreCase: true, ignoreMemberSort: false, memberSyntaxSortOrder: [ 'none', 'all', 'single', 'multiple' ]}],
    'sort-keys'                 : [ 0 ],
    'sort-vars'                 : [ 2, { ignoreCase: true }],
    'space-before-blocks'       : [ 2, { classes: 'always', functions: 'always', keywords: 'never' }],
    'space-infix-ops'           : [ 2 ],
    'spaced-comment'            : [ 2, 'always' ],
    'valid-jsdoc'               : [ 0 ],
    'valid-typeof'              : [ 2 ],
    'wrap-regex'                : [ 2 ],
  },
};
