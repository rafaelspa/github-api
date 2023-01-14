import "./styles.css";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <>
      <header>
        <div className="ga-home-title-container">
          <h1 className="ga-home-title">Github API</h1>
        </div>
      </header>
      <Outlet />
    </>
  );
}
