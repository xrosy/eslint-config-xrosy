const REACT$SORT_COMP_OPTS = require('./options/sort-comp.js');


// 'plugin:react/recommended',

module.exports = {
  extends : [ 'plugin:react/all' ],

  settings : {
    react : {
      createClass : 'createReactClass',
      pragma      : 'React',
      version     : 'detect',
      flowVersion : '0.53',
    },
  },

  rules : {
    'jsx-a11y/click-events-have-key-events' : [ 0 ],

    'jsx-a11y/interactive-supports-focus' : [ 0 ],

    'jsx-a11y/alt-text' : [ 0 ],

    'jsx-a11y/label-has-for' : [ 2, {
      allowChildren : false,
      components    : [ 'Label' ],
      required      : {
        every : [ 'nesting', 'id' ],
      },

    }],

    'react/boolean-prop-naming' : [ 0 ],

    'react/default-props-match-prop-types' : [ 0 ],

    'react/display-name' : [ 0 ],

    'react/forbid-component-props' : [ 0 ],

    'react/forbid-elements' : [ 0 ],

    'react/forbid-foreign-prop-types' : [ 0 ],

    'react/forbid-prop-types' : [ 0 ],

    'react/jsx-boolean-value' : [ 0 ],

    'react/jsx-closing-bracket-location' : [ 2, {
      nonEmpty    : false,
      selfClosing : 'line-aligned',
    }],

    'react/jsx-closing-tag-location' : [ 0 ],

    'react/jsx-curly-spacing' : [ 2, {
      attributes : { allowMultiline: true },
      children   : true,
      spacing    : { objectLiterals: 'never' },
      when       : 'never',
    }],

    'react/jsx-equals-spacing' : [ 2, 'never' ],

    'react/jsx-filename-extension' : [ 0 ],

    'react/jsx-first-prop-new-line' : [ 0 ],

    'react/jsx-handler-names' : [ 0 ],

    'react/jsx-indent' : [ 2, 2 ],

    'react/jsx-indent-props' : [ 2, 2 ],

    'react/jsx-key' : [ 2 ],

    'react/jsx-max-depth' : [ 0 ],

    'react/jsx-max-props-per-line' : [ 0 ],

    'react/jsx-no-bind' : [ 0 ],

    'react/jsx-no-comment-textnodes' : [ 2 ],

    'react/jsx-no-duplicate-props' : [ 2 ],

    'react/jsx-no-literals' : [ 0 ],

    'react/jsx-no-target-blank' : [ 0 ],

    'react/jsx-no-undef' : [ 2 ],

    'react/jsx-one-expression-per-line' : [ 0 ],

    'react/jsx-pascal-case' : [ 2 ],

    'react/jsx-sort-props' : [ 0 ],

    'react/jsx-tag-spacing' : [ 2, {
      afterOpening      : 'never',
      beforeSelfClosing : 'always',
      closingSlash      : 'never',
    }],

    'react/jsx-uses-react' : [ 2 ],

    'react/jsx-uses-vars' : [ 2 ],

    'react/jsx-wrap-multilines' : [ 0 ],

    'react/no-array-index-key' : [ 0 ],

    'react/no-children-prop' : [ 2 ],

    'react/no-danger' : [ 1 ],

    'react/no-danger-with-children' : [ 2 ],

    'react/no-deprecated' : [ 2 ],

    'react/no-did-mount-set-state' : [ 0 ],

    'react/no-did-update-set-state' : [ 2 ],

    'react/no-direct-mutation-state' : [ 2 ],

    'react/no-find-dom-node' : [ 2 ],

    'react/no-is-mounted' : [ 2 ],

    'react/no-multi-comp' : [ 0 ],

    'react/no-redundant-should-component-update' : [ 2 ],

    'react/no-render-return-value' : [ 2 ],

    'react/no-set-state' : [ 0 ],

    'react/no-string-refs' : [ 0 ],

    'react/no-typos' : [ 2 ],

    'react/no-unescaped-entities' : [ 2 ],

    'react/no-unknown-property' : [ 2 ],

    'react/no-unused-prop-types' : [ 0 ],

    'react/no-unused-state' : [ 0 ],

    'react/no-unsafe' : [ 2 ],

    'react/no-will-update-set-state' : [ 2 ],

    'react/prefer-es6-class' : [ 2, 'always' ],

    'react/prefer-stateless-function' : [ 0 ],

    'react/prop-types' : [ 0 ],

    'react/react-in-jsx-scope' : [ 0 ],

    'react/require-default-props' : [ 0 ],

    'react/require-optimization' : [ 0 ],

    'react/require-render-return' : [ 2 ],

    'react/self-closing-comp' : [ 0 ],

    'react/sort-prop-types' : [ 0 ],

    'react/style-prop-object' : [ 2 ],

    'react/void-dom-elements-no-children' : [ 2 ],
  },
};