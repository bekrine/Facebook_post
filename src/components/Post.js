import Buttons from "./Buttons";
import Reaction from "./Reaction";
import Body from "./Body";
import Header from "./Header";
import Discription from "./Discription";
import Comment from "./Comment";
import { usepostInfoContext } from "../context/contextPostInfo";

export default function Post() {
  const { showComment } = usepostInfoContext();
  return (
    <div className="post">
      <Header />
      <Discription />
      <Body />
      <Reaction />
      <Buttons />
      {showComment && <Comment />}
    </div>
  );
}
