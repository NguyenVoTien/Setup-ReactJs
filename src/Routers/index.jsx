import About from '../page/About';
import Detail from '../page/Detail';
import Home from '../page/Home';
import Navbar from '../page/Navbar';
import { useRoutes } from 'react-router-dom';
import OutletRouter from './OutLetRouter';
import UseRef from '../component/useRef';
import Notfound from '../page/Notfound';

const Routers = () => {
  let elements = useRoutes([
    {
      path: '/',
      element: (
        <OutletRouter>
          <Navbar />
        </OutletRouter>
      ),
      chilrend: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'About',
          element: <About />,
        },
        {
          path: 'Detail',
          element: <Detail />,
        },
        {
          path: '/UseRef',
          element: <UseRef />,
        },
        {
          path: '/*',
          element: <Notfound />,
        },
      ],
    },
  ]);
  return elements;
};

export default Routers;
