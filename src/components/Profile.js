import React from 'react';
import profileIcon from '../images/profileIcon.svg';

export default function Profile() {
  return (
    <img
      src={ profileIcon }
      data-testid="profile-top-btn"
      alt="profile"
      type="button"
    />
 );
}
