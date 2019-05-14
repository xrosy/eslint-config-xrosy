import React, { Component } from 'react';

class Tester extends Component {

}


class Foo extends React.Component {

  // UNSAFE_componentWillMount () {}

  // UNSAFE_componentWillReceiveProps () {}

  // UNSAFE_componentWillUpdate () {}

  state = {
    VISIABLE : false,
  };

  constructor(props) {
    super(props);
  }

  asdf() {}

  onSubComponentClick = (e) => {
    this.handlerButtonCLick(e);
  }

  handlerButtonCLick() {}

  renderAliasComponents() { }

  render() {
    return (
      <div __html={{ sss: 11 }}></div>
    );
  }

}


export default Foo;
