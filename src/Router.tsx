import BlockLoading from 'components/loading/BlockLoading';
import RequireState from 'components/require-state';
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
    <Route path='/loading/:color' element={<RequireState component={<BlockLoading />} />} />
    <Route path='/result' element={<RequireState component={<Result />} />} />
    <Route path='*' element={<Cute404 />} />
  </Routes>
);

export default Router;
