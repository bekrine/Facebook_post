export default function CommentsHolder({ comment, index, image }) {
  return (
    <div key={index} className="comment">
      <div className="commentProfail">
        <img src={image} alt="photo_profail" width="30px" height="25px" />
      </div>
      <div className="commentInfo">
        <div>
          <p className="userName">name</p>
        </div>
        <div>{comment}</div>
      </div>
    </div>
  );
}
