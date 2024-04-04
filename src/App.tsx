import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ClientHome from "./routes/ClientHome";
import Promotion from "./routes/ClientHome/Promotion";
import SignUp from "./routes/ClientHome/SignUp";
import Subscription from "./routes/ClientHome/Subscription";
import Welcome from "./routes/ClientHome/Welcome";

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClientHome />} >
            <Route index element={<Welcome />} />
            <Route path="initial" element={<Welcome />} />
            <Route path="promotion" element={<Promotion />} />
            <Route path="signup" element={<SignUp />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
          <Route path="subscription" element={<Subscription />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}