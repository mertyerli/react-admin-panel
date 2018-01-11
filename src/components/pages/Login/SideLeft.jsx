import React from "react";

class SideLeft extends React.Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-7 col-lg-8 hidden-xs hidden-sm">
        <h1 className="txt-color-red login-header-big">SmartAdmin</h1>
        <div className="hero">
          <div className="pull-left login-desc-box-l">
            <h4 className="paragraph-header">
              It's Okay to be Smart. Experience the simplicity of SmartAdmin,
              everywhere you go!
            </h4>
            <div className="login-app-icons">
              <a href="" className="btn btn-danger btn-sm">
                Frontend Template
              </a>
              &nbsp;
              <a href="" className="btn btn-danger btn-sm">
                Find out more
              </a>
            </div>
          </div>

          <img
            src="assets/img/demo/iphoneview.png"
            className="pull-right display-image"
            alt=""
            style={{ width: 210 }}
          />
        </div>

        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <h5 className="about-heading">
              About SmartAdmin - Are you up to date?
            </h5>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
            </p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <h5 className="about-heading">Not just your average template!</h5>
            <p>
              Et harum quidem rerum facilis est et expedita distinctio. Nam
              libero tempore, cum soluta nobis est eligendi voluptatem
              accusantium!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SideLeft;
