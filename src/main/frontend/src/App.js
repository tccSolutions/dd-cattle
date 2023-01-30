import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/login/login';
import AuthProvider, { useAuth } from './api/AuthContext';

function App() {
  
  function AuthenticatedRoute({ children }) {
    const auth = useAuth();
    if (auth.isAuthenticated) {
      return children;
    } else {
      return <LoginPage message={"Sign in to view this page."}/>
    }
  }
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AuthenticatedRoute>Hello World!</AuthenticatedRoute>}/>
            <Route path='/login' element={<LoginPage message={"Login"} />} />
            <Route path='/test' element={<h1>test successful</h1>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
