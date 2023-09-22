import {Routes, Route} from 'react-router-dom'
import './App.css';
import { Suspense,lazy } from 'react';

const Home = lazy(()=> import('./Pages/Homepage'))
const Biyi = lazy(()=> import("./Pages/Biyipage"))
const Letstalk = lazy(()=> import('./Pages/Letstalkpage'))

function App() {
  return (
    <div className="App">
      <Routes>
      <Route 
          index 
          element={
            <Suspense 
              fallback={
                <div className='loader-container'>
                  <p>loading....</p>
                </div>
              }>
            <Home />
          </Suspense>
          }>
        </Route>
        <Route 
          path='/biyi'
          element={
            <Suspense 
              fallback={
                <div className='loader-container'>
                  <p>loading....</p>
                </div>
              }>
            <Biyi />
          </Suspense>
          }>
        </Route>
        <Route 
          path='/letstalk'
          element={
            <Suspense 
              fallback={
                <div className='loader-container'>
                  <p>loading....</p>
                </div>
              }>
              <Letstalk  />
            </Suspense>
            }>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
