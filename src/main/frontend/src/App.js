import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path='/login' element={<h1>Welcome</h1>}/>
         <Route path='/test' element={<h1>test successful</h1>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
