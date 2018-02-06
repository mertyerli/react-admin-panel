import React from 'react';
//import _ from "lodash";

export default class RibbonArray extends React.Component {
    constructor(props){
        super(props);
        this.items = {};
        console.log('componentDidMount');
    }
  componentDidMount(){
      console.log('componentDidMount');
  }

  render(){
      this.props.array(this.props.items);
      return 'Render OK';
  }
}
