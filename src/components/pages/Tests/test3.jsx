import React, { Component } from "react";

export default class Test3 extends Component {
  render = () => {
    //  window.location.href=;
    return (
      <div
        id="content"
        style={{ 
            width: "100%", 
            height: "100%"
          }}
      >
        <iframe
          title="test"
          src="https://mail.synchron.com.ua/owa/"
          style={{
            width: "100%",
            height: "100%",
            border: "0px" 
          }}
          allowFullScreen
        >
          {" "}
        </iframe>
      </div>
    );
  };
}
