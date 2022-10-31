import "./styles.css";
import Buttons from "./components/Buttons";
import Reaction from "./components/Reaction";
import Body from "./components/Body";
import Header from "./components/Header";
import Discription from "./components/Discription";

export default function App() {
  return (
    <>
      <Header />
      <Discription />
      <Body />
      <Reaction />
      <Buttons />
    </>
  );
}
