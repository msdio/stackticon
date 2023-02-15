import Loading from 'components/loading';
import Home from 'pages/home';
import Result from 'pages/result';
import { Route, Routes } from 'react-router-dom';

const Router = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/loading' element={<Loading />} />

    <Route path='/result' element={<Result />} />
  </Routes>
);

export default Router;