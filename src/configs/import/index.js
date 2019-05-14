
module.exports = {
  plugins : [ 'import' ],

  extends : [
    'plugin:import/errors',
    'plugin:import/warnings',
  ],

  rules : {
    'import/extensions'                : [ 0 ],
    // 'import/first'                      : [ 2, 'absolute-first' ],
    'import/first'                     : [ 1 ],
    'import/no-duplicates'             : [ 2 ],
    'import/no-extraneous-dependencies': [ 0 ],
    'import/no-unresolved'             : [ 0 ],
    'import/prefer-default-export'     : [ 0 ],
    'import/order'                     : [ 1, {
      'groups'          : [ [ 'builtin', 'internal' ], 'external', 'index', [ 'parent', 'sibling' ] ],
      'newlines-between': 'always-and-inside-groups',
    }],
  },
};
