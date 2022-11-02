import React, { useRef } from "react";
import CommentsHolder from "./CommentsHolder";
import image from "../icons/image.jpeg";
import { usepostInfoContext } from "../context/contextPostInfo";

export default function Comment() {
  const { setComments,comments } = usepostInfoContext();
  const commentRef = useRef("");
  const getComments = (e) => {
    if (e.key === "Enter") {
      setComments((prev) => [...prev, commentRef.current.value]);
    }
  };
  const allComments=comments.map((comment,index)=><CommentsHolder comment={comment} index={index} image={image} />)
  
  return (
    <>
    <div className="comment">
      <div className="commentProfail">
        <img src={image} alt="photo_profail" width="30px" height="25px" />
      </div>
      <input
        onKeyDown={(e) => getComments(e)}
        type="text"
        ref={commentRef}
        placeholder="Write Comment"
      />
    </div>
    {
      comments.length > 0 ?
      allComments
      :<div>be the first to comment</div>
    }
    </>
  );
}
