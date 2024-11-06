import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style/Header.css';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    const handleSignUpPage = () => {
        navigate('/signup')
    };

    const handleMainPage = () => {
        navigate('/')
    }

    const handleSelectPage = () => {
        navigate('/SelectLanguage')
    }

    const handleLoginPage = () => {
        navigate('/login');
    };

    return (
        <nav className="navbar">
            <div className="navbar_logo">
                <h1><div onClick={handleMainPage}>타코</div></h1>
            </div>

            <ul className="navbar_menu">
                <li><b onClick={handleSelectPage}>타자하기</b></li>
                <li><a href="#"><b>타자 랭킹</b></a></li>
                <li><a href="#"><b>문의하기</b></a></li>
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
                        <li className='signup'><div onClick={handleSignUpPage}>회원가입</div></li>
                        <li className='signin'><div onClick={handleLoginPage}>로그인</div></li>
                        <img 
                        onClick={handleLoginPage}
                        className="header_person" 
                        src="../images/person.png" 
                        alt="프로필설정">
                        </img>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Header;
