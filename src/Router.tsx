import Loading from 'components/loading';
import RequireState from 'components/requireState';
import BackgroundColors from 'pages/background-colors';
import Home from 'pages/home';
import Cute404 from 'pages/page404/Cute404';
import Result from 'pages/result';
import { Route, Routes } from 'react-router-dom';

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
