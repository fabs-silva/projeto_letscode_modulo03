import { Route, Routes } from "react-router-dom";
import { profile } from "./assets/mockups/profile";
import { LoginLayout } from "./components/LayoutComponents/LoginLayout";
import { MainAppLayout } from "./components/LayoutComponents/MainAppLayout";
import { NotFound } from "./pages/404";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";

export function RoutesComponent() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginLayout />}>
          <Route index element={<Login user={profile} />} />
          <Route path="login" element={<Login user={profile} />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="home" element={<MainAppLayout user={profile} />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}
