import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/Context';
import Button from '../mini-components/Button';

function Profile() {
  const { profile } = useContext(context);
  const {
    setShowHeader,
    setTitleName,
    setShowSearchHeaderIcon,
    setShowFooter } = useContext(Context);

  useEffect(() => {
    function handleHeader() {
      setShowHeader(true);
      setShowSearchHeaderIcon(false);
      setShowFooter(true);
      setTitleName('Perfil');
    }
    handleHeader();
  }, []);

 /* function getEmail() {
    const localStorageEmail = JSON.parse(localStorage.getItem('user'));
    return localStorageEmail ? localStorageEmail.email : 'Sem email cadastrado';
  }*/

  function getOut() {
    localStorage.clear();
  }

  return (
    <main>
      <h1 data-testid="profile-email">{ profile.user.email }</h1>
      <Link to="/receitas-feitas">
        <Button
          btnText="Receitas Feitas"
          dataTest="profile-done-btn"
        />
      </Link>
      <Link to="/receitas-favoritas">
        <Button
          btnText="Receitas Favoritas"
          dataTest="profile-favorite-btn"
        />
      </Link>
      <Link to="/">
        <Button
          btnText="Sair"
          dataTest="profile-logout-btn"
          btnFunction={ getOut }
        />
      </Link>
    </main>
  );
}

export default Profile;
