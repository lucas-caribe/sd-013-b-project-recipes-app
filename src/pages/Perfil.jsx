import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../components/Button';

export default function Perfil() {
  const history = useHistory();

  function getReceitasFeitas() {
    const redirect = '/receitas-feitas';
    history.push(redirect);
  }

  function getReceitasFavoritas() {
    const redirect = '/receitas-favoritas';
    history.push(redirect);
  }

  function getLoginPage() {
    const redirect = '/';
    return localStorage.clear() || history.push(redirect);
  }

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
        onClick={ getReceitasFeitas }
      />
      <Button
        text="Receitas Favoritas"
        dataTest="profile-favorite-btn"
        onClick={ getReceitasFavoritas }
      />
      <Button
        text="Sair"
        dataTest="profile-logout-btn"
        onClick={ getLoginPage }
      />
    </div>
  );
}
