import { Fragment } from 'react';
import './App.css';
// import { Bai1UseEffect } from '@/imports/Import.jsx';
// import { Bai2UseEffect } from './imports/Import.jsx';
// import { Bai3UseEffect } from './imports/Import';
// import Navbar from './page/Navbar';

// import Home from './page/Home';
// import Detail from './page/Detail';
import { AuthProvider } from './contexts';
import Routers from './Routers';

// const LazyAbout = React.lazy(() => {
//   './page/home/about';
// });
function App() {
  // <button onClick="">Bài 1 {Bai1useState}</button>;

  return (
    <Fragment>
      <AuthProvider>
        {/* <Navbar />
        <Routes>
          <Router path="/" element={<Home />}>
            <Router
              path="/about"
              element={
                <React.Suspense fallback="Loading...">
                  <LazyAbout />
                </React.Suspense>
              }
            />
            <Router path="Detail" element={<Detail />} />
          </Router>
        </Routes> */}
        <Routers />
      </AuthProvider>

      {/* <Bai1UseEffect /> */}
      {/* <Bai2UseEffect /> */}
      {/* <Bai3UseEffect /> */}
    </Fragment>
  );
}

export default App;
