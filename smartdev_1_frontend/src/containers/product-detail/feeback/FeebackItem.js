import { AiFillStar } from "react-icons/ai";
import defaultAvt from "../../../assests/img/user-default.png";
import StarRatingComponent from "react-star-rating-component";

import * as FS from "./style";

const FeedbackItem = ({ item }) => {
  return (
    <FS.FeedbackDetail>
      <div>
        <FS.ImgUserFeedback src={item.avatar_source || defaultAvt} />
      </div>
      <div>
        <div>{item.user_full_name}</div>
        <StarRatingComponent
          name="star"
          value={item.star}
          renderStarIcon={() => <AiFillStar />}
          starColor="#EE4D2D"
          editing={false}
        />
        <FS.CommentDetail>{item.comment}</FS.CommentDetail>
        <FS.DateCreateFeeadback>{item.create_at}</FS.DateCreateFeeadback>
      </div>
    </FS.FeedbackDetail>
  );
};

export default FeedbackItem;
