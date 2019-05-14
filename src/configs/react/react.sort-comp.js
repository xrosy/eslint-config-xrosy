
module.exports = {
  rules : {
    'react/sort-comp' : [ 1, {
      order : [
        'static-methods',
        'state',
        'constructor',
        'everything-else',
        '/^get.+$/',
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
    }],
  },
}
