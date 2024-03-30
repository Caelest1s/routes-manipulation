import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ClientHome from "./routes/ClientHome";
import PageInitial from "./routes/ClientHome/PageInitial";
import PagePromotion from "./routes/ClientHome/PagePromotion";
import PageSignUp from "./routes/ClientHome/PageSignUp";

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClientHome />} >
            <Route index element={<PageInitial />} />
            <Route path="initial" element={<PageInitial />} />
            <Route path="promotion" element={<PagePromotion />} />
            <Route path="signup" element={<PageSignUp />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}