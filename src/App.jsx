import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import SelectLanguage from './pages/SelectLanguage';
import FirstPage from './pages/FirstPage';
import ChooseLevelPage from './pages/ChooseLevelPage';
import Contact from './pages/Contact';
import RankingPage from './pages/RankingPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 관리

  // 인증이 필요한 페이지의 접근 제한을 위한 컴포넌트
  const PrivateRoute = ({ element }) => {
    return isLoggedIn ? element : <Navigate to="/login" replace />;
  };

  return (
    <BrowserRouter>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        {/* 공용 페이지 */}
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/selectlanguage" element={<SelectLanguage />} />
        <Route path="/selectlanguage/:language" element={<FirstPage />} />
        <Route path="/selectlanguage/:language/chooseLevelPage" element={<ChooseLevelPage />}/>
        <Route path="/ranking" element={<RankingPage />} />

        {/* 인증이 필요한 페이지 */}
        <Route path="/contact" element={<PrivateRoute element={<Contact />} />} />
        <Route path="/profilePage" element={<PrivateRoute element={<ProfilePage />} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
