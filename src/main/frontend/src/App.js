import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/login/login';
import AuthProvider, { useAuth } from './api/AuthContext';
import RegistrationPage from './pages/registration/registration';

import Home from './pages/home/home'
import NavbarHeader from './components/navbar/navbar';
import AboutPage from './pages/about/about';
import Ourbarn from './pages/ourBarn/ourBarn';

import ErrorPage from './pages/error/Error';
import Footer from './components/footer/Footer';
import Records from './pages/records/Records';

import HorsePage from './pages/horsePage/horsePage';
import HorseMedicalRecords from './pages/records/horseMedicalRecord';
import AddRecordPage from './pages/addRecord/addRecord';
import RecordForm from './pages/records/recordForm';
import AdoptableHorsesPage from './pages/ourBarn/adoptable';

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
        <NavbarHeader />
           <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/our-herd" element={<Ourbarn  />} />
          <Route path="/for-sale" element={<AdoptableHorsesPage />} />
          <Route path="/about/:id" element={<HorsePage />} />
          <Route path="/records" element={<Records />} />

          <Route path="/records/:id" element={<HorseMedicalRecords />} />
          <Route path="/records/add" element={<AddRecordPage />} />
          <Route path="/records/update/:id" element={<RecordForm />} />

          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
