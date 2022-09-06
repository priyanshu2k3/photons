import './App.css';
import { ReactDOM } from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Search/>
    </div>
  );
}

export default App;
