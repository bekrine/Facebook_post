export default function Button({ name, icon }) {
  return (
    <div className="button">
      <div className="image">
        <img src={icon} alt="icon" />
      </div>
      <div>
        <h1>{name}</h1>
      </div>
    </div>
  );
}
