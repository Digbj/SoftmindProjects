
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import Login from './components/login';
import Welcome from './components/welcome';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Welcome/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
