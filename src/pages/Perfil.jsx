import React from 'react';
import Button from '../components/Button';

export default function Perfil() {
  function getStorage() {
    const { email } = JSON.parse(localStorage.getItem('user'));
    console.log(email);
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
        text="Receitas Favoritadas"
        dataTest="profile-favorite-btn"
      />
      <Button
        text="Sair"
        dataTest="profile-logout-btn"
      />
    </div>
  );
}
