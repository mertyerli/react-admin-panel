import React, { Component } from "react";
//import { connect } from "react-redux";

import Layout from "../Layout/Layout";

//import { changeLanguage } from '../../layout/actions';

class Home extends Component {
  render() {
    return (
      <Layout>
        Homepage
        <br />
        <br />
        {/* <button onClick={() => this.props.changeLanguage('en')}>Ingilizceye Gec</button> */}
      </Layout>
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
