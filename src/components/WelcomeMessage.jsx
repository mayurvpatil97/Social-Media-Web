import React from "react";

function WelcomeMessage({ onGetPostsClick }) {
  return (
    <center className="welcome-message">
      <h1>There are No Post Available......</h1>
      <button
        onClick={onGetPostsClick}
        type="button"
        className="btn btn-primary"
      >
        Get Post From Server
      </button>
    </center>
  );
}

export default WelcomeMessage;
