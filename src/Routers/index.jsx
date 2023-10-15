import About from '../page/About';
import Detail from '../page/Detail';
import Home from '../page/Home';
import Navbar from '../page/Navbar';
import { useRoutes } from 'react-router-dom';
import OutletRouter from './OutLetRouter';

const Routers = () => {
  let Routers = useRoutes([
    {
      path: '/',
      element: (
        <OutletRouter>
          <Navbar />
        </OutletRouter>
      ),
      chilrend: [
        {
          element: <Home />,
          index: true,
        },
        {
          path: '/About',
          children: [
            {
              element: <About />,
            },
          ],
        },
        {
          path: '/Detail',
          children: [
            {
              element: <Detail />,
            },
          ],
        },
      ],
    },
  ]);
  return Routers;
};

export default Routers;
