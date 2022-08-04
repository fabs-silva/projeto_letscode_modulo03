import { Route, Routes } from 'react-router-dom';
import { profile } from './assets/mockups/profile';
import { LoginLayout } from './components/LayoutComponents/LoginLayout';
import { MainAppLayout } from './components/LayoutComponents/MainAppLayout';
import { NotFound } from './pages/404';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';

export function RoutesComponent() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginLayout />}>
          <Route index element={<Login profile={profile} />} />
          <Route path="login" element={<Login profile={profile} />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="home" element={<MainAppLayout />}>
          <Route index element={<h1>Hello World</h1>} />
        </Route>
      </Routes>
    </>
  );
}
