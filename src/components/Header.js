import React from 'react';
import './Header.css'
import Icon from './Icon';

const Header = (props) => {
    return (
        <div className="header">

            <button data-testid='profile-top-btn'>
                <Icon icon="profile" />
            </button>

            <h2 data-testid='page-title'>{props.main}</h2>

            <button data-testid='search-top-btn'>
                <Icon icon="search" />
            </button>
            
        </div>
    );
}

export default Header;
