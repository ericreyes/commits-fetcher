import React from "react";

export function FetchControls() {
  const handleSubmission = () => {
    console.log("asddss");
  };

  const onInputChange = (event: any): void => {
    if (event.keyCode === 13) {
      handleSubmission();
    }
  };

  return (
    <React.Fragment>
      <div className="fetch-controls-container">
        <input
          className="field-input"
          type="text"
          id="username"
          name="username"
          placeholder="GitHub user name"
          onKeyDown={onInputChange}
          test-id="username-input"
        />
        <input
          className="field-input"
          type="text"
          id="repo"
          name="repo"
          placeholder="Repository name"
          onKeyDown={onInputChange}
          test-id="repo-input"
        />
        <input
          className="submit-button"
          type="button"
          value="Submit"
          onClick={handleSubmission}
        />
      </div>
    </React.Fragment>
  );
}
