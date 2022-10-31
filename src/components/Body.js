import image from "../../icons/image.jpeg";

export default function Body() {
  return (
    <div className="imgContainer">
      <img src={image} alt="post" width="400px" height="400px" />
    </div>
  );
}
