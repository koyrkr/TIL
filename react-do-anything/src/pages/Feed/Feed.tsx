import { Link } from "react-router-dom";

function Feed() {
  return (
    <>
      <div>Welcome to the homepage!</div>
      <nav>
        <Link to="/about">ABOUT</Link>
      </nav>
    </>
  );
}

export default Feed;
