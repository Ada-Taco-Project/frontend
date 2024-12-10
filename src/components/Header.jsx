import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  const handleSignUpPage = () => {
    navigate('/signup');
  };

  const handleMainPage = () => {
    navigate('/');
  };

  const handleSelectPage = () => {
    navigate('/selectlanguage');
  };

  const handleRankingPage = () => {
    navigate('/ranking');
  };

  const handleLoginPage = () => {
    navigate('/login');
  };

  const handleContact = () => {
    navigate('/contact');
  };

  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <h1><div onClick={handleMainPage}>타코</div></h1>
      </div>

      <ul className="navbar_menu">
        <li>
          <b
            onClick={handleSelectPage}
            className={location.pathname === '/selectlanguage' ? 'active' : ''}
          >
            타자하기
          </b>
        </li>
        <li>
          <b
            onClick={handleRankingPage}
            className={location.pathname === '/ranking' ? 'active' : ''}
          >
            타자 랭킹
          </b>
        </li>
        <li>
          <b
            onClick={handleContact}
            className={location.pathname === '/contact' ? 'active' : ''}
          >
            문의하기
          </b>
        </li>
      </ul>

      <ul className="navbar_users">
        {isLoggedIn ? (
          <>
            <li><a href="#" onClick={handleLogout}>로그아웃</a></li>
            <li>
              <a href="#">
                <div className="navbar_box">
                  <img
                    className="navbar_profile"
                    src="https://github.com/Ada-Taco-Project/imgs/blob/main/20210417_122949.jpg?raw=true"
                    alt="프로필 사진"
                  />
                </div>
              </a>
            </li>
          </>
        ) : (
          <>
            <li className="signup"><div onClick={handleSignUpPage}>회원가입</div></li>
            <li className="signin"><div onClick={handleLoginPage}>로그인</div></li>
            <img
              onClick={handleLoginPage}
              className="header_person"
              src="../images/person.png"
              alt="프로필 설정"
            />
          </>
        )}
      </ul>
    </nav>
  );
};

export default Header;
