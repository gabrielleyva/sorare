import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Signin from './components/Signin/Signin';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="welcome" element={<Signin />} />
          </Routes>
        </BrowserRouter>


      </header>
    </div>
  );
}

export default App;
