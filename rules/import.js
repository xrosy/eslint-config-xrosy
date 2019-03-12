
module.exports = {
    extends : [
        'plugin:import/recommended',
    ],
    rules : {
        'import/extensions'                 : [ 0 ],
        'import/first'                      : [ 2, 'absolute-first' ],
        'import/no-extraneous-dependencies' : [ 0 ],
        'import/no-unresolved'              : [ 0 ],
        'import/prefer-default-export'      : [ 0 ],
        'sort-imports'                      : [ 0 ],
    },
};
