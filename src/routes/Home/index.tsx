import "./styles.css";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <header>
        <Link to="/">
          <div className="ga-home-title-container">
            <h1 className="ga-home-title">Github API</h1>
          </div>
        </Link>
      </header>
      <Outlet />
    </>
  );
}
