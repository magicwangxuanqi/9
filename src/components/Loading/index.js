import React from "react";
import ProgressBar from "react-progress-bar-plus";
import "react-progress-bar-plus/lib/progress-bar.css";

class Loading extends React.Component {
  render() {
    return (
      <div>
        <ProgressBar
          percent={0}
          spinner={false}
          autoIncrement={true}
          intervalTime={10}
        />
      </div>
    );
  }
}

export default Loading;
