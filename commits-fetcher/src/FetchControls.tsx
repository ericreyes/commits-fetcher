import React, { useState } from "react";
import { fetchCommitHistory } from "./actions-service";

const USER_NAME = "username";
const REPOSITORY_NAME = "repositoryName";

export function FetchControls() {
  const [usernameQuery, setUsernameQuery] = useState("");
  const [repositoryNameQuery, setRepositoryNameQuery] = useState("");

  interface InputConfig {
    [USER_NAME]: any;
    [REPOSITORY_NAME]: any;
  }

  const INPUT_CONFIG: InputConfig = {
    [USER_NAME]: {
      setter: setUsernameQuery,
    },
    [REPOSITORY_NAME]: {
      setter: setRepositoryNameQuery,
    },
  };

  const handleSubmission = async () => {
    const response: any = await fetchCommitHistory(
      usernameQuery,
      repositoryNameQuery
    );
    console.log(response);
  };

  const onInputChange = (event: any): void => {
    // Interesting, we need `property as keyof Interface`
    INPUT_CONFIG[event.target.id as keyof InputConfig].setter(
      event.target.value as keyof InputConfig
    );
  };

  const onEnter = (event: any): void => {
    if (event.keyCode === 13) {
      console.log(event);
      handleSubmission();
    }
  };

  return (
    <React.Fragment>
      <div className="fetch-controls-container">
        <input
          className="field-input"
          type="text"
          id={USER_NAME}
          name={USER_NAME}
          placeholder="GitHub user name"
          onKeyDown={onEnter}
          onChange={onInputChange}
          value={usernameQuery}
          test-id={`${REPOSITORY_NAME}-input`}
        />
        <input
          className="field-input"
          type="text"
          id={REPOSITORY_NAME}
          name={REPOSITORY_NAME}
          placeholder="Repository name"
          onKeyDown={onEnter}
          onChange={onInputChange}
          value={repositoryNameQuery}
          test-id={`${REPOSITORY_NAME}-input`}
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
