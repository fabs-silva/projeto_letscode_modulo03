import { Route, Routes } from 'react-router-dom';
import { fakeProfile } from '../assets/mocks/profile';
import { LoginLayout } from '../components/LayoutComponents/LoginLayout';
import { MainAppLayout } from '../components/LayoutComponents/MainAppLayout';
import { NotFound } from '../pages/404';
import { Album } from '../pages/Album';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Playlist } from '../pages/Playlist';
import { SignUp } from '../pages/SignUp';

export function RoutesComponent() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginLayout />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="home" element={<MainAppLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="playlist" element={<MainAppLayout />}>
          <Route path=":playlistId" element={<Playlist />} />
        </Route>
        <Route path="album" element={<MainAppLayout />}>
          <Route path=":albumId" element={<Album />} />
        </Route>
        <Route path="artist" element={<MainAppLayout />}>
          <Route path=":artistId" element={<h1>Coming soon....</h1>} />
        </Route>
        <Route path="search" element={<MainAppLayout />}>
          <Route index element={<h1>Coming soon....</h1>} />
        </Route>
      </Routes>
    </>
  );
}
