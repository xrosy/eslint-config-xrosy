/* eslint array-element-newline: [2, "always"] */


module.exports = {
    order : [
        'static-methods',
        'state',
        'constructor',
        'everything-else',
        '/^handle.+$/',
        '/^on.+$/',
        'lifecycle',
        'rendering',
        'componentWillUpdate',
        'UNSAFE_componentWillUpdate',
        'getSnapshotBeforeUpdate',
        'componentDidUpdate',
        'componentDidCatch',
        'componentWillUnmount',
    ],
    groups : {
        rendering : [
            '/^render.+$/',
            'render',
        ],

        lifecycle : [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'constructor',
            'getDefaultProps',
            'getInitialState',
            'getChildContext',
            'getDerivedStateFromProps',
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
        ],
    },
};
