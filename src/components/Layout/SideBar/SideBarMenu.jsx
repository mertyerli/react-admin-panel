import React from "react";
import { connect } from "react-redux";
//import _ from "lodash";
import SideBarMenuItems from "./SideBarMenuItems";

class SideBarMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      activeItem: null
    };
  }
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
        <SideBarMenuItems items={this.props.items} />
        {this.props.childen}
      </nav>
    );
  }
}

function mapStateToProps(state) {
  console.log("state", state);
  let ret = {
    loading: state.ui && state.ui.sideBar ? state.ui.sideBar.loading : true,
    items: state.ui && state.ui.sideBar ? state.ui.sideBar.items : []
  };
  console.log("ret", ret);
  return ret;
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ addTodo }, dispatch);
// }
export default connect(mapStateToProps, null)(SideBarMenu);
//export default SideBarMenu;
