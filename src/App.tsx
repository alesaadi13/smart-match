import { Route, Routes } from "react-router";
import "./App.css";
import { Home } from "./pages";

function App() {

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        {/* <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route> */}

      </Routes>
    </>
  );
}

export default App;
