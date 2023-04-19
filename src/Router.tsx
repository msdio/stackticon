import Loading from 'components/loading';
import RequireState from 'components/requireState';
import Cute404 from 'pages/page404/Cute404';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('pages/home'));
const BackgroundColors = lazy(() => import('pages/background-colors'));
const Result = lazy(() => import('pages/result'));

const Router = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/backgrounds' element={<RequireState component={<BackgroundColors />} />} />
    <Route path='/loading/:color' element={<RequireState component={<Loading />} />} />
    <Route path='/result' element={<RequireState component={<Result />} />} />
    <Route path='*' element={<Cute404 />} />
  </Routes>
);

export default Router;
