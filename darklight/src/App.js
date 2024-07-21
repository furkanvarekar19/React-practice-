
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import { ThemeProvider } from './Theme-context';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
      </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
