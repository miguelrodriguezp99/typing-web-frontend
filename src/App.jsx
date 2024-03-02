import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";

import LoginSignup from "./pages/login-signup/LoginSignup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Home />} />

        <Route path="/login" element={<LoginSignup />} />
      </Routes>
    </>
  );
}

export default App;
