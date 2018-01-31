import React from "react";
import { connect } from "react-redux";

import Spinner from "react-spinkit";
import { getSample } from "../_helpers/loaders";

import { init } from "../_helpers/initializatons";

import "./layout.css";

class Layout extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    init.languages(dispatch);
    init.sideBar(dispatch);
  }

  render() {
    if (this.props.loading === true) {
      return (
        <div id="preloader">
          initializing...
          <Spinner name={getSample()} />
        </div>
      );
    }
    return <div>{this.props.children}</div>;
  }
}

function mapStateToProps(state) {
  let isLoading = false;
  for (var key in state) {
    if (state.hasOwnProperty(key)) {
      //console.log("==>",key, state[key], state[key].loading===true);
      if (state[key].loading === true) {
        isLoading = true;
        break;
      }
    }
  }
  //   console.warn("state:", state, "isLoading", isLoading);
  return { loading: isLoading };
}

// function mapDispatchToProps(dispatch) {
//   return({
//       sendTheAlert: () => {dispatch(ALERT_ACTION)}
//   })
// }

export default connect(mapStateToProps, null)(Layout);
