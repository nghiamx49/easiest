import React from "react";

import FeedbackItem from "./FeebackItem";
import * as FS from "./style";

const Feeback = ({ rating }) => {
  return (
    <div>
      {rating.map((item, index) => {
        return (
          <FS.FeedbackBorder key={index}>
            <FeedbackItem item={item} />
          </FS.FeedbackBorder>
        );
      })}
    </div>
  );
};

export default Feeback;
