import {Routes, Route} from 'react-router-dom'
import './App.css';
import { Suspense,lazy } from 'react';

const Home = lazy(()=> import('./Pages/Homepage'))

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
      </Routes>
    </div>
  );
}

export default App;
