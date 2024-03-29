import image from "../icons/image.jpeg";

export default function Header() {
  return (
    <div className="header">
      <div className="userInfo">
        <div className="imgProfailHolder">
          <img src={image} alt="img profail" width="50px" height="50px" />
        </div>
        <div className="infoProfailHolder">
          <p className="userName">name</p>
          <p className="timeAgo">1d ago</p>
        </div>
      </div>
      <div className="option">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </div>
    </div>
  );
}
