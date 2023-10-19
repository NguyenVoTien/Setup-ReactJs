import { Suspense } from 'react';
import './App.css';
// import { Bai1UseEffect } from '@/imports/Import.jsx';
// import { Bai2UseEffect } from './imports/Import.jsx';
// import { Bai3UseEffect } from './imports/Import';
// import Navbar from './page/Navbar';

// import Home from './page/Home';
// import Detail from './page/Detail';
// import { AuthProvider } from './contexts';
import Routers from './Routers';
import Loading from './component/Loading';

// const LazyAbout = React.lazy(() => {
//   './page/home/about';
// });
function App() {
  // <button onClick="">Bài 1 {Bai1useState}</button>;

  return (
    <>
      {/* <AuthProvider> */}
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
      <Suspense fallback={<Loading />}>
        <Routers />
      </Suspense>
      {/* </AuthProvider> */}

      {/* <Bai1UseEffect /> */}
      {/* <Bai2UseEffect /> */}
      {/* <Bai3UseEffect /> */}
    </>
  );
}

export default App;
