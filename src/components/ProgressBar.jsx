import React from "react";

function ProgressBar({ color }) {
  let classes = `progress-bar progress-bar-striped progress-bar-animated bg-${color} custom`;
  return (
    <div className="progress">
      <div
        className={classes}
        role="progressbar"
        aria-valuenow="100"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
        <style jsx>
            {`
{
.custom{
width: 75%;
}
}`}
        </style>
    </div>
  );
}

export default ProgressBar;
