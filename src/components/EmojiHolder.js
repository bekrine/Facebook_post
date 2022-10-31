export default function EmojiHolder({ setHandelTime }) {
  const emoji = {
    Like: "👍",
    Love: "❤️",
    Haha: "😂",
    Yay: "☺️",
    Wow: "😯",
    Sad: "😢",
    Angry: "😡"
  };
  return (
    <div
      onMouseLeave={() => setHandelTime(false)}
      onMouseEnter={() => setHandelTime(true)}
      className="emoji"
    >
      <span>{emoji.Like}</span>
      <span>{emoji.Love}</span>
      <span>{emoji.Haha}</span>
      <span>{emoji.Yay}</span>
      <span>{emoji.Wow}</span>
      <span>{emoji.Sad}</span>
      <span>{emoji.Angry}</span>
    </div>
  );
}
