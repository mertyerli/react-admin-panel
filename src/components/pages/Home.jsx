import React, { Component } from "react";
//import { connect } from "react-redux";

import PageLayout from "../Layout/PageLayout";

//import { changeLanguage } from '../../layout/actions';

class Home extends Component {
  render() {
    return (
      <PageLayout>
        Homepage
        <br />
        <br />
        {/* <button onClick={() => this.props.changeLanguage('en')}>Ingilizceye Gec</button> */}
      </PageLayout>
    );
  }
}

export default Home;
// export default connect(
//   state => state,
//   {
//     changeLanguage,
//   }
// )(Home);
