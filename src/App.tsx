import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import FindUser from "./routes/Home/FindUser";
import HomeBody from "./routes/Home/HomeBody";
import NotFound from "./routes/Home/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<HomeBody/>} />
          <Route path="find-user" element={<FindUser/>} />
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
