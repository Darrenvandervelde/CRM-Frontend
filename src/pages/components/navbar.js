import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/navbar.css';

function Navbar() {
    const navigate = useNavigate();

    return (
        <nav>
            <img 
                src='./assets/CompanyLogo.png' 
                alt='Company Logo' 
                className='CompanyLogo'
                onClick={() => navigate('/')}
                style={{ cursor: 'pointer' }}
            />
            <ul>
                <li>
                    <button className='BTN-1' onClick={() => navigate('/')}>
                        Home
                    </button>
                </li>
                <li>
                    <button className='BTN-1' onClick={() => navigate('/about')}>
                        About
                    </button>
                </li>
                <li>
                    <button className='BTN-1' onClick={() => navigate('/blog')}>
                        Blog
                    </button>
                </li>
                <li>
                    <button className='BTN-1' onClick={() => navigate('/contactUs')}>
                        Contact Us
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
