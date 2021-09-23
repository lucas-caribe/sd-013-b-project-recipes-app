import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

const Main = () => {
  const { id, type, status } = useParams();
  console.log(`type: ${type}\nid: ${id}\nstatus: ${status}`);
  let main;
  let showHeader = true;
  if (type === 'comidas') main = 'Comidas';
  else if (type === 'bebidas') main = 'Bebidas';
  if (id) showHeader = false;

  const renderHeader = () => (
    <div>
      <Header main={ main } left="profile" right="search" />
    </div>);

  return (
    <div>
      {showHeader ? renderHeader() : null}
      {main}
    </div>
  );
};

export default Main;
