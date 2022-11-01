import { usepostInfoContext } from "../context/contextPostInfo";

export default function Reaction() {
  const { nrbLike } = usepostInfoContext();
  return (
    <div className="reactionHolder">
      <div className="">
        <span> {nrbLike}</span>
      </div>
      <div className="reactionInfo">
        <span className="spanreactionInfo">1.1K Comments</span>
        <span>11 Share</span>
      </div>
    </div>
  );
}
