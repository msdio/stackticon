import Loading from 'components/loading';
import Home from 'pages/home';
import Cute404 from 'pages/page404/Cute404';
import Result from 'pages/result';
import { Route, Routes } from 'react-router-dom';

const Router = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/loading' element={<Loading />} />

    <Route path='/result' element={<Result />} />
    <Route path='*' element={<Cute404 />} />
  </Routes>
);

export default Router;
