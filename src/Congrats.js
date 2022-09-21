import React from "react";
// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="component-message">
          Congratulations ! you guessed the word
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats" />;
  }
};
