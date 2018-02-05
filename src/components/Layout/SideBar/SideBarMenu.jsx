import React from "react";
import { connect } from "react-redux";
//import _ from "lodash";
import SideBarMenuItems from "./SideBarMenuItems";
import {loginActions} from '../../../_actions/login.actions';

class SideBarMenu extends React.Component {

  selectedItem = item => {
    console.log(item);
    this.props.dispatch(loginActions.pathChange(item))
    
  };

  render() {
    if (this.props.loading) {
      return (
        <nav>
          loading...
          {this.props.childen}
        </nav>
      );
    }
    return (
      <nav>
        {/* 
              NOTE: Notice the gaps after each icon usage <i></i>..
              Please note that these links work a bit different than
              traditional href="" links. See documentation for details.
              */}
        <SideBarMenuItems items={this.props.items} selectedItem={this.selectedItem}/>
        {this.props.childen}
      </nav>
    );
  }
}

function mapStateToProps(state) {
  let ret = {
    loading: state.ui && state.ui.sideBar ? state.ui.sideBar.loading : true,
    items: state.ui && state.ui.sideBar ? state.ui.sideBar.items : []
  };
  return ret;
}


export default connect(mapStateToProps, null)(SideBarMenu);
