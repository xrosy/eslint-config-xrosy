
module.exports = {
  order : [
    'state',
    'instance-variables',

    'static-methods',

    'getters',
    'setters',

    'constructor',
    '^_.+$',

    'everything-else',

    '/^get.+$/',
    '/^on.+$/',
    '/^handle.+$/',

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
    rendering : [ '/^render.+$/', 'render' ],

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
}
