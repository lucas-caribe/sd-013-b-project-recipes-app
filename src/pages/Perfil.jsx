import React from 'react';
import Button from '../components/Button';

export default function Perfil() {
  function getStorage() {
    const { email } = JSON.parse(localStorage.getItem('user'));
    return email;
  }

  return (
    <div>
      <h4 data-testid="profile-email">{ getStorage() }</h4>
      <Button
        text="Receitas Feitas"
        dataTest="profile-done-btn"
      />
      <Button
        text="Receitas Favoritas"
        dataTest="profile-favorite-btn"
      />
      <Button
        text="Sair"
        dataTest="profile-logout-btn"
      />
    </div>
  );
}
