import React from "react";

const VoiceCommand = () => {
  return (
    <div
      id="speech-btn"
      className="btn-header transparent pull-right hidden-sm hidden-xs"
    >
      <div>
        <a href-void title="Voice Command" data-action="voiceCommand">
          <i className="fa fa-microphone" />
        </a>
        <div className="popover bottom">
          <div className="arrow" />
          <div className="popover-content">
            <h4 className="vc-title">
              Voice command activated <br />
              <small>Please speak clearly into the mic</small>
            </h4>
            <h4 className="vc-title-error text-center">
              <i className="fa fa-microphone-slash" /> Voice command failed
              <br />
              <small className="txt-color-red">
                Must <strong>"Allow"</strong> Microphone
              </small>
              <br />
              <small className="txt-color-red">
                Must have <strong>Internet Connection</strong>
              </small>
            </h4>
            <a href-void className="btn btn-success" onClick="commands.help()">
              See Commands
            </a>
            <a
              href-void
              className="btn bg-color-purple txt-color-white"
              onClick="$('#speech-btn .popover').fadeOut(50);"
            >
              Close Popup
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceCommand;
