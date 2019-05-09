import React, { Component } from 'react';

class Foo extends React.Component {

  // UNSAFE_componentWillMount () {}

  // UNSAFE_componentWillReceiveProps () {}

  // UNSAFE_componentWillUpdate () {}
  constructor(props) {
    super(props);
    console.log(props);
  }

  render () {
    return (
      <div __html={{ sss: 11 }}></div>
    );
  }

}


export default Foo;
