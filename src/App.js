import "./styles.css";
import Post from "./components/Post";
import { PostInfoProvider } from "./context/contextPostInfo";

export default function App() {
  return (
    <PostInfoProvider>
      <Post />
    </PostInfoProvider>
  );
}
