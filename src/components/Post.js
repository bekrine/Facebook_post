import Buttons from "./Buttons";
import Reaction from "./Reaction";
import Body from "./Body";
import Header from "./Header";
import Discription from "./Discription";


export default function Post(){
    return(
        <div>
              <Header />
      <Discription />
      <Body />
      <Reaction />
      <Buttons />
        </div>
    )
}